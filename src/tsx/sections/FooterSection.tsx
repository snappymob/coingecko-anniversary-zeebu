const FooterSection = () => {
  return (
    <footer className="bg-[#ff0066] text-white">
      <div className="px-4 sm:px-0 grid lg:grid-cols-4 grid-cols-2 gap-12 sm:gap-4 container mx-auto py-10">
        <div className="col-span-2 lg:col-span-2">
          <a href="#" className="flex gap-4 items-center">
            <img
              className="h-10 w-10"
              src="https://support.coingecko.com/hc/article_attachments/4499575478169/CoinGecko_logo.png"
              alt=""
            />
            <h1 className="text-xl lg:text-2xl font-medium text-white">Explore Polkadot</h1>
          </a>
        </div>
        <div>
          <h4 className="pb-5 text-white">Resources</h4>
          <nav>
            <ul>
              <li className="pb-5">
                <a href="#campaigns" className="text-[hsl(215,16%,90%)] font-normal">
                  Campaigns
                </a>
              </li>
              <li className="pb-5">
                <a href="#sweepstakes" className="text-[hsl(215,16%,90%)] font-normal">
                  Sweepstakes
                </a>
              </li>
              <li className="pb-5">
                <a href="#knowledge-hub" className="text-[hsl(215,16%,90%)] font-normal">
                  Knowledge Hub
                </a>
              </li>
              <li>
                <a href="#dapps" className="text-[hsl(215,16%,90%)] font-normal">
                  DApps
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h4 className="pb-5 text-white">Social Media</h4>
          <nav>
            <ul>
              <li className="pb-5">
                <a href="https://twitter.com/Polkadot" className="text-[hsl(215,16%,90%)] font-light">
                  Twitter/X
                </a>
              </li>
              <li className="pb-5">
                <a href="https://www.reddit.com/r/Polkadot/" className="text-[hsl(215,16%,90%)] font-light">
                  Reddit
                </a>
              </li>
              <li className="pb-5">
                <a href="https://dot.li/discord" className="text-[hsl(215,16%,90%)] font-light">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://dot.li/element" className="text-[hsl(215,16%,90%)] font-light">
                  Element
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
