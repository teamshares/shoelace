// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=2662-1381&t=4UIXwDXcsJSneX8X-4',
  {
    props: {
      variant: figma.enum('variant', {
        blue: 'blue',
        green: 'green',
        gray: 'gray',
        yellow: 'yellow',
        red: 'red',
        teal: 'teal',
        fuchsia: 'fuchsia',
        purple: 'purple',
        primary: 'primary',
        success: 'success',
        neutral: 'neutral',
        warning: 'warning',
        danger: 'danger'
      }),
      size: figma.enum('size', {
        small: 'small',
        medium: 'medium',
        large: 'large'
      }),
      content: figma.string('✏️ content'),
      removable: figma.boolean('removable?')
    },
    example: ({ variant, size, content, removable }) => {
      return (
        <sl-tag variant={variant} size={size} removable={removable}>
          {content}
        </sl-tag>
      );
    }
  }
);
