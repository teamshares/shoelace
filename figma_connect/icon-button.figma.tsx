// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=2621-1914&t=NUUDTGV2YnFjzS2O-4',
  {
    props: {
      name: figma.nestedProps('Icon for Button  ❇️', {
        iconName: figma.string('icon-name')
      }),
      size: figma.enum('size', {
        'small (16px)': 'text-base',
        'large (24px)': 'text-2xl'
      }),
      disabled: figma.enum('state', {
        disabled: true
      })
    },
    example: ({ size, name, disabled }) => {
      return <sl-icon-button library="fa" class={size} name={name.iconName} disabled={disabled}></sl-icon-button>;
    }
  }
);
