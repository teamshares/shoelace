// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=6593-17066&t=gIidLo6BlYmxFnTS-4',
  {
    props: {
      iconName: figma.string('icon-name#'),
      scale: figma.enum('scale', {
        '1x': 'text-base',
        '1.25x': 'text-xl',
        '1.5x': 'text-2xl',
        '2x': 'text-[32px]',
        '2.5x': 'text-[40px]',
        '3x': 'text-5xl',
        '4x': 'text-[64px]',
        '5x': 'text-[80px]',
        '6x': 'text-8xl',
        '7x': 'text-[112px]',
        '8x': 'text-9xl',
        '9x': 'text-[144px]',
        '10x': 'text-[160px]'
      })
    },
    example: ({ iconName, scale }) => {
      return (
        /* Strip the '#' from and prepend 'fad-' to the name value */
        <sl-icon library="fa" name={iconName}></sl-icon>
      );
    }
  }
);
