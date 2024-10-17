// @ts-nocheck

import figma from '@figma/code-connect';

/* sl-card */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=14175-9261&t=98jD5uyh8t6aakic-4',
  {
    props: {
      noShadow: figma.boolean('no shadow?'),
      body: figma.children('Body'),
      header: figma.boolean('header?', {
        true: figma.children('Header'),
        false: undefined
      }),
      footer: figma.boolean('footer?', {
        true: figma.children('Footer'),
        false: undefined
      })
    },
    example: ({ noShadow, body, header, footer }) => {
      return (
        <sl-card noShadow={noShadow}>
          {header}
          {body}
          {footer}
        </sl-card>
      );
    }
  }
);

/* sl-card body */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=14176-9342&t=NxCe3yCE4wrrJ4Nl-4',
  {
    props: {
      bodyContent: figma.children('*')
    },
    example: ({ bodyContent }) => {
      return <div>{bodyContent}</div>;
    }
  }
);

/* sl-card header */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=14176-9349&t=NxCe3yCE4wrrJ4Nl-4',
  {
    props: {
      headerContent: figma.children('*')
    },
    example: ({ headerContent }) => {
      return <div slot="header">{headerContent}</div>;
    }
  }
);

/* sl-card footer */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=14176-9354&t=NxCe3yCE4wrrJ4Nl-4',
  {
    props: {
      footerContent: figma.children('*')
    },
    example: ({ footerContent }) => {
      return <div slot="footer">{footerContent}</div>;
    }
  }
);
