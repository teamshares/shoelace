// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

/* 'primary' alert */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=5387-10977&t=CpW6E8vghe64ypz8-4',
  {
    variant: { variant: 'primary' },
    props: {
      header: figma.boolean('header?', {
        true: figma.children('alert-header'),
        false: undefined
      }),
      message: figma.string('✏️ message'),
      link: figma.boolean('link?', {
        true: figma.children('alert-link'),
        false: undefined
      }),
      closable: figma.boolean('toast?', {
        true: figma.boolean('closable? (toast)'),
        false: figma.boolean('closable? (inline)')
      })
    },
    example: ({ header, message, link, closable }) => {
      return (
        <sl-alert open variant="primary" closable={closable}>
          <sl-icon slot="icon" library="fa" name="fas-circle-info"></sl-icon>
          {header}
          {message}
          {link}
        </sl-alert>
      );
    }
  }
);

/*  'success' alert */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=5387-10977&t=CpW6E8vghe64ypz8-4',
  {
    variant: { variant: 'success' },
    props: {
      header: figma.boolean('header?', {
        true: figma.children('alert-header'),
        false: undefined
      }),
      message: figma.string('✏️ message'),
      link: figma.boolean('link?', {
        true: figma.children('alert-link'),
        false: undefined
      }),
      closable: figma.boolean('toast?', {
        true: figma.boolean('closable? (toast)'),
        false: figma.boolean('closable? (inline)')
      })
    },
    example: ({ header, message, link, closable }) => {
      return (
        <sl-alert open variant="success" closable={closable}>
          <sl-icon slot="icon" library="fa" name="fas-circle-check"></sl-icon>
          {header}
          {message}
          {link}
        </sl-alert>
      );
    }
  }
);

/*  'warning' alert */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=5387-10977&t=CpW6E8vghe64ypz8-4',
  {
    variant: { variant: 'warning' },
    props: {
      header: figma.boolean('header?', {
        true: figma.children('alert-header'),
        false: undefined
      }),
      message: figma.string('✏️ message'),
      link: figma.boolean('link?', {
        true: figma.children('alert-link'),
        false: undefined
      }),
      closable: figma.boolean('toast?', {
        true: figma.boolean('closable? (toast)'),
        false: figma.boolean('closable? (inline)')
      })
    },
    example: ({ header, message, link, closable }) => {
      return (
        <sl-alert open variant="warning" closable={closable}>
          <sl-icon slot="icon" library="fa" name="fas-triangle-exclamation"></sl-icon>
          {header}
          {message}
          {link}
        </sl-alert>
      );
    }
  }
);

/*  'danger' alert */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=5387-10977&t=CpW6E8vghe64ypz8-4',
  {
    variant: { variant: 'danger' },
    props: {
      header: figma.boolean('header?', {
        true: figma.children('alert-header'),
        false: undefined
      }),
      message: figma.string('✏️ message'),
      link: figma.boolean('link?', {
        true: figma.children('alert-link'),
        false: undefined
      }),
      closable: figma.boolean('toast?', {
        true: figma.boolean('closable? (toast)'),
        false: figma.boolean('closable? (inline)')
      })
    },
    example: ({ header, message, link, closable }) => {
      return (
        <sl-alert open variant="danger" closable={closable}>
          <sl-icon slot="icon" library="fa" name="fas-circle-exclamation"></sl-icon>
          {header}
          {message}
          {link}
        </sl-alert>
      );
    }
  }
);

/*  alert-header */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=13727-4243&t=1t9I5weUxQQWez0d-4',
  {
    props: {
      header: figma.string('✏️ header')
    },
    example: ({ header }) => {
      return <div slot="header">{header}</div>;
    }
  }
);

/*  alert-link */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=13727-4245&t=86poNs8TNe4UWDAp-4',
  {
    props: {
      link: figma.string('✏️ link')
    },
    example: ({ link }) => {
      return (
        <div>
          <a href="#" class="ts-text-link">
            {link}
          </a>
        </div>
      );
    }
  }
);
