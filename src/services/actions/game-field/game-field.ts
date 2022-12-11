import {
  SET_SELECTED_CELL,
  GET_GAME_FIELD,
  SET_MAIN_VALUE_TO_CELL,
} from "../../constants";
import { AppThunk } from "../../types";
import { TSelectedCell } from "../../types/data";
import { store } from "../../store";

export interface ISetSelectedCellAction {
  readonly type: typeof SET_SELECTED_CELL;
  data: TSelectedCell;
}

export interface ISetMainValueToCell {
  readonly type: typeof SET_MAIN_VALUE_TO_CELL;
  data: TSelectedCell & { value: number };
}

export interface IGetGameField {
  readonly type: typeof GET_GAME_FIELD;
}

export type TGameFieldActions =
  | ISetSelectedCellAction
  | IGetGameField
  | ISetMainValueToCell;

export const handleNumPadClick: AppThunk = (value) => (dispatch) => {
  const { column, row } = store.getState().gameField.selectedCell;
  const gameField = store.getState().gameField.gameField;

  if (!gameField[row][column].isFixed) {
    value = value === gameField[row][column].mainValue ? 0 : value;
    dispatch({
      type: SET_MAIN_VALUE_TO_CELL,
      data: {
        row: row,
        column: column,
        value: value,
      },
    });
  }
};
