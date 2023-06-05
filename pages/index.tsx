import { CalendarBlank, GraduationCap } from '@phosphor-icons/react';

import { useTheme } from '@react-bulk/core';
import { Box, Button, Card, Grid, Image, Scrollable, Text } from '@react-bulk/web';

export default function Home() {
  const theme = useTheme();

  return (
    <Grid h={'100%'} xs={12} rounded>
      <Box bg="white" border="1px solid red" xl={8} md={12} sm={12} corners={2}>
        <Box h={300} border="1px solid purple">
          <Image
            alt="Uny"
            source="https://cdn-static.unyleya.xyz/manutencao/upload/esquemaconfiguracao/esquema_configuracao_15e9601632c9f9.jpeg"
          />
        </Box>
        <Grid xs={12} border="1px solid green">
          <Box minh={'100px'} xl={6} md={12} sm={12} border="1px solid blue">
            Ambientação
          </Box>
          <Scrollable minh={'100px'} xl={6} md={12} sm={12} border="1px solid red">
            <Card bg={theme.color('primary')}>
              <Box row noWrap>
                <Box color="white">{<GraduationCap size={32} />}</Box>
                <Box ml={3}>
                  <Text bold>Diplomacao</Text>
                  <Text>Conheça o passo a passo para emissão do seu diploma!</Text>
                </Box>
              </Box>
            </Card>
          </Scrollable>
        </Grid>
      </Box>
      <Box xl={4} md={12} sm={12} border>
        <Scrollable bg="white" corners={2} style={{ marginLeft: 0, xl: { 'margin-left': '12px' } }}>
          <Text bold center mt={3}>
            Disciplinas
          </Text>
          <Card bg="#f9f2f5" mt={3}>
            <Text>Nome da disciplina</Text>
            <Text mt={1}>Professor:</Text>
            <Text mt={1}>Verifique as datas das atividades para cumprir os prazos:</Text>
            <Box mt={3} align="start">
              <Button size="small" variant="text" startAddon={<CalendarBlank size={14} />}>
                Ver datas de atividades
              </Button>
            </Box>
          </Card>
        </Scrollable>
      </Box>
    </Grid>
  );
}
