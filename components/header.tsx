"use client"

import { useState } from 'react';
import Logo from '@/components/logo'
import Hamburger from '@/components/hamburger'
import Connect from '@/components/connect';

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isConnectOpen, setIsConnectOpen] = useState(false);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openConnect = () => {
      setIsConnectOpen(!isConnectOpen);
    };

    return (
        <div className="fixed w-full top-0 lg:pl-6 lg:pr-6 z-70 h-[64px]">
        <div className="group flex h-full border-b border-white items-center justify-between  mx-auto relative z-10 border-opacity-0 px-6">
          <div className="flex-shrink-[5] mr-2">
            <div className="flex">
              <a className="w-min-content" href="/">
                <Logo></Logo>
              </a>
            </div>
          </div>
          <div className="items-center hidden lg:flex min-w-0 opacity-100 pointer-events-auto duration-200  false">
            <div className="flex min-w-0 mt-2">
              <div className="flex flex-col">
                <div className="uppercase w-[fit-content] flex text-xs font-medium flex-row items-center gap-1 py-2 px-3 rounded-full mb-2 select-none duration-[50ms] cursor-pointer text-white">
                  <a href="#works">Work</a>
                </div>
              </div>
              {/* <div className="flex flex-col">
                <div className="uppercase w-[fit-content] flex text-xs font-medium flex-row items-center gap-1 py-2 px-3 rounded-full mb-2 select-none duration-[50ms] cursor-default text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-[14px] h-[14px]">
                    <path fill-rule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clip-rule="evenodd"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="duration-200 w-[14px] h-[14px] opacity-40 ">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
              */}
            </div>
          </div>
          <div className="min-w-[90px]"></div>
          <div className="hidden lg:block fixed right-5 lg:right-6 top-[16px] transition false">
            <div className="flex flex-col">
              <button  className={`uppercase w-[fit-content] flex text-xs font-medium flex-row items-center gap-1 py-2 px-3 rounded-full mb-2 select-none duration-[50ms] cursor-pointer text-white btn-kononenko`} type="button" onClick={openConnect}>Connect</button>
            </div>
          </div>
          <div className="z-50 lg:hidden">
            <div className="single-small">
              <button 
                className={`hamburger single-small single-small--magnetic ${isMenuOpen ? 'active' : ''}`} 
                type="button"
                onClick={toggleMenu}
              >
                <div className="transition duration-500 ease-in-out inner">
                  <span className="before:bg-white after:bg-white bar transition ease-in-out duration-500"></span>
                  <span className="before:bg-white after:bg-white bar"></span>
                  <span className="before:bg-white after:bg-white bar transition ease-in-out duration-500"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <Hamburger setIsHamburgerOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        {isConnectOpen && <Connect setIsConnectOpen={setIsConnectOpen} />}
        </div>
    )
}