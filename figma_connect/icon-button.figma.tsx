// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=2621-1914&t=7Ax1j0oSE1rKXXRL-4',
  {
    props: {
      name: figma.nestedProps('Icon for Button', {
        iconName: figma.string('icon-name')
      }),
      size: figma.enum('size', {
        'small (16px)': 'text-base',
        'medium (20px)': 'text-xl',
        'large (24px)': 'text-2xl'
      })
    },
    example: ({ size, name }) => {
      return <sl-icon-button library="fa" class={size} name={name.iconName}></sl-icon-button>;
    }
  }
);
