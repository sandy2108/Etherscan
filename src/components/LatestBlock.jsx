import React from 'react'

const LatestBlock = () => {
  return (
    <div className="bg-white py-3 rounded-md shadow-md border border-stone-300 overflow-hidden ">
      {/* Heading Div */}
      <div className="border-b">
        <div className="mb-2 pl-4">
          <h1 className="text-[15px] leading-[18px] font-normal block text-[#212529]">
            Latest Blocks
          </h1>
        </div>
      </div>

      {/* Transaction data render here */}
      <div></div>

      {/* View all Transactions */}
      <div className="bg-[#f8f9fa]">
        <div className="flex items-center justify-center cursor-pointer mt-2">
          <a
            href="/"
            className="uppercase text-[#6c757d] text-md text-[14px] leading-[18px] mr-2"
          >
            {" "}
            View all Blocks
          </a>
          {/* Imported arrow icon form icons8.com  */}
          <img
            width="20"
            height="10"
            src="https://img.icons8.com/ios/50/000000/long-arrow-right--v1.png"
            alt="long-arrow-right--v1"
          />
        </div>
      </div>
    </div>
  );
}

export default LatestBlock