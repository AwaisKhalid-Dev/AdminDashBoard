import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const EChartsComponent = () => {
  const chartRef = useRef(null); // This ref will point to the div where the chart will be rendered
  const myChart = useRef(null); // This ref will store the chart instance

  // The chart configuration
  const getOption = () => ({
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland']
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar', 'stack'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    xAxis: [{
      type: 'category',
      axisTick: { show: false },
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    }],
    yAxis: [{
      type: 'value'
    }],
    series: [
      {
        name: 'Zone1',
        type: 'bar',
        barGap: 0,
        label: {
          show: true,
          position: 'insideBottom',
          distance: 15,
          align: 'left',
          verticalAlign: 'middle',
          rotate: 90,
          formatter: '{c}  {name|{a}}',
          fontSize: 16,
          rich: { name: {} }
        },
        emphasis: { focus: 'series' },
        data: [150, 200, 301, 334, 390]
      },
      {
        name: 'Zone2',
        type: 'bar',
        barGap: 0,
        label: {
          show: true,
          position: 'insideBottom',
          distance: 15,
          align: 'left',
          verticalAlign: 'middle',
          rotate: 90,
          formatter: '{c}  {name|{a}}',
          fontSize: 16,
          rich: { name: {} }
        },
        emphasis: { focus: 'series' },
        data: [300, 300, 180, 130, 270]
      },

      {
        name: 'Zone3',
        type: 'bar',
        barGap: 0,
        label: {
          show: true,
          position: 'insideBottom',
          distance: 15,
          align: 'left',
          verticalAlign: 'middle',
          rotate: 90,
          formatter: '{c}  {name|{a}}',
          fontSize: 16,
          rich: { name: {} }
        },
        emphasis: { focus: 'series' },
        data: [350, 240, 144, 300, 130]
      },

    
      // Repeat for other series...
    ]
  });

  useEffect(() => {
    // Initialize chart
    myChart.current = echarts.init(chartRef.current, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    myChart.current.setOption(getOption());

    // Make chart responsive
    const resizeListener = () => {
      myChart.current.resize();
    };
    window.addEventListener('resize', resizeListener);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeListener);
      myChart.current.dispose(); // Dispose chart instance on component unmount
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default EChartsComponent;
