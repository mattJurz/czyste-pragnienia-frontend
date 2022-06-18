import React from 'react';
import Main from 'layouts/Main';
import {
  Hero,
  Section
} from './components';

import { Props as SectionProps } from './components/Section/Section';

interface Props {
  title: string,
  description: string,
  backgroundImageURL: string,
  sectionsProps: SectionProps[]
}

const About = ({title, description, backgroundImageURL, sectionsProps}: Props): JSX.Element => {
  return (
    <Main colorInvert={true}>
      <Hero title={title}
        description={description}
        backgroundImageURL={backgroundImageURL}/>
      {sectionsProps.map((sectionProps, index) =>
        <Section key={index}
          {...sectionProps}/>
      )}
    </Main>
  );
};

export default About;
