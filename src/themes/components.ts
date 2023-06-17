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
};

export default components;
