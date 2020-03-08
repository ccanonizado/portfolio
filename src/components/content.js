import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled('div')({
  width: '95%',
  marginLeft: '5%'
});

const Content = ({ children }) => <Container>{children}</Container>;

Content.propTypes = {
  children: PropTypes.node
};

Content.defaultProps = {
  children: null
};

export default Content;
