import { useQuery } from '@apollo/client';
import { QUERY_ACCESSORIES } from '../../graphql/queries';
import styles from '../../styles/FigureList.module.css';
import btnStyles from '../../styles/Button.module.css';
import { useEffect, useState } from 'react';
import AccessoryCard from '../AccessoryCard';
import PaginationButton from '../PaginationButton';
import SearchBar from '../SearchBar';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../utils/theme';

export default function AllAccessoriesList(props) {

  const { loading, error, data } = useQuery(QUERY_ACCESSORIES);
  const [filteredAcc, setFilteredAcc] = useState([]);
  const [startingIndex, setStartingIndex] = useState(0);
  const [pageTotal, setPageTotal] = useState(0);
  const [pageLinksArr, setPageLinksArr] = useState([]);

  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [searchTypePlaceholder, setSearchTypePlaceholder] = useState('');
  const { currentPage, setCurrentPage, searchTerm, setSearchTerm, searchType, setSearchType } = props;

  // originally, first useEffect was reseting data to the full unfiltered data on every update
  // separating this switch out, we can run the date object through the filter before render updates
  const filterSwitch = () => {
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
  }

  useEffect(
    function handleInitialData() {
      if (data?.accessories.length) {
        // setFilteredAcc(data?.accessories);
        // console.log(filteredAcc);\
        filterSwitch();
      }
    },
    [data]
  );

  useEffect(function clearSearchFilter() {
    if (searchType === '') {
      setFilteredAcc(data?.accessories);
    }
  });

  useEffect(
    function handlePageTotal() {
      if (filteredAcc?.length) {
        setPageTotal(Math.ceil(filteredAcc.length / 20));
        console.log(pageTotal);
      }
    },
    [filteredAcc]
  );

  useEffect(
    function generatePageLinks() {
      const pageLinks = [];
      for (let i = 0; i < pageTotal; i++) {
        pageLinks.push({ pageNumber: i + 1 });
      }
      setPageLinksArr(pageLinks);
    },
    [pageTotal]
  );

  useEffect(
    function handlePaginationDisable() {
      if (filteredAcc?.length) {
        if (startingIndex + 21 > filteredAcc.length) {
          setNextDisabled(true);
        } else if (startingIndex + 21 < filteredAcc.length) {
          setNextDisabled(false);
        }
      }
      if (startingIndex === 0) {
        setPrevDisabled(true);
      } else if (startingIndex !== 0) {
        setPrevDisabled(false);
      }
    },
    [startingIndex]
  );

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  const handleRadioChange = (event) => {
    switch(event.target.value) {
      case "game":
        setSearchTypePlaceholder("Game Title");
        break;
      case "accessory":
        setSearchTypePlaceholder("Accessory Name");
        break;
      default:
        setSearchTypePlaceholder('');
        break;
    }
    setSearchType(event.target.value);
    if (event.target.value === 'none') {
      setSearchTerm('');
      setFilteredAcc(data?.accessories);
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
            style={{paddingLeft: 20, paddingTop: 20}}
          >
            <FormControlLabel value="game" control={<Radio />} label="Game" />
            <FormControlLabel
              value="accessory"
              control={<Radio />}
              label="Accessory"
            />
            <FormControlLabel value="none" control={<Radio />} label="All" />
          </RadioGroup>
        </FormControl>
      </ThemeProvider>      
      <div style={{ minHeight: 42 }}>
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
        {filteredAcc
          ?.slice(startingIndex, startingIndex + 20)
          .map((accessory) => (
            <AccessoryCard acc={accessory} key={accessory.id} />
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
