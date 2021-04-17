import Head from 'next/head';
import { SubscribeButton } from '../components/SubscrubeButton';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | ig.news</title>
      </Head>
     
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>Notícias sobre o mundo do <span>React</span></h1>
          <p>
          Tenha acesso a todas as publicações  <br />
            <span>por R$9,90 mês</span>
          </p>
          <SubscribeButton />

        </section>

        <img src="/images/avatar.svg" alt="Menina codificando" />
      </main>
    </>
  )
}
