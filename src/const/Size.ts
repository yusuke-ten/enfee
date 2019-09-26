// const FONT = {
//   XXXLARGE: 32,
//   XXLARGE: 24,
//   XLARGE: 18,
//   LARGE: 16,
//   MEDIUM: 14,
//   BASE: 12,
//   SMALL: 11,
//   XSMALL: 10,
//   TINY: 8,
// } as const;

// const FONT_RATIO = {
//   XXXLARGE: 3.2,
//   XXLARGE: 2.4,
//   XLARGE: 2.0,
//   LARGE: 1.8,
//   MEDIUM: 1.6,
//   BASE: 1.4,
//   SMALL: 1.2,
//   XSMALL: 1.1,
//   XXSMALL: 1.0,
//   TINY: 0.9,
// } as const;

const FONT = {
  XXXLARGE: 32,
  XXLARGE: 24,
  XLARGE: 20,
  LARGE: 18,
  MEDIUM: 16,
  BASE: 14,
  SMALL: 13,
  XSMALL: 12,
  XXSMALL: 11,
  TINY: 10,
} as const;

const FONT_RATIO = {
  XXXLARGE: 3.2,
  XXLARGE: 2.4,
  XLARGE: 1.8,
  LARGE: 1.6,
  MEDIUM: 1.4,
  BASE: 1.2,
  SMALL: 1.1,
  XSMALL: 1.0,
  TINY: 0.8,
} as const;

const FONT_WEIGHT = {
  NORMAL: 400,
  BOLD: 700,
} as const;

const BORDER_RADIUS = {
  RECT: 4,
  OVAL: 30,
} as const;

const BREAK_POINT = {
  MOBILE: 560,
  TABLET: 960,
  PC: 1200,
} as const;

const HEADER = {
  HEIGHT: 50,
};

export default {
  FONT,
  FONT_RATIO,
  FONT_WEIGHT,
  BORDER_RADIUS,
  BREAK_POINT,
  HEADER,
};
