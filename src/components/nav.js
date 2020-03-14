import React from 'react';
import styled from '@emotion/styled';

import Text from './text';

import { navLinks } from '../constants/content';

const Divider = styled('div')(({ theme }) => ({
  width: 1.5,
  height: '1.6rem',
  margin: '0 2em',
  backgroundColor: theme.dividerColor
}));

const Container = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
});

const Nav = () => {
  const [work, projects, contact] = navLinks;
  return (
    <Container>
      <Text.a href={work.url}>{work.name}</Text.a>
      <Divider />
      <Text.a href={projects.url}>{projects.name}</Text.a>
      <Divider />
      <Text.a href={contact.url}>{contact.name}</Text.a>
    </Container>
  );
};

export default Nav;
