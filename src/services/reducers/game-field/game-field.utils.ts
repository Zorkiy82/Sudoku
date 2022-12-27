import {
  templateGeneratedField,
  templateUserChangeField,
} from "../../../utils/constants";
import {
  TGameField,
  TGameFieldCell,
  TGeneratedField,
  TUserChangeField,
} from "../../types/data";

const getGeneratedField = (): TGeneratedField => {
  return templateGeneratedField;
};

const getEmpetyUserChangeField = (): TUserChangeField => {
  const userField = [];
  for (let i = 0; i < 9; i++) {
    userField.push(
      Array(9).fill({
        mainValue: 0,
        notes: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      })
    );
  }
  return userField;
};

const getUserChangeField = (): TUserChangeField => {
  let userField = templateUserChangeField.slice();
  if (!userField.length) {
    userField = getEmpetyUserChangeField();
  }

  return userField;
};

export const createGameField = (): TGameField => {
  const gameField: TGameField = [[], [], [], [], [], [], [], [], []];
  const genField = getGeneratedField();
  const userField = getUserChangeField();
  const defaultGameCell: TGameFieldCell = {
    mainValue: 0,
    _id: "",
    notes: [],
    isCorrect: true,
    isFixed: false,
    isHighlighted: false,
  };

  for (let i = 0; i < 9; i++) {
    for (let k = 0; k < 9; k++) {
      const genCell = genField[i][k];
      const userCell = userField[i][k];
      let gameCell = { ...defaultGameCell, _id: `${i}-${k}` };

      if (genCell) {
        gameCell = {
          ...gameCell,
          mainValue: genCell,
          // notes: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          isFixed: true,
        };
      } else {
        gameCell = {
          ...gameCell,
          mainValue: userCell.mainValue,
          notes: userCell.notes.slice(),
          isFixed: false,
        };
      }

      gameField[i][k] = gameCell;
    }
  }

  return gameField;
};

export const clearDependentNotes = (
  curRow: number,
  curColumn: number,
  curValue: number,
  field: TGameFieldCell[][]
) => {
  const startRow = Math.floor(curRow / 3) * 3;
  const startColumn = Math.floor(curColumn / 3) * 3;

  for (let r = startRow; r < startRow + 3; r++) {
    for (let c = startColumn; c < startColumn + 3; c++) {
      if (!field[r][c].isFixed) {
        field[r][c].notes[curValue - 1] = 0;
      }
    }
  }
  field[curRow].map((value) => {
    if (!value.isFixed) {
      value.notes[curValue - 1] = 0;
    }
    return {
      ...value,
    };
  });

  for (let i = 0; i < 9; i++) {
    if (!field[i][curColumn].isFixed) {
      field[i][curColumn].notes[curValue - 1] = 0;
    }
  }
};
