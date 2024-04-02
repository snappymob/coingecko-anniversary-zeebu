import LineChart, { LineChartProps } from '../LineChart';

type DataCampaignGraphProps = {
  symbol: string;
  value: number;
  difference: number;
  volume: number;
};

const DataCampaignGraph = ({
  symbol,
  value,
  difference,
  volume,
  canvasId,
  borderColor,
  fillColor,
  graphPoints,
}: DataCampaignGraphProps & LineChartProps) => {
  return (
    <div className="border border-solid border-slate-300 border-x-2 border-t-2 shadow-secondaryShadow rounded-lg p-4">
      <div className="flex justify-between">
        <div>
          <div className="text-2xl font-medium mb-3">{symbol}</div>
          <div className="text-[28px] font-semibold">
            ${value}
            <span className="ml-4 text-lg font-normal text-[#b7b7b7]">({difference}%)</span>
          </div>
        </div>
        <div className="text-[#64748B]">Vol: {volume.toLocaleString(undefined)}</div>
      </div>
      <div>
        <LineChart canvasId={canvasId} borderColor={borderColor} fillColor={fillColor} graphPoints={graphPoints} />
      </div>
      <div className="flex justify-between text-[#b7b7b7]">
        <div>1 month ago</div>
        <div>Today</div>
      </div>
    </div>
  );
};

export default DataCampaignGraph;
