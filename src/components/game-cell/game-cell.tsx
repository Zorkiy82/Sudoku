import { FC, useMemo } from "react";
import { isErrored } from "stream";
import { SET_SELECTED_CELL } from "../../services/constants";
import { useSelector, useDispatch } from "../../services/hooks";
import styles from "./game-cell.module.css";

type TGameCellProps = {
  rowIndex: number;
  columnIndex: number;
};

export const GameCell = ({ rowIndex, columnIndex }: TGameCellProps) => {
  const dispatch = useDispatch();
  const selectedCell = useSelector((state) => state.gameField.selectedCell);
  const { mainValue, notes, isCorrect, isFixed, isHighlighted } = useSelector(
    (state) => state.gameField.gameField[rowIndex][columnIndex]
  );

  const isSelectedCell = useMemo(() => {
    return selectedCell.column === columnIndex && selectedCell.row === rowIndex;
  }, [selectedCell, columnIndex, rowIndex]);

  const addCellStyles = useMemo(() => {
    const res = `${rowIndex === 2 || rowIndex === 5 ? styles.bb : ""}${
      columnIndex === 2 || columnIndex === 5 ? " " + styles.rb : ""
    }`;
    return res;
  }, [rowIndex, rowIndex]);

  const addMainNumberStyles = useMemo(() => {
    let res = "";
    res += !isFixed ? ` ${styles.mainNumberUser}` : "";
    res += !isCorrect ? ` ${styles.mainNumberErorr}` : "";

    return res;
  }, [isFixed, isCorrect]);

  function onClickHandler() {
    dispatch({
      type: SET_SELECTED_CELL,
      data: { row: rowIndex, column: columnIndex },
    });
  }

  return (
    <div
      className={`${styles.cell} ${addCellStyles} ${
        isSelectedCell ? styles.selectedCell : ""
      }`}
      onMouseDown={onClickHandler}
    >
      <p className={`${styles.mainNumber} ${addMainNumberStyles}`}>
        {mainValue ? mainValue : ""}
      </p>
    </div>
  );
};
