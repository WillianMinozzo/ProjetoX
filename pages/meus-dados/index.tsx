import { useState } from 'react';

import { useTheme } from '@react-bulk/core';
import { Box, Card, Divider, Grid, Image, Input, Select, Tabs, Text } from '@react-bulk/web';

import { FormSingle, UiTitle } from '../../src/components';

export default function Page() {
  const theme = useTheme();

  const [tab, setTab] = useState(0);

  return (
    <FormSingle>
      <UiTitle
        icon="UserCircle"
        title="Meus Dados"
        subtitle="Mantenha seus dados sempre atualizados. Para alterar os dados não editáveis nesta tela,envie os documentos comprobatórios pelo Serviço de Atenção."
      />
      <Box row style={{ overflow: 'hidden' }}>
        <Box m={3}>
          <Image source="/perfil.jpg" w={100} h={100} circular></Image>
        </Box>
        <Box row align="center">
          <Box ml={3}>
            <Text>Matricula: 6969696969</Text>
            <Text>Nome Completo: jose da silva pereira</Text>
            <Text>Nome Social</Text>
          </Box>

          <Box ml={3}>
            <Text>CPF</Text>
            <Box row>
              <Text>Documento de Identificação</Text>
              <Text>Orgão Emissor</Text>
            </Box>
            <Text>E-mail</Text>
          </Box>
        </Box>
      </Box>
      <Card p={0} pl={3}>
        <Tabs
          color="primary"
          variant="group"
          onChange={(e, newValue) => setTab(+newValue)}
          value={tab}
          tabs={[{ label: 'Meus Dados' }, { label: 'Trocar Senha' }]}
        />
      </Card>
      {tab === 0 && (
        <Box p={3} borderTop="1px solid primary">
          <Text bold>Endereço Residencial</Text>
          <Divider mt={3} />
          <Grid mt={3} gap={3}>
            <Box>
              <Input label="CEP" />
            </Box>
            <Box>
              <Input label="Endereço" />
            </Box>
            <Box>
              <Input label="Número" />
            </Box>
            <Box>
              <Input label="Complemento" />
            </Box>
            <Box maxw={300}>
              <Select
                label="UF"
                options={[
                  { value: 1, label: 'Rio' },
                  { value: 2, label: 'Sao Paulo' },
                ]}
              />
            </Box>
            <Box>
              <Select
                label="Cidade"
                options={[
                  { value: 1, label: 'Caxias' },
                  { value: 2, label: 'Sao Joao de meriti' },
                ]}
              />
            </Box>
            <Box>
              <Input label="Bairro" />
            </Box>
            <Box>
              <Select
                label="País"
                options={[
                  { value: 1, label: 'Brasil' },
                  { value: 2, label: 'Estados Unidos' },
                ]}
              />
            </Box>
          </Grid>
        </Box>
      )}

      {tab === 1 && (
        <Box borderTop="1px solid primary" p={3}>
          Trocar senha
        </Box>
      )}
    </FormSingle>
  );
}
