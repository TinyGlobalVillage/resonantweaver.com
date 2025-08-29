// src/data/i18n/getDictionary.ts
import { Dictionary } from '../data/i18n/types';
import { dictionary as en } from '../data/i18n/en';
import { dictionary as no } from '../data/i18n/no';

export const getDictionary = async (
  lang: string
): Promise<Dictionary> => lang === 'en' ? en : no;
