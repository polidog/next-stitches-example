import { styled } from '../../stitches.config';

const greenStyle = {
  backgroundColor: 'Green',
  border: '1px solid #fff',
  '&:hover': {
    backgroundColor: 'DarkGreen',
  },
}

const grayStyle = {
  backgroundColor: '$gray100',
  border: '1px solid #333',
  '&:hover': {
    backgroundColor: '$gray200',
  },
}

export const Button = styled('button', {
  borderRadius: '20px',
  fontSize: '24px',
  padding: '15px',
  '&:hover': {
    cursor: 'pointer'
  },
  variants: {
    color: {
      green: { ...greenStyle },
      gray: { ...grayStyle },
    }
  }
});