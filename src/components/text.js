import styled from '@emotion/styled';

import mq from '../utils/mediaQueries';

const { textMq } = mq.config;

const h1 = styled('h1')({
  lineHeight: 1
});

const h2 = styled('h2')({
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

const Text = {
  h1,
  h2,
  h3,
  h4,
  p,
  a
};

export default Text;
