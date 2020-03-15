import React from 'react';
import styled from '@emotion/styled';

import { List, Section, Text } from '../components';

import { work } from '../constants/content';

const ItemsContainer = styled('div')({
  marginTop: '4em',
  display: 'flex',
  justifyContent: 'space-between'
});

const ListItem = styled('li')({
  width: '30%',
  'h4:nth-of-type(2)': {
    margin: '0.2em 0 1em'
  }
});

const Work = () => (
  <Section id="work">
    <Text.h3>{work.header}</Text.h3>
    <List>
      <ItemsContainer>
        {work.content.map((entry) => (
          <ListItem key={entry.title}>
            <article>
              <Text.h4>{entry.title}</Text.h4>
              <Text.h4 firaCode>{entry.subTitle}</Text.h4>
              <Text.p>{entry.description}</Text.p>
            </article>
          </ListItem>
        ))}
      </ItemsContainer>
    </List>
  </Section>
);

export default Work;
