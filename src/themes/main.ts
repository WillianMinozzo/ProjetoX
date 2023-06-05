import { ThemeEditProps } from '@react-bulk/core';

import components from './components';

const main: ThemeEditProps = {
  colors: {
    primary: '#a73866',
    light: '#dc6894',
    dark: '#682a3c',
    lighter: '#ff99c4',
    darker: '#3a0016',
    secondary: '#aa00ff',
    white: '#ffffff',
  } as any,

  components: { ...components },
};

export default main;
