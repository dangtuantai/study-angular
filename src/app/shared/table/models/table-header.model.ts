import { NzTableFilterFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { Observable } from 'rxjs';

export interface TableHeaderConfiguration<RecordType> {
  label: string;
  subLabel?: string;
  width?: string;
  isHidden?: boolean;
  field?: keyof RecordType;
  fieldFilter?: keyof RecordType;
}
export interface TableHeader<RecordType>
  extends TableHeaderConfiguration<RecordType> {
  labelParams?: object;
  position?: 'left' | 'right' | 'center';

  cellType?: string;
  blockInlineSelection?: boolean | null;
  canFilter?: boolean;
  // Use this in case you would like to make a custom filter.
  filter?: FilterModel;
  /**
   * @deprecated Move to use `field` instead;
   */
  columnKey?: keyof RecordType;
  filters$?: Observable<{ text: string; value: any }[]>;
  filters?: { label: string; value: any }[];
  filterFn?: boolean | NzTableFilterFn<RecordType>;

  // Sort
  sortOrder?: NzTableSortOrder;
  sortFn?: boolean | null;
  sortDirections?: NzTableSortOrder[];

  extraLabel$?: Observable<string | number>;
  maxWidth?: number;
  minWidth?: number;
}

export interface FilterModel {
  filterType: 'text' | 'number' | 'select' | 'select-multiple' | 'time' | 'date' | 'dateRange' | 'list' | string;
}
