import Layout from '@/components/layout/Layout';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>React Meetups</title>
        <meta name='description' content='Browse a list of meetups' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
