import React from 'react';
import styled from '@emotion/styled';

const h1 = styled('h1')({
  fontSize: '3.6rem'
});

const h2 = styled('h2')({
  fontSize: '2.4rem'
});

const h3 = styled('h3')({
  fontSize: '2rem'
});

const h4 = styled('h4')(({ theme, firaCode }) => ({
  fontWeight: 'normal',
  fontSize: firaCode ? '1.15rem' : '1.4rem',
  fontFamily: firaCode ? 'Fira Code' : 'Nunito',
  color: firaCode ? theme.smallHeaderGray : theme.smallHeaderCyan
}));

const p = styled('p')(({ large }) => ({
  fontSize: large ? '1.4rem' : '1.1rem',
  whiteSpace: 'pre-wrap'
}));

const a = styled('a')(({ theme }) => ({
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
Text.h4 = h4;
Text.a = a;
Text.p = p;

export default Text;
