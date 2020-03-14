import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import SmoothScroll from 'smooth-scroll';

import { Footer, Up } from './components';
import {
 About, Contact, Projects, Work 
} from './sections';

import theme from './constants/theme';

const Container = styled('div')({ width: '100%' });

const App = () => {
  SmoothScroll('a[href*="#"]');

  return (
    <ThemeProvider theme={theme}>
      <Container id="top">
        <About />
        <Work />
        <Projects />
        <Contact />
        <Footer />
        <Up />
      </Container>
    </ThemeProvider>
  );
};

export default App;
