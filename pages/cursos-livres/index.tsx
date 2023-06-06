import { Box, Button, Card, Divider, Grid, Image, Text } from '@react-bulk/web';

import { UiTitle } from '../../src/components';

export default function Page() {
  return (
    <Box formSingle>
      <UiTitle icon="BookOpen" title="Cursos Livres" />
      <Box p={3}>
        <Text size={0.9}>
          Os Cursos Livres, abaixo indicados, integram o <Text bold>Programa de Nivelamento</Text> Programa de Nivelamento, o qual objetiva
          a revisão de conhecimentos esquecidos ou não aprendidos, essenciais para o bom desenvolvimento dos estudantes nos cursos de
          graduação. Aproveite a oportunidade!
        </Text>
      </Box>
      <Divider mx={3} />
      <Box row noWrap p={3} justifyContent="space-around">
        <Text size={0.8}>Certificado gratuito</Text>
        <Text size={0.8}>100% online</Text>
        <Text size={0.8}>Disponível 24h</Text>
        <Text size={0.8}>Atividade complementar</Text>
      </Box>

      <Box p={3}>
        <Text>
          <Text bold>4</Text> cursos livres disponíveis. Você está cursando <Text bold>0</Text> curso livre.
        </Text>
      </Box>

      <Grid xs={12} p={3} style={{ overflow: 'hidden' }}>
        <Box>
          {Array.from({ length: 2 }).map((i, index) => (
            <Box key={index}>
              <Card position="relative" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)' }}>
                <Text>Redação Oficial</Text>
                <Text>20h</Text>
                <Image w={300} source="projeto_pedagogico.jpeg" />
                <Box center position="absolute" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
                  <Button size="small">Matricule-se Gratis</Button>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      </Grid>
    </Box>
  );
}
