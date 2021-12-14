import Header from '../Header';
import AllFigureList from '../AllFigureList';
import AllAccessoriesList from '../AllAccessoriesList';
import styles from '../../styles/Home.module.css';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [showFigures, setShowFigures] = useState(true);
  const [showAcc, setShowAcc] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchType, setSearchType] = useState('none');
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <>
      <Header setCurrentPage={setCurrentPage} setShowFigures={setShowFigures} setShowAcc={setShowAcc} setSearchTerm={setSearchTerm} setSearchType={setSearchType}></Header>

      <main className={styles.main} style={{minHeight: 1000}}>
        <div>
          {showFigures && <AllFigureList currentPage={currentPage} setCurrentPage={setCurrentPage} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchType={searchType} setSearchType={setSearchType}></AllFigureList>}
          {showAcc && <AllAccessoriesList currentPage={currentPage} setCurrentPage={setCurrentPage} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchType={searchType} setSearchType={setSearchType}></AllAccessoriesList>}
        </div>
      </main>

      <footer className={styles.footer}>
         <span className={styles.logo}>
            Katy's ToyBox
          </span>        
      </footer>
    </>
  );
}
