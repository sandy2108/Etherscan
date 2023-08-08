import React, { useState } from 'react';
import logo from '../Assets/logo-etherscan.svg';
import { navItems } from '../constants';
import { CgMenu } from 'react-icons/cg';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="w-full bg-slate-100">
      <div className="max-w-[1240px] mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <img src={logo} alt="logo" className="h-[30px] cursor-pointer" />
          </div>
          <div className="hidden md:flex">
            {navItems.map((item, index) => (
              <a href={item.link} key={index} className="mx-2">
                <h1 className='text-black hover:text-[#0784c3]'>{item.title}</h1>
              </a>
            ))}
          </div>
          <div className="flex md:hidden rounded-lg p-2 border-2 border-slate-200">
            <CgMenu onClick={toggleMenu} size={20} className='cursor-pointer' />
          </div>
        </div>
        {openMenu && (
          <div className="md:hidden mt-2">
            {navItems.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="flex flex-col py-1 px-4 text-[14px] leading-[22px] text-center text-gray-700 items-start hover:bg-gray-100"
              >
                <h1 className='text-black hover:text-[#0784c3]'>{item.title}</h1>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
