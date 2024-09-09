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
      disabled: figma.enum('state', {
        disabled: true
      }),
      checked: figma.boolean('checked?'),
      label: figma.string('✏️ label'),
      helpText: figma.boolean('help text?', {
        true: figma.string('✏️ help text'),
        false: undefined
      })
    },
    example: ({ labelPosition, size, disabled, checked, label, helpText }) => {
      return (
        <sl-switch
          label-position={labelPosition}
          size={size}
          disabled={disabled}
          checked={checked}
          help-text={helpText}
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
      disabled: figma.enum('state', {
        disabled: true
      }),
      checked: figma.boolean('checked?'),
      helpText: figma.boolean('help text?', {
        true: figma.string('✏️ help text'),
        false: undefined
      })
    },
    example: ({ size, disabled, checked, helpText }) => {
      return <sl-switch size={size} disabled={disabled} checked={checked} help-text={helpText}></sl-switch>;
    }
  }
);
