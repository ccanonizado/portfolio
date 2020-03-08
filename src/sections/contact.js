import React from 'react';

import { Section, Text } from '../components';

import { contact } from '../constants/content';

const Contact = () => (
  <Section id="contact">
    <Text.h3>{contact.header}</Text.h3>
  </Section>
);

export default Contact;
