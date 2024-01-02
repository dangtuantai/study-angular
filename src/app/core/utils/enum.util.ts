export const enumToSelectOptions = <T extends { [key: number]: any }>(
  type: T,
) => {
  return Object.values(type)
    .filter(value => Number.isInteger(value))
    .map(value => ({
      text: `${type[Number(value)]}`,
      value: value,
    }));
};
