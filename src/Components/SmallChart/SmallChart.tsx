import ApexCharts from 'apexcharts';
import React, { useEffect, useRef } from 'react';
import styles from './SmallChart.module.css';

type smallChartProps = {
  chartTitle?: string;
  data: number[];
  labels: string[];
};

export default function SmallChart({
  chartTitle,
  data,
  labels,
}: smallChartProps) {
  const chartsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartsRef.current) {
      return;
    }
    const chartProps = {
      labels: [...labels],
      legend: {
        position: 'bottom' as const,
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '0.5rem',
        },

        dropShadow: {
          enabled: false,
        },
      },
      chart: {
        type: 'pie',
        width: '90%',
        height: '90%',
      },
      plotOptions: {
        pie: {
          customScale: 1.2,
          expandOnClick: false,
          offsetY: 30,
        },
      },
      series: [...data],
    };

    const chart = new ApexCharts(chartsRef.current, chartProps);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, [labels, data]);

  return (
    <div className={styles.container}>
      <span className={styles.chartTitle}>{chartTitle}</span>
      {chartsRef && <div className={styles.chart} ref={chartsRef}></div>}
    </div>
  );
}
