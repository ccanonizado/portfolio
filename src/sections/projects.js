import React from 'react';

import { Section, Text } from '../components';

import { projects } from '../constants/content';

const Projects = () => (
  <Section primary id="projects">
    <Text.h3>{projects.header}</Text.h3>
  </Section>
);

export default Projects;
