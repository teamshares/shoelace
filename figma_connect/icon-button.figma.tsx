// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=2621-1914&t=NUUDTGV2YnFjzS2O-4',
  {
    props: {
      size: figma.enum('size', {
        'small (16px)': 'text-base',
        'large (24px)': 'text-2xl'
      }),
      disabled: figma.enum('state', {
        disabled: true
      }),
      name: figma.nestedProps('❇️ Icon for Button', {
        iconName: figma.string('icon-name')
      })
    },
    example: ({ size, disabled, name }) => {
      return <sl-icon-button library="fa" class={size} disabled={disabled} name={name.iconName}></sl-icon-button>;
    }
  }
);
