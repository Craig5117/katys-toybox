import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// import prisma from '../db';
import HomePage from '../components/HomePage';
import Login from '../components/Login';
import frontendAuth from '../utils/frontendAuth';
import { useAuth } from '../utils/auth.js';
import { ApolloProvider } from '@apollo/client';
import { useState, useEffect } from 'react';



export default function Home({}) {
  const { isSignedIn } = useAuth();
  const [loggedIn, setLoggedin] = useState(false);
  const [admin, setAdmin] = useState(false);
  // const [canUpdate, setCanUpdate] = useState(false);
  // const [readOnly, setReadOnly] = useState(false);
  // useEffect(()=>{
  //   console.log(isSignedIn)
  // }, [isSignedIn])

 
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLoggedin(frontendAuth.loggedIn());
      try{
        setAdmin(frontendAuth.isAdmin());
      } catch (error) {
        if (error){setAdmin(false)};
      }
      
    }
  }, [])
      
  

  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Katy's Toybox</title>          
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="description" content="An inventory management app created using Prisma, NextJS and GraphQL." />
          <meta name="image" property="og:image" content="https://live.staticflickr.com/65535/51612888571_272d1e6dc1_k.jpg"/>
          <meta name="author" content="Craig Bennett" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap"
            rel="stylesheet"
          />
        </Head>
        {!isSignedIn() && <Login></Login>}
        {isSignedIn() && <HomePage></HomePage>}
      </div>
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
