import React from "react";
import { SvgSearchIcon } from "../Icons/SearchIcon";

const SearchBar = () => {
  
  async function queryInput() {
    
  }

  return (
    <div
      className="w-full min-h-[220px] bg-slate-800"
      style={{
        backgroundImage: "url('/images/search-bg.svg')",
      }}
    >
      <div className="max-w-[1240px] pt-10 mx-auto px-5">
        <h1 className="text-white text-[20px] leading-[24px] mb-2">
          The Ethereum Blockchain Explorer
        </h1>
        <form className="md:max-w-[60%] bg-white rounded-md h-10" onSubmit={queryInput} >
          <span className="flex gap-2">
            <input
              placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
              className="pl-3 text-[15px] leading-[23px] my-1  rounded-md outline-0 w-full focus:outline-2 outline-slate-300 text-slate-600 placeholder:text-slate-600"
            />
            <button className="flex items-center rounded-lg bg-blue-400 px-1 py-1 m-1" type="submit">
              <SvgSearchIcon/>
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
