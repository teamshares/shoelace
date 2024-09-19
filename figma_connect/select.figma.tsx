// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

/* select, default */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=10720-8726&t=AiumK76u2Tv4EXMB-4',
  {
    variant: { 'multiple?': 'false' },
    props: {
      size: figma.enum('size', {
        medium: 'medium',
        large: 'large'
      }),
      disabled: figma.enum('state', {
        disabled: true
      }),
      label: figma.boolean('label?', {
        true: figma.string('✏️ label'),
        false: undefined
      }),
      required: figma.boolean('required?'),
      tooltip: figma.boolean('tooltip?', {
        true: '{Include tooltip text here}',
        false: undefined
      }),
      contextNote: figma.boolean('context note?', {
        true: figma.string('✏️ note text'),
        false: undefined
      }),
      prefix: figma.boolean('prefix?', {
        true: figma.children('Prefix*'),
        false: undefined
      }),
      value: figma.string('✏️ value text'),
      valueID: figma.boolean('value?', {
        true: 'option-a',
        false: undefined
      }),
      helpText: figma.boolean('help text?', {
        true: figma.string('✏️ help text'),
        false: undefined
      })
    },
    example: ({ size, disabled, label, required, tooltip, contextNote, prefix, value, valueID, helpText }) => {
      return (
        /* = ts_form_for ... do |f|
        /* .. = f.input :foo,
        /* .. collection: [ 
        /* ["Option A", :option-a], 
        /* ["Option B", :option-b], 
        /* ["Option C", :option-c], 
        /* ],
        /* .. input_html: {
        /* .... label: "Label text",
        /* .... "help-text": "Help text",
        /* .... "label-tooltip": "Tooltip text",
        /* .... value: "option-a", ... }  */
        <sl-select
          size={size}
          disabled={disabled}
          label={label}
          required={required}
          label-tooltip={tooltip}
          context-note={contextNote}
          value={valueID}
          help-text={helpText}
        >
          {prefix}
          <sl-option value="option-a">{value}</sl-option>
          <sl-option value="option-b">Option B</sl-option>
          <sl-option value="option-c">Option C</sl-option>
        </sl-select>
      );
    }
  }
);

/* select, multiple */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=10720-8726&t=AiumK76u2Tv4EXMB-4',
  {
    variant: { 'multiple?': 'true' },
    props: {
      size: figma.enum('size', {
        medium: 'medium',
        large: 'large'
      }),
      disabled: figma.enum('state', {
        disabled: true
      }),
      label: figma.boolean('label?', {
        true: figma.string('✏️ label'),
        false: undefined
      }),
      required: figma.boolean('required?'),
      tooltip: figma.boolean('tooltip?', {
        true: '{Include tooltip text here}',
        false: undefined
      }),
      contextNote: figma.boolean('context note?', {
        true: figma.string('✏️ note text'),
        false: undefined
      }),
      prefix: figma.boolean('prefix?', {
        true: figma.children('Prefix*'),
        false: undefined
      }),
      valueID: figma.boolean('value (multiple)?', {
        true: 'option-1 option-2',
        false: undefined
      }),
      helpText: figma.boolean('help text?', {
        true: figma.string('✏️ help text'),
        false: undefined
      })
    },
    example: ({ size, disabled, label, required, tooltip, contextNote, prefix, valueID, helpText }) => {
      return (
        /* = ts_form_for ... do |f|
        /* .. = f.input :foo,
        /* .. collection: [ 
        /* ["Option 1", :option-1], 
        /* ["Option 2", :option-2], 
        /* ["Option 3", :option-3], 
        /* ],
        /* .. input_html: {
        /* .... label: "Label text",
        /* .... "help-text": "Help text",
        /* .... "label-tooltip": "Tooltip text",
        /* .... multiple: true,
        /* .... clearable: true,
        /* .... value: "option-1 option-2 ...", ... }  */
        <sl-select
          size={size}
          disabled={disabled}
          multiple
          clearable
          label={label}
          required={required}
          label-tooltip={tooltip}
          context-note={contextNote}
          value={valueID}
          help-text={helpText}
        >
          {prefix}
          <sl-option value="option-1">Option 1</sl-option>
          <sl-option value="option-2">Option 2</sl-option>
          <sl-option value="option-3">Option 3</sl-option>
          <sl-option value="option-4">Option 4</sl-option>
          <sl-option>...</sl-option>
        </sl-select>
      );
    }
  }
);
