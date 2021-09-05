import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        background: '#282A36',
        secondaryBackground: '#353f5c',
        textPrimary: '#FFFFFF',
        link: '#8BE9FD',
        accent: '#ff79c6',
        secondaryAccent: '#bd93f9',
        comment: '#5c6c9b',
        string: '#5c6c9b',
        success: '#50FA7B',
        alert: '#FF5555',
      },
      media: {
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
      },
      space: {
        s4: '4px',
        s8: '8px',
        s12: '12px',
        s16: '16px',
        s24: '24px',
        s32: '32px',
        s40: '40px',
        s48: '48px',
        s64: '64px',
        s80: '80px',
        s96: '96px',
        s160: '160px',
      },
      fontSizes: {
        body: '1rem',
        h2: '1.25rem',
        h1: '1.75rem',
      },
      sizes: {
        s4: '4px',
        s8: '8px',
        s12: '12px',
        s16: '16px',
        s24: '24px',
        s32: '32px',
        s40: '40px',
        s48: '48px',
        s64: '64px',
        s80: '80px',
        s96: '96px',
        s160: '160px',
      },
    },
    media: {
      bp1: '(min-width: 480px)',
    },
    utils: {
      marginX: (value: any) => ({ marginLeft: value, marginRight: value }),
    },
  });
