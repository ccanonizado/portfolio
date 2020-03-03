import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';

import {
 About, Contact, Projects, Work 
} from './sections';

import theme from './constants/theme';

const Container = styled('div')({
  width: '100%'
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <About />
      <Work />
      <Projects />
      <Contact />
    </Container>
  </ThemeProvider>
);

export default App;
