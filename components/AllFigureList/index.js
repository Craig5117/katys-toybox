import { useQuery } from '@apollo/client';
import { QUERY_FIGURES } from '../../graphql/queries';
import styles from '../../styles/FigureList.module.css';
import btnStyles from '../../styles/Button.module.css';
import { useEffect, useState } from 'react';
import FigureCard from '../FigureCard';
import PaginationButton from '../PaginationButton';
import SearchBar from '../SearchBar';

export default function AllFigureList({}) {
  const [filteredFigures, setFilteredFigures] = useState([]);
  const { loading, error, data } = useQuery(QUERY_FIGURES);
  const [searchType, setSearchType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [startingIndex, setStartingIndex] = useState(0);
  const [pageTotal, setPageTotal] = useState(0);
  const [pageLinksArr, setPageLinksArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);

  useEffect(() => {
    if (data?.figures.length) {
      setFilteredFigures(data?.figures);
      console.log(filteredFigures);
    }
  }, [data]);

  useEffect(() => {
    if (searchType === '') {
      setFilteredFigures(data?.figures);
    }
  });

  useEffect(() => {
    if (filteredFigures?.length) {
      setPageTotal(Math.ceil(filteredFigures.length / 20));
      console.log(pageTotal);
    }
  }, [filteredFigures]);

  useEffect(() => {
    const pageLinks = [];
    for (let i = 0; i < pageTotal; i++) {
      pageLinks.push({ pageNumber: i + 1 });
    }
    setPageLinksArr(pageLinks);
  }, [pageTotal]);

  useEffect(() => {
    if (filteredFigures?.length) {
      if (startingIndex + 21 > filteredFigures.length) {
        setNextDisabled(true);
      } else if (startingIndex + 21 < filteredFigures.length) {
        setNextDisabled(false);
      }
    }
    if (startingIndex === 0) {
      setPrevDisabled(true);
    } else if (startingIndex !== 0) {
      setPrevDisabled(false);
    }
  }, [startingIndex]);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);
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
        setFilteredFigures(
          data?.figures.filter((f) =>
            f.gameTitle.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        break;
      case 'character':
        setFilteredFigures(
          data?.figures.filter((f) =>
            f.character.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        break;
      case 'element':
        setFilteredFigures(
          data?.figures.filter((f) =>
            f.element.element.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        break;
      case 'gender':
        setFilteredFigures(
          data?.figures.filter((f) =>
            f.character.gender.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        break;
      case 'variant':
        setFilteredFigures(
          data?.figures.filter(
            (f) =>
              (!f.variation.toLowerCase().includes('series') &&
                f.figName.toLowerCase().includes(searchTerm.toLowerCase())) ||
              f.variation.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        break;
      case 'rare':
        setFilteredFigures(
          data?.figures.filter(
            (f) =>
              f.rare === true &&
              f.character.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        break;
      default:
        setFilteredFigures(data?.figures);
        break;
    }
    setStartingIndex(0);
  };

  const handlePaginationClick = (event) => {
    const target = event.target;
    setStartingIndex((parseInt(target.textContent) - 1) * 20);
    setCurrentPage(parseInt(target.textContent));
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
      <label htmlFor="search-by-character">
        <input
          type="radio"
          name="search-toggle"
          id="search-by-character"
          value="character"
          onClick={() => {
            setSearchType('character');
          }}
        />
        Character
      </label>
      <label htmlFor="search-by-element">
        <input
          type="radio"
          name="search-toggle"
          id="search-by-element"
          value="element"
          onClick={() => {
            setSearchType('element');
          }}
        />
        Element
      </label>
      <label htmlFor="search-by-gender">
        <input
          type="radio"
          name="search-toggle"
          id="search-by-gender"
          value="gender"
          onClick={() => {
            setSearchType('gender');
          }}
        />
        Gender
      </label>
      <label htmlFor="search-by-variant">
        <input
          type="radio"
          name="search-toggle"
          id="search-by-variant"
          value="variant"
          onClick={() => {
            setSearchType('variant');
          }}
        />
        Variant
      </label>
      <label htmlFor="search-by-rare">
        <input
          type="radio"
          name="search-toggle"
          id="search-by-rare"
          value="rare"
          onClick={() => {
            setSearchType('rare');
          }}
        />
        Rare
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
      <SearchBar handleSearch={handleSearch} handleChange={handleChange} searchTerm={searchTerm}></SearchBar>
      <div className={styles.figureList}>
        {filteredFigures
          ?.slice(startingIndex, startingIndex + 20)
          .map((figure) => (
            <FigureCard {...figure} key={figure.id} />
          ))}
      </div>
      {pageLinksArr.length ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <span style={{ borderRadius: '5px', overflow: 'hidden' }}>
            <button
              className={`${prevDisabled && btnStyles.disabledBtn}  ${
                btnStyles.btn
              }`}
              style={{ borderRadius: '5px 0 0 5px' }}
              onClick={() => {
                setStartingIndex(startingIndex - 20);
                setCurrentPage(currentPage - 1);
              }}
              disabled={prevDisabled}
            >
              Previous
            </button>
            <div style={{display: 'inline'}} onClick={handlePaginationClick}>
            {pageLinksArr.map((item, i) => (
              <PaginationButton
                setStartingIndex={setStartingIndex}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageNumber={item.pageNumber}
                key={i}
              ></PaginationButton>
            ))}</div>
            <button
              className={`${nextDisabled && btnStyles.disabledBtn}  ${
                btnStyles.btn
              }`}
              style={{ borderRadius: '0 5px 5px 0' }}
              onClick={() => {
                setStartingIndex(startingIndex + 20);
                setCurrentPage(currentPage + 1);
              }}
              disabled={nextDisabled}
            >
              Next
            </button>
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
