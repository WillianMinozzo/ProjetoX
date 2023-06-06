import NextLink from 'next/link';

import { Box, Button } from '@react-bulk/web';

import { UiTitle } from '../../src/components';

export default function Page() {
  return (
    <Box>
      <UiTitle
        icon="CurrencyCircleDollar"
        title="Financeiro"
        subtitle="Aqui, você pode acompanhar e fazer as atividades relacionadas ao seu histórico financeiro."
      />
      <Box>
        <Button component={NextLink} href="/financeiro/negociacao">
          ir para negociacao
        </Button>
      </Box>
    </Box>
  );
}
