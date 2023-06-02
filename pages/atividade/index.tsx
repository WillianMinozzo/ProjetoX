import { Box, Button, Divider, Text } from '@react-bulk/web';
import { FileText } from '@phosphor-icons/react';
import UiTitle from '../../src/components/UiTitle';

export default function Page({ children }: any) {
  return (
    <Box bg="white" h="100%" w="70%" corners={2} ml="10%">
      <UiTitle icon={<FileText size={40} />} title="Atividade Complementar" subtitle="Aqui estão suas atividades complementares." />
      <Box row justifyContent="space-between" p={3}>
        <Box>
          <Text>Quantidade de horas para aprovação: 0</Text>
          <Text> Somatório de horas deferidas: 0</Text>
        </Box>

        <Box>
          <Button variant="outline">Cadastrar Atividade Completar</Button>
        </Box>
      </Box>
    </Box>
  );
}
