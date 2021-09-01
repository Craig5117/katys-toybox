import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_FIGURE } from '../../graphql/mutations';
import styles from '../../styles/FigureList.module.css';
import btnStyles from '../../styles/Button.module.css';

export default function FigureCard(figure) {
  const [updateFigure, { error }] = useMutation(UPDATE_FIGURE);

  const [figureState, setFigureState] = useState({
    id: figure.id,
    value: figure.value,
    stock: figure.stock,
    held: figure.held,
    damaged: figure.damaged,
    dmgHeld: figure.dmgHeld,
  });
  const [disabled, setDisabled] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    let assignedValue = value;
    if (name === "value") {
      const currencyPattern = /^[0-9]+\.[0-9]{2}$/
      if (currencyPattern.test(value)) {
        setDisabled(false)
        assignedValue = value * 100;
      } else {
        setDisabled(true);
      }
    } else{
      const numberPattern = /^[0-9]+$/
      if (value >= 0 && value < 10000 && numberPattern.test(value)) {
        setDisabled(false);
        assignedValue = parseInt(value);
      } else {
        setDisabled(true);
      }
      
    };
    setFigureState({
      ...figureState,
      [name]: assignedValue,
    });
  
    console.log(`${name}: ${assignedValue}`);
  }

  async function handleUpdateClick() {
    
   
      updateFigure({
        variables: {...figureState}
      })
     
    
    console.log(figureState);
  }

  return (
    <div key={figure.id} className={styles.figListItem}>
      <div className={styles.figListStats}>
        <label htmlFor="stock">Stock: </label>
        <input
          className={styles.listInput}
          name="stock"
          id="stock"
          type="number"
          min="0"
          defaultValue={figure.stock}
          onInput={handleChange}
        />
        <label htmlFor="stockHeld">Held: </label>
        <input
          className={styles.listInput}
          name="held"
          id="stockHeld"
          type="number"
          min="0"
          defaultValue={figure.held}
          onInput={handleChange}
        />
        <label htmlFor="dmg">Dmg: </label>
        <input
          className={styles.listInput}
          name="damaged"
          id="dmg"
          type="number"
          min="0"
          defaultValue={figure.damaged}
          onInput={handleChange}
        />
        <label htmlFor="dmgHeld">Held: </label>
        <input
          className={styles.listInput}
          name="dmgHeld"
          id="dmgHeld"
          type="number"
          min="0"
          max="10000"
          defaultValue={figure.dmgHeld}
          onInput={handleChange}
        />
        <label htmlFor="figValue">Value: </label>
        <input
          className={styles.listInput}
          name="value"
          id="figValue"
          type="text"
          defaultValue={(figure.value / 100).toFixed(2)}
          onChange={handleChange}
        />
      </div>
      <p style={{width: "12em", overflow: "hidden", whiteSpace: "nowrap",
    textOverflow: "ellipsis"}}>{figure.figName}</p>
      <ul>
        <li>
          {figure.element.element[0].toUpperCase() +
            figure.element.element.substring(1)}
        </li>
        <li>{figure.gameTitle.title}</li>
        <li>{figure.character.name}</li>
        <li>{figure.character.gender.toUpperCase()}</li>
      </ul>
      <button className={`${disabled && btnStyles.disabledBtn}  ${btnStyles.btn}`} style={{ float: 'right', borderRadius: "5px"}} onClick={handleUpdateClick} disabled={disabled}>
        Update
      </button>
    </div>
  );
}
