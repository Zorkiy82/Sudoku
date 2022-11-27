import { FC, useMemo } from "react";
import { SET_SELECTED_CELL } from "../../services/constants";
import { useSelector, useDispatch } from "../../services/hooks";
import { TCellNumber08, TCellNumber09 } from "../../services/types/data";
import styles from "./game-cell.module.css";

type TGameCell = {
  mainNumber: TCellNumber09;
  rowIndex: TCellNumber08;
  columnIndex: TCellNumber08;
};

export const GameCell = ({ mainNumber, rowIndex, columnIndex }: TGameCell) => {
  const dispatch = useDispatch();
  const selectedCell = useSelector((state) => state.gameField.selectedCell);

  const isSelectedCell = useMemo(() => {
    return (
      selectedCell.columnIndex === columnIndex &&
      selectedCell.rowIndex === rowIndex
    );
  }, [selectedCell, columnIndex, rowIndex]);

  const addCellStyles = useMemo(() => {    
    return `${rowIndex === 2 || rowIndex === 5 ? styles.bb : ""}${
      columnIndex === 2 || columnIndex === 5 ? " " + styles.rb : ""
    }`;
  }, []);
  function onClickHandler() {
    dispatch({ type: SET_SELECTED_CELL, data: { rowIndex, columnIndex } });
  }

  return (
    <div className={`${styles.cell} ${addCellStyles} ${isSelectedCell?styles.selectedCell:''}`} onClick={onClickHandler}>
      <p className={styles.mainNumber}>{mainNumber ? mainNumber : ""}</p>
    </div>
  );
};
