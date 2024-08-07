import { useState, Dispatch, SetStateAction } from 'react';
import Connect from '@/components/connect';

interface HamburgerProps {
  setIsHamburgerOpen: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
}

export default function Hamburger({ setIsHamburgerOpen, isMenuOpen }: HamburgerProps) {
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  const openConnect = () => {
    setIsHamburgerOpen(false);
    setIsConnectOpen(!isConnectOpen);
  };

  const handleClose = () => {
    setIsConnectOpen(false);
    setIsHamburgerOpen(false);
  };

  return (
    <>
    {isMenuOpen && (
    <div className="fixed top-0 flex flex-col items-start w-screen h-screen px-6 pt-20 overflow-scroll lg:hidden bg-opacity-70 backdrop-blur-lg z-60 pointer will-change-opacity">
      <ul className="w-full text-xl font-bold uppercase">
        <li>
          <button onClick={openConnect} className="py-2.5 w-full items-center block relative flex border-b border-tertiary-black text-kononenko text-shadow-kononenko" type='button'>Connect</button>
        </li>
        <li>
          <a className="py-2.5 w-full items-center block relative flex border-b border-tertiary-black" href="#works" onClick={handleClose}>Work</a>
        </li>
        {/* <li>
            <a target="_blank" className="py-2.5 w-full items-center block relative flex" rel="noreferrer">
              <div className="w-full">
                <div>
                  <div className="w-full">
                    <button className="font-bold text-left item-center w-full outline-none border-b border-tertiary-black pb-2.5" type="button" aria-haspopup="menu" aria-expanded="true" aria-controls="headlessui-menu-items-:rp:">
                      <div className="flex justify-between items-center">LANGUAGE <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-[20px] h-[20px] opacity-100 rotate-0">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                  <div className="w-full items-center block relative flex outline-none" aria-labelledby="headlessui-menu-button-:ro:" id="headlessui-menu-items-:rp:" role="menu" tabIndex={0}>
                    <div className="px-1 py-1 w-full pl-3" role="none">
                      <button className="opacity-80 py-3 w-full items-center block relative flex text-sm font-bold border-tertiary-black border-b" role="menuitem" tabIndex={-1}>ENGLISH</button>
                      <button className="opacity-80 py-3 w-full items-center block relative flex text-sm font-bold" role="menuitem" tabIndex={-1}>РУССКИЙ</button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
        </li> */}
      </ul>
      <p className="py-3 pb-4 font-mono text-left uppercase opacity-80 text-2xs">
        Kononenko © 2024 <br />
        Made in Prince George, Canada <br />
        hi@kononenko.org
      </p>
    </div>
    )}
    {isConnectOpen && (
        <Connect
          setIsConnectOpen={setIsConnectOpen}
        />
      )}
    </>
  )
}