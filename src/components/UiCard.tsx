import { Box } from '@react-bulk/web';

export default function UiCard({ children }: any) {
  return (
    <Box bg="white" h="100%" w="70%" corners={2} ml="10%">
      {children}
    </Box>
  );
}
