import React from 'react';
import Page from 'views/Page';

const title = 'O nas';
const description = 'Kim jesteśmy?';
const backgroundImageURL = 'https://assets.maccarianagency.com/backgrounds/img52.jpg';
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

const About = (): JSX.Element => {
  return (
    <Page title={title}
      description={description}
      backgroundImageURL={backgroundImageURL}
      sectionsProps={sectionsProps}/>
  );
};

export default About;
