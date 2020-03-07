import React from 'react';
import styled from '@emotion/styled';

const h1 = styled('h1')(({ margin }) => ({
  margin,
  fontSize: '3.6rem'
}));

const h2 = styled('h2')(({ margin }) => ({
  margin,
  fontSize: '2.4rem'
}));

const h3 = styled('h3')(({ margin }) => ({
  margin,
  fontSize: '1.6rem'
}));

const p = styled('p')(({ margin }) => ({
  margin,
  fontSize: '1.4rem'
}));

const a = styled('a')(({ theme, margin }) => ({
  margin,
  cursor: 'pointer',
  fontSize: '1.4rem',
  textDecoration: 'none',
  transition: '0.5s ease all',
  color: theme.linkColor,
  ':hover': {
    color: theme.linkHoverColor
  }
}));

const Text = (children) => <Text.p>{children}</Text.p>;

Text.h1 = h1;
Text.h2 = h2;
Text.h3 = h3;
Text.a = a;
Text.p = p;

export default Text;
