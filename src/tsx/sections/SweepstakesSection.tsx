import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';

type SweepstakesItem = {
  title: string;
  description: string;
  thumbnailUrl: string;
};

const SweepstakesSection = () => {
  const [data, setData] = useState<SweepstakesItem[]>([
    {
      title: 'RADAR Staking',
      description:
        'Use Token Swap to swap any token on Polygon to RADAR on Polygon, and have a chance to win even more RADAR!',
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/radar-staking.png',
    },
    {
      title: 'Stake $MILK earn $IXT',
      description:
        "Here's your chance to win from a prize-pool of 500 Planet IX - Gravity Grade tokens by staking your $MILK on Planet IX.",
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/stake-milk.png',
    },
    {
      title: 'Countdown to RealtyX Launch',
      description: '300 USDC Giveaway + 10 ETH Prize Pool',
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/realtyx-launch.png',
    },
  ]);

  return (
    <section className="py-12" id="sweepstakes">
      <div className="container mx-auto bg-[#fafbfc]">
        <div className="mb-[60px] flex items-center justify-center">
          <div className="text-center flex flex-col justify-center items-center">
            <h2 className="mb-6 font-semibold text-[44px]">Sweepstakes</h2>
            <div className="text-lg font-normal leading-[21.6px] text-[#64748B] mb-12 max-w-xl">
              Discover a world of Crypto prizes and elevate your experience to new heights!
            </div>
            <PrimaryButton buttonPt={{ className: 'py-4 px-6 inline-flex' }} innerPt={{ className: 'text-2xl' }}>
              View More
            </PrimaryButton>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {data.map((d) => (
            <div className="flex flex-col">
              <div className="rounded-xl mb-6 overflow-clip aspect-[368/320]">
                <img src={d.thumbnailUrl} className="h-full w-full object-cover" alt="" />
              </div>
              <div className="font-medium text-[28px] mb-6">{d.title}</div>
              <div className="flex-grow mb-12 text-lg leading-[21.6px] text-[#64748B]">{d.description}</div>
              <div className="flex flex-col gap-4 text-[#64748B]">
                <div className="flex gap-[18px]">
                  <div className="h-[52px] w-[52px] flex-none p-3 rounded-full bg-[#64748b]">
                    <img
                      src="http://landing.coingecko.com/wp-content/uploads/2024/03/twitter.png"
                      className="h-full w-full object-contain"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center px-4 bg-white border border-solid w-full border-[#adb3bb] rounded-md">
                    Follow on X
                  </div>
                </div>
                <div className="flex gap-[18px]">
                  <div className="h-[52px] w-[52px] flex-none p-3 rounded-full bg-[#64748b]">
                    <img
                      src="http://landing.coingecko.com/wp-content/uploads/2024/03/instagram.png"
                      className="h-full w-full object-contain"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center px-4 bg-white border border-solid w-full border-[#adb3bb] rounded-md">
                    Follow on Instagram
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SweepstakesSection;
