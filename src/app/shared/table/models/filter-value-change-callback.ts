export type FilterValueChangeCallBack<ValueType> = (
  value: FieldValueChangeModel<ValueType>,
) => void;

export interface FieldValueChangeModel<ValueType = string> {
  field: string;
  value?: ValueType;
}
