import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  h2: { fontSize: '$h2', fontWeight: 'normal' },
  a: {
    '&:hover, &:focus': {
      textDecoration: 'underline',
    },
    cursor: 'pointer',
    color: '$link',
  },
  body: {
    caretColor: '$secondaryAccent',
  },
});

export default globalStyles;
