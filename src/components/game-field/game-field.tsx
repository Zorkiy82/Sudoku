import { FC, useEffect } from "react";
import styles from "./game-field.module.css";
import { GameCell } from "../game-cell/game-cell";
import { useSelector } from "../../services/hooks";

export const GameField = () => {
  const gameField = useSelector((store)=>store.gameField.gameField)
  return (
    <div className={styles.field}>
      {gameField.map((rowItem, rowIndex) =>
        rowItem.map((cellItem, columnIndex) => {
          return (
            <GameCell
              key={cellItem._id}
              {...{ rowIndex, columnIndex }}
            />
          );
        })
      )}
    </div>
  );
};
