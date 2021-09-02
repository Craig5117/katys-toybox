import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_ACCESSORY } from '../../graphql/mutations';
import styles from '../../styles/FigureList.module.css';
import btnStyles from '../../styles/Button.module.css';

export default function AccessoryCard(acc) {
  const [updateAcc, { error }] = useMutation(UPDATE_ACCESSORY);

  const [accState, setAccState] = useState({
    id: acc.id,
    value: acc.value,
    stock: acc.stock,
    acceptable: acc.acceptable,
    good: acc.good,
    excellent: acc.excellent,
  });
  const [disabled, setDisabled] = useState(false);
  const [validValue, setValidValue] = useState(true);
  const [validStock, setValidStock] = useState(true);
  const [validAcceptable, setValidAcceptable] = useState(true);
  const [validGood, setValidGood] = useState(true);
  const [validExcellent, setValidExcellent] = useState(true);

  useEffect(() => {
   if (validValue === true && validStock === true && validAcceptable === true && validGood === true && validExcellent === true) {
      setDisabled(false);
    }
  }, [validValue, validStock, validAcceptable, validGood, validExcellent])


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
          case 'acceptable':
            setValidAcceptable(true);
            break;
          case 'good':
            setValidGood(true);
            break;
          case 'excellent':
            setValidExcellent(true);
            break;
        }
        assignedValue = parseInt(value);
      } else {
        switch (name) {
          case 'stock':
            setValidStock(false);
            break;
          case 'acceptable':
            setValidAcceptable(false);
            break;
          case 'good':
            setValidGood(false);
            break;
          case 'excellent':
            setValidExcellent(false);
            break;
        }
        setDisabled(true);
      }
      
    };
    setAccState({
      ...accState,
      [name]: assignedValue,
    });
  
    console.log(`${name}: ${assignedValue}`);
  }

  async function handleUpdateClick() {
    
   
      updateAcc({
        variables: {...accState}
      })
     
    
    console.log(accState);
  }

  return (
    <div key={acc.id} className={styles.figListItem}>
      <div className={styles.figListStats}>
        <label htmlFor="stock">Stock: </label>
        <input
          className={styles.listInput}
          name="stock"
          id="stock"
          type="number"
          min="0"
          defaultValue={acc.stock}
          onInput={handleChange}
        />
        <label htmlFor="acceptable">Acceptable: </label>
        <input
          className={styles.listInput}
          name="acceptable"
          id="acceptable"
          type="number"
          min="0"
          defaultValue={acc.acceptable}
          onInput={handleChange}
        />
        <label htmlFor="good">Good: </label>
        <input
          className={styles.listInput}
          name="good"
          id="good"
          type="number"
          min="0"
          defaultValue={acc.good}
          onInput={handleChange}
        />
        <label htmlFor="excellent">Excellent: </label>
        <input
          className={styles.listInput}
          name="excellent"
          id="excellent"
          type="number"
          min="0"
          max="10000"
          defaultValue={acc.excellent}
          onInput={handleChange}
        />
        <label htmlFor="accValue">Value: </label>
        <input
          className={styles.listInput}
          name="value"
          id="accValue"
          type="text"
          defaultValue={(acc.value / 100).toFixed(2)}
          onChange={handleChange}
        />
      </div>
      <p style={{width: "12em", overflow: "hidden", whiteSpace: "nowrap",
    textOverflow: "ellipsis"}}>{acc.accName}</p>
      <ul>
        <li>{acc.gameTitle.title}</li>
        {acc.set && <li>Set: {acc.set.setName}</li>}
        {acc.modelNo && <li>Model: {acc.modelNo}</li>}
      </ul>
      <button className={`${disabled && btnStyles.disabledBtn}  ${btnStyles.btn}`} style={{ float: 'right', borderRadius: "5px"}} onClick={handleUpdateClick} disabled={disabled}>
        Update
      </button>
    </div>
  );
}