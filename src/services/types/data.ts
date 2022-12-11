export type TSelectedCell = {
  row: number;
  column: number;
};

export type TUserChangeCell = {
  mainValue: number;
  notes: Array<number>;
};

export type TGameFieldCell = TUserChangeCell & {
  isFixed: boolean;
  isHighlighted: boolean;
  isCorrect: boolean;
};

export type TGeneratedField = Array<Array<number>>;
export type TUserChangeField = Array<Array<TUserChangeCell>>;
export type TGameField = Array<Array<TGameFieldCell>>;
