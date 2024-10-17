// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

/* tab group, 2 tabs */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=7542-8307&t=AiumK76u2Tv4EXMB-4',
  {
    variant: { '# of tabs': 'two' },
    props: {
      tabItems: figma.children(['Tab 1', 'Tab 2'])
    },
    example: ({ tabItems }) => {
      return (
        /* Every <sl-tab> needs a unique 'panel' value
        /* that matches a <sl-tab-panel>'s 'name' value. */
        <sl-tab-group>
          {tabItems}
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
        </sl-tab-group>
      );
    }
  }
);

/* tab group, 3 tabs */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=7542-8307&t=AiumK76u2Tv4EXMB-4',
  {
    variant: { '# of tabs': 'three' },
    props: {
      tabItems: figma.children(['Tab 1', 'Tab 2', 'Tab 3'])
    },
    example: ({ tabItems }) => {
      return (
        /* Every <sl-tab> needs a unique 'panel' value
        /* that matches a <sl-tab-panel>'s 'name' value. */
        <sl-tab-group>
          {tabItems}
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
        </sl-tab-group>
      );
    }
  }
);

/* tab group, 4 tabs */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=7542-8307&t=AiumK76u2Tv4EXMB-4',
  {
    variant: { '# of tabs': 'four' },
    props: {
      tabItems: figma.children(['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'])
    },
    example: ({ tabItems }) => {
      return (
        /* Every <sl-tab> needs a unique 'panel' value
        /* that matches a <sl-tab-panel>'s 'name' value. */
        <sl-tab-group>
          {tabItems}
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
        </sl-tab-group>
      );
    }
  }
);

/* tab group, 5 tabs */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=7542-8307&t=AiumK76u2Tv4EXMB-4',
  {
    variant: { '# of tabs': 'five' },
    props: {
      tabItems: figma.children(['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'])
    },
    example: ({ tabItems }) => {
      return (
        /* Every <sl-tab> needs a unique 'panel' value
        /* that matches a <sl-tab-panel>'s 'name' value. */
        <sl-tab-group>
          {tabItems}
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
        </sl-tab-group>
      );
    }
  }
);

/* tab group, 6 tabs */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=7542-8307&t=AiumK76u2Tv4EXMB-4',
  {
    variant: { '# of tabs': 'six' },
    props: {
      tabItems: figma.children(['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5', 'Tab 6'])
    },
    example: ({ tabItems }) => {
      return (
        /* Every <sl-tab> needs a unique 'panel' value
        /* that matches a <sl-tab-panel>'s 'name' value. */
        <sl-tab-group>
          {tabItems}
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
          <sl-tab-panel name="panel-name">Panel content</sl-tab-panel>
        </sl-tab-group>
      );
    }
  }
);

/* tab item */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=2719-1340&t=AiumK76u2Tv4EXMB-4',
  {
    props: {
      disabled: figma.enum('state', {
        disabled: true
      }),
      label: figma.string('✏️ label'),
      badge: figma.boolean('badge?', {
        true: figma.children('❇️ Badge*'),
        false: undefined
      })
    },
    example: ({ label, badge }) => {
      return (
        <sl-tab slot="nav" panel="panel-name">
          {label}
          {badge}
        </sl-tab>
      );
    }
  }
);
