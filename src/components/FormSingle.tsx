import { useTheme } from '@react-bulk/core';
import { Box, useDimensions } from '@react-bulk/web';

import useIsMobile from '../hooks/useIsMobile';

export default function FormSingle({ children }: any) {
  const theme = useTheme();

  return (
    <Box bg={theme.colors.common.white} h="100%" corners={2} style={{ w: '100%', ml: '0', lg: { w: '70%', ml: '10%' } }}>
      {children}
    </Box>
  );
}
