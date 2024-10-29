// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

/* menu */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=10434-26729&t=gn1tItsw8QyHmjqn-4',
  {
    props: {
      menuItems: figma.children('Menu Item*')
    },
    example: ({ menuItems }) => {
      return <sl-menu>{menuItems}</sl-menu>;
    }
  }
);

/* regular menu-item, simple
(no checkbox, no menu label, no divider) */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=6575-14724&t=s2C143uJCmv0wFrr-4',
  {
    variant: {
      'checkbox item?': 'false',
      'menu label?': 'false',
      'divider?': 'false'
    },
    props: {
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
    example: ({ prefix, label, disabled, suffix }) => {
      return (
        <sl-menu-item disabled={disabled}>
          {prefix}
          {label}
          {suffix}
        </sl-menu-item>
      );
    }
  }
);

/* regular menu-item,
with menu label and/or divider */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=6575-14724&t=s2C143uJCmv0wFrr-4',
  {
    variant: {
      'checkbox item?': 'false'
    },
    props: {
      menuLabel: figma.boolean('menu label?', {
        true: figma.children('Menu Label*'),
        false: undefined
      }),
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
    example: ({ menuLabel, prefix, label, disabled, suffix, divider }) => {
      return (
        /* Ignore Fragment tags, added here for Code Connect only. */
        <>
          {menuLabel}
          <sl-menu-item disabled={disabled}>
            {prefix}
            {label}
            {suffix}
          </sl-menu-item>
          {divider}
        </>
      );
    }
  }
);

/* checkbox menu-item, simple */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=6575-14724&t=s2C143uJCmv0wFrr-4',
  {
    variant: {
      'checkbox item?': 'true',
      'menu label?': 'false',
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
        <sl-menu-item type="checkbox" checked={checked} disabled={disabled}>
          {prefix}
          {label}
          {suffix}
        </sl-menu-item>
      );
    }
  }
);

/* checkbox menu-item,
with menu label and/or divider */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=6575-14724&t=s2C143uJCmv0wFrr-4',
  {
    variant: { 'checkbox item?': 'true' },
    props: {
      menuLabel: figma.boolean('menu label?', {
        true: figma.children('Menu Label*'),
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
    example: ({ menuLabel, checked, prefix, label, disabled, suffix, divider }) => {
      return (
        /* Ignore Fragment tags, added here for Code Connect only. */
        <>
          {menuLabel}
          <sl-menu-item type="checkbox" checked={checked} disabled={disabled}>
            {prefix}
            {label}
            {suffix}
          </sl-menu-item>
          {divider}
        </>
      );
    }
  }
);

/* menu-label */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=6575-14862&t=s2C143uJCmv0wFrr-4',
  {
    props: {
      label: figma.string('✏️ menu label')
    },
    example: ({ label }) => {
      return <sl-menu-label>{label}</sl-menu-label>;
    }
  }
);

/* icon suffix */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=10595-16907&t=ksAzIjkjSqljlnO6-4',
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
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=10595-16907&t=ksAzIjkjSqljlnO6-4',
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
