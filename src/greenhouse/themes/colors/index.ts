import colorSet from './colors.json';
export const getTheme = (themeName: keyof typeof colorSet) => colorSet[themeName];
