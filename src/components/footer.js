import React from 'react';
import styled from '@emotion/styled';

import { footer } from '../constants/content';

import mq from '../utils/mediaQueries';

const { footerMq } = mq.config;

const Container = styled('div')({
  width: '100%',
  textAlign: 'center'
});

const Content = styled('p')(({ theme }) =>
  mq({
    padding: '2em 0',
    fontFamily: 'Fira Code',
    fontSize: footerMq,
    color: theme.footerContentColor
  }));

const Footer = () => (
  <Container>
    <Content>{footer}</Content>
  </Container>
);

export default Footer;
