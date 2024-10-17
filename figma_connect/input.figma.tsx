// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

/*  input type 'text' */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=2725-1451&t=xczOrvme3QjS06mn-4',
  {
    variant: { type: 'text' },
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
      helpText: figma.boolean('help text?', {
        true: figma.string('✏️ help text'),
        false: undefined
      }),
      prefix: figma.boolean('prefix?', {
        true: figma.children('Prefix'),
        false: undefined
      }),
      suffix: figma.boolean('suffix?', {
        true: figma.children('Suffix'),
        false: undefined
      })
    },
    example: ({ size, disabled, label, required, tooltip, contextNote, helpText, prefix, suffix }) => {
      return (
        /* = ts_form_for ... do |f|
        /* .. = f.input :foo,
        /* .. input_html: {
        /* .... type: "text",
        /* .... label: "Label text",
        /* .... "help-text": "Help text" ... }  */
        <sl-input
          type="text"
          size={size}
          disabled={disabled}
          label={label}
          required={required}
          label-tooltip={tooltip}
          context-note={contextNote}
          help-text={helpText}
        >
          {prefix}
          {suffix}
        </sl-input>
      );
    }
  }
);

/*  input type 'currency' */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=2725-1451&t=xczOrvme3QjS06mn-4',
  {
    variant: { type: 'currency' },
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
      helpText: figma.boolean('help text?', {
        true: figma.string('✏️ help text'),
        false: undefined
      })
    },
    example: ({ size, disabled, label, required, tooltip, contextNote, helpText }) => {
      return (
        /* = ts_form_for ... do |f|
        /* .. = f.input :foo,
        /* .. input_html: {
        /* .... type: "currency",
        /* .... label: "Label text",
        /* .... "help-text": "Help text" ... }  */
        <sl-input
          type="currency"
          size={size}
          disabled={disabled}
          label={label}
          required={required}
          label-tooltip={tooltip}
          context-note={contextNote}
          help-text={helpText}
        ></sl-input>
      );
    }
  }
);

/*  input type 'search' */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=2725-1451&t=xczOrvme3QjS06mn-4',
  {
    variant: { type: 'search' },
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
      helpText: figma.boolean('help text?', {
        true: figma.string('✏️ help text'),
        false: undefined
      }),
      clearable: figma.boolean('clearable?')
    },
    example: ({ size, disabled, label, required, tooltip, contextNote, helpText, clearable }) => {
      return (
        /* = ts_form_for ... do |f|
        /* .. = f.input :foo,
        /* .. input_html: {
        /* .... type: "search",
        /* .... label: "Label text",
        /* .... "help-text": "Help text" ... }  */
        <sl-input
          type="search"
          size={size}
          disabled={disabled}
          label={label}
          required={required}
          label-tooltip={tooltip}
          context-note={contextNote}
          help-text={helpText}
          clearable={clearable}
        ></sl-input>
      );
    }
  }
);

/*  input type 'date' */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=2725-1451&t=xczOrvme3QjS06mn-4',
  {
    variant: { type: 'date' },
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
      helpText: figma.boolean('help text?', {
        true: figma.string('✏️ help text'),
        false: undefined
      })
    },
    example: ({ size, disabled, label, required, tooltip, contextNote, helpText }) => {
      return (
        /* = ts_form_for ... do |f|
        /* .. = f.input :foo,
        /* .. input_html: {
        /* .... type: "date",
        /* .... label: "Label text",
        /* .... "help-text": "Help text" ... }  */
        <sl-input
          type="date"
          size={size}
          disabled={disabled}
          label={label}
          required={required}
          label-tooltip={tooltip}
          context-note={contextNote}
          help-text={helpText}
        ></sl-input>
      );
    }
  }
);

/*  input type 'email' */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=2725-1451&t=xczOrvme3QjS06mn-4',
  {
    variant: { type: 'email' },
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
      helpText: figma.boolean('help text?', {
        true: figma.string('✏️ help text'),
        false: undefined
      }),
      optionalIcon: figma.boolean('optional icon?')
    },
    example: ({ size, disabled, label, required, tooltip, contextNote, helpText, optionalIcon }) => {
      return (
        /* = ts_form_for ... do |f|
        /* .. = f.input :foo,
        /* .. input_html: {
        /* .... type: "email",
        /* .... label: "Label text",
        /* .... "help-text": "Help text" ... }  */
        <sl-input
          type="email"
          size={size}
          disabled={disabled}
          label={label}
          required={required}
          label-tooltip={tooltip}
          context-note={contextNote}
          help-text={helpText}
          optional-icon={optionalIcon}
        ></sl-input>
      );
    }
  }
);

/*  input type 'password' */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=2725-1451&t=xczOrvme3QjS06mn-4',
  {
    variant: { type: 'password' },
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
      helpText: figma.boolean('help text?', {
        true: figma.string('✏️ help text'),
        false: undefined
      })
    },
    example: ({ size, disabled, label, required, tooltip, contextNote, helpText }) => {
      return (
        /* = ts_form_for ... do |f|
        /* .. = f.input :foo,
        /* .. input_html: {
        /* .... type: "password",
        /* .... label: "Label text",
        /* .... "help-text": "Help text" ... }  */
        <sl-input
          type="password"
          size={size}
          disabled={disabled}
          label={label}
          required={required}
          label-tooltip={tooltip}
          context-note={contextNote}
          help-text={helpText}
          password-toggle
        ></sl-input>
      );
    }
  }
);

/*  input type 'tel' */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=2725-1451&t=xczOrvme3QjS06mn-4',
  {
    variant: { type: 'tel' },
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
      helpText: figma.boolean('help text?', {
        true: figma.string('✏️ help text'),
        false: undefined
      }),
      optionalIcon: figma.boolean('optional icon?')
    },
    example: ({ size, disabled, label, required, tooltip, contextNote, helpText, optionalIcon }) => {
      return (
        /* = ts_form_for ... do |f|
        /* .. = f.input :foo,
        /* .. input_html: {
        /* .... type: "tel",
        /* .... label: "Label text",
        /* .... "help-text": "Help text" ... }  */
        <sl-input
          type="tel"
          size={size}
          disabled={disabled}
          label={label}
          required={required}
          label-tooltip={tooltip}
          context-note={contextNote}
          help-text={helpText}
          optional-icon={optionalIcon}
        ></sl-input>
      );
    }
  }
);

/* text prefix */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=4860-10242&t=xczOrvme3QjS06mn-4',
  {
    variant: { type: 'text' },
    props: {
      prefixText: figma.string('✏️ prefix-text')
    },
    example: ({ prefixText }) => {
      return <span slot="prefix">{prefixText}</span>;
    }
  }
);

/* icon prefix */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=4860-10242&t=xczOrvme3QjS06mn-4',
  {
    variant: { type: 'icon' },
    props: {
      name: figma.nestedProps('❇️ Prefix Icon', {
        iconName: figma.string('icon-name')
      })
    },
    example: ({ name }) => {
      return <sl-icon slot="prefix" library="fa" name={name.iconName}></sl-icon>;
    }
  }
);

/* text suffix */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=4860-10250&t=xczOrvme3QjS06mn-4',
  {
    variant: { type: 'text' },
    props: {
      suffixText: figma.string('✏️ suffix-text')
    },
    example: ({ suffixText }) => {
      return <span slot="suffix">{suffixText}</span>;
    }
  }
);

/* icon suffix */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=4860-10250&t=xczOrvme3QjS06mn-4',
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
