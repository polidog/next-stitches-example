import { createStitches } from '@stitches/react';

const { styled } = createStitches({
  media: {
    mobile: '(max-width: 640px)',
    pc: '(min-width: 768px)',
 },
});

export const BaseContainer = styled('div', {
  padding: 0,
  margin: 0,
  background: '#cefcef',
  '@mobile': {
    width: '100%',
    height: '100vh'
  },
  '@pc': {
    width: '1024px',
    margin: '0 auto',
  }
})