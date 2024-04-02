import { useState } from 'react';

type CandyCampaignItem = {
  thumbnailUrl: string;
  title: string;
  description: string;
  candyCost: number;
};

const CandyCampaignSection = () => {
  const [data, setData] = useState<CandyCampaignItem[]>([
    {
      title: 'Tiiny Host',
      description: '10$ off Tiiny Host - Solo & Pro Plans',
      candyCost: 300,
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/tiiny-host.png',
    },
    {
      title: 'Token 2049 Dubai',
      description: '10% OFF TOKEN2049 Dubai tickets – The Premier Crypto Event.',
      candyCost: 400,
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/token-dubai.png',
    },
    {
      title: 'Crypto Tax Calculator Plans',
      description: '20% OFF All Crypto Tax Calculator Plans',
      candyCost: 400,
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/crypto-tax-calculator.png',
    },
  ]);

  return (
    <section className="bg-white pb-32 pt-16" id="campaigns">
      <div className="container mx-auto">
        <div className="min-h-[300px] my-12 flex flex-col lg:gap-32 md:flex-row justify-between">
          <div className="flex-[1_1_10%] h-min">
            <h2 className="font-semibold text-[44px] mb-6">Candy Campaign</h2>
            <div className="text-lg font-normal leading-[21.6px] text-[#64748B]">
              Candy Rewards is CoinGecko’s loyalty program, designed to engage and reward our community. Users collect
              candies daily, and spend it on partner rewards – exclusive discounts, voucher credits, raffle and giveaway
              entries, limited edition NFT or token airdrops, and more!
            </div>
          </div>
          <div className="flex-1 aspect-[471/278]">
            <img
              src="http://landing.coingecko.com/wp-content/uploads/2024/03/candy-campaign.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex gap-8 items-end justify-end mb-8">
          <div className="rounded-full flex justify-center items-center h-[40px] w-[40px] bg-[#8390a2] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              className="mr-1 w-8 h-8"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div className="rounded-full flex justify-center items-center h-[40px] w-[40px] bg-[#8390a2] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              className="ml-1 w-8 h-8"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {data.map((d) => (
            <div className="flex flex-col">
              <div className="rounded-xl overflow-clip mb-6">
                <img src={d.thumbnailUrl} className="h-full w-full object-cover" alt="" />
              </div>
              <div className="font-medium text-2xl mb-3">{d.title}</div>
              <div className="flex-grow text-lg text-[#64748B] font-normal mb-4">{d.description}</div>
              <div className="text-primary-500 text-sm font-medium">{d.candyCost} candies</div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 justify-center">
          <div className="rounded-full h-[12px] w-[12px] bg-slate-400"></div>
          <div className="rounded-full h-[12px] w-[12px] bg-slate-300"></div>
          <div className="rounded-full h-[12px] w-[12px] bg-slate-300"></div>
        </div>
      </div>
    </section>
  );
};

export default CandyCampaignSection;
