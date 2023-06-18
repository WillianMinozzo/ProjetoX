import { Box, Button, Image } from '@react-bulk/web';

import { FormSingle, UiTitle } from '../../src/components';

export default function Page() {
  return (
    <FormSingle>
      <UiTitle icon="IdentificationCard" title="Carteira Estudantil" subtitle="Acesso ao pedido de carteirinha estudantil." />
      <Box center mt={3}>
        <Button size="xlarge" label="Solicite a Sua"></Button>
      </Box>
      <Box p={3} center>
        <Image source="carteirinha.png" w="50%" />
      </Box>
    </FormSingle>
  );
}
