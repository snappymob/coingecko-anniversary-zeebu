import { useState } from 'react';

type ArticleItem = {
  thumbnailUrl: string;
  permalink: string;
  title: string;
  description: string;
  datePublished: string;
};

const KnowledgeHubSection = () => {
  const [data, setData] = useState<ArticleItem[]>([
    {
      thumbnailUrl: 'https://cms.polkadot.network/content/images/2024/03/polkadot-dune-kusama-partnership.png',
      permalink: 'https://polkadot.network/blog/polkadot-kusama-analytics-dune',
      title: 'Empowering Next-Level Insights: Dune Brings Polkadot and Kusama Analytics into Focus',
      description:
        "Today marks a pivotal moment for the blockchain community as Polkadot data is available for the first time on Dune, a leading open-source analytics platform for blockchain data. The result of a strategic partnership between Colorful Notion and Dune, this integration moves the Polkadot ecosystem towards enhanced visibility and in-depth analysis, enabling users to unlock new data-driven insights. By leveraging Dune's robust analytical tools, users can now delve deeper into Polkadot’s expansive ecosystem, fostering informed decision-making and strategic planning. This leap in capability will revolutionize how we measure, compare, and understand the Polkadot ecosystem.",
      datePublished: '19 Mar 2024',
    },
    {
      thumbnailUrl:
        'https://cms.polkadot.network/content/images/2024/03/polkadot-blockchain-academy-remote-learning.png',
      permalink: 'https://polkadot.network/blog/polkadot-blockchain-academy-remote-learning-developers',
      title: 'Polkadot Blockchain Academy Adds Remote Option for Select Students',
      description:
        'In order to maximize the benefits of classroom-based education - with all the additional add-ons like engagement, networking, and collaboration - PBA was imagined as an experience that would initially be best provided without a remote element.',
      datePublished: '18 Mar 2024',
    },
    {
      thumbnailUrl: 'https://cms.polkadot.network/content/images/2024/03/PAP--Updated-.png',
      permalink:
        'https://polkadot.network/blog/the-polkadot-alpha-program-a-new-era-for-decentralized-building-collaboration/',
      title: 'The Polkadot Alpha Program: A New Era of Collaborative Building',
      description:
        'The blockchain space is continuously evolving, and with it the opportunities for development and innovation expand. The latest milestone in this story is the exciting launch of the Polkadot Alpha Program, a groundbreaking initiative that lowers entry barriers and fosters a more dynamic environment for teams aiming to bring their blockchain projects to life.',
      datePublished: '04 Mar 2024',
    },
  ]);

  return (
    <section className="bg-white py-[120px]" id="knowledge-hub">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="text-center flex flex-col justify-center items-center gap-6">
            <h2 className="font-semibold text-[44px] leading-[48.4px]">Knowledge Hub</h2>
            <div className="text-lg text-[#64748B] leading-[21.6px] max-w-xl">
              Stay informed and explore the latest insights in the ever-evolving world of cryptocurrencies.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-8">
          <div>
            <h3 className="font-semibold text-4xl mb-8">Articles</h3>
            <div className="text-lg text-[#64748B] leading-[21.6px]">
              Stay informed, sharpen your skills, and navigate the ever-evolving landscape of digital assets. Whether
              you're a seasoned trader or a curious beginner, our articles provide valuable insights and knowledge to
              keep you ahead in the crypto game.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {data.map((d) => (
            <div className="flex flex-col">
              <a href={d.permalink} title={d.title} target="_blank">
                <div className="rounded-md mb-6 overflow-clip">
                  <img src={d.thumbnailUrl} className="h-full w-full object-cover aspect-[7/4]" alt="" />
                </div>
                <h4 className="font-medium text-[20px] line-clamp-2 leading-[26px] mb-6">{d.title}</h4>
              </a>
              <div className="text-lg text-[#64748B] font-normal leading-[21.6px] mb-4 line-clamp-3">
                {d.description}
              </div>
              <div className="text-[#4A4A4A] text-sm">{d.datePublished}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHubSection;
