import React from 'react';
import styled from '@emotion/styled';

import {
 Container, List, Section, Text 
} from '../components';

import { work } from '../constants/content';

const ListItem = styled('li')({
  'h4:nth-of-type(2)': {
    margin: '0.2em 0 1em'
  },
  p: {
    marginLeft: '2em'
  }
});

const Work = () => (
  <Section id="work">
    <Text.h3>{work.header}</Text.h3>
    <Container>
      <List>
        {work.content.map((entry) => (
          <ListItem>
            <article>
              <Text.h4>{entry.title}</Text.h4>
              <Text.h4 firaCode>{entry.subTitle}</Text.h4>
              <Text.p>{entry.description}</Text.p>
            </article>
          </ListItem>
        ))}
      </List>
    </Container>
  </Section>
);

export default Work;
