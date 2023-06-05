import { ThemeOptionalProps } from '@react-bulk/core';

const main: ThemeOptionalProps = {
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
      variants: {
        red: {
          true: {
            root: {
              backgroundColor: 'red',
            },
          },
        },
      },
    },

    Box: {
      variants: {
        formSingle: {
          true: {
            root: {
              backgroundColor: 'white',
              height: '100%',
              width: '70%',
              corners: 2,
              marginLeft: '10%',
            },
          },
        },
      },
    },
  } as any,
};

export default main;
