import { useState } from "react";
import styles from "./ItemCount.module.css";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };


  return (
    <div className={`${styles.border}`}>
      <div>
        <button className={`${styles.buttonInc}`} onClick={increment}>
          +
        </button>
        <strong>{count}</strong>
        <button className={`${styles.buttonDec}`} onClick={decrement}>
          -
        </button>
      </div>
      <button className={`${styles.buttonAdd}`} onClick={() => onAdd(count)}>ADD TO CART</button>
    </div>
  );
};