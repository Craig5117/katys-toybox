import { useQuery } from '@apollo/client';
import { QUERY_FIGURES } from '../../graphql/queries';
import styles from '../../styles/FigureList.module.css';
import btnStyles from '../../styles/Button.module.css';
import { useEffect, useState } from 'react';
import FigureCard from '../FigureCard';
import PaginationButton from '../PaginationButton';
import SearchBar from '../SearchBar';
import TypeFilter from '../TypeFilter';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../utils/theme';

export default function AllFigureList(props) {
  const [filteredFigures, setFilteredFigures] = useState([]);
  const { loading, error, data } = useQuery(QUERY_FIGURES);

  const [startingIndex, setStartingIndex] = useState(0);
  const [pageTotal, setPageTotal] = useState(0);
  const [pageLinksArr, setPageLinksArr] = useState([]);
  
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [searchTypePlaceholder, setSearchTypePlaceholder] = useState('');
  const [figTypeFilter, setFigTypeFilter] = useState('standard');
  const { currentPage, setCurrentPage, searchTerm, setSearchTerm, searchType, setSearchType } = props;

  const filterSwitch = () => {
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
        case 'type':
          setFilteredFigures(
            data?.figures.filter(
              (f) =>
                f.type === figTypeFilter &&
                f.element.element.toLowerCase().includes(searchTerm.toLowerCase())
            )
          );
          break;
      default:
        setFilteredFigures(data?.figures);
        break;
    }
  }

  useEffect(() => {
    if (data?.figures.length) {
      // setFilteredFigures(data?.figures);
      // console.log(filteredFigures);
      filterSwitch();
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    if (searchType === '') {
      setFilteredFigures(data?.figures);
    }
  });

  useEffect(() => {
    setFilteredFigures(data?.figures.filter(
      (f) =>
        f.type === figTypeFilter
    ))
  }, [figTypeFilter])

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

  const handleRadioChange = (event) => {
    switch (event.target.value) {
      case 'game':
        setSearchTypePlaceholder('Game Title');
        break;
      case 'character':
      case 'rare':
        setSearchTypePlaceholder('Character Name');
        break;
      case 'element':
      case 'type':
        setSearchTypePlaceholder('Element Type');
        break;
      case 'gender':
        setSearchTypePlaceholder('Gender');
        break;
      case 'variant':
        setSearchTypePlaceholder('Variation');
        break;
      default:
        setSearchTypePlaceholder('');
        break;
    }
    setSearchType(event.target.value);
    if (event.target.value === 'none') {
      setSearchTerm('');
      setFilteredFigures(data?.figures);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchTerm);
    console.log(searchType);
    filterSwitch();
    setStartingIndex(0);
  };

  const handlePaginationClick = (event) => {
    const target = event.target;
    setStartingIndex((parseInt(target.textContent) - 1) * 20);
    setCurrentPage(parseInt(target.textContent));
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <FormControl component="fieldset">
          {/* <FormLabel component="legend">View by</FormLabel> */}
          <RadioGroup
            row
            aria-label="search-type"
            name="row-radio-buttons-group"
            onChange={handleRadioChange}
            value={searchType}
            style={{ paddingLeft: 20, paddingTop: 20 }}
          >
            <FormControlLabel value="game" control={<Radio />} label="Game" />
            <FormControlLabel
              value="character"
              control={<Radio />}
              label="Character"
            />
            <FormControlLabel
              value="element"
              control={<Radio />}
              label="Element"
            />
            <FormControlLabel
              value="type"
              control={<Radio />}
              label="Type"
            />
            <FormControlLabel
              value="gender"
              control={<Radio />}
              label="Gender"
            />
            <FormControlLabel
              value="variant"
              control={<Radio />}
              label="Variant"
            />
            <FormControlLabel value="rare" control={<Radio />} label="Rare" />
            <FormControlLabel value="none" control={<Radio />} label="All" />
          </RadioGroup>
        </FormControl>
      </ThemeProvider>      
      <div style={{ minHeight: 42 }}>
        {searchType === 'type' && (
          <TypeFilter figTypeFilter={figTypeFilter} setFigTypeFilter={setFigTypeFilter}>
          </TypeFilter>
        )}
        {searchType !== 'none' && (
          <SearchBar
            placeholder={searchTypePlaceholder}
            handleSearch={handleSearch}
            handleChange={handleChange}
            searchTerm={searchTerm}
          ></SearchBar>
        )}
      </div>
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
            <div style={{ display: 'inline' }} onClick={handlePaginationClick}>
              {pageLinksArr.map((item, i) => (
                <PaginationButton
                  setStartingIndex={setStartingIndex}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  pageNumber={item.pageNumber}
                  key={i}
                ></PaginationButton>
              ))}
            </div>
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
