import OverviewSocial from './OverviewSocial';

export default {
  component: OverviewSocial,
  title: 'Pages/OverviewSocial',
};

export const Students = () => <OverviewSocial category={'students'} />;
export const Teachers = () => <OverviewSocial category={'teachers'} />;
