import { Box, Divider, Text } from '@react-bulk/web';
import { Books } from '@phosphor-icons/react';
import UiTitle from '../../src/components/UiTitle';

export default function Page() {
  return (
    <Box bg="white" h="100%" w="70%" corners={2} ml="10%">
      <UiTitle title="Bibliotecas Digitais" icon={<Books size={35} />} />
      <Box p={3}>
        <Text>
          A Unyleya Educacional libera aos seus alunos, <Text bold>sem custo adicional</Text>, o acesso às Bibliotecas Digitais, para
          aprimoramento e desenvolvimento pessoal, além destas colaborarem ao aprendizado dos cursos regulares.
        </Text>
        <Text mt={3}>
          São <Text bold>milhares de títulos que </Text>podem ser acessados por quaisquer dispositivos, de forma fácil e rápida.
        </Text>

        <Text mt={3}>Dúvidas: biblioteca@unyleya.edu.br</Text>
      </Box>
      <Divider mx={3} />
      <Box row p={3}>
        <Text>100% online</Text>
        <Text ml={3}>Disponível 24h</Text>
      </Box>
    </Box>
  );
}