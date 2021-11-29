import ApexCharts from 'apexcharts';
import React, { useEffect, useRef } from 'react';
import styles from './SmallChart.module.css';

type smallChartProps = {
  chartTitle?: string;
  label: 'teachers' | 'students';
  data: number[];
  labels: string[];
};

export default function SmallChart({
  chartTitle,
  label,
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
              show: true,
              value: {
                offsetY: -10,
                fontSize: '40%',
              },
              total: {
                show: true,
                showAlways: true,
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
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.chartTitle}>{chartTitle}</h3>
      <div className={styles.chart} ref={chartsRef}></div>
    </div>
  );
}
