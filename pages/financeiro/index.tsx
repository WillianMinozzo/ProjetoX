import NextLink from 'next/link';

import { Box, Button } from '@react-bulk/web';

import { FormSingle, UiTitle } from '../../src/components';

export default function Page() {
  return (
    <FormSingle>
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
    </FormSingle>
  );
}
