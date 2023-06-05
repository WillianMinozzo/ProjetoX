import { ReactNode } from 'react';

import { Books } from '@phosphor-icons/react';

import { useTheme } from '@react-bulk/core';
import { Box, Divider, Grid, Text } from '@react-bulk/web';

import IconCustom from '../utils/helper';

interface UiTitleProps {
  title: string;
  subtitle?: string;
  icon?: string;
}

export default function UiTitle({ title, subtitle, icon }: UiTitleProps) {
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
      <Divider mx={3} />
    </>
  );
}
