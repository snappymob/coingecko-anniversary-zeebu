const FooterSection = () => {
  return (
    <footer className="px-4 sm:px-0 grid lg:grid-cols-4 grid-cols-2 gap-12 sm:gap-4 container mx-auto py-10">
      <div className="col-span-2 lg:col-span-2">
        <a href="#" className="flex gap-4 items-center">
          <img
            className="h-10 w-10"
            src="https://support.coingecko.com/hc/article_attachments/4499575478169/CoinGecko_logo.png"
            alt=""
          />
          <h1 className="text-xl lg:text-2xl font-medium">Explore Zeebu</h1>
        </a>
      </div>
      <div>
        <h4 className="pb-5">Resources</h4>
        <nav>
          <ul>
            <li className="pb-5">
              <a href="#hero" className="text-[#64748B] font-normal">
                Home
              </a>
            </li>
            <li className="pb-5">
              <a href="#raffle" className="text-[#64748B] font-normal">
                Raffle
              </a>
            </li>
            <li className="pb-5">
              <a href="#knowledge-hub" className="text-[#64748B] font-normal">
                Knowledge Hub
              </a>
            </li>
            <li className="pb-5">
              <a href="#resources" className="text-[#64748B] font-normal">
                Resources
              </a>
            </li>
            <li>
              <a href="#clients" className="text-[#64748B] font-normal">
                Clients
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h4 className="pb-5">Social Media</h4>
        <nav>
          <ul>
            <li className="pb-5">
              <a href="https://bit.ly/zeebutwitter" className="text-[#64748B] font-light">
                Twitter/X
              </a>
            </li>
            <li className="pb-5">
              <a href="https://www.instagram.com/zeebu.official/" className="text-[#64748B] font-light">
                Instagram
              </a>
            </li>
            <li className="pb-5">
              <a href="https://www.linkedin.com/company/zeebuofficial/" className="text-[#64748B] font-light">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://t.me/+_19jAyVyA4hiZGY0" className="text-[#64748B] font-light">
                Telegram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default FooterSection;
