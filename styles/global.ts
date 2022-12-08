import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': { 
    margin: 0, 
    padding: 0, 
    fontFamily: 'Noto Sans JP' 
  },
  '@font-face': [{
    fontFamily: 'Noto Sans JP',
    src: "url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&display=swa')"
  }]
})