import React from 'react';
import styled from '@emotion/styled';

import { ReactComponent as LinkedInSvg } from '../assets/icons/linkedin.svg';

import { contact } from '../constants/content';

const LinkedInButton = styled(LinkedInSvg)(({ theme }) => ({
  cursor: 'pointer',
  marginLeft: 12,
  width: 30,
  height: 30,
  viewBox: '0 0 30 30',
  transition: '0.5s ease all',
  fill: theme.linkColor,
  ':hover': {
    fill: theme.linkHoverColor
  }
}));

const LinkedIn = () => (
  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
    <i role="button" aria-label="Go to LinkedIn">
      <LinkedInButton />
    </i>
  </a>
);

export default LinkedIn;
