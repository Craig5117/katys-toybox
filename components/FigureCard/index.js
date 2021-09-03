import { useEffect, useRef, useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_FIGURE } from '../../graphql/mutations';
import styles from '../../styles/FigureList.module.css';
import btnStyles from '../../styles/Button.module.css';
import updateStyles from '../../styles/UpdateStyles.module.css'
import dateFormat from '../../utils/dateFormat';

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
  const [validValue, setValidValue] = useState(true);
  const [validStock, setValidStock] = useState(true);
  const [validHeld, setValidHeld] = useState(true);
  const [validDmg, setValidDmg] = useState(true);
  const [validDmgHeld, setValidDmgHeld] = useState(true);
  const [updatedDate, setUpdatedDate] = useState(dateFormat(+figure.updatedAt, {monthLength: "digit", dateSuffix: false}));
  const [changed, setChanged] = useState(false);
  const [saved, setSaved] = useState(false);
  const [updateStyle, setUpdateStyle] = useState("");


  const isInitialMount = useRef(true);

useEffect(() => {
  if (isInitialMount.current) {
     isInitialMount.current = false;
  } else {
    setChanged(true);
    console.log(changed)
  }
}, [figureState]);

useEffect(() => {
  if(changed === true) {
    setUpdateStyle(updateStyles.changed)
  } else if (changed === false && saved === true) {
    setUpdateStyle(updateStyles.saved)
  }
}, [changed, saved])

  useEffect(() => {
   if (validValue === true && validStock === true && validHeld === true && validDmg === true && validDmgHeld === true) {
      setDisabled(false);
    }
  }, [validValue, validStock, validHeld, validDmg, validDmgHeld])



  function handleChange(event) {
    const { name, value } = event.target;
    let assignedValue = value;
    if (name === "value") {
      const currencyPattern = /^[0-9]+\.[0-9]{2}$/
      if (currencyPattern.test(value)) {
        setValidValue(true);
        assignedValue = value * 100;
      } else {
        setValidValue(false);
        setDisabled(true);
      }
    } else{
      const numberPattern = /^[0-9]+$/
      if (value >= 0 && value < 10000 && numberPattern.test(value)) {
        switch (name) {
          case 'stock':
            setValidStock(true);
            break;
          case 'held':
            setValidHeld(true);
            break;
          case 'damaged':
            setValidDmg(true);
            break;
          case 'dmgHeld':
            setValidDmgHeld(true);
            break;
        }
        assignedValue = parseInt(value);
      } else {
        switch (name) {
          case 'stock':
            setValidStock(false);
            break;
          case 'held':
            setValidHeld(false);
            break;
          case 'damaged':
            setValidDmg(false);
            break;
          case 'dmgHeld':
            setValidDmgHeld(false);
            break;
        }
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
      }).then(({data})=>{
        setSaved(true);
        setChanged(false);
        setUpdatedDate(dateFormat(+data.updateFigure.updatedAt, {monthLength: "digit", dateSuffix: false}))
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
      <span className={`${updateStyle}`}>{updatedDate}</span>
      <button className={`${disabled && btnStyles.disabledBtn}  ${btnStyles.btn}`} style={{ float: 'right', borderRadius: "5px"}} onClick={() => {handleUpdateClick ()}} disabled={disabled}>
        Update
      </button>
    </div>
  );
}
