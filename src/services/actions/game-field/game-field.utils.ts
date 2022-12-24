import { store } from "../../store";

export const getSelectedCell = () => {
  return { ...store.getState().gameField.selectedCell };
};

export const isNotFixedSelectedCell = () => {
  const gameField = store.getState().gameField.gameField;
  const { row, column } = getSelectedCell();
  return !gameField[row][column].isFixed;
};
