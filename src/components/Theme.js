import { extendTheme } from '@chakra-ui/react';

const Theme = extendTheme({
  fonts: {
    heading: 'neue-haas-unica, sans-serif',
    body: 'neue-haas-unica, sans-serif',
    button: 'neue-haas-unica, sans-serif',
    tag: 'neue-haas-unica, sans-serif',
  },
  borders: {
    color: '#242426',
    '2px': '2px solid #242426',
  },
  box: {
    borderColor: '#242426',
  },
  styles: {
    global: {
      body: {
        bg: '#131314',
        color: '#C0BECA',
      },
      div: {
        borderColor: '#333338',
      },
      button: {
        borderColor: '#333338',
        bg: '',
      },
    },
  },
});

export default Theme;
