// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=13662-6967&t=nKUmVuBTwC6GFu1I-4',
  {
    props: {
      vertical: figma.boolean('vertical?')
    },
    example: ({ vertical }) => {
      return <sl-divider vertical={vertical}></sl-divider>;
    }
  }
);
