import React from 'react';
import styled from '@emotion/styled';

import mq from '../utils/mediaQueries';

const { textMq } = mq.config;

const h1 = styled('h1')({
  fontSize: '4.8rem',
  lineHeight: 1
});

const h2 = styled('h2')({
  fontSize: '4.2rem',
  lineHeight: 1
});

const h3 = styled('h3')(() =>
  mq({
    fontSize: textMq.h3
  }));

const h4 = styled('h4')(({ theme, firaCode }) =>
  mq({
    fontWeight: 'normal',
    fontFamily: firaCode ? 'Fira Code' : 'Nunito',
    fontSize: firaCode ? textMq.h4FiraCode : textMq.h4Nunito,
    color: firaCode ? theme.smallHeaderGray : theme.smallHeaderCyan
  }));

const p = styled('p')(() =>
  mq({
    fontSize: textMq.p,
    whiteSpace: 'pre-wrap'
  }));

const a = styled('a')(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '1.8rem',
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
