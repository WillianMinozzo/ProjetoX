import { useTheme } from '@react-bulk/core';
import { Box, Divider, Grid, Text } from '@react-bulk/web';

import IconCustom from '../utils/helper';
import { UiTitleProps } from '../utils/types';

export default function UiTitle(props: UiTitleProps) {
  const { title, subtitle, icon, divider = true } = props;
  const Icon = IconCustom(icon);
  const theme = useTheme();
  return (
    <>
      <Grid bg={theme.colors.common.white} xs={12} p={3} style={{ overflow: 'hidden' }}>
        <Box center xs={1}>
          {Icon && <Icon size={35} />}
        </Box>
        <Box xs={10}>
          <Text variant="h4">{title}</Text>
          {Boolean(subtitle) && <Text variant="h8">{subtitle}</Text>}
        </Box>
      </Grid>
      {Boolean(divider) && <Divider mx={3} />}
    </>
  );
}
