// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

/* sl-checkbox */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=11076-9294&t=NNGawB6i0ms5UNAf-4',
  {
    props: {
      disabled: figma.enum('state', {
        disabled: true
      }),
      checked: figma.boolean('checked?'),
      contained: figma.boolean('contained?'),
      label: figma.boolean('label?', {
        true: figma.string('✏️ label'),
        false: undefined
      }),
      description: figma.boolean('description?', {
        true: figma.string('✏️ description'),
        false: undefined
      }),
      selectedContent: figma.boolean('selected content?', {
        true: figma.children('Selected content'),
        false: undefined
      })
    },
    example: ({ disabled, checked, contained, label, description, selectedContent }) => {
      return (
        /* = ts_form_for ... do |f|
        /* .. = f.input :foo,
        /* .. as: :boolean,
        /* .. input_html: {
        /* .... { attribute: value,
        /* ...... attribute: value }  */
        <sl-checkbox
          value="checkbox-value"
          disabled={disabled}
          checked={checked}
          contained={contained}
          description={description}
        >
          {label}
          {selectedContent}
        </sl-checkbox>
      );
    }
  }
);

/* sl-checkbox, for group only */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=13983-9458&t=3YWGeE0W4lVcmVDw-4',
  {
    props: {
      disabled: figma.enum('state', {
        disabled: true
      }),
      checked: figma.boolean('checked?'),
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
    example: ({ disabled, checked, label, description, selectedContent }) => {
      return (
        <sl-checkbox value="checkbox-value" disabled={disabled} checked={checked} description={description}>
          {label}
          {selectedContent}
        </sl-checkbox>
      );
    }
  }
);

/* selected content */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=13962-14334&t=i5tSCH2YPyEjzbRg-4',
  {
    props: {
      slottedContent: figma.children('*')
    },
    example: ({ slottedContent }) => {
      return <div slot="selected-content">{slottedContent}</div>;
    }
  }
);

/* sl-checkbox-group, default */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=13977-8487&t=3YWGeE0W4lVcmVDw-4',
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
      checkboxList: figma.children([
        'Checkbox 1',
        'Checkbox 2',
        'Checkbox 3',
        'Checkbox 4',
        'Checkbox 5',
        'Checkbox 6',
        'Checkbox 7'
      ])
    },
    example: ({ contained, label, required, tooltip, helpText, checkboxList }) => {
      return (
        /* = ts_form_for ... do |f|
        /* .. = f.input :foo,
        /* .. as: :check_boxes,
        /* .. label: "Group label",
        /* .. collection: [ */
        /* ["Checkbox label 1", :checkbox-id-1, description: "Checkbox description", disabled: true], */
        /* ["Checkbox label 2", :checkbox-id-2, description: "Checkbox description", checked: true], */
        /* ],
        /* .. wrapper_html: {
        /* .... { attribute: value,
        /* ...... attribute: value }  */
        <sl-checkbox-group
          name="group-name"
          contained={contained}
          label={label}
          required={required}
          label-tooltip={tooltip}
          help-text={helpText}
        >
          {checkboxList}
        </sl-checkbox-group>
      );
    }
  }
);

/* sl-checkbox-group, horizontal */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=13977-8487&t=3YWGeE0W4lVcmVDw-4',
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
      checkboxItems: figma.children(['Checkbox 1', 'Checkbox 2', 'Checkbox 3', 'Checkbox 4'])
    },
    example: ({ contained, label, required, tooltip, helpText, checkboxItems }) => {
      return (
        /* = ts_form_for ... do |f|
        /* .. = f.input :foo,
        /* .. as: :check_boxes,
        /* .. label: "Group label",
        /* .. collection: [ */
        /* ["Checkbox label 1", :checkbox-id-1, description: "Checkbox description", disabled: true], */
        /* ["Checkbox label 2", :checkbox-id-2, description: "Checkbox description"], */
        /* ],
        /* .. wrapper_html: {
        /* .... { horizontal: true,
        /* ...... attribute: value }  */
        <sl-checkbox-group
          name="group-name"
          horizontal
          contained={contained}
          label={label}
          required={required}
          label-tooltip={tooltip}
          help-text={helpText}
        >
          {checkboxItems}
        </sl-checkbox-group>
      );
    }
  }
);
