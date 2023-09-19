# NFT-Factory-MVP

## Welcome to the NFT Factory MVP repository by Zeus Labs!

<p align="center" width="100%">
  <img src="https://github.com/BukiOffor/Nft-assets/assets/58889001/7605392b-51ae-4e2d-825d-4fae2acbcec0" alt="site"/>
</p>

> ## Table of contents
- [Overview](#overview)
- [Core Features Implemented](#core-features-implemented)
- [Technologies](#technologies)
- [Repo Setup](#repo-setup)
- [Requirements](#requirements)
- [Setup the Project](#setup-the-project)
  - [Install Hardhat](#install-hardhat)
  - [Env Setup](#env-setup)
  - [Setup Hardhat.config](#setup-hardhatconfig)
- [Create the SmartContract](#create-the-smartcontract)
  - [Compile](#compile)
  - [Deploy](#deploy)
  - [Verify](#verify)
- [Setup the Frontend](#setup-the-frontend)
  - [Install Dependencies](#install-dependencies)
  - [Steps to host the live site on Vercel](#steps-to-host-the-live-site-on-vercel)
- [Testing the Smartcontract](#testing-the-smartcontract)
- [NFT-Factory-MVP Contract Address](#PrismVox-contract-address)
- [Live Link](#live-link)
- [Contributors](#contributors)
- [Contributing to the project](#contributing-to-the-project)
#
> ## Overview
<p align="justify">
NFT Factory is a groundbreaking project by Zeus Labs aimed at democratizing access to financial assets by tokenizing real-world assets seamlessly on the Celo blockchain. This repository contains the Minimum Viable Product (MVP) of the NFT Factory, providing the foundation for creating and managing NFTs representing real-world assets.
</p>



#
> ## Core Features Implemented

`Deployment on Gnosis chain`
- Deployment on Gnosis chain for the purpose of this hackhathon.


> plss for who is working on the smartcontract, plsss add all the core features of the smart contract here 


`Test Coverage`
- Unit testing ensures that all the codes meet the quality standards and the functions return the expected output.
- Test coverage shows us the extent of how much of our codes are covered by tests. We ideally aim for 100% coverage.

`Natspec commenting`
- This documentation provides information about the codebase and their implementation for both technical and non technical people. 


</p>

#
> ## Technologies
| <b><u>Stack</u></b> | <b><u>Usage</u></b> |
| :------------------ | :------------------ |
| **`Solidity`**      | Smart contract      |
| **`Next JS`**      | Frontend            |

#
> ## Repo Setup

<p align="justify">
To setup the repo, first fork the Nft-assets Repo, then clone the forked repository to create a copy on the local machine.
</p>

    $ git clone https://github.com/BukiOffor/Nft-assets

<p align="justify">
Change directory to the cloned repo and set the original PrismVox.io repository as the "upstream" and your forked repository as the "origin" using gitbash.
</p>

    $ git remote add upstream https://github.com/BukiOffor/Nft-assets.git

#

> ## Requirements
#
- Hardhat
- Alchemy key
- Metamask key
- https://gnosisscan.io/ API Url
- Node JS
#
> ## Setup the Project
**`*Note:`**

<p align="justify">
This project was setup on a windows 10 system using the gitbash terminal. Some of the commands used may not work with the VScode terminal, command prompt or powershell.
</p>

The steps involved are outlined below:-
#
> ### Install Hardhat
The first step involves cloning and installing hardhat.
```shell
$ cd core

$ npm i -D hardhat

$ npm install

$ npm install --save-dev "@nomiclabs/hardhat-waffle" "ethereum-waffle" "chai" "@nomiclabs/hardhat-ethers" "ethers" "web3" "@nomiclabs/hardhat-web3" "@nomiclabs/hardhat-etherscan" "@openzeppelin/contracts" "dotenv" "@tenderly/hardhat-tenderly" "hardhat-gas-reporter" "hardhat-deploy"
```
> ### Env Setup
 Next create a `.env` file by using the sample.env. Retrieve your information from the relevant sites and input the information where needed in the `.env` file.

`To retrieve your metamask private key.`
- Open your account details by clicking on the three dots on the metamask extension on your chrome browser
- Click on export private key
- Verify your password
- Copy your private key and place it in the .env file

<p align="center" width="100%">
  <img src="https://drive.google.com/uc?export=view&id=1oDl0IbicD7LhNOcYUbGzBYTJdduWim1t" alt="metamask"/>
</p>

#
`To retrieve your alchemy key.`
- Login to your account on [alchemy](https://www.alchemy.com/)
- Once you're redirected to your [dashboard](https://dashboard.alchemyapi.io/), click on create app.
- Fill in the relevant details especially the chain and network
- Once the app has been created, click on view key.
- Copy the HTTP and place it in the .env file.

<p align="center" width="100%">
  <img src="https://drive.google.com/uc?export=view&id=1vPvT5LJRJy6B8hSi_3mPo16wC4u6MnEK" alt="alchemy"/>
  
</p>

#
`To retrieve your gnosis key.`
- Login to [gnosisscan](https://gnosisscan.io/) and hover over the dropdown arrow for your profile on the navbar.
- Click on API keys and add to create a new project (optional step).
- Once the project has been created, click on the copy button to copy the API key.
- Paste it in the .env file

<p align="center" width="100%">
  <img src="https://github.com/BukiOffor/Nft-assets/assets/58889001/9668a40f-73d2-4fd5-8adf-91059880b69e" alt="gnosis key"/>
</p>

#
> ### Setup Hardhat.config


Below is the setup for the hardhat.config.json

<p align="center" width="100%">
  <img src="https://drive.google.com/uc?export=view&id=1-vWH8_zI8DTzvnRM4gcwX2HWsHuCd0O0" alt="hardhat"/>
</p>

#
> ## Create the SmartContract
  - First write the Smartcontract codes within the contracts folder.
  - The next step involves the compilation, deployment and verification of the contract on the testnet.

> ### Compile
- To compile the smartcontract before deployment:
```
$ npx hardhat compile
```
#
> ### Deploy
- To deploy the smartcontract:
```
$ npx hardhat run scripts/deploy.js --network gnosischain
```
#
> ### Verify
- To verify the smartcontract:
```
$ npx hardhat verify  --network gnosischain
```

#
> ## Setup the Frontend
- First run the frontend on your local server to ensure it's fully functional before building for production.
#
> ### Install Dependencies
- Setup and install dependencies

```shell
$ cd client

$ npm install

$ npm run dev
```
> ### Steps to host the live site on Vercel
- Create an account on [vercel](https://vercel.com/) and authorize your [GitHub](https://github.com/BukiOffor/Nft-assets/) account.

- Once you're redirected to the Dashboard, click on the drop down menu and select `Add GitHub Org or Account`.

- In the pop-up window, select the install option.

- Once installation is completed, return to the dashboard and click `new project`.

- Select the TeamB organization and select the zurischool repo to import the project.

- Enter the relevant details and click `Deploy`.


#
> ## Testing the Smartcontract

- Coverage is used to view the percentage of the code required by tests and unittests were implemented to ensure that the code functions as expected
#
**`Coverage Test`**
- To test the smartcontract, first open a terminal and run the following command:

- First install Solidity Coverage
```
  $ npm i solidity-coverage
```
- Add `require('solidity-coverage')` to hardhat.config.json

- Install Ganache
``` 
  $ npm i ganache-cli
``` 
- Run coverage
```
$ npx hardhat coverage --network localhost

# if you get errors and you want to trace the error in the terminal
$ npx hardhat coverage --network localhost --show-stack-traces
```
#

<p align="center" width="100%">
  <img src="https://drive.google.com/uc?export=view&id=16zXW2QHBBinyC0adq1Cd41YUD1grjR1X" alt="coverage tests"/>
</p>


#
> ## Factory Contract Address

-https://gnosisscan.io//address/
# 

## Useful links

## View attribution files here


## Demo video

https://github.com/BukiOffor/Nft-assets/assets/58889001/f8eb776e-df15-4eab-aca5-a535430c4e54



- [Frontend Deployment]( https://nft-assets-rxzk.vercel.app/)
- [Figma design](https://www.figma.com/proto/dV2FBUaa7BomJu7JCWjL1Z/Webpage-Redesign?page-id=67%3A823&type=design&node-id=348-3699&viewport=7528%2C-2452%2C0.51&t=6PGceqXUTERPd9EJ-1&scaling=scale-down&starting-point-node-id=348%3A3699&mode=design)


> ## Contributors

This Project was created by these awesome dedicated members

<p align="center" width="100%">
  <img src="https://github.com/muhammod1/Nft-factroy/assets/58889001/5702a26d-909a-4c44-a284-2957fcd0879f" alt="teamVox"/>
</p>

#
> ## Contributing to the project

If you find something worth contributing, please fork the repo, make a pull request and add valid and well-reasoned explanations about your changes or comments.

Before adding a pull request, please note:

- This is an open source project.
- Your contributions should be inviting and clear.
- Any additions should be relevant.
- New features should be easy to contribute to.

All **`suggestions`** are welcome!
#
> ##### README Created by `Enebeli Emmanuel` for Zeus Labs

