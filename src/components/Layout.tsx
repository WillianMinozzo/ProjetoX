import { Box, Card, Scrollable, useDimensions } from '@react-bulk/web';

import useIsMobile from '../hooks/useIsMobile';
import { PagesProps } from '../utils/types';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }: PagesProps) {
  const dimension = useDimensions();
  const isMobile = useIsMobile();
  return (
    <Box>
      <Card m={3} mb={0} h={80} center>
        <Header />
      </Card>
      <Box row noWrap h={dimension.height - 120} m={3}>
        <Card mr={0} p={0} w={isMobile ? 50 : 290}>
          <Scrollable>
            <Sidebar />
          </Scrollable>
        </Card>
        <Box flex ml={3}>
          <Scrollable bg="#e3e3e3">{children}</Scrollable>
        </Box>
      </Box>
    </Box>
  );
}
