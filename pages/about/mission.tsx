import React from 'react';
import Page from 'views/Page';

const heroProps = {
  title: 'Misja',
  description: 'Po co działamy?',
  backgroundImageURL: 'https://assets.maccarianagency.com/backgrounds/img52.jpg'
};
const sectionsProps = [
  {
    title: 'Misja',
    content: 'Lives and relationships are being destroyed by unwanted sexual behavior. At Pure Desire, we offer clinical counseling so that you can break free, heal relationships, and live in sexual health.',
    image: 'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration1.svg'
  },
  {
    title: 'Świadectwa',
    content: 'Lives and relationships are being destroyed by unwanted sexual behavior. At Pure Desire, we offer clinical counseling so that you can break free, heal relationships, and live in sexual health.'
  }
];

const MissionPage = (): JSX.Element => {
  return (
    <Page heroProps={heroProps}
      sectionsProps={sectionsProps}/>
  );
};

export default MissionPage;
