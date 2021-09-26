import { useQuery } from '@apollo/client';
import { QUERY_ACCESSORIES } from '../../graphql/queries';
import styles from '../../styles/FigureList.module.css';
import btnStyles from '../../styles/Button.module.css';
import { useEffect, useState } from 'react';
import AccessoryCard from '../AccessoryCard';
import PaginationButton from '../PaginationButton';

export default function AllAccessoriesList () {
    const [searchType, setSearchType] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const { loading, error, data } = useQuery(QUERY_ACCESSORIES);
    const [filteredAcc, setFilteredAcc] = useState([]);
    const [startingIndex, setStartingIndex] = useState(0);
    const [pageTotal, setPageTotal] = useState(0);
    const [pageLinksArr, setPageLinksArr] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [nextDisabled, setNextDisabled] = useState(false)
    const [prevDisabled, setPrevDisabled] = useState(true)
    
    useEffect(function handleInitialData () {
        if (data?.accessories.length) {
          setFilteredAcc(data?.accessories);
          console.log(filteredAcc);
        }
      }, [data]);

      useEffect(function clearSearchFilter() {
        if (searchType === '') {
          setFilteredAcc(data?.accessories);
        }
      });

      useEffect(function handlePageTotal() {
        if (filteredAcc?.length) {
          setPageTotal(Math.ceil(filteredAcc.length / 20));
          console.log(pageTotal);
        }
      }, [filteredAcc]);

      useEffect(function generatePageLinks() {
        const pageLinks = [];
        for (let i = 0; i < pageTotal; i++) {
          pageLinks.push(
            {pageNumber: (i+1)}
          );
        }
        setPageLinksArr(pageLinks);
      }, [pageTotal]);

      useEffect(function handlePaginationDisable() {
        if(filteredAcc?.length) {
          if (startingIndex + 21 > filteredAcc.length) {
            setNextDisabled(true)
          } else if (startingIndex + 21 < filteredAcc.length) {
            setNextDisabled(false)
          }
        }
        if (startingIndex === 0) {
          setPrevDisabled(true)
        } else if(startingIndex !== 0) {
          setPrevDisabled(false)
        }
      }, [startingIndex]);

      const handleChange = (event) => {
        setSearchTerm(event.target.value);
        console.log(event.target.value);
      };

      const handleSearch = (event) => {
        event.preventDefault();
        console.log(searchTerm);
        console.log(searchType);
        switch (searchType) {
          case 'game':
            setFilteredAcc(
              data?.accessories.filter((a) =>
                a.gameTitle.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
            );
            break;
          case 'accessory':
            setFilteredAcc(
              data?.accessories.filter((a) =>
                a.accName.toLowerCase().includes(searchTerm.toLowerCase())
              )
            );
            break;
          default:
            setFilteredAcc(data?.accessories);
            break;
        }
        setStartingIndex(0);
      };

      return (
        <div>
          <label htmlFor="search-by-game">
            <input
              type="radio"
              name="search-toggle"
              id="search-by-game"
              value="game"
              onClick={() => {
                setSearchType('game');
              }}
            />
            Game
          </label>
          <label htmlFor="search-by-accessory">
            <input
              type="radio"
              name="search-toggle"
              id="search-by-accessory"
              value="accessory"
              onClick={() => {
                setSearchType('accessory');
              }}
            />
            Accessory
          </label>
          <label htmlFor="search-by-none">
            <input
              type="radio"
              name="search-toggle"
              id="search-by-none"
              value=""
              onClick={() => {
                setSearchType('');
                setSearchTerm('');
              }}
            />
            None
          </label>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="search for an accessory"
              value={searchTerm}
              onChange={handleChange}
            />
            <button type="submit">Search</button>
          </form>
          <div className={styles.figureList}>
            {filteredAcc
              ?.slice(startingIndex, startingIndex + 20)
              .map((accessory) => (
                <AccessoryCard {...accessory} key={accessory.id} />
              ))}
          </div>
          {pageLinksArr.length ? (
            <div style={{display: "flex", justifyContent: "center"}}>
              <span style={{borderRadius: "5px", overflow: "hidden"}}>
              <button className={`${prevDisabled && btnStyles.disabledBtn}  ${btnStyles.btn}`} style={{borderRadius: "5px 0 0 5px"}} onClick={()=>{setStartingIndex(startingIndex - 20); setCurrentPage(currentPage-1)}} disabled={prevDisabled}>Previous</button>
              {pageLinksArr.map((item, i) => 
                <PaginationButton
                  setStartingIndex={setStartingIndex}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  pageNumber={item.pageNumber}
                  key={i}
                ></PaginationButton>
              )}
              <button className={`${nextDisabled && btnStyles.disabledBtn}  ${btnStyles.btn}`} style={{borderRadius: "0 5px 5px 0"}} onClick={()=>{setStartingIndex(startingIndex + 20); setCurrentPage(currentPage+1)}} disabled={nextDisabled}>Next</button>
              </span>
            </div>
          ) : (
            <></>
          )}
        </div>
      );
    } 
