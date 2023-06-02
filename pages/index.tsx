import { Box, Button, Card, Grid, Image, Scrollable, Text } from '@react-bulk/web';
import { CalendarBlank, GraduationCap } from '@phosphor-icons/react';
import { useTheme } from '@react-bulk/core';

export default function Home() {
  const theme = useTheme();

  // @ts-ignore
  return (
    <Grid h={'100%'} xs={12} rounded>
      <Box bg="white" border="1px solid red" xl={8} md={12} sm={12} corners={2}>
        <Box h={300} border="1px solid purple">
          <Image source="https://cdn-static.unyleya.xyz/manutencao/upload/esquemaconfiguracao/esquema_configuracao_15e9601632c9f9.jpeg" />
        </Box>

        <Box border="1px solid green" flex row noWrap>
          <Box w="50%" border="1px solid blue">
            Ambientacao
          </Box>
          <Scrollable w="50%" border="1px solid red">
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
        </Box>
      </Box>

      <Box h="100%" xl={4} md={12} sm={12} corners={2}>
        <Scrollable h="100%" ml={3} bg="white" corners={2}>
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
