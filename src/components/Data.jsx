import React from "react";
import {
  SvgGlobeIcon,
  SvgMeterIcon,
  SvgEthereumIcon,
  SvgServerIcon,
} from "../Icons";

const Data = () => {
  return (
    <div className="relative -top-12">
      <div className="max-w-[1380px] mx-auto p-4">
        <div className="rounded-lg bg-white drop-shadow-sm border border-stone-300 ">
          <div className="py-3 px-5">
            <div className="grid md:grid-cols-12">
              <div className="col-span-4 md:border-r ">
                <div className="border-b py-3 flex gap-3 items-center">
                  <SvgEthereumIcon />
                  <div className="">
                    <h1 className="text-[12px] leading-[18px] text-[#6c757d] uppercase font-normal">
                      Ether Price
                    </h1>
                    <p className="text-[15px] leading-6">$1893.50</p>
                  </div>
                </div>
                <div className="py-3 flex gap-3 items-center">
                  <SvgGlobeIcon />
                  <div>
                    <h1 className="text-[12px] leading-[18px] text-[#6c757d]">
                      MARKET CAP
                    </h1>
                    <p className="text-[15px] leading-6">$223,472,643,630.00</p>
                  </div>
                </div>
              </div>

              <div className="col-span-4 md:border-r md:px-2">
                <div className="border-b py-3 flex gap-2 items-center">
                  <SvgServerIcon />
                  <div className="flex items-center justify-between w-full gap-3">
                    <div>
                      <h1 className="text-[12px] leading-[18px] text-[#6c757d] uppercase font-normal">
                        Transactions
                      </h1>
                      <p className="text-[15px] leading-6">
                        2,057.34 M (12.2 TPS)
                      </p>
                    </div>
                    <div>
                      <h1 className="text-[12px] leading-[18px] text-[#6c757d] uppercase font-normal">
                        Med Gas Price
                      </h1>
                      <p className="text-[15px] leading-6">19 Gwei ($0.74)</p>
                    </div>
                  </div>
                </div>
                <div className="py-3 flex gap-2 items-center">
                  <SvgMeterIcon />
                  <div className="flex items-center justify-between w-full gap-3">
                    <div>
                      <h1 className="text-[12px] leading-[18px] text-[#6c757d]">
                        LAST FINALIZED BLOCK
                      </h1>
                      <p className="text-[15px] leading-6">17876382</p>
                    </div>
                    <div>
                      <h1 className="text-[12px] leading-[18px] text-[#6c757d] uppercase font-normal">
                        Last Safe Block
                      </h1>
                      <p className="text-[15px] leading-6">17876414</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 md:px-2">
                <div className="py-3 items-center mx-2">
                  <h1 className="text-[12px] leading-[18px] text-[#6c757d] uppercase font-normal">
                    TRANSACTION HISTORY IN 14 DAYS
                  </h1>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
