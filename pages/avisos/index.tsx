import { useTheme } from '@react-bulk/core';
import { Box, Grid, Scrollable, Text } from '@react-bulk/web';

import UiTitle from '../../src/components/UiTitle';

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <UiTitle title="Avisos" icon={'Books'} />
      <Grid xs={12}>
        <Box bg="white" xl={8} md={12} sm={12}></Box>
        <Box xl={4} md={12} sm={12}>
          <Scrollable bg="white" style={{ marginLeft: 0, marginTop: 12, xl: { marginLeft: 12, marginTop: 0 } }}>
            {Array.from({ length: 1 }).map((i, index) => (
              <Box key={index} style={{ '&:hover': { bg: theme.color('primary') } }} border p={3} maxh={300}>
                <Box>
                  <Text bold>Diplomacao</Text>
                  <Text size={0.8}>Conheça o passo a passo para emissão do seu diploma!</Text>
                </Box>
              </Box>
            ))}
          </Scrollable>
        </Box>
      </Grid>
    </>
  );
}
