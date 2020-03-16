import React from 'react';
import styled from '@emotion/styled';

import Text from './text';

import mq from '../utils/mediaQueries';

import { navLinks } from '../constants/content';

const { navMq } = mq.config;

const Divider = styled('div')(({ theme }) =>
  mq({
    width: 2,
    margin: '0 2em',
    height: navMq.divider,
    backgroundColor: theme.dividerColor
  }));

const Container = styled('div')(() =>
  mq({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: navMq.container
  }));

const NavLink = styled(Text.a)(() =>
  mq({
    fontSize: navMq.link
  }));

const Nav = () => {
  const [work, projects, contact] = navLinks;
  return (
    <Container>
      <NavLink href={work.url}>{work.name}</NavLink>
      <Divider />
      <NavLink href={projects.url}>{projects.name}</NavLink>
      <Divider />
      <NavLink href={contact.url}>{contact.name}</NavLink>
    </Container>
  );
};

export default Nav;
