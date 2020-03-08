import React from 'react';
import styled from '@emotion/styled';

import { ReactComponent as TechSvg } from '../assets/images/tech.svg';
import { Nav, Section, Text } from '../components';

import { about } from '../constants/content';

const Content = styled('div')({
  marginTop: '2em',
  width: '60%'
});

const SubHeader = styled(Text.h2)(({ theme }) => ({
  color: theme.aboutSubHeaderColor
}));

const Intro = styled(Text.p)(({ theme }) => ({
  marginTop: '1em',
  color: theme.aboutIntroColor
}));

const TechContainer = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end'
});

const Tech = styled(TechSvg)({
  height: 350,
  width: 372,
  viewBox: '0 0 372 350'
});

const About = () => (
  <Section primary top id="about">
    <Nav />
    <Content>
      <Text.h1>{about.header}</Text.h1>
      <SubHeader>{about.subHeader}</SubHeader>
      <Intro large>{about.intro}</Intro>
    </Content>
    <TechContainer>
      <Tech />
    </TechContainer>
  </Section>
);

export default About;
