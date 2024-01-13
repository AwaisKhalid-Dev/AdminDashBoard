import React from 'react'
import ReactEcharts from 'echarts-for-react';
import Data from '../../../assets/DataJsons/PieGraphData.json';
export default function index() {

  return (
    <>
    <div className='bg-white mt-2'>
      <ReactEcharts option={Data} />;
      </div>
    </>
  );
}