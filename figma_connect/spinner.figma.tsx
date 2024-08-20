// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=8436-1402&t=j7gCllmM5d054D0f-4',
  {
    props: {
      size: figma.enum('size', {
        small: 'small',
        medium: 'medium',
        large: 'large',
        'x-large': 'x-large'
      })
    },
    example: ({ size }) => {
      return <sl-spinner size={size}></sl-spinner>;
    }
  }
);
