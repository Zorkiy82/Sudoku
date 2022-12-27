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
  const { mainValue, notes, isCorrect, isFixed, isHighlighted, _id } =
    useSelector((state) => state.gameField.gameField[rowIndex][columnIndex]);

  const isSelectedCell = useMemo(() => {
    return (
      (selectedCell.column === columnIndex && selectedCell.row === rowIndex) ||
      (selectedCell.value !== 0 && selectedCell.value === mainValue)
    );
  }, [selectedCell, columnIndex, rowIndex]);

  const addCellStyles = useMemo(() => {
    const startRow = Math.floor(selectedCell.row / 3);
    const startColumn = Math.floor(selectedCell.column / 3);
    const highlighted =
      selectedCell.column === columnIndex ||
      selectedCell.row === rowIndex ||
      (startRow * 3 <= rowIndex &&
        startRow * 3 + 2 >= rowIndex &&
        startColumn * 3 <= columnIndex &&
        startColumn * 3 + 2 >= columnIndex);
    let res = `${rowIndex === 2 || rowIndex === 5 ? styles.bb : ""}${
      columnIndex === 2 || columnIndex === 5 ? " " + styles.rb : ""
    }`;
    res += highlighted ? ` ${styles.highlighted}` : "";
    res += isSelectedCell ? ` ${styles.selectedCell}` : "";
    return res;
  }, [rowIndex, rowIndex, selectedCell]);

  const addMainNumberStyles = useMemo(() => {
    let res = "";
    res += !isFixed ? ` ${styles.mainNumberUser}` : "";
    res += !isCorrect ? ` ${styles.mainNumberErorr}` : "";
    return res;
  }, [isFixed, isCorrect, isHighlighted]);

  function onClickHandler() {
    dispatch({
      type: SET_SELECTED_CELL,
      data: { row: rowIndex, column: columnIndex, value: mainValue },
    });
  }

  return (
    <div
      className={`${styles.cell} ${addCellStyles}`}
      onMouseDown={onClickHandler}
    >
      <p className={`${styles.mainNumber} ${addMainNumberStyles}`}>
        {mainValue ? String(mainValue) : ""}
      </p>
      <div className={styles.notesContainer}>
        {notes.map((value, index) => (
          <p
            className={
              value === selectedCell.value ? styles.selectedNumber : ""
            }
            key={`${_id}-${index}`}
          >
            {value ? String(value) : ""}
          </p>
        ))}
      </div>
    </div>
  );
};
