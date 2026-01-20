/**
 * Theme config for default and mello modes.
 */

const MELLO_GREEN = '#1A7B39';

export const THEME = {
  default: {
    bg: 'white',
    text: 'inherit',
    showBackground: true,
  },
  mello: {
    bg: MELLO_GREEN,
    text: '#0b3518',
    showBackground: false,
  },
} as const;

export type ThemeMode = keyof typeof THEME;
