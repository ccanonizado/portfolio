import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled('div')(({ theme, primary, top }) => ({
  width: '100%',
  // height: top ? '100vh' : 'auto',
  padding: top ? '2em 0 0' : '4em 0',
  background: primary ? theme.primaryBgColor : theme.secondaryBgColor
}));

const Center = styled('div')({
  width: '90%',
  left: '50%',
  position: 'relative',
  transform: 'translateX(-50%)'
});

const Section = ({
 children, primary, top, id 
}) => (
  <section id={id}>
    <Container primary={primary} top={top}>
      <Center>{children}</Center>
    </Container>
  </section>
);

Section.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  top: PropTypes.bool,
  id: PropTypes.string
};

Section.defaultProps = {
  children: null,
  primary: false,
  top: false,
  id: ''
};

export default Section;
