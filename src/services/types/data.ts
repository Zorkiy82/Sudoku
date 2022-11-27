export type TCellNumber08 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type TCellNumber09 = TCellNumber08 | 9;

export type TSelectedCell = {
  rowIndex: TCellNumber08 | -1;
  columnIndex: TCellNumber08 | -1;
};
