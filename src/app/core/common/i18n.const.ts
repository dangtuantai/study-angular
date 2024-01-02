import { enumToSelectOptions } from "../utils/enum.util";

export enum AppLanguage {
  vi = 'vi-VN',
  en = 'en-US',
}

export const DEFAULT_LANGUAGE = AppLanguage.vi;


export const LANGUAGES = enumToSelectOptions(AppLanguage).map(
  ({ text }) => text,
);
