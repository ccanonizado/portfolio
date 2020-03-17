import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import {
 GitHub, List, Section, Text 
} from '../components';

import { sr, srOptions } from '../utils/scrollReveal';
import mq from '../utils/mediaQueries';

import { projects } from '../constants/content';

const { projectsMq } = mq.config;

const Info = styled(Text.p)(({ theme }) =>
  mq({
    margin: '0.5em 0',
    color: theme.projectsInfoColor,
    width: projectsMq.info
  }));

const Header = styled('div')({
  display: 'flex',
  alignItems: 'flex-end'
});

const Description = styled('div')(({ theme }) =>
  mq({
    borderRadius: 16,
    margin: '0.5em 0 1.5em',
    backgroundColor: theme.projectsDescriptionBgColor,
    padding: projectsMq.descriptionPadding,
    width: projectsMq.descriptionWidth
  }));

const Dependencies = styled('ul')({
  marginBottom: '1.5em',
  listStyleType: 'none',
  li: {
    display: 'inline-block',
    ':not(:last-child)': {
      marginRight: '3em'
    }
  }
});

const Content = styled('div')(() =>
  mq({
    marginTop: '5em',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: projectsMq.contentJustify,
    flexDirection: projectsMq.contentDirection
  }));

const Detail = styled('div')(() =>
  mq({
    display: 'flex',
    flexDirection: 'column',
    width: projectsMq.contentDetail
  }));

const ImageContainer = styled('div')(({ theme }) =>
  mq({
    color: theme.projectsImageBgColor,
    width: projectsMq.contentImage
  }));

const Image = styled('img')(() =>
  mq({
    width: '100%'
  }));

Content.Detail = Detail;
Content.Image = Image;

const Projects = () => {
  useEffect(() => {
    sr.reveal('#projectsHeader', srOptions(0));
    sr.reveal('#projectsInfo', srOptions(200));
    sr.reveal('#projectsEntry0', srOptions(500));
    sr.reveal('#projectsEntry1', srOptions(500));
    sr.reveal('#projectsEntry2', srOptions(500));
  }, []);

  const getDependencies = (list) => (
    <Dependencies>
      {list.map((dependency) => (
        <li key={dependency}>
          <Text.h4 firaCode>{dependency}</Text.h4>
        </li>
      ))}
    </Dependencies>
  );

  return (
    <Section primary id="projects">
      <Text.h3 id="projectsHeader">{projects.header}</Text.h3>
      <Info id="projectsInfo">{projects.info}</Info>
      <List>
        {projects.content.map((entry, index) => (
          <li key={entry.title} id={`projectsEntry${index}`}>
            <article>
              <Content>
                <Content.Detail>
                  <Header>
                    <Text.h4>{entry.title}</Text.h4>
                    {entry.github ? (
                      <GitHub title={entry.title} url={entry.github} />
                    ) : (
                      ''
                    )}
                  </Header>
                  <Description>
                    <Text.p>{entry.description}</Text.p>
                  </Description>
                  {getDependencies(entry.dependencies)}
                </Content.Detail>
                <ImageContainer>
                  <Content.Image alt={entry.title} src={entry.image} />
                </ImageContainer>
              </Content>
            </article>
          </li>
        ))}
      </List>
    </Section>
  );
};

export default Projects;
