import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { ReactComponent as GitHubSvg } from '../assets/icons/github.svg';

const GitHubButton = styled(GitHubSvg)(({ theme }) => ({
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

const GitHub = ({ title, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <i role="button" aria-label={`Go to ${title}`}>
      <GitHubButton />
    </i>
  </a>
);

GitHub.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
};

GitHub.defaultProps = {
  title: 'GitHub',
  url: 'https://github.com/ccanonizado'
};

export default GitHub;
