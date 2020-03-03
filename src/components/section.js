import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled('div')(({ theme, primary }) => ({
  width: '100%',
  background: primary ? theme.primaryBgColor : theme.secondaryBgColor
}));

const Center = styled('div')({
  width: '90%',
  left: '50%',
  position: 'relative',
  transform: 'translateX(-50%)'
});

const Section = ({ children, primary }) => (
  <Container primary={primary}>
    <Center>{children}</Center>
  </Container>
);

Section.propTypes = {
  children: PropTypes.element,
  primary: PropTypes.bool
};

Section.defaultProps = {
  children: null,
  primary: false
};

export default Section;
