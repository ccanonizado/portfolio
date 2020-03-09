import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { ReactComponent as UpSvg } from '../assets/icons/up.svg';

const Container = styled('div')({
  right: 12,
  bottom: 8,
  position: 'fixed'
});

const UpButton = styled(UpSvg)(({ theme }) => ({
  width: 30,
  height: 30,
  viewBox: '0 0 30 30',
  cursor: 'pointer',
  transition: '0.5s ease all',
  fill: theme.linkColor,
  ':hover': {
    fill: theme.linkHoverColor
  }
}));

const Up = ({ scrollRef }) => {
  const handleScroll = () =>
    scrollRef.current.view.scroll({
      behavior: 'smooth',
      left: 0,
      top: 0
    });

  return (
    <Container>
      <UpButton onClick={handleScroll} />
    </Container>
  );
};

Up.propTypes = {
  scrollRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ])
};

Up.defaultProps = {
  scrollRef: null
};

export default Up;
