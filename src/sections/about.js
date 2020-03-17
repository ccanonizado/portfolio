import React from 'react';
import styled from '@emotion/styled';

import { ReactComponent as TechSvg } from '../assets/images/tech.svg';
import resumePdf from '../assets/resume.pdf';

import {
 Button, Nav, Section, Text 
} from '../components';

import mq from '../utils/mediaQueries';

import { about } from '../constants/content';

const { aboutMq } = mq.config;

const Content = styled('div')(() =>
  mq({
    marginTop: '2.5em',
    width: aboutMq.content
  }));

const Header = styled(Text.h1)(() =>
  mq({
    fontSize: aboutMq.header
  }));

const SubHeader = styled(Text.h2)(({ theme }) =>
  mq({
    color: theme.aboutSubHeaderColor,
    fontSize: aboutMq.subHeader
  }));

const Intro = styled(Text.p)(({ theme }) =>
  mq({
    margin: '0.8em 0',
    color: theme.aboutIntroColor,
    fontSize: aboutMq.intro
  }));

const TechContainer = styled('div')(() =>
  mq({
    marginTop: '3em',
    width: '100%',
    display: 'flex',
    justifyContent: aboutMq.techContainer
  }));

const Tech = styled(TechSvg)(() =>
  mq({
    width: aboutMq.techWidth,
    height: aboutMq.techHeight,
    viewBox: about.techViewBox
  }));

const About = () => (
  <Section primary top id="about" className="about">
    <Nav />
    <Content>
      <Header id="aboutHeader">{about.header}</Header>
      <SubHeader id="aboutSubHeader">{about.subHeader}</SubHeader>
      <Intro large id="aboutIntro">
        {about.intro}
      </Intro>
      <div id="aboutResume">
        <a href={resumePdf} download="Carlos_Canonizado_Resume">
          <i role="button" aria-label={about.resume}>
            <Button>{about.resume}</Button>
          </i>
        </a>
      </div>
    </Content>
    <TechContainer>
      <Tech />
    </TechContainer>
  </Section>
);
export default About;
