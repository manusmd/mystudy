import SmallChart from './SmallChart';

export default {
  component: SmallChart,
  title: 'Components/SmallChart',
};

export const Default = () => (
  <SmallChart data={[10, 14, 5]} labels={['male', 'female', 'others']} />
);
