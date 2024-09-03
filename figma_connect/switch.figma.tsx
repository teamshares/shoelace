// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=4844-10248&t=up6Nxobejwhsftnh-4',
  {
    props: {
      labelPosition: figma.enum('label position', {
        right: 'right',
        left: 'left',
        'left justified': 'left-justified'
      }),
      size: figma.enum('size', {
        medium: 'medium',
        small: 'small'
      }),
      checked: figma.boolean('checked?'),
      disabled: figma.enum('state', {
        disabled: true
      }),
      label: figma.string('✏️ label'),
      helpText: figma.boolean('help text?', {
        true: figma.string('✏️ help text'),
        false: undefined
      })
    },
    example: ({ labelPosition, helpText, size, checked, disabled, label }) => {
      return (
        <sl-switch
          label-position={labelPosition}
          help-text={helpText}
          size={size}
          checked={checked}
          disabled={disabled}
        >
          {label}
        </sl-switch>
      );
    }
  }
);

figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=4844-10248&t=up6Nxobejwhsftnh-4',
  {
    variant: { 'label position': 'no label' },
    props: {
      size: figma.enum('size', {
        medium: 'medium',
        small: 'small'
      }),
      checked: figma.boolean('checked?'),
      disabled: figma.enum('state', {
        disabled: true
      }),
      helpText: figma.boolean('help text?', {
        true: figma.string('✏️ help text'),
        false: undefined
      })
    },
    example: ({ helpText, size, checked, disabled }) => {
      return <sl-switch help-text={helpText} size={size} checked={checked} disabled={disabled}></sl-switch>;
    }
  }
);
