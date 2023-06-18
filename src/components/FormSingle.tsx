import { useTheme } from '@react-bulk/core';
import { Box, Grid } from '@react-bulk/web';

import { FormSingleProps } from '../utils/types';

export default function FormSingle({ children }: FormSingleProps) {
  const theme = useTheme();

  return (
    <Grid
      bg={theme.colors.common.white}
      h="100%"
      corners={2}
      xs={12}
      style={{ overflow: 'hidden', w: '100%', ml: '0', lg: { w: '70%', ml: '120px' } }}
    >
      <Box xs={12}>{children}</Box>
    </Grid>
  );
}
