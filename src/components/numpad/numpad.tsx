import { NumButton } from "../num-button/num-button";
import styles from "./numpad.module.css";

export const Numpad = () => {
  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className={styles.numpad}>
      {numArr.map((val) => {
        return <NumButton key={val} value={val} />;
      })}
    </div>
  );
};
