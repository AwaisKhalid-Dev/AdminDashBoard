import React from 'react'
import ReactEcharts from 'echarts-for-react';
import Data from '../../../assets/DataJsons/LineGraphData.json';
export default function index() {

    const graph1 = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [80, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      };
    
   


  return (
    <>
    <div className='bg-white mt-2'>
      <ReactEcharts option={graph1} />;
      
      </div>
    </>
  );
}