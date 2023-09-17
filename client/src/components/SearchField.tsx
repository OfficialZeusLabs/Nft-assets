import Image from "next/image";

const SearchField = () => {
  return (
    <div className="mb-8 ">
      <div className="flex space-x-4">
        <div className="bg-sidebar p-4 flex flex-row  space-x-2 w-3/5 rounded-lg">
          <Image src="/images/search.svg" alt="search" height={20} width={20} />
          <input
            type="text"
            placeholder="Search"
            className="border-0 outline-none text-white bg-transparent w-full focus:outline-none"
          />
        </div>
        <Image
          src="/images/adjustments.svg"
          alt="filter"
          height={30}
          width={30}
        />
      </div>
    </div>
  );
};

export default SearchField;
