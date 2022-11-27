import { TGameFieldActions } from "../../actions/game-field/game-field";
import { SET_SELECTED_CELL } from "../../constants";
import { TSelectedCell } from "../../types/data";

export type TGameFieldState = {
  selectedCell: TSelectedCell;
};

const gameFieldInitialState: TGameFieldState = {
  selectedCell: {
    rowIndex: -1,
    columnIndex: -1,
  },
};

export const gameFieldReducer = (
  state = gameFieldInitialState,
  action: TGameFieldActions
): TGameFieldState => {
  switch (action.type) {
    case SET_SELECTED_CELL: {
      return {
        ...state,
        selectedCell: { ...action.data },
      };      
    }
    default: {
      return state;
    }
  }
};
