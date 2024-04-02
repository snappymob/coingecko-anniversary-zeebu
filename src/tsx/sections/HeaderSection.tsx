import { useState } from 'react';
import { cn } from '../utils/cn';

const HeaderSection = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <header>
      <nav className="h-[80px] bg-white shadow-sm z-10 relative">
        <div className="container mx-auto h-full flex flex-row-reverse gap-4 py-5 lg:flex-row justify-center lg:justify-between items-center">
          <div className="flex h-full gap-5 items-center">
            <img
              className="!object-cover !h-full"
              src="https://support.coingecko.com/hc/article_attachments/4499575478169/CoinGecko_logo.png"
              alt=""
            />
            <h1 className="text-2xl font-medium">Explore Zeebu</h1>
          </div>
          <div
            id="nav-links"
            className={cn(
              'font-normal z-20 py-4 lg:p-0 items-center gap-10 transition-transform duration-300 flex flex-col lg:flex-row lg:flex lg:font-normal fixed lg:static -translate-x-[300%] lg:translate-x-0 bg-white inset-0',
              { ['visible']: isNavVisible }
            )}
          >
            <a onClick={() => setIsNavVisible(false)} href="#hero">
              Home
            </a>
            <a onClick={() => setIsNavVisible(false)} href="#raffle">
              Raffle
            </a>
            <a onClick={() => setIsNavVisible(false)} href="#knowledge-hub">
              Knowledge Hub
            </a>
            <a onClick={() => setIsNavVisible(false)} href="#resources">
              Resources
            </a>
            <a onClick={() => setIsNavVisible(false)} href="#clients">
              Clients
            </a>
            <button id="nav-links-hamburger-close" onClick={() => setIsNavVisible(false)} className="lg:hidden p-1.5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
          </div>
          <button id="nav-links-hamburger-open" onClick={() => setIsNavVisible(true)} className="lg:hidden p-1.5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSection;
