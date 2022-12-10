import { TGameFieldActions } from "../../actions/game-field/game-field";
import { GET_GAME_FIELD, SET_SELECTED_CELL } from "../../constants";
import { TSelectedCell, TGameFieldCell } from "../../types/data";
import { createGameField } from "./game-field.utils";

export type TGameFieldState = {
  selectedCell: TSelectedCell;
  gameField: Array<Array<TGameFieldCell>> | [];
};

const gameFieldInitialState: TGameFieldState = {
  selectedCell: {
    rowIndex: -1,
    columnIndex: -1,
  },
  gameField: [],
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
    case GET_GAME_FIELD: {      
      return {
        ...state,
        gameField: createGameField(),
      };
    }
    default: {
      return state;
    }
  }
};
