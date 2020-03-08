import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';

import { Footer } from './components';
import {
 About, Contact, Projects, Work 
} from './sections';

import theme from './constants/theme';

const Container = styled('div')({
  width: '100%'
});

const App = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200 && !scrolling) setScrolling(true);
      else if (window.scrollY <= 200 && scrolling) setScrolling(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <About />
        <Work />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
