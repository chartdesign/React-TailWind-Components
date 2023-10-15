"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='bg-zinc-50 p-4 border-b border-gray-300'>
      <div className='container mx-auto flex items-center justify-between '>
        <div className='text-bg-gray-700 text-2xl font-bold w-1/4'>
          <span>Your Logo</span>
        </div>

        {/* Hamburger Menu Icon (visible on small screens) */}
        <div className='lg:hidden'>
          <GiHamburgerMenu
            className='text-bg-gray-700 text-3xl cursor-pointer'
            onClick={toggleMobileMenu}
          />
        </div>

        {/* Mobile Navigation Menu (hidden on larger screens) */}
        {isMobileMenuOpen && (
          <div className='lg:hidden absolute inset-0 bg-zinc-50 z-50'>
            <div className='lg:hidden grid justify-items-end mt-4 mr-4'>
              <div>
                <AiOutlineCloseCircle
                  className='text-bg-gray-700 text-3xl cursor-pointer '
                  onClick={toggleMobileMenu}
                />
              </div>
            </div>
            <div className='flex flex-col items-center  h-full space-y-4 mt-8'>
              <a
                href='#'
                className='text-bg-gray-700 text-xl hover:text-gray-400 mt-4'
              >
                Link 1
              </a>
              <a
                href='#'
                className='text-bg-gray-700 text-xl hover:text-gray-400 mt-4'
              >
                Link 2
              </a>
              <a
                href='#'
                className='text-bg-gray-700 text-xl hover:text-gray-400 mt-4'
              >
                Link 3
              </a>
              <div className='flex items-center space-x-4 '>
                <input
                  type='text'
                  placeholder='Search...'
                  className='bg-gray-700 text-bg-gray-700 px-3 py-1 '
                />
              </div>
            </div>
          </div>
        )}

        {/* Desktop Navigation Links (hidden on small screens) */}

        <div className='hidden lg:flex justify-between w-3/5'>
          <div className='flex items-center space-x-4 border-b border-gray-400'>
            <input
              type='text'
              placeholder='Search...'
              className='bg-zinc-50 text-bg-gray-700 px-3 py-1 rounded-md outline-none'
            />
            <BiSearch />
          </div>
          <div className='gap-4'>
            <a href='#' className='text-bg-gray-700 hover:text-gray-400 ml-4'>
              Link 1
            </a>
            <a href='#' className='text-bg-gray-700 hover:text-gray-400 ml-4'>
              Link 2
            </a>
            <a href='#' className='text-bg-gray-700 hover:text-gray-400 ml-4'>
              Link 3
            </a>
          </div>
        </div>
      </div>
      <div className='hidden lg:flex container mx-auto items-center justify-center mt-4 '>
        <a href='#' className='text-bg-gray-700 hover:text-gray-400 ml-8'>
          Link 1
        </a>
        <a href='#' className='text-bg-gray-700 hover:text-gray-400 ml-8'>
          Link 2
        </a>
        <a href='#' className='text-bg-gray-700 hover:text-gray-400 ml-8'>
          Link 3
        </a>
        <a href='#' className='text-bg-gray-700 hover:text-gray-400 ml-8'>
          Link 4
        </a>
      </div>
    </nav>
  );
};

export default Header;
