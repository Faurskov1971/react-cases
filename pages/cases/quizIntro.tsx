import Head from 'next/head';
import Layout from '../../components/layout';
import Game from '../../components//quiz/Game';
import BasicModal from '../../components/basivModal';

export default function QuizIntro() {
  return (
    <>
    <Layout>
      <Head>
        <title>Case med quiz</title>
      </Head>
      <Game/>
      <BasicModal
        teaser="Why and how:"
        head="The Quiz"
        why="I developed the quiz to a IT conference in Bestseller in vanilla JavaScript in 2018."
        how="This version is in TypeScript and React with a JSON-file."
        features={["Responsive design","Interesting content","Gamification"]}
        />
    </Layout>
    </>
  )
}