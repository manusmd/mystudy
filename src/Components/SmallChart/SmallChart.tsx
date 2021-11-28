import Chart from 'react-apexcharts';
import styles from './SmallChart.module.css';

type smallChartProps = {
  label: 'teachers' | 'students';
  data: number[];
  labels: string[];
};

export default function SmallChart({ label, data, labels }: smallChartProps) {
  const chartProps = {
    options: {
      labels: [...labels],
      legend: {
        position: 'bottom',
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

      plotOptions: {
        pie: {
          customScale: 1.2,
          expandOnClick: false,
          offsetY: 30,
          donut: {
            size: '60%',
            labels: {
              show: true,
              value: { fontSize: '1rem' },
              total: {
                show: true,
                showAlways: true,
                fontSize: '1rem',
                label: `${label}`,
              },
            },
          },
        },
      },
    },
    series: [...data],
  };

  return (
    <div className={styles.container}>
      <Chart
        options={chartProps.options}
        series={chartProps.series}
        type="donut"
        width="100%"
        height="100%"
      />
    </div>
  );
}
