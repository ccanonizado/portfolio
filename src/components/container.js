import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Content = styled('div')({
  width: '95%',
  margin: '4em 0 0 5%'
});

const Container = ({ children }) => <Content>{children}</Content>;

Container.propTypes = {
  children: PropTypes.node
};

Container.defaultProps = {
  children: null
};

export default Container;
