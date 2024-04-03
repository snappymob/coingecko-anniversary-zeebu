import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';

const CandyCampaignSection = () => {
  const [data, setData] = useState<string[]>([
    'http://landing.coingecko.com/wp-content/uploads/2024/04/zeebu-nft-1.jpg',
    'http://landing.coingecko.com/wp-content/uploads/2024/04/zeebu-nft-2.jpg',
    'http://landing.coingecko.com/wp-content/uploads/2024/04/zeebu-nft-3.jpg',
    'http://landing.coingecko.com/wp-content/uploads/2024/04/zeebu-nft-4.jpg',
  ]);

  return (
    <section className="bg-slate-50 py-12" id="raffle">
      <div className="container mx-auto">
        <div className="min-h-[300px] my-6 grid grid-cols-1 gap-6 lg:grid-cols-2 justify-between">
          <div className="h-full justify-center items-center flex flex-col">
            <h2 className="font-semibold text-[44px] mb-6">NFT Raffle Event</h2>
            <div className="mb-6 lg:mb-12 text-lg font-normal text-center mx-auto max-w-md text-[#64748B]">
              The NFTs capture the magic of CoinGecko clashing into the world of Zeebu.
              <br />
              <br />
              Join the raffle to win yours.
            </div>
            <a href="https://www.coingecko.com/account/rewards/zeebu-nft-raffle" target="_blank">
              <PrimaryButton buttonPt={{ className: 'py-3 px-5 inline-flex' }} innerPt={{ className: 'text-lg' }}>
                Join the Raffle
              </PrimaryButton>
            </a>
          </div>
          <div className="aspect-[16/9] rounded-xl overflow-clip">
            <img
              src="http://landing.coingecko.com/wp-content/uploads/2024/04/zeebu-airdrop-event.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <h3 className="text-4xl mt-12 mb-8">Prize Showcase</h3>
        <div className="mb-8 grid grid-cols-2 lg:grid-cols-4 w-full gap-6">
          {data.map((d) => (
            <div className="rounded-xl overflow-clip">
              <img src={d} className="h-full w-full object-cover" alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CandyCampaignSection;
