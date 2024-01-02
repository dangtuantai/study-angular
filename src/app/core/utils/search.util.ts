export const convertToSearchValue = (ori_value: string): string => {
  return ori_value.trim().replace(/\s+/g,' ');
};