import React from 'react';
import styled from '@emotion/styled';

import { List, Section, Text } from '../components';

import komunidadImg from '../assets/images/komunidad.jpg';
import signMeUpImg from '../assets/images/signMeUp.jpg';
import superSmashBrosImg from '../assets/images/superSmashBros.jpg';

import { projects } from '../constants/content';

const Info = styled(Text.p)(({ theme }) => ({
  width: '50%',
  margin: '0.5em 0',
  color: theme.projectsInfoColor
}));

const Description = styled('div')(({ theme }) => ({
  padding: '3em',
  width: '95%',
  margin: '0.5em 0 1.5em',
  borderRadius: 20,
  backgroundColor: theme.projectsDescriptionBgColor
}));

const Dependencies = styled('ul')({
  listStyleType: 'none',
  li: {
    display: 'inline-block',
    ':not(:last-child)': {
      marginRight: '3em'
    }
  }
});

const Content = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
});

const Detail = styled('div')({
  width: '45%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
});

const Image = styled('img')({
  width: '50%',
  marginBottom: '2em'
});

Content.Detail = Detail;
Content.Image = Image;

const Projects = () => {
  const getImage = (title) => {
    const [komunidad, signMeUp, superSmashBros] = projects.content;
    switch (title) {
      case komunidad.title:
        return komunidadImg;
      case signMeUp.title:
        return signMeUpImg;
      case superSmashBros.title:
        return superSmashBrosImg;
      default:
        break;
    }
    return '';
  };

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
      <Text.h3>{projects.header}</Text.h3>
      <Info>{projects.info}</Info>
      <List>
        {projects.content.map((entry) => (
          <li key={entry.title}>
            <article>
              <Content>
                <Content.Detail>
                  <Text.h4>{entry.title}</Text.h4>
                  <Description>
                    <Text.p>{entry.description}</Text.p>
                  </Description>
                  {getDependencies(entry.dependencies)}
                </Content.Detail>
                <Content.Image alt={entry.title} src={getImage(entry.title)} />
              </Content>
            </article>
          </li>
        ))}
      </List>
    </Section>
  );
};

export default Projects;
