import { useTheme } from '@react-bulk/core';
import { Box, Grid, Scrollable, Text } from '@react-bulk/web';

import FormMenu from '../../src/components/FormMenu';
import UiTitle from '../../src/components/UiTitle';

export default function Page() {
  const theme = useTheme();

  const menu = () => {
    return (
      <>
        {Array.from({ length: 40 }).map((i, index) => (
          <Box key={index} style={{ '&:hover': { bg: theme.color('primary') } }} border p={3} maxh={300}>
            <Box>
              <Text bold>Diplomacao</Text>
              <Text size={0.8}>Conheça o passo a passo para emissão do seu diploma!</Text>
            </Box>
          </Box>
        ))}
      </>
    );
  };

  const children = () => {
    return (
      <>
        <UiTitle icon="Megaphone" title="Avisos" />
      </>
    );
  };
  return <FormMenu body={children()} menuRight={menu()}></FormMenu>;
}
