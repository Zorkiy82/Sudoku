import { ControlButton } from "../control-button/control-button";
import styles from "./control-pad.module.css";

export const Controlpad = () => {
  return (
    <div className={styles.controlpad}>
      <ControlButton {...{buttonName: "Очистить"}} />
      <ControlButton {...{buttonName: "Заметки"}}/>
      <ControlButton {...{buttonName: "Подсказка"}}/>
    </div>
  );
};
