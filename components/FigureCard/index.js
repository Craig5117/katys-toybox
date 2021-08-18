import styles from '../../styles/FigureList.module.css';

export default function FigureCard(figure) {
    return (
      <div key={figure.id} className={styles.figListItem}>
              <div className={styles.figListStats}>
                <label for="stock">Stock: </label>
                <input
                  className={styles.listInput}
                  id="stock"
                  type="number"
                  defaultValue={figure.stock}
                />
                <label for="stockHeld">Held: </label>
                <input
                  className={styles.listInput}
                  id="stockHeld"
                  type="number"
                  defaultValue={figure.held}
                />
                <label for="dmg">Dmg: </label>
                <input
                  className={styles.listInput}
                  id="dmg"
                  type="number"
                  defaultValue={figure.damaged}
                />
                <label for="dmgHeld">Held: </label>
                <input
                  className={styles.listInput}
                  id="dmgHeld"
                  type="number"
                  defaultValue={figure.dmgHeld}
                />
                <label for="figValue">Value: </label>
                <input
                  className={styles.listInput}
                  id="figValue"
                  type="text"
                  defaultValue={(figure.value / 100).toFixed(2)}
                />
              </div>
              <p>{figure.figName}</p>
              <ul>
                <li>{figure.element.element[0].toUpperCase() + figure.element.element.substring(1)}</li>
                <li>{figure.gameTitle.title}</li>
                <li>{figure.character.name}</li>
                <li>{figure.character.gender.toUpperCase()}</li>
              </ul>
            </div>
    )
  }