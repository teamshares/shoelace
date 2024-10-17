// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=8564-8&t=4UIXwDXcsJSneX8X-4', {
  props: {
    variant: figma.enum('variant', {
      red: 'red',
      gray: 'gray'
    }),
    number: figma.string('✏️ number')
  },
  example: ({ variant, number }) => {
    return <sl-badge variant={variant} number={number}></sl-badge>;
  }
});
