import { FC } from "react";
import styles from "./game-field.module.css";
import { templateField } from "../../utils/constants";
import { GameCell } from "../game-cell/game-cell";

export const GameField = () => {
  return (
    <div className={styles.field}>
      {templateField.map((rowItem, rowIndex) =>
        rowItem.map((cellItem, columnIndex) => {
            return <GameCell key={`${rowIndex}-${columnIndex}`} mainNumber={cellItem} {...{rowIndex, columnIndex}} />
        })
      )}
    </div>
  );
};
