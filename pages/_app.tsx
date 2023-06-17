import { SessionProvider, useSession } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/globals.css';

import ReactBulk from '@react-bulk/core';
import { Loading } from '@react-bulk/web';

import { PagesProps } from '../src/utils/types';

import { Layout } from '../src/components';
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

function Auth({ children }: PagesProps): JSX.Element {
  const router = useRouter();
  const { status } = useSession();

  if (status === 'unauthenticated') {
    router.push('/login');
    return <></>;
  }

  if (status === 'authenticated') {
    return <>{children}</>;
  }

  return <Loading h="100vh" />;
}
