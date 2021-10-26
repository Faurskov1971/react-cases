import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      </section>
      <section className={utilStyles.paragraph}>
      <Link href={`/cases/quizIntro`}>
        <a>
          <button className={utilStyles.button}>
            quiz</button>
          </a>
      </Link>
      <Link href={`/cases/targetsumIntro`}>
        <a>
          <button className={utilStyles.button}>
            targetsum</button>
        </a>
      </Link>
      <Link href={`/cases/memoryIntro`}>
        <a>
          <button className={utilStyles.button}>
            memory</button>
        </a>
      </Link>
      </section>
      <section className={utilStyles.paragraph}>
        <h1>My Mission</h1>
        I want to combine 20 years of working experience with the newest technologies and work in a fantastic agile team again.
        <br /><br />
        I have a good understanding about design, usability, SEO and everything about building interactive elements to web but my focus is developing interactive frontends.
        <h2>My Tech stack</h2>
        <ul>
          <li>Modern JavaScript</li>
          <li>React</li>
          <li>TypeScript</li>
        </ul>
        This homepage shows a little bit of what I have developed in theese technologies. Please look at my cases and read a little about how I have developed them.
      </section>
    </Layout>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
