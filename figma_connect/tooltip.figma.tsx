// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

/* placement 'top' tooltips */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=8106-945&t=j7gCllmM5d054D0f-4',
  {
    variant: { placement: 'top' },
    props: {
      content: figma.string('✏️ content'),
      placement: figma.nestedProps('top', {
        topPlacement: figma.enum('arrow-placement', {
          default: 'top',
          start: 'top-start',
          end: 'top-end'
        })
      })
    },
    example: ({ content, placement }) => {
      return <sl-tooltip content={content} placement={placement.topPlacement}></sl-tooltip>;
    }
  }
);

/* placement 'bottom' tooltips */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=8106-945&t=j7gCllmM5d054D0f-4',
  {
    variant: { placement: 'bottom' },
    props: {
      content: figma.string('✏️ content'),
      placement: figma.nestedProps('bottom', {
        bottomPlacement: figma.enum('arrow-placement', {
          default: 'bottom',
          start: 'bottom-start',
          end: 'bottom-end'
        })
      })
    },
    example: ({ content, placement }) => {
      return <sl-tooltip content={content} placement={placement.bottomPlacement}></sl-tooltip>;
    }
  }
);

/* placement 'right' tooltips */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=8106-945&t=j7gCllmM5d054D0f-4',
  {
    variant: { placement: 'right' },
    props: {
      content: figma.string('✏️ content'),
      placement: figma.nestedProps('right', {
        rightPlacement: figma.enum('arrow-placement', {
          default: 'right',
          start: 'right-start',
          end: 'right-end'
        })
      })
    },
    example: ({ content, placement }) => {
      return <sl-tooltip content={content} placement={placement.rightPlacement}></sl-tooltip>;
    }
  }
);

/* placement 'left' tooltips */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=8106-945&t=j7gCllmM5d054D0f-4',
  {
    variant: { placement: 'left' },
    props: {
      content: figma.string('✏️ content'),
      placement: figma.nestedProps('left', {
        leftPlacement: figma.enum('arrow-placement', {
          default: 'left',
          start: 'left-start',
          end: 'left-end'
        })
      })
    },
    example: ({ content, placement }) => {
      return <sl-tooltip content={content} placement={placement.leftPlacement}></sl-tooltip>;
    }
  }
);
