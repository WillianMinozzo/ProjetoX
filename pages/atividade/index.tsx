import { Box, Button, Text } from '@react-bulk/web';

import { FormSingle, UiTitle } from '../../src/components';

export default function Page({ children }: any) {
  return (
    <FormSingle>
      <UiTitle icon="FileText" title="Atividade Complementar" subtitle="Aqui estão suas atividades complementares." />
      <Box row justifyContent="space-between" p={3}>
        <Box>
          <Text>Quantidade de horas para aprovação: 0</Text>
          <Text> Somatório de horas deferidas: 0</Text>
        </Box>

        <Box>
          <Button variant="outline">Cadastrar Atividade Completar</Button>
        </Box>
      </Box>
    </FormSingle>
  );
}
