const THEME = {
  PRIMARY: '#EDAD0B',
  BACKGROUND: '#F4F1E9',
  ACCENT: '#009F8C',
  TWITTER: '#55ACEE',
} as const;

const FONT = {
  BASE: '#858282',
  DARK: '#5C5B5B',
  LIGHT: '#cfcece',
  SUPER_LIGHT: '#bec8d2',
  LESS: '#FFFFFF',
} as const;

const BORDER = {
  LIGHT: '#DEE5EC',
} as const;

const Color = {
  THEME,
  FONT,
  BORDER,
} as const;

export default Color;
