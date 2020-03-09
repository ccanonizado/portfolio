import React, { useState, useRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';

import { Footer, Up } from './components';
import {
 About, Contact, Projects, Work 
} from './sections';

import theme from './constants/theme';

const Container = styled('div')({ width: '100%' });

const App = () => {
  const [scrolling, setScrolling] = useState(false);
  const scrollRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <Scrollbars
        ref={scrollRef}
        autoHeight
        autoHeightMin="100vh"
        onScrollFrame={(values) => {
          if (values.top > 0 && !scrolling) setScrolling(true);
          else if (values.top === 0 && scrolling) setScrolling(false);
        }}
      >
        <Container>
          <About />
          <Work />
          <Projects />
          <Contact />
          <Footer />
          {scrolling ? <Up scrollRef={scrollRef} /> : ''}
        </Container>
      </Scrollbars>
    </ThemeProvider>
  );
};

export default App;
