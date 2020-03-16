import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import { ReactComponent as TechSvg } from '../assets/images/tech.svg';

import {
 Button, Nav, Section, Text 
} from '../components';

import { sr, srOptions } from '../utils/scrollReveal';
import mq from '../utils/mediaQueries';

import { about } from '../constants/content';

const { aboutMq } = mq.config;

const FlexContainer = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
});

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
    flex: 1,
    width: '100%',
    marginTop: '3em',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: aboutMq.techContainer
  }));

const Tech = styled(TechSvg)(() =>
  mq({
    width: aboutMq.techWidth,
    height: aboutMq.techHeight,
    viewBox: about.techViewBox
  }));

const About = () => {
  useEffect(() => {
    sr.reveal('#aboutHeader', srOptions(0));
    sr.reveal('#aboutSubHeader', srOptions(500));
    sr.reveal('#aboutIntro', srOptions(1000));
    sr.reveal('#aboutResume', srOptions(1100));
  }, []);

  return (
    <Section primary top id="about" className="about">
      <FlexContainer>
        <Nav />
        <Content>
          <Header id="aboutHeader">{about.header}</Header>
          <SubHeader id="aboutSubHeader">{about.subHeader}</SubHeader>
          <Intro large id="aboutIntro">
            {about.intro}
          </Intro>
          <div id="aboutResume">
            <Button onClick={() => alert('To add ASAP :)')}>
              {about.resume}
            </Button>
          </div>
        </Content>
        <TechContainer>
          <Tech />
        </TechContainer>
      </FlexContainer>
    </Section>
  );
};

export default About;
