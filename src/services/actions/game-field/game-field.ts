import { SET_SELECTED_CELL, GET_GAME_FIELD } from "../../constants";
import { TSelectedCell } from "../../types/data";

export interface ISetSelectedCellAction {
  readonly type: typeof SET_SELECTED_CELL;
  data: TSelectedCell;
}

export interface IGetGameField {
  readonly type: typeof GET_GAME_FIELD;
}

export type TGameFieldActions = ISetSelectedCellAction | IGetGameField;
