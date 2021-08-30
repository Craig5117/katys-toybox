import { useQuery } from '@apollo/client';
import { QUERY_FIGURES } from '../../graphql/queries';
import styles from '../../styles/FigureList.module.css';
import { useEffect, useState } from 'react';
import FigureCard from '../FigureCard';

export default function AllFigureList({}) {
  const [searchType, setSearchType] = useState('');
  const [filteredFigures, setFilteredFigures] = useState([]);
  const { loading, error, data } = useQuery(QUERY_FIGURES);
  const [searchTerm, setSearchTerm] = useState('');

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
        setFilteredFigures(data?.figures.filter((f) => 
            !f.variation.toLowerCase().includes('series') && f.figName.toLowerCase().includes(searchTerm.toLowerCase()) || f.variation.toLowerCase().includes(searchTerm.toLowerCase())
          ));
        break;
      case 'rare':
        setFilteredFigures(data?.figures.filter((f) => 
            f.rare === true && f.character.name.toLowerCase().includes(searchTerm.toLowerCase())
          ));
        break;
      default:
        setFilteredFigures(data?.figures);
        break;
    }
  };
  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error</p>;
  }

//   const figures = React.useMemo(() => {filteredFigures.map(figure => {
//     return <FigureCard {...figure} key={figure.id}/>})
//  }, [filteredFigures]);
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
          }}
        />
        None
      </label>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="search for a figure"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className={styles.figureList}>
        {filteredFigures?.map((figure) => < FigureCard {...figure} key={figure.id}/>)}
      </div>
    </div>
  );
}
