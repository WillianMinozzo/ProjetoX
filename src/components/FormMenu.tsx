import { useTheme } from '@react-bulk/core';
import { Box, Grid, Scrollable } from '@react-bulk/web';

import { FormMenuProps } from '../utils/types';

export default function FormMenu({ children, menuRight }: FormMenuProps) {
  const theme = useTheme();

  return (
    <Grid h="100%" corners={2} xs={12} style={{ overflow: 'hidden' }}>
      <Scrollable bg={theme.colors.common.white} sm={12} lg={8} minh={200}>
        {children}
      </Scrollable>

      <Box h="inherit" sm={12} lg={4} minh={50} style={{ marginTop: 12, md: { marginTop: 0, paddingLeft: 12 } }}>
        <Scrollable bg={theme.colors.common.white}>{menuRight}</Scrollable>
      </Box>
    </Grid>
  );
}
