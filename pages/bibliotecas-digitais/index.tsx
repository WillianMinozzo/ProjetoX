import { Box, Divider, Text } from '@react-bulk/web';

import { FormSingle, UiTitle } from '../../src/components';

export default function Page() {
  return (
    <FormSingle>
      <UiTitle title="Bibliotecas Digitais" icon={'Books'} />
      <Box p={3}>
        <Text>
          A UnyXYZ Educacional libera aos seus alunos, <Text bold>sem custo adicional</Text>, o acesso às Bibliotecas Digitais, para
          aprimoramento e desenvolvimento pessoal, além destas colaborarem ao aprendizado dos cursos regulares.
        </Text>
        <Text mt={3}>
          São <Text bold>milhares de títulos que </Text>podem ser acessados por quaisquer dispositivos, de forma fácil e rápida.
        </Text>

        <Text mt={3}>Dúvidas: biblioteca@unyxyz.edu.br</Text>
      </Box>
      <Divider mx={3} />
      <Box row p={3}>
        <Text>100% online</Text>
        <Text ml={3}>Disponível 24h</Text>
      </Box>
    </FormSingle>
  );
}
