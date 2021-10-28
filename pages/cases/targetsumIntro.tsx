import Head from 'next/head';
import Layout from '../../components/layout';
import GameContainer from '../../components/targetsum/index';
import BasicModal from '../../components/basicModal';

export default function TargetsumIntro() {
  return (
    <>
    <Layout>
      <Head>
        <title>Case med Target Sum</title>
      </Head>
      <GameContainer/>
      <BasicModal
        teaser="Why and how:"
        head="The Target Sum"
        why=""
        how=""
        features={["","",""]}
        />
    </Layout>
    </>
  )
}