import Header from '../Header';
import AllFigureList from '../AllFigureList';
import AllAccessoriesList from '../AllAccessoriesList';
import styles from '../../styles/Home.module.css';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [showFigures, setShowFigures] = useState(true);
  const [showAcc, setShowAcc] = useState(false);
  
  return (
    <>
      <Header setShowFigures={setShowFigures} setShowAcc={setShowAcc}></Header>

      <main className={styles.main}>
        <div>
          {showFigures && <AllFigureList ></AllFigureList>}
          {showAcc && <AllAccessoriesList ></AllAccessoriesList>}
        </div>
      </main>

      <footer className={styles.footer}>
         <span className={styles.logo}>
            Footer
          </span>        
      </footer>
    </>
  );
}
