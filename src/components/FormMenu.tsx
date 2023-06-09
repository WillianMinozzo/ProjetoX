import { useTheme } from '@react-bulk/core';
import { Box, Grid, Scrollable, Text } from '@react-bulk/web';

import { FormRightProps, PagesProps } from '../utils/types';

import { FormSingle } from './index';
import UiTitle from './UiTitle';

export default function FormMenu({ body, menuRight }: FormRightProps) {
  const theme = useTheme();
  return (
    <Grid h="100%" corners={2} xs={12}>
      <Box bg={theme.colors.common.white} xs={8}>
        {body}
      </Box>
      <Box p={0} pl={3} xs={4}>
        <Box h="100%" bg={theme.colors.common.white}>
          {menuRight}
        </Box>
      </Box>
    </Grid>
  );
}
