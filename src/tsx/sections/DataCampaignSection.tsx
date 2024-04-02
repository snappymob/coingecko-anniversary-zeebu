import PrimaryButton from '../components/PrimaryButton';
import DataCampaignGraph from '../components/data-campaign/DataCampaignGraph';

const DataCampaignSection = () => {
  return (
    <section className="bg-white py-28">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 lg:text-start text-center">
          <h3 className="font-semibold text-4xl mb-5">Data Campaign</h3>
          <div className="text-lg text-[#64748B] leading-[21.6px]">
            Explore the latest market insights, in-depth analysis, and educational content designed to empower your
            understanding of cryptocurrencies and trading.
          </div>
          <PrimaryButton
            label="View More"
            buttonPt={{ className: 'mt-12 py-4 px-6 hidden lg:inline-block' }}
            innerPt={{ className: 'text-2xl' }}
          />
        </div>
        <DataCampaignGraph
          symbol="LTC-USD"
          value={67.84}
          difference={-0.31}
          volume={140181.89}
          canvasId="data-campaign-chart-1"
          borderColor="rgba(218, 189, 11, 1)"
          fillColor="rgba(249, 233, 136, 0.2)"
        />
        <DataCampaignGraph
          symbol="LTC-USD"
          value={67.84}
          difference={-0.31}
          volume={140181.89}
          canvasId="data-campaign-chart-2"
          borderColor="rgba(52, 175, 0, 1)"
          fillColor="rgba(75, 204, 0, 0.2)"
        />
        <PrimaryButton
          label="View More"
          buttonPt={{ className: 'md:col-span-2 mt-12 py-4 px-6 w-max mx-auto lg:hidden' }}
          innerPt={{ className: 'text-2xl' }}
        />
      </div>
    </section>
  );
};

export default DataCampaignSection;
