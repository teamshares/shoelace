// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

/* breadcrumb */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=7400-7322&t=86poNs8TNe4UWDAp-4',
  {
    props: {
      breadcrumbItemFirst: figma.boolean('prefix', {
        true: figma.children('*prefix'),
        false: figma.children('*1')
      }),
      breadcrumbItemsRest: figma.children(['Breadcrumb 2', 'Breadcrumb 3', 'Breadcrumb 4'])
    },
    example: ({ breadcrumbItemFirst, breadcrumbItemsRest }) => {
      <sl-breadcrumb>
        {breadcrumbItemFirst}
        {breadcrumbItemsRest}
      </sl-breadcrumb>;
    }
  }
);

/* breadcrumb-item */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=7400-7168&t=86poNs8TNe4UWDAp-4',
  {
    props: {
      label: figma.string('✏️ label')
    },
    example: ({ label }) => {
      return <sl-breadcrumb-item>{label}</sl-breadcrumb-item>;
    }
  }
);

/* breadcrumb-item, with prefix */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=7400-7175&t=86poNs8TNe4UWDAp-4',
  {
    props: {
      label: figma.string('✏️ label')
    },
    example: ({ label }) => {
      return (
        <sl-breadcrumb-item>
          <sl-icon slot="prefix" library="fa" name="fas-arrow-left"></sl-icon>
          {label}
        </sl-breadcrumb-item>
      );
    }
  }
);
