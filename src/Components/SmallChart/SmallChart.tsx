import ApexCharts from 'apexcharts';
import React, { useEffect, useRef } from 'react';
import styles from './SmallChart.module.css';

type smallChartProps = {
  chartTitle?: string;
  label: 'teachers' | 'students';
  data: number[];
  labels: string[];
  showTotal: boolean;
};

export default function SmallChart({
  chartTitle,
  label,
  data,
  labels,
  showTotal,
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
        redrawOnWindowResize: true,
        type: 'donut',
        width: '100%',
        height: '100%',
      },
      plotOptions: {
        pie: {
          customScale: 1.2,
          expandOnClick: false,
          offsetY: 30,
          donut: {
            size: '60%',
            labels: {
              show: false,
              value: {
                offsetY: -10,
                fontSize: '40%',
              },
              total: {
                show: showTotal,
                showAlways: showTotal,
                fontSize: '50%',
                label: `${label}`,
              },
            },
          },
        },
      },
      series: [...data],
    };

    const chart = new ApexCharts(chartsRef.current, chartProps);
    chart.render();
  }, [data]);

  return (
    <div className={styles.container}>
      <h3 className={styles.chartTitle}>{chartTitle}</h3>
      <div className={styles.chart} ref={chartsRef}></div>
    </div>
  );
}
