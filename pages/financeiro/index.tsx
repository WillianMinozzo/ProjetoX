import { Box, Button } from '@react-bulk/web';
import NextLink from 'next/link';

export default function Page() {
  return (
    <Box>
      Financeiro
      <Box>
        <Button component={NextLink} href="/financeiro/negociacao">
          ir para negociacao
        </Button>
      </Box>
    </Box>
  );
}
