import React from 'react';
import Main from 'layouts/Main';
import {
  Hero,
  Section
} from './components';

import { Props as HeroProps } from './components/Hero/Hero';
import { Props as SectionProps } from './components/Section/Section';

interface Props {
  heroProps?: HeroProps,
  sectionsProps: SectionProps[]
}

const Page = ({heroProps, sectionsProps}: Props): JSX.Element => {
  return (
    <Main colorInvert={true}>
      {heroProps && <Hero {...heroProps}/>}
      {sectionsProps.map((sectionProps, index) =>
        <Section key={index}
          {...sectionProps}/>
      )}
    </Main>
  );
};

export default Page;
