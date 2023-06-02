import { Box, Card, Grid, Image } from '@react-bulk/web';
import { useTheme } from '@react-bulk/core';
import UiTitle from '../../src/components/UiTitle';
import { UserCircle } from '@phosphor-icons/react';

export default function Page() {
  const theme = useTheme();
  return (
    <Box bg="white" h="100%" w="70%" corners={2} ml="10%">
      <UiTitle
        icon={<UserCircle size={40} />}
        title="Meus Dados"
        subtitle="Mantenha seus dados sempre atualizados. Para alterar os dados não editáveis nesta tela,envie os documentos comprobatórios pelo Serviço de Atenção."
      />
      <Box m={3}>
        <Image source="/perfil.jpg" w={100} h={100} circular></Image>
      </Box>
    </Box>
  );
}
