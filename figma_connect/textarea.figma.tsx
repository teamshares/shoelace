// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=5622-11416&t=NUUDTGV2YnFjzS2O-4',
  {
    props: {
      disabled: figma.enum('state', {
        disabled: true
      }),
      rows: figma.enum('rows', {
        '2': '2',
        '4 (default)': undefined,
        '6': '6'
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
      helpText: figma.boolean('help text?', {
        true: figma.string('✏️ help text'),
        false: undefined
      }),
      resize: figma.boolean('resize?', {
        true: undefined,
        false: 'none'
      })
    },
    example: ({ disabled, rows, label, required, tooltip, contextNote, helpText, resize }) => {
      return (
        /* = ts_form_for ... do |f|
        /* .. = f.input :foo,
        /* .. as: :text,
        /* .. input_html: {
        /* .... { attribute: value,
        /* ...... attribute: value }  */
        <sl-textarea
          disabled={disabled}
          rows={rows}
          label={label}
          required={required}
          label-tooltip={tooltip}
          context-note={contextNote}
          help-text={helpText}
          resize={resize}
        ></sl-textarea>
      );
    }
  }
);
