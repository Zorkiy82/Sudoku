import { SET_SELECTED_CELL } from "../../constants";
import { TSelectedCell } from "../../types/data";

export interface ISetSelectedCellAction {
  readonly type: typeof SET_SELECTED_CELL;
  data: TSelectedCell;
}

export type TGameFieldActions = ISetSelectedCellAction;
