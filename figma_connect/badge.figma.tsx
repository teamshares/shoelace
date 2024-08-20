// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=8564-8&t=4UIXwDXcsJSneX8X-4', {
  props: {
    number: figma.string('✏️ number'),
    variant: figma.enum('variant', {
      red: 'red',
      gray: 'gray'
    })
  },
  example: ({ number, variant }) => {
    return <sl-badge number={number} variant={variant}></sl-badge>;
  }
});
