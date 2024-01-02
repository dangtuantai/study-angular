export type FilterParamModel<RecordType> = { [key in keyof RecordType]?: any };
export interface SortParamModel<RecordType> {
  key: keyof RecordType;
  value: 'asc' | 'desc' | null;
}

export interface QueryParamsChangedModel<RecordType> {
  sorts: SortParamModel<RecordType>[];
  filter?: FilterParamModel<RecordType>;
}
