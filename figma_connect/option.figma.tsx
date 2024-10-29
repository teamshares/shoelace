// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

/* option */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=14511-11962&t=0rYB5ogEUFUWSRwL-4',
  {
    props: {
      optionItems: figma.children('Option Item*')
    },
    example: ({ optionItems }) => {
      return (
        /* Add attributes as needed to sl-select, e.g. label, help-text, etc */
        <sl-select>{optionItems}</sl-select>
      );
    }
  }
);

/* option, simple */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=14511-12169&t=0rYB5ogEUFUWSRwL-4',
  {
    variant: {
      'option group label?': 'false',
      'divider?': 'false'
    },
    props: {
      checked: figma.boolean('checked?'),
      prefix: figma.boolean('prefix?', {
        true: figma.children('❇️ Prefix*'),
        false: undefined
      }),
      label: figma.string('✏️ label'),
      disabled: figma.enum('state', {
        disabled: true
      }),
      suffix: figma.boolean('suffix?', {
        true: figma.children('Suffix*'),
        false: undefined
      })
    },
    example: ({ checked, prefix, label, disabled, suffix }) => {
      return (
        <sl-option checked={checked} disabled={disabled}>
          {prefix}
          {label}
          {suffix}
        </sl-option>
      );
    }
  }
);

/* option,
with group label and/or divider */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=14511-12169&t=0rYB5ogEUFUWSRwL-4',
  {
    props: {
      optionLabel: figma.boolean('option group label?', {
        true: figma.children('Option Group Label*'),
        false: undefined
      }),
      checked: figma.boolean('checked?'),
      prefix: figma.boolean('prefix?', {
        true: figma.children('❇️ Prefix*'),
        false: undefined
      }),
      label: figma.string('✏️ label'),
      disabled: figma.enum('state', {
        disabled: true
      }),
      suffix: figma.boolean('suffix?', {
        true: figma.children('Suffix*'),
        false: undefined
      }),
      divider: figma.boolean('divider?', {
        true: figma.children('❇️ Divider*'),
        false: undefined
      })
    },
    example: ({ optionLabel, checked, prefix, label, disabled, suffix, divider }) => {
      return (
        /* Ignore Fragment tags, added here for Code Connect only. */
        <>
          {optionLabel}
          <sl-option checked={checked} disabled={disabled}>
            {prefix}
            {label}
            {suffix}
          </sl-option>
          {divider}
        </>
      );
    }
  }
);

/* option group label */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=14513-17542&t=0rYB5ogEUFUWSRwL-4',
  {
    props: {
      label: figma.string('✏️ option group label')
    },
    example: ({ label }) => {
      return <small>{label}</small>;
    }
  }
);

/* icon suffix */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=14511-12239&t=0rYB5ogEUFUWSRwL-4',
  {
    variant: { type: 'icon' },
    props: {
      name: figma.nestedProps('❇️ Suffix Icon', {
        iconName: figma.string('icon-name')
      })
    },
    example: ({ name }) => {
      return <sl-icon slot="suffix" library="fa" name={name.iconName}></sl-icon>;
    }
  }
);

/* badge suffix */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=14511-12239&t=0rYB5ogEUFUWSRwL-4',
  {
    variant: { type: 'badge' },
    props: {
      badge: figma.nestedProps('❇️ Badge <sl-badge>', {
        variant: figma.enum('variant', {
          red: 'red',
          gray: 'gray'
        }),
        number: figma.string('✏️ number')
      })
    },
    example: ({ badge }) => {
      return <sl-badge slot="suffix" variant={badge.variant} number={badge.number}></sl-badge>;
    }
  }
);
