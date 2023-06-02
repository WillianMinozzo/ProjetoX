import { Box, Button, Grid, Image, Text } from '@react-bulk/web';
import NextLink from 'next/link';

export default function Header() {
  return (
    <Grid justifyContent="space-between" size={12} row noWrap w="100%" h="100%" maxh={60}>
      <Box maxw={130} component={NextLink} href="/" mt={3} xs={4} h={50}>
        <Image w={120} source="/logo.png" />
      </Box>

      <Box row noWrap xs={4} maxw={350} alignItems="end" style={{ overflow: 'hidden' }}>
        <Box align="center">
          <Image circular source="perfil.jpg" w={50} h={50} />
        </Box>
        <Box align="center">
          <Text>Nome:José Alves Da silva nunca morre</Text>
          <Text>E-mail: 2888360@manutencao.unyleya.xyz</Text>
        </Box>
      </Box>
    </Grid>
  );
}
