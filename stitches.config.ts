import { createStitches } from '@stitches/react';

export const { styled, css, createTheme, getCssText } = createStitches({
  theme: {
    colors: {
      gray100: '#444',
      gray200: '#888'
    }
  }
})

export const darkTheme = createTheme({
  colors: {
    gray100: '#ccc',
    gray200: '#ddd'
  }
})