import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ReactBulk from '@react-bulk/core';
import dark from '../src/themes/dark';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Loading } from '@react-bulk/web';
import Layout from '../src/components/Layout';
import main from '../src/themes/main';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ReactBulk theme={main}>
      <SessionProvider session={session}>
        {
          // @ts-ignore
          Component.noAuth ? (
            <Component {...pageProps} />
          ) : (
            <Auth>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Auth>
          )
        }
      </SessionProvider>
    </ReactBulk>
  );
}

function Auth({ children }: any) {
  const router = useRouter();
  const { status } = useSession();

  if (status === 'unauthenticated') {
    router.push('/login');
  }

  if (status === 'authenticated') {
    return children;
  }

  return <Loading h="100vh" />;
}
