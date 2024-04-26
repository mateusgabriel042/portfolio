import React from 'react';
import dynamic from 'next/dynamic';
import Styles from './style.module.css';

const DynamicChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Props {
  percentage: any;
  size: any;
}

const ChartStackedBarSkill = (props: any) => {
  const options: any = {
    chart: {
      type: 'bar',
      stacked: true,
      stackType: '100%',
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
      padding: {
        left: -15,
        right: 0,
        top: -40,
        bottom: -40,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
      show: false,
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
      show: false,
    },
    colors: ['#38bdf8', '#e8e8e8'],
    markers: {
      show: false,
    },
    labels: {
      show: false,
    },
    legend: {
      show: false,
    },
  };

  const series = [
    {
      data: [props.percentage],
    },
    {
      data: [100 - props.percentage],
    }
  ]
  return (
    <div className={`relative w-full h-[${props.size}px]`}>
      <label className='text-[16px] text-gray-500 font-bold'>{props.label}</label>
      <span className={`absolute bg-black text-white rounded-full px-2 py-1 text-xs ${Styles['left_'+props.percentage]}`}>{props.percentage}%</span>
      <div className='w-full mt-1'>
        <DynamicChart options={options} series={series} type="bar" height={props.size} />
      </div>
    </div>
  );
};

export default ChartStackedBarSkill;