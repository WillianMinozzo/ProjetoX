import { ThemeEditProps } from '@react-bulk/core';

const components: ThemeEditProps['components'] = {
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
};

export default components;
