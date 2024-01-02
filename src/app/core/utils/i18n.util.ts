import EN from '@angular/common/locales/en';
import VI from '@angular/common/locales/vi';
import { enUS, vi } from 'date-fns/locale';
import { en_US, vi_VN } from 'ng-zorro-antd/i18n';
import { DEFAULT_LANGUAGE } from '../common';


export const getNzLocale = (language: string) => {
  switch (language) {
    case 'en-US':
      return en_US;
    default:
      return vi_VN;
  }
};

export const getNzDateLocale = (language: string) => {
  switch (language) {
    case 'en-US':
      return enUS;
    default:
      return vi;
  }
};

export const getCurrentLang = () =>
  localStorage.getItem('lang') || DEFAULT_LANGUAGE;

export const getCurrentAppTitle = (language: string) => {
  switch (language) {
    case 'en-US':
      return 'Order Management System';
    default:
      return 'Hệ thống quản lý đơn hàng';
  }
};

export const getLangsByCountryCode = (country_code: string | undefined) => {
  switch (country_code) {
    default:
      return ['vi-VN', 'en-US'];
  }
};

export const getFormatDateTimeByCountryCode = (
  country_code: string | undefined
) => {
  switch (country_code) {
    case 'vn':
      return 'dd/MM/yyyy - HH:mm';
    default:
      return 'dd/MM/yyyy - HH:mm';
  }
};

export const getFormatDateByCountryCode = (
  country_code: string | undefined
) => {
  switch (country_code) {
    case 'vn':
      return 'dd/MM/yyyy';
    default:
      return 'dd/MM/yyyy';
  }
};

export const getFormatTimeByCountryCode = (
  country_code: string | undefined
) => {
  switch (country_code) {
    case 'vn':
      return 'HH:mm';
    default:
      return 'HH:mm';
  }
};

export const getLocaleData = (language: string) => {
  switch (language) {
    case 'en-US':
      return EN;
    default:
      return VI;
  }
};

export const getCurrencyCode = (language: string) => {
  switch (language) {
    case 'en-US':
      return 'USD';
    default:
      return 'VND';
  }
};

export const getCountryCode = () =>
  localStorage.getItem('country_code') || undefined;
