import { useState } from 'react';

type DiscoverDAppsItem = {
  thumbnailUrl: string;
  callToActionUrl: string;
  description: string;
  name: string;
};

const DiscoverDAppsSection = () => {
  const [data, setData] = useState<DiscoverDAppsItem[]>([
    {
      name: 'Axistel',
      callToActionUrl: 'https://axistel.biz/',
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/axistel-logo.jpg',
      description:
        'Global telecom leader offering comprehensive Voice, Data, and Internet solutions for diverse carrier and corporate needs.',
    },
    {
      name: 'Novatel',
      callToActionUrl: 'https://novatel.si/',
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/novatel-logo.jpg',
      description:
        'Slovenian fix and MVNO telecom operator, serving retail and wholesale markets locally and worldwide',
    },
    {
      name: 'Hayo',
      callToActionUrl: 'https://www.hayotel.com/',
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/hayotel-logo.jpg',
      description:
        'Diverse ventures include Telecom, WiFi, Infrastructure, Solar Power, Investments, IT, Agriculture & Mining.',
    },
  ]);

  return (
    <section className="py-12 bg-white" id="clients">
      <div className="container mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-semibold text-[44px] leading-[48.4px] mb-6">Our Trusted Clients</h3>
          <div className="text-lg leading-[21.6px] text-[#64748B]">
            Discover the array of esteemed telecom partners who rely on Zeebu's cutting-edge Web3 NeoBank services,
            revolutionizing payment ecosystems for streamlined carrier settlements.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14 my-12 md:px-20">
          {data.map((d) => (
            <a
              href={d.callToActionUrl}
              target="_blank"
              className="border border-solid border-slate-300 rounded-3xl text-center py-4 px-8 flex flex-col items-center shadow-secondaryShadow border-t-2 border-x-2"
            >
              <h4 className="text-[28px] font-medium text-xl">{d.name}</h4>
              <img className="h-full object-contain" src={d.thumbnailUrl} />
              <div className="text-[#64748B] text-sm">{d.description}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverDAppsSection;
