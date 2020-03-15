import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { ReactComponent as UpSvg } from '../assets/icons/up.svg';

const Container = styled('div')(({ visibility, opacity }) => ({
  right: 12,
  bottom: 8,
  position: 'fixed',
  transition: 'visibility 0s, opacity 0.25s linear',
  visibility,
  opacity
}));

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

const Up = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset;
      if (scrollPos > 0 && !scrolling) setScrolling(true);
      else if (scrollPos === 0 && scrolling) setScrolling(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolling]);

  return (
    <Container
      visibility={scrolling ? 'visible' : 'hidden'}
      opacity={scrolling ? 1 : 0}
    >
      <a href="#about">
        <i role="button" aria-label="Navigate to Top">
          <UpButton />
        </i>
      </a>
    </Container>
  );
};

export default Up;
