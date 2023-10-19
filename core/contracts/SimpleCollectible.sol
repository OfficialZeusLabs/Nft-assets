// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

error ThisAssetHasAlreadyBeenRedeemed();
error NotOwnerOfAsset();
error InsuffucientMintFee();

contract SimpleCollectible is ERC721 {
	using Counters for Counters.Counter;
	Counters.Counter private _tokenIds;

	address[] redeemers; //  --necessary?
	Escrowed[] allEscrows;
	Data[] URIS;

	address private owner;

	event collectibleCreated(
		address recipient,
		uint256 uriIndex,
		uint256 tokenID
	);
	event Redeemed(uint256 tokenId, address caller);
	event Withdrawn(uint256 amount);

	mapping(uint256 => string) tokenURIs; // maps the tokenIds to there URI strings
	mapping(uint256 => address[]) owners; // maps a tokenURI to there address of owners
	mapping(address => uint256) redeemed; // number of redeemed assets for an address  ---necessary?
	mapping(address => uint256[]) TokenMappings; // maps users and their tokens
	mapping(address => Escrowed[]) escrow; //map users and there possible escrowed assets
	mapping(address => Escrowed[]) f_redeemed; //maps users and there consumed nfts

	struct Data {
		uint256 index;
		string uri;
		uint256 mintFee;
	}
	struct Escrowed {
		uint256 uriIndex;
		uint256 tokenId;
		int256 index;
	}

	/**
	 *
	 * @param Name name of the Nft
	 * @param Symbol Symbol of the NFT
	 * @param _URIs A List of all the NFT URIs
	 * @param _mintFee Mint fee for each URI
	 * @param _owner owner of the contract
	 * @dev this function takes a list of uris and a list of mint fees and stores it in a struct array
	 * This will enable us perfom certain functions like assertion of mint fees, etc.
	 */

	constructor(
		string memory Name,
		string memory Symbol,
		string[] memory _URIs,
		uint256[] memory _mintFee,
		address _owner
	) ERC721(Name, Symbol) {
		owner = _owner;
		if (_URIs.length != _mintFee.length) {
			revert("Transaction failed for some reason");
		}
		for (uint256 i = 0; i < _URIs.length; i++) {
			URIS.push(Data(i, _URIs[i], _mintFee[i]));
		}
	}

	modifier onlyOwner() {
		require(msg.sender == owner, "Not the owner");
		_;
	}

	/**
	 *
	 * @param recipient receiptient of an NFT
	 * @param _uriIndex the index of the NFT that the msg.sender wants to mint
	 * @dev Since there is no randomization in our minting function, we want to pass a specific nft type to be minted,
	 * we also check for the fee. To make sure the correct amount is being paid.
	 */
	function createCollectible(
		address recipient,
		uint256 _uriIndex
	) external payable returns (uint256) {
		Data memory IndexUri = URIS[_uriIndex];
		uint256 amount = IndexUri.mintFee;
		if (msg.value < (amount * 1e18)) {
			revert InsuffucientMintFee();
		}

		uint256 tokenID = _tokenIds.current();
		_safeMint(recipient, tokenID);
		if (_createTokenURI(tokenID, _uriIndex) != true) {
			revert("Transaction failed for some reason");
		}

		TokenMappings[msg.sender].push(tokenID);
		_tokenIds.increment();
		owners[_uriIndex].push(msg.sender);
		emit collectibleCreated(recipient, _uriIndex, tokenID);
		return tokenID;
	}

	function _createTokenURI(
		uint256 tokenId,
		uint256 _uriIndex
	) internal returns (bool success) {
		Data memory IndexUri = URIS[_uriIndex];
		string memory _uri = IndexUri.uri;
		tokenURIs[tokenId] = _uri;
		return true;
	}

	function tokenURI(
		uint256 tokenId
	) public view virtual override returns (string memory) {
		return tokenURIs[tokenId];
	}

	function redeem(uint256 _tokenId, uint256 uriIndex) external {
		address caller = ownerOf(_tokenId);
		if (caller != msg.sender) {
			revert("You are not the token Owner");
		}
		escrow[msg.sender].push(
			Escrowed(uriIndex, _tokenId, int(allEscrows.length))
		);
		allEscrows.push(Escrowed(uriIndex, _tokenId, int(allEscrows.length)));
		_transfer(msg.sender, address(this), _tokenId);
	}

	//transfer the tokens back to there owners
	// if we use the cheaper cancel, then we should check for the index
	// to make sure that the asset has not already be redeemed
	function cancelRedeem(uint256 _tokenId) public {
		Escrowed[] memory assets = escrow[msg.sender];
		for (uint256 i = 0; i < assets.length; i++){ 
			if(assets[i].tokenId == _tokenId){
				if (address(this) == ownerOf(_tokenId)){
					escrow[msg.sender][i] = Escrowed(assets[i].uriIndex, _tokenId, -1);
					_transfer(address(this),msg.sender, _tokenId);
					return; //this leads to a premature function exit but our goal would have been achieved
				} else {
					revert ThisAssetHasAlreadyBeenRedeemed();
				}
			} else {
				revert NotOwnerOfAsset();
			}
		}
		
	}

	function _redeem(
		uint256 _tokenId,
		uint256 uriIndex,
		int256 escrowIndex
	) internal {
		address caller = ownerOf(_tokenId);
		_burn(_tokenId);
		address[] storage allOwners = owners[uriIndex];

		//delete owner from the list of owners
		for (uint256 i = 0; i < allOwners.length; i++) {
			if (allOwners[i] == msg.sender) {
				allOwners[i] = allOwners[allOwners.length - 1];
				allOwners.pop();
				break;
			}
		}
		//delete marked escrow from the escrow list
		for (uint256 i = 0; i < allEscrows.length; i++) {
			if (allEscrows[i].index == escrowIndex) {
				allEscrows[i] = allEscrows[allEscrows.length - 1];
				allEscrows.pop();
				break;
			}
		}
		//OR
		//allEscrows[uint(escrowIndex)] = Escrowed(0,0,-1); //cheaper way to delete escrows

		f_redeemed[caller].push(Escrowed(uriIndex, _tokenId, escrowIndex)); //is this neccesary
		redeemed[msg.sender]++; //is this neccssary
		redeemers.push(msg.sender); //is this neccessary
		emit Redeemed(_tokenId, caller);
	}

	//only owner of the the contract can call this
	function ackRedeem(
		uint256 _tokenId,
		uint256 uriIndex,
		int256 escrowIndex
	) public onlyOwner {
		_redeem(_tokenId, uriIndex, escrowIndex);
	}

	function adjustMintFee(
		uint256 index,
		uint256 _newMintFee
	) external onlyOwner {
		Data storage _data = URIS[index];
		_data.mintFee = _newMintFee;
	}

	function adjustURI(
		uint256 index,
		string memory _newURI
	) external onlyOwner {
		Data storage data = URIS[index];
		data.uri = _newURI;
	}

	function withdraw() external onlyOwner {
		uint256 balance = address(this).balance;
		(bool sent, ) = payable(owner).call{value: balance}("");
		if (!sent) {
			revert("Transaction failed for some reason");
		}

		emit Withdrawn(balance);
	}

	function getData() external view returns (Data[] memory uri) {
		return URIS;
	}

	function getOwners(uint256 index) external view returns (address[] memory) {
		return owners[index];
	}

	function getTokenData(
		address _owner
	) external view returns (uint256[] memory) {
		return TokenMappings[_owner];
	}

	function getRedemmed(
		address _owner
	) external view returns (uint256 amount) {
		amount = redeemed[_owner];
	}
}
