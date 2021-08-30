import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_FIGURE } from '../../graphql/mutations';
import styles from '../../styles/FigureList.module.css';

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

  function handleChange(event) {
    const { name, value } = event.target;
    let assignedValue = value;
    if (name === "value") {
      assignedValue = value * 100;
    } else{
      assignedValue = parseInt(value);
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
          defaultValue={figure.stock}
          onChange={handleChange}
        />
        <label htmlFor="stockHeld">Held: </label>
        <input
          className={styles.listInput}
          name="held"
          id="stockHeld"
          type="number"
          defaultValue={figure.held}
          onChange={handleChange}
        />
        <label htmlFor="dmg">Dmg: </label>
        <input
          className={styles.listInput}
          name="damaged"
          id="dmg"
          type="number"
          defaultValue={figure.damaged}
          onChange={handleChange}
        />
        <label htmlFor="dmgHeld">Held: </label>
        <input
          className={styles.listInput}
          name="dmgHeld"
          id="dmgHeld"
          type="number"
          defaultValue={figure.dmgHeld}
          onChange={handleChange}
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
      <p>{figure.figName}</p>
      <ul>
        <li>
          {figure.element.element[0].toUpperCase() +
            figure.element.element.substring(1)}
        </li>
        <li>{figure.gameTitle.title}</li>
        <li>{figure.character.name}</li>
        <li>{figure.character.gender.toUpperCase()}</li>
      </ul>
      <button style={{ float: 'right' }} onClick={handleUpdateClick}>
        Update
      </button>
    </div>
  );
}
