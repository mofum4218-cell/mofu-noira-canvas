// src/greenhouse/themes/colors/index.ts
import colorSet from './colors.json';
import { DefaultTheme } from 'styled-components';
import { ThemeName } from '../types';

export const getTheme = (themeName: ThemeName): DefaultTheme => {
  console.log("🎨 getTheme called with:", themeName); // ← これ！
  const themeData = colorSet[themeName];
  return { ...themeData } as DefaultTheme; // ← これで「毎回新しいオブジェクト」になる！
};

