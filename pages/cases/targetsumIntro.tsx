import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import GameContainer from './targetsum/index';

export default function TargetsumIntro() {
  return (
    <>
    <Layout>
      <Head>
        <title>Case med Target Sum</title>
      </Head>
      <GameContainer/>
    </Layout>
    </>
  )
}