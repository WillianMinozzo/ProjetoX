import { GraduationCap, Megaphone } from '@phosphor-icons/react';

import { Box, Grid, Scrollable, Text } from '@react-bulk/web';

import { UiTitle } from '../../src/components';

export default function Page() {
  return (
    <Box bg="white" corners={2} h="100%">
      <UiTitle icon={<Megaphone size={40} />} title="Avisos" />

      <Grid mt={3} xs={12} rounded>
        <Box xs={6}>
          <Scrollable>Mostrar o aviso</Scrollable>
        </Box>

        <Box xs={6}>
          <Scrollable>
            <Box border row noWrap>
              <Box ml={3}>
                <Text bold>Diplomacao</Text>
                <Text size={0.8}>Conheça o passo a passo para emissão do seu diploma!</Text>
              </Box>
            </Box>
          </Scrollable>
        </Box>
      </Grid>
    </Box>
  );
}
