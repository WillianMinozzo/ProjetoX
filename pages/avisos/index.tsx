import { useTheme } from '@react-bulk/core';
import { Box, Text } from '@react-bulk/web';

import { FormMenu, UiTitle } from '../../src/components';

export default function Page() {
  const theme = useTheme();

  const menu = () => {
    return (
      <Box>
        {Array.from({ length: 10 }).map((i, index) => (
          <Box key={index} style={{ '&:hover': { bg: theme.color('primary') } }} border p={3} maxh={300}>
            <Box>
              <Text bold>{i}Diplomacao</Text>
              <Text size={0.8}>Conheça o passo a passo para emissão do seu diploma!</Text>
            </Box>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <FormMenu menuRight={menu()}>
      <>
        <UiTitle icon="Megaphone" title="Avisos" />
      </>
    </FormMenu>
  );
}
