import React from 'react';
import Page from 'views/Page';

const heroProps = {
  title: 'O nas',
  description: 'Kim jesteśmy?',
  backgroundImageURL: 'https://assets.maccarianagency.com/backgrounds/img52.jpg'
};
const sectionsProps = [
  {
    title: '<a href="about/activities">Aktywności</a>',
    content: '<a href="about/activities">Zobacz nasze aktywności</a>.'
  }, {
    title: '<a href="about/contact">Kontakt</a>',
    content: '<a href="about/contact">Skontaktuj się z nami</a>.'
  }, {
    title: '<a href="about/mission">Misja</a>',
    content: '<a href="about/mission">Zobacz naszą misję</a>.'
  }, {
    title: '<a href="about/partners">Partnerzy</a>',
    content: '<a href="about/partners">Zobacz jakich mamy partnerów</a>.'
  }, {
    title: '<a href="about/support">Wsparcie</a>',
    content: '<a href="about/support">Zobacz jak możesz nas wesprzeć</a>.'
  }, {
    title: '<a href="about/team">Zespół</a>',
    content: '<a href="about/team">Zobacz nasz zespół</a>.'
  }, {
    title: '<a href="about/testimonies">Świadectwa</a>',
    content: '<a href="about/testimonies">Poznaj nasz świadectwa</a>.'
  }
];

const AboutPage = (): JSX.Element => {
  return (
    <Page heroProps={heroProps}
      sectionsProps={sectionsProps}/>
  );
};

export default AboutPage;
