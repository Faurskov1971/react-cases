import Head from 'next/head';
import Layout from '../../components/layout';
import GameGenerator from '../../components/memory/index';
import BasicModal from '../../components/basicModal';

export default function MemoryIntro() {
  return (
    <>
    <>
    <Layout>
      <Head>
        <title>Case med memory</title>
      </Head>
      <GameGenerator />
      <BasicModal
        teaser="Why and how:"
        head="The Memory Game"
        why="This game is developed as a part of a stress game to test pilot-skills."
        how="The game is developed in TypeScript and React."
        features={["","",""]}
        />
    </Layout>
    </>
    </>
  )
}