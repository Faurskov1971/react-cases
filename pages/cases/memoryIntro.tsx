import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import GameGenerator from '../../components/memory/index';

export default function MemoryIntro() {
  return (
    <>
    <>
    <Layout>
      <Head>
        <title>Case med memory</title>
      </Head>
      <GameGenerator />
    </Layout>
    </>
    </>
  )
}