// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=2597-1219&m=dev', {
  props: {
    variant: figma.enum('variant', {
      default: 'default',
      primary: 'primary',
      warning: 'warning',
      danger: 'danger',
      text: 'text'
    }),
    size: figma.enum('size', {
      small: 'small',
      medium: 'medium',
      large: 'large',
      'x-large': 'x-large'
    }),
    outline: figma.boolean('outline?'),
    circle: figma.boolean('circle?'),
    circleIcon: figma.boolean('circle?', {
      true: figma.children('Icon*'),
      false: undefined
    }),
    prefix: figma.boolean('prefix?', {
      true: figma.children('Prefix*'),
      false: undefined
    }),
    label: figma.boolean('circle?', {
      true: undefined,
      false: figma.string('✏️ label')
    }),
    suffix: figma.boolean('suffix?', {
      true: figma.children('Suffix*'),
      false: undefined
    })
  },
  example: ({ label, variant, size, outline, circle, circleIcon, prefix, suffix }) => {
    return (
      <sl-button variant={variant} size={size} outline={outline} circle={circle}>
        {prefix}
        {label}
        {circleIcon}
        {suffix}
      </sl-button>
    );
  }
});
