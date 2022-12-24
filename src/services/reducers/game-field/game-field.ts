import { TGameFieldActions } from "../../actions/game-field/game-field";
import {
  GET_GAME_FIELD,
  SET_MAIN_VALUE,
  DELETE_ALL_NOTES_VALUES,
  SET_SELECTED_CELL,
  TOGGLE_NOTES_MODE,
  DELETE_MAIN_VALUE,
  SET_NOTES_VALUE,
  DELETE_NOTES_VALUE,
} from "../../constants";
import { TSelectedCell, TGameFieldCell } from "../../types/data";
import { createGameField } from "./game-field.utils";

export type TGameFieldState = {
  selectedCell: TSelectedCell;
  gameField: Array<Array<TGameFieldCell>> | [];
  notesMode: boolean;
};

const gameFieldInitialState: TGameFieldState = {
  selectedCell: {
    row: 0,
    column: 0,
  },

  notesMode: false,
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

    case SET_MAIN_VALUE: {
      const gameField = state.gameField.slice();
      const { row, column, value } = action.data;
      gameField[row][column].mainValue = value;
      return {
        ...state,
        gameField: gameField,
      };
    }

    case DELETE_MAIN_VALUE: {
      console.log("удалить основную цифру")
      const gameField = state.gameField.slice();
      const { row, column } = action.data;
      gameField[row][column].mainValue = 0;
      return {
        ...state,
        gameField: gameField,
      };
    }

    case SET_NOTES_VALUE: {
      const gameField = state.gameField.slice();
      const { row, column, value } = action.data;
      gameField[row][column].notes[value-1] = value;
      return {
        ...state,
        gameField: gameField,
      };
    }

    case DELETE_NOTES_VALUE: {
      const gameField = state.gameField.slice();
      const { row, column, value } = action.data;
      gameField[row][column].notes[value-1]  = 0;
      return {
        ...state,
        gameField: gameField,
      };
    }

    case DELETE_ALL_NOTES_VALUES: {
      const gameField = state.gameField.slice();
      const { row, column } = action.data;
      gameField[row][column].notes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      return {
        ...state,
        gameField: gameField,
      };
    }

    case TOGGLE_NOTES_MODE: {
      return {
        ...state,
        notesMode: !state.notesMode,
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
