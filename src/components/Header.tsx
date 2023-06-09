import { Box, Grid, Image, Text, useDimensions } from '@react-bulk/web';
import NextLink from 'next/link';

export default function Header() {
  const dimension = useDimensions();
  return (
    <Grid row noWrap justifyItems="center" alignItems="center">
      <Box w={130} maxh={60} component={NextLink} href="/">
        <Image source="/logo.png" mode="contain" />
      </Box>
      <Box row noWrap w={dimension.width - 200} alignItems="end" justifyContent="end" style={{ overflow: 'hidden', float: 'right' }}>
        <Box>Serviço de Atenção</Box>
        <Box align="center">
          <Image circular source="perfil.jpg" w={50} />
        </Box>
        <Box align="center" maxw={200}>
          <Text>Nome:José Alves Da silva nunca morre</Text>
          <Text>E-mail: 2888360@manutencao.unyleya.xyz</Text>
        </Box>
      </Box>
    </Grid>
  );
}
