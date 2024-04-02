import { render } from 'react-dom';
import CandyCampaignSection from './sections/CandyCampaignSection';
import CompaniesSection from './sections/CompaniesSection';
import DataCampaignSection from './sections/DataCampaignSection';
import DiscoverDAppsSection from './sections/DiscoverDAppsSection';
import FooterSection from './sections/FooterSection';
import HeaderSection from './sections/HeaderSection';
import HeroSection from './sections/HeroSection';
import KnowledgeHubSection from './sections/KnowledgeHubSection';
import SponsoredVideoSection from './sections/SponsoredVideoSection';
import SubHeroSection from './sections/SubHeroSection';
import SweepstakesSection from './sections/SweepstakesSection';

const App = () => {
  return (
    <>
      <HeaderSection />
      <main>
        <HeroSection />
        <CandyCampaignSection />
        <KnowledgeHubSection />
        <SponsoredVideoSection
          pt={{ className: 'pb-14', id: 'resources' }}
          title="What is Zeebu?"
          videoUrl="https://www.youtube.com/embed/9wTyVKzXVm0?si=2gNwE7L6F6p5loSO"
          callToActionUrl="https://www.zeebu.com/"
        >
          Zeebu is a Web3 NeoBank for telecoms, creating a unified payment ecosystem focused on streamlining the
          settlement experience of telecom carriers.
        </SponsoredVideoSection>
        <SponsoredVideoSection
          title="Introduction to Zeebu"
          videoUrl="https://www.youtube.com/embed/pPJdZCFHORk?si=0MpECXZIS0Ti-IZF"
          callToActionUrl="https://landing.coingecko.com/earn/what-is-zeebu/"
          videoSide="right"
          pt={{ className: 'pt-14' }}
        >
          This is the first lesson of four lessons in the CoinGecko Learn & Earn series. This video explains the
          fundamentals of the Zeebu ecosystem, showcasing the unique application of blockchain payments within the
          telecommunications market. It covers the PSP, Token, and smart contracts that allow near instant settlement
          and loyalty for stakeholders.
          <span className="block font-semibold mt-6">
            Note: The Learn & Earn campaign for Zeebu is over but you can still learn more about Zeebu on CoinGecko!
          </span>
        </SponsoredVideoSection>
        <DiscoverDAppsSection />
        <SubHeroSection />
      </main>
      <FooterSection />
    </>
  );
};

document.documentElement.classList.add('scroll-smooth');

render(<App />, document.getElementById('app'));
