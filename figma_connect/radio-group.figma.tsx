// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

/* sl-radio */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=11255-4575&t=MZDnlRrHkRW0flgq-4',
  {
    props: {
      disabled: figma.enum('state', {
        disabled: true
      }),
      value: figma.boolean('checked?', {
        true: 'checked-value',
        false: 'value'
      }),
      contained: figma.boolean('contained?'),
      label: figma.string('✏️ label'),
      description: figma.boolean('description?', {
        true: figma.string('✏️ description'),
        false: undefined
      }),
      selectedContent: figma.boolean('selected content?', {
        true: figma.children('Selected content'),
        false: undefined
      })
    },
    example: ({ disabled, value, contained, label, description, selectedContent }) => {
      return (
        <sl-radio value={value} disabled={disabled} description={description}>
          {label}
          {selectedContent}
        </sl-radio>
      );
    }
  }
);

/* selected content */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=14001-4880&t=OPQ2iRvIeCZDwVR5-4',
  {
    props: {
      slottedContent: figma.children('*')
    },
    example: ({ slottedContent }) => {
      return <div slot="selected-content">{slottedContent}</div>;
    }
  }
);

/* sl-radio-group, default */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=13995-16708&t=MZDnlRrHkRW0flgq-4',
  {
    variant: { 'horizontal?': 'false' },
    props: {
      contained: figma.boolean('contained?'),
      label: figma.boolean('label?', {
        true: figma.string('✏️ label'),
        false: undefined
      }),
      required: figma.boolean('required?'),
      tooltip: figma.boolean('tooltip?', {
        true: '{Include tooltip text here}',
        false: undefined
      }),
      helpText: figma.boolean('help text?', {
        true: figma.string('✏️ help text'),
        false: undefined
      }),
      radioList: figma.children(['Radio 1', 'Radio 2', 'Radio 3', 'Radio 4', 'Radio 5', 'Radio 6', 'Radio 7'])
    },
    example: ({ contained, label, required, tooltip, helpText, value, radioList }) => {
      return (
        /* = ts_form_for ... do |f|
        /* .. = f.input :foo,
        /* .. as: :radio_buttons,
        /* .. label: "Group label",
        /* .. collection: [ */
        /* ["Radio label 1", :id-1, description: "Item description"], */
        /* ["Radio label 2", :id-2, description: "Item description", disabled: true], */
        /* ],
        /* .. wrapper_html: {
        /* .... { "help-text": {value},
        /* ...... "label-tooltip": {value}, }  */
        <sl-radio-group
          name="group-name"
          contained={contained}
          label={label}
          required={required}
          label-tooltip={tooltip}
          help-text={helpText}
          value="checked-value"
        >
          {radioList}
        </sl-radio-group>
      );
    }
  }
);

/* sl-radio-group, horizontal */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=13995-16708&t=MZDnlRrHkRW0flgq-4',
  {
    variant: { 'horizontal?': 'true' },
    props: {
      contained: figma.boolean('contained?'),
      label: figma.boolean('label?', {
        true: figma.string('✏️ label'),
        false: undefined
      }),
      required: figma.boolean('required?'),
      tooltip: figma.boolean('tooltip?', {
        true: '{Include tooltip text here}',
        false: undefined
      }),
      helpText: figma.boolean('help text?', {
        true: figma.string('✏️ help text'),
        false: undefined
      }),
      radioList: figma.children(['Radio 1', 'Radio 2', 'Radio 3', 'Radio 4'])
    },
    example: ({ contained, label, required, tooltip, helpText, value, radioList }) => {
      return (
        /* When rendering with ts_form_for */
        /* = ts_form_for ... do |f|
        /* .. = f.input :foo,
        /* .. as: :radio_buttons,
        /* .. label: "Group label",
        /* .. collection: [ */
        /* ["Radio label 1", :id-1, description: "Item description"], */
        /* ["Radio label 2", :id-2, description: "Item description", disabled: true], */
        /* ],
        /* .. wrapper_html: {
        /* .... { "help-text": {value},
        /* ...... "label-tooltip": {value}, }  */
        <sl-radio-group
          name="group-name"
          horizontal
          contained={contained}
          label={label}
          required={required}
          label-tooltip={tooltip}
          help-text={helpText}
          value="checked-value"
        >
          {radioList}
        </sl-radio-group>
      );
    }
  }
);
