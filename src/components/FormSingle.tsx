import { useTheme } from '@react-bulk/core';
import { Box } from '@react-bulk/web';

import { FormSingleProps } from '../utils/types';

export default function FormSingle({ children }: FormSingleProps) {
  const theme = useTheme();

  return (
    <Box bg={theme.colors.common.white} h="100%" corners={2} style={{ w: '100%', ml: '0', lg: { w: '70%', ml: '120px' } }}>
      {children}
    </Box>
  );
}
