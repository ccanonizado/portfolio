import React from 'react';
import styled from '@emotion/styled';

import {
 Container, List, Section, Text 
} from '../components';

import { projects } from '../constants/content';

const Dependencies = styled('ul')({
  listStyleType: 'none',
  li: {
    display: 'inline-block',
    ':not(:last-child)': {
      marginRight: '3em'
    }
  }
});

const Description = styled('div')(({ theme }) => ({
  padding: '2em',
  width: 'calc(100% - 6em)',
  margin: '0.5em 0 1.5em',
  borderRadius: 20,
  backgroundColor: theme.projectsDescriptionBgColor
}));

const Content = styled('div')({
  width: '100%',
  display: 'flex'
});

const Detail = styled('div')({
  width: '45%'
});

const Image = styled('div')({
  width: '55%',
  height: 300,
  marginBottom: '2em',
  backgroundColor: 'white'
});

Content.Detail = Detail;
Content.Image = Image;

const Projects = () => {
  const getDependencies = (list) => (
    <Dependencies>
      {list.map((dependency) => (
        <li>
          <Text.h4 firaCode>{dependency}</Text.h4>
        </li>
      ))}
    </Dependencies>
  );

  return (
    <Section primary id="projects">
      <Text.h3>{projects.header}</Text.h3>
      <Container>
        <List>
          {projects.content.map((entry) => (
            <li>
              <article>
                <Content>
                  <Content.Detail>
                    <Text.h4>{entry.title}</Text.h4>
                    <Description>
                      <Text.p>{entry.description}</Text.p>
                    </Description>
                    {getDependencies(entry.dependencies)}
                  </Content.Detail>
                  <Content.Image />
                </Content>
              </article>
            </li>
          ))}
        </List>
      </Container>
    </Section>
  );
};

export default Projects;
