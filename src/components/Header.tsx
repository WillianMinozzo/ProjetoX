import NextLink from 'next/link';

import { Box, Grid, Image, Text, useDimensions } from '@react-bulk/web';

export default function Header() {
  const dimension = useDimensions();
  return (
    <Grid row noWrap justifyItems="center" alignItems="center">
      <Box w={130} maxh={60} component={NextLink} href="/">
        <Image alt="Logo do Portal" source="/logo.png" mode="contain" />
      </Box>
      <Box row noWrap w={dimension.width - 200} alignItems="end" justifyContent="end" style={{ overflow: 'hidden', float: 'right' }}>
        <Box>Serviço de Atenção</Box>
        <Box align="center">
          <Image alt="Foto de perfil do usuario" circular source="perfil.jpg" w={50} />
        </Box>
        <Box align="center" maxw={200}>
          <Text numberOfLines={1} bold>
            Nome:
            <Text variant="secondary" bold={false}>
              José Morre
            </Text>
          </Text>
          <Text variant="primary" numberOfLines={1} bold>
            E-mail:
            <Text variant="secondary" bold={false}>
              2888360@portal.xyz
            </Text>
          </Text>
        </Box>
      </Box>
    </Grid>
  );
}
