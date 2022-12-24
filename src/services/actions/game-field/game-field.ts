import {
  SET_SELECTED_CELL,
  GET_GAME_FIELD,
  SET_MAIN_VALUE,
  DELETE_ALL_NOTES_VALUES,
  TOGGLE_NOTES_MODE,
  DELETE_MAIN_VALUE,
  SET_NOTES_VALUE,
  DELETE_NOTES_VALUE,
} from "../../constants";
import { AppThunk } from "../../types";
import { TSelectedCell } from "../../types/data";
import { store } from "../../store";
import { getSelectedCell, isNotFixedSelectedCell } from "./game-field.utils";

export interface ISetSelectedCellAction {
  readonly type: typeof SET_SELECTED_CELL;
  data: TSelectedCell;
}

export interface ISetMainValueAction {
  readonly type: typeof SET_MAIN_VALUE;
  data: TSelectedCell & { value: number };
}

export interface IDeletMainValueAction {
  readonly type: typeof DELETE_MAIN_VALUE;
  data: TSelectedCell;
}

export interface ISetNotesValueAction {
  readonly type: typeof SET_NOTES_VALUE;
  data: TSelectedCell & { value: number };
}

export interface IDeletNotesValueAction {
  readonly type: typeof DELETE_NOTES_VALUE;
  data: TSelectedCell & { value: number };
}

export interface IGetGameFieldAction {
  readonly type: typeof GET_GAME_FIELD;
}

export interface IResetSelectedCellAction {
  readonly type: typeof DELETE_ALL_NOTES_VALUES;
  data: TSelectedCell;
}

export interface IToggleNotesModeAction {
  readonly type: typeof TOGGLE_NOTES_MODE;
}

export type TGameFieldActions =
  | ISetSelectedCellAction
  | IGetGameFieldAction
  | ISetMainValueAction
  | IDeletMainValueAction
  | ISetNotesValueAction
  | IDeletNotesValueAction
  | IResetSelectedCellAction
  | IToggleNotesModeAction;

export const handleNumPadClick: AppThunk = (value) => (dispatch) => {
  const { column, row } = getSelectedCell();
  const { gameField, notesMode } = store.getState().gameField;

  if (isNotFixedSelectedCell()) {
    if (!notesMode) {
      dispatch({type:DELETE_ALL_NOTES_VALUES,data:{column, row}})
      if (value === gameField[row][column].mainValue) {
        
        dispatch({ type: DELETE_MAIN_VALUE, data: { column, row } });
      } else {
        dispatch({
          type: SET_MAIN_VALUE,
          data: {
            row: row,
            column: column,
            value: value,
          },
        });
      }
    } else {
      dispatch({ type: DELETE_MAIN_VALUE, data: { column, row } });
      if (value === gameField[row][column].notes[value - 1]) {
        dispatch({
          type: DELETE_NOTES_VALUE,
          data: {
            row: row,
            column: column,
            value: value,
          },
        });
      } else {
        dispatch({
          type: SET_NOTES_VALUE,
          data: {
            row: row,
            column: column,
            value: value,
          },
        });
      }
    }
  }
};

export const clearSelectedCell: AppThunk = () => (dispatch) => {
  const { column, row } = getSelectedCell();
  const gameField = store.getState().gameField.gameField;
  if (isNotFixedSelectedCell()) {
    dispatch({
      type: DELETE_ALL_NOTES_VALUES,
      data: {
        row: row,
        column: column,
      },
    });
    dispatch({
      type: DELETE_MAIN_VALUE,
      data: {
        row: row,
        column: column,
      },
    });
  }
};
