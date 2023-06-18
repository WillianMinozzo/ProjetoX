import { useTheme } from '@react-bulk/core';
import { Box, Grid, Text } from '@react-bulk/web';

import IconCustom from '../utils/helper';
import { UiTitleProps } from '../utils/types';

export default function UiTitle(props: UiTitleProps) {
  const { title, subtitle, icon } = props;
  const Icon = IconCustom(icon);
  const theme = useTheme();
  return (
    <>
      <Grid bg={theme.color('lighter')} xs={12} h={70} center style={{ overflow: 'hidden' }}>
        <Box center xs={1}>
          {Icon && <Icon size={35} />}
        </Box>
        <Box xs={11} p={1}>
          <Text variant="title" bold>
            {title}
          </Text>
          <Text variant="caption">{Boolean(subtitle) && subtitle}</Text>
        </Box>
      </Grid>
    </>
  );
}
