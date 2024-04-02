import { ReactNode, useState } from 'react';
import { DeFiIcon } from '../components/icons/DeFiIcon';
import { DexIcon } from '../components/icons/DexIcon';
import { GamingIcon } from '../components/icons/GamingIcon';
import { LstIcon } from '../components/icons/LstIcon';
import { WalletIcon } from '../components/icons/WalletIcon';
import { cn } from '../utils/cn';

type DiscoveryDAppsCategory = 'All' | 'Wallet' | 'DeFi' | 'Dex' | 'LST' | 'GameFi & NFT';

type DiscoverDAppsItem = {
  thumbnailUrl: string;
  callToActionUrl: string;
  name: string;
  callToAction: string;
  category: DiscoveryDAppsCategory;
  icon: ReactNode;
};

const DiscoverDAppsSection = () => {
  const [data, setData] = useState<DiscoverDAppsItem[]>([
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/nova-wallet-icon.png',
      name: 'Nova Wallet',
      callToAction: 'Get Nova Wallet',
      callToActionUrl: 'https://novawallet.io/',
      icon: <WalletIcon />,
      category: 'Wallet',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/subwallet-icon.png',
      name: 'Sub Wallet',
      callToAction: 'Get Sub Wallet',
      callToActionUrl: 'https://www.subwallet.app/',
      icon: <WalletIcon />,
      category: 'Wallet',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/talisman-icon-red.png',
      name: 'Talisman',
      callToAction: 'Get Talisman',
      callToActionUrl: 'https://www.talisman.xyz/',
      icon: <WalletIcon />,
      category: 'Wallet',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/enkrypt-logo.png',
      name: 'Enkrypt',
      callToAction: 'Get Enkrypt',
      callToActionUrl: 'https://www.enkrypt.com/',
      icon: <WalletIcon />,
      category: 'Wallet',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/fearless-wallet-icon.png',
      name: 'Fearless Wallet',
      callToAction: 'Get Fearless Wallet',
      callToActionUrl: 'https://fearlesswallet.io/',
      icon: <WalletIcon />,
      category: 'Wallet',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/PolkaWallet.png',
      name: 'PolkaWallet',
      callToAction: 'Get PolkaWallet',
      callToActionUrl: 'https://polkawallet.io/',
      icon: <WalletIcon />,
      category: 'Wallet',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/PolkaGate.png',
      name: 'PolkaGate',
      callToAction: 'Get PolkaGate',
      callToActionUrl: 'https://polkagate.xyz/',
      icon: <WalletIcon />,
      category: 'Wallet',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/centrifuge-logo.png',
      name: 'Centrifuge',
      callToAction: 'Platform for tokenizing, managing, and investing in a diversified portfolio of real-world assets.',
      callToActionUrl: 'https://centrifuge.io/',
      icon: <DeFiIcon />,
      category: 'DeFi',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/interlay-icon.png',
      name: 'Interlay',
      callToAction: 'Bitcoin DeFi via a trustless gateway with fiat access and multi-chain support.',
      callToActionUrl: 'https://www.interlay.io/',
      icon: <DeFiIcon />,
      category: 'DeFi',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/starlay-icon.png',
      name: 'Starlay',
      callToAction: 'Decentralized network for creating, betting on, and resolving prediction markets.',
      callToActionUrl: 'https://starlay.finance/',
      icon: <DeFiIcon />,
      category: 'DeFi',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/Zeitgeist-ZTG.png',
      name: 'Zeitgeist',
      callToAction: 'First omni-inscriptions marketplace on Polkadot to create, transfer and manage your inscriptions.',
      callToActionUrl: 'https://zeitgeist.pm/',
      icon: <DeFiIcon />,
      category: 'DeFi',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/Moonwell.png',
      name: 'Moonwell',
      callToAction:
        'Open lending and borrowing protocol on Base, Moonbeam, and Moonriver with intuitive user interface.',
      callToActionUrl: 'https://moonwell.fi/',
      icon: <DeFiIcon />,
      category: 'DeFi',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/DOTins.png',
      name: 'Dotins',
      callToAction:
        'Lending protocol that allows quick and easy depositing and borrowing of tokens on top of Astar Network.',
      callToActionUrl: 'https://www.dotins.io/',
      icon: <DeFiIcon />,
      category: 'DeFi',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/HydraDX-HDX.png',
      name: 'HydraDX',
      callToAction: 'DEX protocol utilizing multiple AMMs for low-slippage trades.',
      callToActionUrl: 'https://hydradx.io/',
      icon: <DexIcon />,
      category: 'Dex',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/ArthSwap.png',
      name: 'Arthswap',
      callToAction: 'DeFi protocol offering swapped assets, staking, farming, and more.',
      callToActionUrl: 'https://app.arthswap.org/',
      icon: <DexIcon />,
      category: 'Dex',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/Beamswap-GLINT.png',
      name: 'Beamswap',
      callToAction: 'Moonbeam-based DeFi hub primarily with DEX and an AMM.',
      callToActionUrl: 'https://beamswap.io/',
      icon: <DexIcon />,
      category: 'Dex',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/Polkadex-PDEX.png',
      name: 'Polkadex',
      callToAction: 'The combination of CEX and DEXs into a non-custodial, order book based exchange.',
      callToActionUrl: 'https://polkadex.trade',
      icon: <DexIcon />,
      category: 'Dex',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/Polkaswap.png',
      name: 'Polkaswap',
      callToAction: 'Non-custodial AMM DEX for fast and secure cross-chain exchange of assets.',
      callToActionUrl: 'https://polkaswap.io/',
      icon: <DexIcon />,
      category: 'Dex',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/StellaSwap-STELLA.png',
      name: 'StellaSwap',
      callToAction: 'Hybrid DEX with 3 AMMs to swap, farm, bridge, and explore assets easily.',
      callToActionUrl: 'https://stellaswap.com/',
      icon: <DexIcon />,
      category: 'Dex',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/Zenlink-ZLK.png',
      name: 'Zenlink',
      callToAction: 'DEX composable hub between all Polkadot parachains.',
      callToActionUrl: 'https://zenlink.pro/en/',
      icon: <DexIcon />,
      category: 'Dex',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/Acala-ACA.png',
      name: 'Acala',
      callToAction: 'Cross-chain DeFi network and liquidity hub built on Polkadot.',
      callToActionUrl: 'https://acala.network/',
      icon: <LstIcon />,
      category: 'LST',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/Bifrost-BNC.png',
      name: 'Bifrost',
      callToAction: 'Non-custodial liquid staking protocol, serving the omni-chain vision.',
      callToActionUrl: 'https://bifrost.finance/',
      icon: <LstIcon />,
      category: 'LST',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/Algem.png',
      name: 'Algem',
      callToAction: 'DeFi dapp for liquid assets on Astar Network.',
      callToActionUrl: 'https://www.algem.io/',
      icon: <LstIcon />,
      category: 'LST',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/EqFinance.png',
      name: 'EQ Finance',
      callToAction: 'The first interest-bearing stablecoin backed by LSTs on Polkadot.',
      callToActionUrl: 'https://equilibrium.io/',
      icon: <LstIcon />,
      category: 'LST',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/Parallel.png',
      name: 'Parallel',
      callToAction: 'DeFi protocol with liquid staking and crowdloan, AMM, money market, DAO FI, and farming.',
      callToActionUrl: 'https://app.parallel.fi/',
      icon: <LstIcon />,
      category: 'LST',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/Taiga-TAI.png',
      name: 'Taiga',
      callToAction: 'Synthetic asset protocol unifying DOT and KSM staking and crowdloan derivatives',
      callToActionUrl: 'https://www.taigaprotocol.io/',
      icon: <LstIcon />,
      category: 'LST',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/heal3.jpg',
      name: 'Heal3',
      callToAction: 'Game-Fi healthcare dapp built on Astar network.',
      callToActionUrl: 'https://heal3.com/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/moonbeans-logo.png',
      name: 'Moonbeans',
      callToAction: 'Multi-chain digital collectibles marketplace with self-managed storefronts.',
      callToActionUrl: 'https://moonbeans.io/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/TheGreatEscape.png',
      name: 'The Great Escape',
      callToAction: 'New-gen hyper-casual Web3 game based on a free-to-play, gas-less and chain-agnostic model.',
      callToActionUrl: 'https://www.playtge.com/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/Singular.png',
      name: 'Singular',
      callToAction: 'Modular NFT marketplace to mint, trade, and experience advanced NFTs.',
      callToActionUrl: 'https://singular.app/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/KodaDot.png',
      name: 'KodaDOT',
      callToAction: 'NFT marketplace enabling multi-chain digital asset creation, trading, and management on Polkadot.',
      callToActionUrl: 'https://kodadot.xyz/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/Unique-UNQ.png',
      name: 'Unique Network',
      callToAction: 'Next-generation NFT utility tools for creating and trading the advanced NFTs.',
      callToActionUrl: 'https://unique.network/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/Awesome-Ajuna-Avatars.png',
      name: 'Awesome Ajuna Avatars',
      callToAction: 'Blockchain game with unique heroes, seasons, quests, and NFTs.',
      callToActionUrl: 'https://aaa.ajuna.io/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/ArtZero.png',
      name: 'ArtZero',
      callToAction: 'NFT marketplace on Aleph Zero, 5ireChain and Astar networks.',
      callToActionUrl: 'https://a0.artzero.io/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/AstarStrike.png',
      name: 'Astar Strike',
      callToAction: 'Multiplayer first-person shooter (FPS) browser game.',
      callToActionUrl: 'https://zkstrike.com/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/ExiledRacers.jpg',
      name: 'Exiled Racers',
      callToAction: 'Low touch racing manager and prediction game, integrated with premium digital collectibles.',
      callToActionUrl: 'https://www.exiledracers.com/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/Bluez.png',
      name: 'Bluez',
      callToAction: 'Community-driven NFT marketplace built on Astar network.',
      callToActionUrl: 'https://www.bluez.app/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/04/EVRLOOT.png',
      name: 'Evrloot',
      callToAction: 'Dark-fantasy role playing game pioneering intriguing lore and deep on-chain progression.',
      callToActionUrl: 'https://evrloot.io/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
  ]);

  const [activeFilter, setActiveFilter] = useState<DiscoveryDAppsCategory>('All');

  return (
    <section className="py-24 bg-white" id="dapps">
      <div className="container mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-semibold text-[44px] leading-[48.4px] mb-6">Discover DApps</h3>
          <div className="text-lg leading-[21.6px] text-[#64748B]">
            Explore the decentralised world with our curated selection of innovative DApps across various categories and
            platforms.
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[{ icon: null, category: 'All' as DiscoveryDAppsCategory }, ...data]
            .reduce((categories: { category: DiscoveryDAppsCategory; icon: ReactNode }[], curr) => {
              if (categories.filter((c) => c.category === curr.category).length > 0) {
                return categories;
              }

              return [...categories, { category: curr.category, icon: curr.icon }];
            }, [])
            .map((cat) => (
              <button
                onClick={() => {
                  if (activeFilter === cat.category) {
                    setActiveFilter('All');
                    return;
                  }

                  setActiveFilter(cat.category);
                }}
                className={cn(
                  'transition-colors border border-solid border-[#33415566] text-[#64748B] rounded-full px-3 py-1 flex items-center gap-2',
                  { 'bg-primary-50': activeFilter === cat.category },
                  { 'text-black': activeFilter === cat.category },
                  { 'border-primary-300': activeFilter === cat.category },
                  { 'border-primary-300': activeFilter === cat.category },
                  { 'font-medium': activeFilter === cat.category }
                )}
              >
                {cat.icon}
                <span className="inline-flex">{cat.category}</span>
              </button>
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14 my-12 md:px-20">
          {data
            .filter((x) => (activeFilter === 'All' ? true : x.category === activeFilter))
            .map((d) => (
              <a
                href={d.callToActionUrl}
                target="_blank"
                className="border border-solid border-slate-300 rounded-3xl text-center py-4 px-8 flex flex-col items-center shadow-secondaryShadow border-t-2 border-x-2"
              >
                <h4 className="text-[28px] font-medium text-xl">{d.name}</h4>
                <img className="my-6 max-w-40 h-full object-contain" src={d.thumbnailUrl} />
                <p className="text-[#64748B] mb-2 text-sm" title={d.callToAction}>
                  {d.callToAction}
                </p>
                <div className="border border-solid border-[#33415566] text-[#64748B] rounded-full px-3 py-1 flex items-center gap-2">
                  {d.icon}
                  <span className="inline-flex">{d.category}</span>
                </div>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverDAppsSection;
