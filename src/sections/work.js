import React from 'react';

import { Section, Text } from '../components';

import { work } from '../constants/content';

const Work = () => (
  <Section id="work">
    <Text.h3>{work.header}</Text.h3>
  </Section>
);

export default Work;
