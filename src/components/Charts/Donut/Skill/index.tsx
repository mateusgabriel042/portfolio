import React from 'react';
import dynamic from 'next/dynamic';
import { SkillIconSelector } from '../../../../data/skills'; 

const DynamicChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Props {
  iconName: any;
  iconSize: number;
  width: number;
  height: number;
  percentage: any;
}

const ChartSkill = (props: any) => {
  const options: any = {
    labels: ['porcentagem', 'porcentagem'],
    colors: ['#03a6b0', '#e8e8e8'],
    legend: {
      show: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: true,
        donut: {
          size: '89%',
        },
      },
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    responsive: [
      {
        options: {
          chart: {},
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };
  const series = [props.percentage, 100 - props.percentage];

  return (
    <div className={`relative w-[${props.width}px] h-[${props.height}px]`}>
      <DynamicChart options={options} series={series} type="donut" height={props.height} />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400'>
        <SkillIconSelector iconName={props.iconName} size={props.iconSize} />
      </div>
    </div>
  );
};

export default ChartSkill;