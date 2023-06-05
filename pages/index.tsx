import { Alien, Bell, Books, CalendarBlank, GraduationCap } from '@phosphor-icons/react';

import { useTheme } from '@react-bulk/core';
import { Box, Button, Card, Grid, Image, Scrollable, Text } from '@react-bulk/web';

export default function Home() {
  const theme = useTheme();

  return (
    <Grid h="100%" xs={12} rounded>
      <Box bg="white" xl={8} md={12} sm={12} corners={2}>
        <Box h={400}>
          <Image
            alt="Uny"
            source="https://cdn-static.unyleya.xyz/manutencao/upload/esquemaconfiguracao/esquema_configuracao_15e9601632c9f9.jpeg"
          />
        </Box>
        <Grid xs={12} style={{ marginTop: 12, xl: { 'margin-top': 0 } }}>
          <Box minh="100px" xl={6} md={12} sm={12}>
            <Box p={3} bg={theme.color('lighter')} row justifyContent="space-between">
              <Box align="center">
                <Text bold>Ambientação</Text>
              </Box>
              <Box>
                <Alien size={32} />
              </Box>
            </Box>
          </Box>
          <Scrollable style={{ borderLeft: 1 }} minh={'100px'} xl={6} md={12} sm={12}>
            <Box p={3} bg={theme.color('lighter')} row justifyContent="space-between">
              <Box align="center">
                <Text bold>Avisos</Text>
              </Box>
              <Box>
                <Bell size={32} />
              </Box>
            </Box>
            <Card>
              <Box row noWrap>
                <Box>{<GraduationCap size={32} />}</Box>
                <Box ml={3}>
                  <Text bold>Diplomacao</Text>
                  <Text size={0.8}>Conheça o passo a passo para emissão do seu diploma!</Text>
                </Box>
              </Box>
            </Card>
          </Scrollable>
        </Grid>
      </Box>
      <Box xl={4} md={12} sm={12}>
        <Scrollable bg="white" corners={2} style={{ marginLeft: 0, marginTop: 12, xl: { marginLeft: 12, marginTop: 0 } }}>
          <Box p={3} bg={theme.color('lighter')} row justifyContent="space-between">
            <Box align="center">
              <Text bold>Disciplinas</Text>
            </Box>
            <Box>
              <Books size={32} />
            </Box>
          </Box>
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
