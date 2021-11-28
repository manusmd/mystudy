import SmallChart from './SmallChart';

export default {
  component: SmallChart,
  title: 'Components/SmallChart',
};

export const Default = () => (
  <SmallChart label="students" data={[3, 7]} labels={['a', 'b']} />
);
