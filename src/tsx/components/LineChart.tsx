import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

export type LineChartProps = {
  canvasId: string;
  borderColor: string;
  fillColor: string;
  graphPoints?: number;
};

const LineChart = ({ borderColor, canvasId, fillColor, graphPoints = 8 }: LineChartProps) => {
  const chartRef = useRef<Chart>();

  useEffect(() => {
    if (canvasId == null) return;

    const ctx = (document.getElementById(canvasId) as HTMLCanvasElement | null)?.getContext('2d');

    if (ctx == null) return;

    const gradient = ctx.createLinearGradient(0, 50, 0, 250);
    gradient.addColorStop(0, fillColor);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [...Array.from({ length: graphPoints }).map((i) => '')],
        datasets: [
          {
            data: [...Array.from({ length: graphPoints }).map((i) => Math.round(Math.random() * (60 - 50)) + 50)],
            fill: true,
            borderColor,
            tension: 0.4,
            borderWidth: 1,
            backgroundColor: gradient,
            pointRadius: 0,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              display: false, // Hides x-axis labels
            },
            border: {
              display: false,
            },
          },
          y: {
            grid: { display: false },
            ticks: {
              display: false, // Hides y-axis labels
            },
            border: {
              display: false,
            },
          },
        },
      },
    });
  }, [borderColor, canvasId, fillColor]);

  return <canvas id={canvasId}></canvas>;
};

export default LineChart;
