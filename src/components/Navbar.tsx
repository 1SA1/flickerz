// import icons
import Logo  from "../assets/img/logo.png";
import { ReactComponent as WalletIcon } from "../assets/svg/wallet.svg";
import { ReactComponent as BNBIcon } from "../assets/svg/bnb-1.svg";
import { ReactComponent as DownArrowIcon } from "../assets/svg/down-arrow.svg";

import { useState } from "react";

import config from "../config";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useNetwork } from "wagmi";

const navigationLinks = [
  {
    name: "How to buy",
    href: "#how-to-buy",
  },
  {
    name: "Main Site",
    href: "#main-site",
  },
  {
    name: "Roadmap",
    href: "#roadmap",
  },
  {
    name: "Tokenomics",
    href: "#tokenomics",
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="px-4 lg:px-0 bg-dark ">
      <div className="flex items-center justify-between  py-6">
  {/* Mobile Toggle */}
  <div className="lg:hidden"> 
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>



      <img src={Logo} alt="Logo" className="h-8 lg:h-16" />
        {/* <Logo className="h-12 lg:h-16" /> */}
        
        <div className="flex items-center gap-6">
          <nav className="hidden lg:block">
            <ul className="flex gap-6">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-lg font-medium transition-opacity duration-200 hover:opacity-75"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
             
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => open({ route: "SelectNetwork" })}
              className="hidden items-center gap-2 rounded-lg border border-white/10 bg-transparent py-4 px-4 font-semibold lg:flex"
            >
              <BNBIcon className="h-6 w-6" />
              <span>{chain?.name || config.chains[0].name}</span>
              <DownArrowIcon className="h-3 w-3" />
            </button>

            <button
              onClick={() => open()}
              className="flex items-center gap-2 rounded-lg bg-primary py-2 px-4 text-sm font-semibold  transition-opacity duration-200 hover:opacity-75 lg:py-4 lg:text-base"
            >
              {isConnected ? (
                <span className="flex items-center justify-center gap-2">
                  <span>
                    {address?.slice(0, 6)}...
                    <span className="hidden lg:inline">
                      {address?.slice(address.length - 6, address.length)}
                    </span>
                  </span>
                </span>
              ) : (
                <>
                  <WalletIcon className="h-6 w-6" />
                  <span>Connect Wallet</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
       {/* Mobile Menu */}
       <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <nav>
          <ul>
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 px-4 text-lg font-medium transition-opacity duration-200 hover:opacity-75"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="h-px bg-gradient-to-r from-white/0 to-white/20" />
    </div>
  );
};

export default Navbar;
