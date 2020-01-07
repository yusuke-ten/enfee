import { Size } from 'src/const';

export type Size = 'xs' | 's' | 'b' | 'm' | 'l' | 'xl';

export const sizeMapping: { [k in Size]: number } = {
  xs: Size.FONT_RATIO.XSMALL,
  s: Size.FONT_RATIO.SMALL,
  b: Size.FONT_RATIO.BASE,
  m: Size.FONT_RATIO.MEDIUM,
  l: Size.FONT_RATIO.LARGE,
  xl: Size.FONT_RATIO.XLARGE,
};
