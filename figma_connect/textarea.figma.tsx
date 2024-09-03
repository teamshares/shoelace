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
      required: figma.boolean('required?'),
      resize: figma.boolean('resize?', {
        true: undefined,
        false: 'none'
      })
    },
    example: ({ rows, label, tooltip, contextNote, helpText, required, resize, disabled }) => {
      return (
        /* When rendering with ts_form_for */
        /* = ts_form_for ... do |f|
        /* .. = f.input :field,
        /* .. as: :text,
        /* .. input_html: {
        /* .... { attribute: value,
        /* ...... attribute: value, }  */
        <sl-textarea
          rows={rows}
          label={label}
          label-tooltip={tooltip}
          context-note={contextNote}
          help-text={helpText}
          required={required}
          resize={resize}
          disabled={disabled}
        ></sl-textarea>
      );
    }
  }
);
