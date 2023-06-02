import { Box, Divider, Grid, Text } from '@react-bulk/web';
import { FileText } from '@phosphor-icons/react';
import { ReactNode } from 'react';

interface UiTitleProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}

export default function UiTitle({ title, subtitle, icon }: UiTitleProps) {
  return (
    <>
      <Grid xs={12} p={3} style={{ overflow: 'hidden' }}>
        <Box center xs={1}>
          {icon}
        </Box>
        <Box xs={10} ml={3}>
          <Text variant="h4">{title}</Text>
          {Boolean(subtitle) && <Text variant="h8">{subtitle}</Text>}
        </Box>
      </Grid>
      <Divider mx={3} />
    </>
  );
}
