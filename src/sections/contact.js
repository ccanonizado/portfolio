import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import {
 GitHub, LinkedIn, Section, Text 
} from '../components';

import { sr, srOptions } from '../utils/scrollReveal';

import { contact } from '../constants/content';

const Container = styled('div')({
  marginTop: '4em',
  width: '100%'
});

const Content = styled(Text.p)(({ theme }) => ({
  lineSpacing: '50px',
  a: {
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: '0.5s ease all',
    color: theme.linkColor,
    ':hover': {
      color: theme.linkHoverColor
    }
  }
}));

const Links = styled('div')({
  margin: '1em 0 0 2.5%'
});

const Contact = () => {
  useEffect(() => {
    sr.reveal('#contactHeader', srOptions());
    sr.reveal('#contactContent', srOptions(500));
    sr.reveal('#contactLinks', srOptions(600));
  }, []);
  return (
    <Section id="contact">
      <Text.h3 id="contactHeader">{contact.header}</Text.h3>
      <Container>
        <Content id="contactContent">{contact.content}</Content>
        <Links id="contactLinks">
          <LinkedIn />
          <GitHub />
        </Links>
      </Container>
    </Section>
  );
};

export default Contact;
