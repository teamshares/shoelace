// @ts-nocheck

import React from 'react';
import figma from '@figma/code-connect';

/* <sl-icon> */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=6593-16323&t=DaTJhUJKLkDLJ0Zl-4',
  {
    props: {
      style: figma.enum('style', {
        solid: 'fas-',
        regular: undefined,
        light: 'fal-',
        thin: 'fat-'
      }),
      scale: figma.enum('scale', {
        '.75x': 'text-xs',
        '.875x': 'text-sm',
        '1x': 'text-base',
        '1.25x': 'text-xl',
        '1.5x': 'text-2xl',
        '2x': 'text-[32px]',
        '2.5x': 'text-[40px]',
        '3x': 'text-5xl',
        '4x': 'text-[64px]',
        '5x': 'text-[80px]',
        '6x': 'text-8xl',
        '7x': 'text-[112px]',
        '8x': 'text-9xl',
        '9x': 'text-[144px]',
        '10x': 'text-[160px]'
      }),
      iconName: figma.string('icon-name')
    },
    example: ({ style, scale, iconName }) => {
      return (
        /* Prepend style value to name, e.g. name='fal-user' */
        <sl-icon library="fa" style={style} class={scale} name={iconName}></sl-icon>
      );
    }
  }
);

/* <sl-icon slot="prefix"> */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=12989-18337&t=XQ5ktD0B254PC5m2-4',
  {
    props: {
      style: figma.enum('style', {
        solid: 'fas-',
        regular: undefined,
        light: 'fal-',
        thin: 'fat-'
      }),
      iconName: figma.string('icon-name')
    },
    example: ({ style, iconName }) => {
      return (
        /* Prepend style value to name, e.g. name='fal-user' */
        <sl-icon slot="prefix" library="fa" style={style} name={iconName}></sl-icon>
      );
    }
  }
);

/* <sl-icon slot="suffix"> */
figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=12991-2572&t=1cV1fw0FXz0L8Pr3-4',
  {
    props: {
      style: figma.enum('style', {
        solid: 'fas-',
        regular: undefined,
        light: 'fal-',
        thin: 'fat-'
      }),
      iconName: figma.string('icon-name')
    },
    example: ({ style, iconName }) => {
      return (
        /* Prepend style value to name, e.g. name='fal-user' */
        <sl-icon slot="suffix" library="fa" style={style} name={iconName}></sl-icon>
      );
    }
  }
);

/* <sl-icon> for Icon Button and Circle Button */

figma.connect(
  'https://www.figma.com/design/BrXOVNTglDWg03DL7ZZeW1/Teamshares-UI?node-id=13295-17509&t=6MS2mSbs4kwWAQ5V-4',
  {
    props: {
      style: figma.enum('style', {
        solid: 'fas-',
        regular: undefined,
        light: 'fal-',
        thin: 'fat-'
      }),
      iconName: figma.string('icon-name')
    },
    example: ({ style, iconName }) => {
      return (
        /* Prepend style value to name, e.g. name='fal-user' */
        <sl-icon library="fa" style={style} name={iconName}></sl-icon>
      );
    }
  }
);
