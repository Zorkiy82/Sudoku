import { Controlpad } from "../control-pad/control-pad";
import styles from "./keyboard.module.css";
import { Numpad } from "../numpad/numpad";

export const Keyboard = () => {
  return (
    <div className={styles.keyboard}>
      <Controlpad />
      <Numpad />
    </div>
  );
};
