const CompaniesSection = () => {
  return (
    <section className="text-[#64748B] bg-[#8390a2]">
      <div className="py-8 text-center font-medium text-2xl bg-white">Companies we work with</div>
      <div className="container mx-auto py-10">
        <div className="flex flex-wrap justify-around lg:justify-between gap-8 px-4 items-center">
          <img src="http://landing.coingecko.com/wp-content/uploads/2024/03/stripe.png" className="h-12" alt="stripe" />
          <img src="http://landing.coingecko.com/wp-content/uploads/2024/03/google.png" className="h-12" alt="google" />
          <img
            src="http://landing.coingecko.com/wp-content/uploads/2024/03/linkedin.png"
            className="h-12"
            alt="linkedin"
          />
          <img
            src="http://landing.coingecko.com/wp-content/uploads/2024/03/commvault.png"
            className="h-12"
            alt="commvault"
          />
          <img
            src="http://landing.coingecko.com/wp-content/uploads/2024/03/spotify.png"
            className="h-12"
            alt="spotify"
          />
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
