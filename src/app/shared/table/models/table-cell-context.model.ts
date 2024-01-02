export interface TableCellContext<T> {
  $implicit: T;
  cellType: string;
  rowIndex: number;
  cellIndex: number;
}
