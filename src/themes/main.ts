import { ThemeOptionalProps } from '@react-bulk/core';
import { inspect } from 'util';
import colors = module;

const main: ThemeOptionalProps = {
  mode: 'main',

  colors: {
    primary: '#a73866',
    light: '#dc6894',
    dark: '#682a3c',
    lighter: '#ff99c4',
    darker: '#3a0016',
    secondary: '#aa00ff',
    white: '#ffffff',
  } as any,

  components: {
    Card: {
      defaultProps: {
        corners: 3,
      },
    } as any,
    Button: {
      selected: colors.lighter,
    },
  } as any,
};

export default main;
