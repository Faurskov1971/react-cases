import Link from 'next/link';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css'



interface IInfo {
  text: string;
}

export default function Info(data:IInfo) {
  return (
    <>
      <section>
        <button className={utilStyles.button}>
          {data.text}
        </button>
      </section>
    </>
  )
}
