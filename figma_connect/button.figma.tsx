// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=2597-1219&t=NUUDTGV2YnFjzS2O-4',
  {
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
      disabled: figma.enum('state', {
        disabled: true
      }),
      outline: figma.boolean('outline?'),
      circle: figma.boolean('circle?'),
      prefix: figma.boolean('prefix?', {
        true: figma.children('❇️ Prefix*'),
        false: undefined
      }),
      label: figma.boolean('circle?', {
        true: undefined,
        false: figma.string('✏️ label')
      }),
      circleIcon: figma.boolean('circle?', {
        true: figma.children('❇️ Icon*'),
        false: undefined
      }),
      suffix: figma.boolean('suffix?', {
        true: figma.children('❇️ Suffix*'),
        false: undefined
      })
    },
    example: ({ variant, size, disabled, outline, circle, prefix, label, circleIcon, suffix }) => {
      return (
        <sl-button variant={variant} size={size} disabled={disabled} outline={outline} circle={circle}>
          {prefix}
          {label}
          {circleIcon}
          {suffix}
        </sl-button>
      );
    }
  }
);
