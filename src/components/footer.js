import React from 'react';
import styled from '@emotion/styled';

import { footer } from '../constants/content';

const Container = styled('div')({
  width: '100%',
  textAlign: 'center'
});

const Content = styled('p')(({ theme }) => ({
  padding: '2em 0',
  fontSize: '1rem',
  fontFamily: 'Fira Code',
  color: theme.footerContentColor
}));

const Footer = () => (
  <Container>
    <Content>{footer}</Content>
  </Container>
);

export default Footer;
