export interface RowDetailContext<T> {
  $implicit: T;
  row: T;
  rowIndex: number;
  isExpand: boolean
}
