import PrimaryButton from '../components/PrimaryButton';

const HeroSection = () => {
  return (
    <section className="h-[calc(100vh-80px)] bg-white grid grid-rows-2" id="hero">
      <div className="w-full">
        <img
          className="w-full h-full object-contain xl:object-cover"
          src="http://landing.coingecko.com/wp-content/uploads/2024/04/zeebu-main-banner.png"
          alt=""
        />
      </div>
      <div className="bg-white gap-12 w-full justify-center flex flex-col items-center">
        <div className="flex flex-col gap-6 w-full text-center">
          <h1 className="text-3xl lg:text-5xl font-bold">Explore Zeebu</h1>
          <div className="text-md lg:text-lg font-normal text-center mx-auto leading-[21.6px] text-[#64748B] p-4 lg:max-w-[800px] lg:w-[50%]">
            ZEEBU’s all-in-one blockchain-based platform is built to meet every telecom settlement need, enabling
            trustless, frictionless, and superfast global transactions.
          </div>
        </div>
        <PrimaryButton
          buttonPt={{ className: 'py-3 lg:py-4 px-5 lg:px-6 inline-flex', onClick: () => (location.hash = '#raffle') }}
          innerPt={{ className: 'text-lg lg:text-2xl' }}
        >
          Explore Now
        </PrimaryButton>
      </div>
    </section>
  );
};

export default HeroSection;
