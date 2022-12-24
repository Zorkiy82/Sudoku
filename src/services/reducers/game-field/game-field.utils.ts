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
