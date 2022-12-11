import { TGameFieldActions } from "../../actions/game-field/game-field";
import {
  GET_GAME_FIELD,
  SET_MAIN_VALUE_TO_CELL,
  SET_SELECTED_CELL,
} from "../../constants";
import { TSelectedCell, TGameFieldCell } from "../../types/data";
import { createGameField } from "./game-field.utils";

export type TGameFieldState = {
  selectedCell: TSelectedCell;
  gameField: Array<Array<TGameFieldCell>> | [];
};

const gameFieldInitialState: TGameFieldState = {
  selectedCell: {
    row: 0,
    column: 0,
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

    case SET_MAIN_VALUE_TO_CELL: {
      const gameField = state.gameField.slice();
      const { row, column, value } = action.data;
      gameField[row][column].mainValue = value;
      return {
        ...state,
        gameField: gameField,
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
