import { useEffect, useState } from 'react';
import { getActiveBreakpoint } from '../utils/style-helpers';
import { cn } from '../utils/cn';

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
      thumbnailUrl:
        'https://assets.coingecko.com/coingecko/public/ckeditor_assets/pictures/9847/content_What_Is_Zeebu.webp',
      permalink: 'https://www.coingecko.com/learn/zeebu-b2b-payments-settlement-telecoms',
      title: 'What Is Zeebu: B2B Payments and Settlement Platform For Telecoms ',
      description:
        'Zeebu is a blockchain-powered payment ecosystem tailored for the telecom carriers industry, where payments are made using the ZBU tokens, and users earn loyalty rewards for transacting using the platform. To date, Zeebu has facilitated over $1.25 billion in settlements in the telecom space.',
      datePublished: '01 Apr 2024',
    },
    {
      thumbnailUrl:
        'https://assets-global.website-files.com/649aa9246d637157d69576c7/65d892d320e910befae3e527_TradFi%20%26%20DeFi_Zeebu.jpg',
      permalink: 'https://www.zeebu.com/blog/merging-best-of-tradfi-and-defi-to-revolutionize-telecom-transactions',
      title: 'Merging the Best of TradFi & DeFi to Revolutionize Telecom Transactions',
      description:
        'TradFi and DeFi, once perceived as two pillars apart, have lately started converging in various sectors. Used as acronyms— TradFi for Traditional Finance and DeFi for Decentralized Finance— these categorizations gained traction as people worldwide realized the advantages of using blockchain technology in finance, that came to be known as DeFi.',
      datePublished: '23 Feb 2024',
    },
    {
      thumbnailUrl:
        'https://assets-global.website-files.com/649aa9246d637157d69576c7/659fbe5929ab7a85a645e902_Tokenization_of_Loyalty.png',
      permalink: 'https://www.zeebu.com/blog/tokenization-of-loyalty-the-emergence-of-a-new-asset-class',
      title: 'Tokenization of Loyalty: The Emergence of a New Asset Class',
      description:
        'Loyalty programs are a critical component for businesses and brands, significantly contributing to user retention. The global loyalty program market was valued at USD 16.92 Billion in 2021 and is expected to reach USD 59.49 Billion by 2030. Despite this substantial growth, loyalty programs continue to face challenges. Fortunately, advancements in financial technology, particularly blockchain technology, have the potential to enhance and transform loyalty programs.',
      datePublished: '15 Jan 2024',
    },
    {
      thumbnailUrl:
        'https://assets-global.website-files.com/649aa9246d637157d69576c7/658d1c7e0c9624465211cbac_Real-Hurdle-to-Enterprise-Web3.png',
      permalink:
        'https://www.zeebu.com/blog/the-real-hurdle-to-enterprise-web3-adoption-is-lack-of-custom-built-solutions',
      title: 'The Real Hurdle to Enterprise Web3 Adoption is Lack of Custom-built Solutions',
      description:
        'When it comes to the adoption of Web3 and blockchain technologies, the conversation often revolves around the technical complexities inherent in these systems. The consensus seems to be that the user experience of Web3 products is not up to par with traditional applications, the onboarding process is fraught with friction points, and the technological concepts require a steep learning curve.',
      datePublished: '28 Dec 2023',
    },
    {
      thumbnailUrl:
        'https://assets-global.website-files.com/649aa9246d637157d69576c7/6576db0b30428e6409256ec3_Zeebu-Pioneering-p-2000.jpg',
      permalink: 'https://www.zeebu.com/blog/web3-neobanks-the-new-face-of-finance-and-banking',
      title: 'Web3 Neobanks: The New Face of Finance and Banking?',
      description:
        'The world of banking and finance has witnessed a remarkable evolution over the years, with each era marked by transformative technologies and changing consumer expectations. Traditional finance, often referred to as TradFi, has long been the bedrock of the global financial system. It encompasses the established banking institutions, regulatory frameworks, and financial instruments that have shaped economies for centuries. The familiar sight of brick-and-mortar banks lining city streets has been synonymous with financial stability and security.',
      datePublished: '11 Dec 2023',
    },
  ]);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(1);

  const getMaxPageSize = () => Math.ceil(data.length / perPage) - 1;

  useEffect(() => {
    const resizeListener = () => {
      const maxPage = getMaxPageSize();

      if (page > maxPage) {
        setPage(maxPage);
      }

      if (getActiveBreakpoint() >= 3) {
        setPerPage(3);
        return;
      }

      if (getActiveBreakpoint() >= 1) {
        setPerPage(2);
        return;
      }

      setPerPage(1);
    };

    window.addEventListener('resize', resizeListener);

    resizeListener();

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [perPage]);

  const navigateCarousel = (direction: -1 | 1) => {
    const maxPage = getMaxPageSize();

    if (page + direction < 0) {
      setPage(maxPage);
      return;
    }

    if (page + direction > maxPage) {
      setPage(0);
      return;
    }

    setPage((p) => p + direction);
  };

  return (
    <section className="bg-white py-12" id="knowledge-hub">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="text-center flex flex-col justify-center items-center gap-6">
            <h2 className="font-semibold text-[44px] leading-[48.4px]">Learn About Zeebu</h2>
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
          <div className="flex gap-8 items-end justify-end">
            <button
              onClick={() => navigateCarousel(-1)}
              className="rounded-full flex justify-center items-center h-[40px] w-[40px] bg-[#8390a2] text-white"
            >
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
            </button>
            <button
              onClick={() => navigateCarousel(1)}
              className="rounded-full flex justify-center items-center h-[40px] w-[40px] bg-[#8390a2] text-white"
            >
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
            </button>
          </div>
        </div>
        <div className="overflow-hidden mb-8">
          <div
            className="flex w-full transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(calc(-100%*${page}))` }}
          >
            {data.map((d) => (
              <div className="basis-full px-3 md:basis-1/2 lg:basis-1/3 flex-shrink-0 flex flex-col">
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
        <div className="flex gap-4 justify-center">
          {Array.from({ length: getMaxPageSize() + 1 }).map((_, ix) => (
            <button
              onClick={() => setPage(ix)}
              className={cn('transition-colors rounded-full h-[12px] w-[12px] bg-primary-100', {
                'bg-primary-300': page === ix,
              })}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHubSection;
