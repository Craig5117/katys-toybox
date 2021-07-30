import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// import prisma from '../db';
import Header from '../components/Header';
import { useQuery } from '@apollo/client';
import { QUERY_FIGURES } from '../graphql/queries';
import { useEffect, useState } from 'react';

export default function Home({}) {
  // doesn't work. Just try passing in in through server side props.
  const { loading, error, data } = useQuery(QUERY_FIGURES);
    if (loading) {
      return "loading"
    } if (error) {
      return "error"
    } 
  console.log(data.figures)
  return (
    <div className={styles.container}>
      <Head>
        <title>Katy's Toybox</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header></Header>

      <main className={styles.main}>
        <div>
          <ol className="figure-list">
            {data.figures.map((figure) => (
              <li key={figure.id}>{figure.figName}</li>
            ))}
          </ol>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

// export async function getServerSideProps() {
//   const { data } = await client.query({
//     query: gql`
//       query Countries {
//         countries {
//           code
//           name
//           emoji
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       countries: data.countries.slice(0, 4),
//     },
//   };
// }
