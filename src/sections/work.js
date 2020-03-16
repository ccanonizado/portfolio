import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import { List, Section, Text } from '../components';

import { sr, srOptions } from '../utils/scrollReveal';
import mq from '../utils/mediaQueries';

import { work } from '../constants/content';

const { workMq } = mq.config;

const ItemsContainer = styled('div')(() =>
  mq({
    marginTop: '4em',
    display: 'flex',
    flexDirection: workMq.containerDirection,
    justifyContent: workMq.containerJustify
  }));

const ListItem = styled('li')(() =>
  mq({
    display: 'block',
    width: workMq.itemWidth,
    'h4:nth-of-type(2)': {
      margin: '0.2em 0 1em'
    },
    ':nth-of-type(2)': {
      margin: workMq.itemMargin
    }
  }));

const Work = () => {
  useEffect(() => {
    sr.reveal('#workEntries', srOptions(500));
  }, []);

  return (
    <Section id="work">
      <Text.h3 id="workHeader">{work.header}</Text.h3>
      <List>
        <ItemsContainer id="workEntries">
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
};

export default Work;
