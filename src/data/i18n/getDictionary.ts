// src/data/i18n/getDictionary.ts
import { Dictionary } from './types';
import { dictionary as en } from './en';
import { dictionary as no } from './no';

export const getDictionary = async (
  lang: string
): Promise<Dictionary> => lang === 'no' ? no : en;
