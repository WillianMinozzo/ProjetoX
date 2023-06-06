import '../styles/globals.css';
import { SessionProvider, useSession } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import ReactBulk from '@react-bulk/core';
import { Loading } from '@react-bulk/web';

import Layout from '../src/components/Layout';
import dark from '../src/themes/dark';
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
