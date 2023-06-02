import { Box, Card } from '@react-bulk/web';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box minh="100vh">
        <Card m={3} mb={0}>
          <Header />
        </Card>
        <Box row noWrap flex>
          <Box>
            <Card flex m={3} mr={0}>
              <Sidebar />
            </Card>
          </Box>
          <Box flex>
            <Card bg="#e3e3e3" flex>
              {children}
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
}
