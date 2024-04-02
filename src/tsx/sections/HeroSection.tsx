import PrimaryButton from '../components/PrimaryButton';

const HeroSection = () => {
  return (
    <section className="h-[calc(100vh-80px)] bg-white grid grid-rows-2" id="hero">
      <div className="w-full">
        <img
          className="w-full h-full object-contain xl:object-cover"
          src="http://landing.coingecko.com/wp-content/uploads/2024/03/polkadot-subpage-banner.png"
          alt=""
        />
      </div>
      <div className="bg-white gap-12 w-full justify-center flex flex-col items-center">
        <div className="flex flex-col gap-6 w-full text-center">
          <h1 className="text-5xl font-bold">Explore Polkadot</h1>
          <div className="text-lg font-normal text-center mx-auto leading-[21.6px] text-[#64748B] p-4 lg:max-w-[800px] lg:w-[50%]">
            Polkadot is an open-source project founded by the Web3 Foundation.
            <br />
            Web3 Foundation has commissioned five teams and over 100 developers to build Polkadot
          </div>
        </div>
        <PrimaryButton
          label="Explore Now"
          buttonPt={{ className: 'py-4 px-6 inline-flex', onClick: () => (location.hash = '#knowledge-hub') }}
          innerPt={{ className: 'text-2xl' }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
