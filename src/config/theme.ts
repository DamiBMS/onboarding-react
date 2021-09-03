import { COLORS } from "./colors";
import { rem } from "polished";

const colors = {
  /* named by functionality */
  primaryDefault: COLORS.PRIMARY.DEFAULT,
  primaryDark: COLORS.PRIMARY.DARK,
  secondaryDefault: COLORS.SECONDARY.DEFAULT,
  secondaryDark: COLORS.SECONDARY.DARK,
  text: COLORS.TEXT.NORMAL,
  textInverse: COLORS.TEXT.INVERSE,
  white: COLORS.NEUTRALS.WHITE,
  neutrals_80: COLORS.NEUTRALS.NEUTRALS_80,
  neutrals_40: COLORS.NEUTRALS.NEUTRALS_40,
  neutrals_10: COLORS.NEUTRALS.NEUTRALS_10,
  info: COLORS.STATES.INFO,
  success: COLORS.STATES.SUCCESS,
  warning: COLORS.STATES.WARNING,
  alert: COLORS.STATES.ALERT,
  disabled: COLORS.STATES.DISABLED,
} as const;

const breakpoints = ["320px", "480px", "768px", "992px", "1200px"];
// @ts-ignore
breakpoints["2xs"] = breakpoints[0];
// @ts-ignore
breakpoints.xs = breakpoints[1];
// @ts-ignore
breakpoints.sm = breakpoints[2];
// @ts-ignore
breakpoints.md = breakpoints[3];
// @ts-ignore
breakpoints.lg = breakpoints[4];

const mediaQueries = {
  xs: breakpoints[1],
  sm: breakpoints[2],
  md: breakpoints[3],
  lg: breakpoints[4],
} as const;

const space = {
  "0": "0",
  xxs: "4px",
  xs: "8px",
  s: "16px",
  m: "24px",
  l: "32px",
  xl: "40px",
} as const;

const fontFamily = {
  openSans: '"Open Sans", sans-serif',
  merryweather: '"Merriweather", serif',
} as const;

const fontWeights = {
  light: 200,
  regular: 400,
  semiBold: 600,
  bold: 700,
  extraBold: 900,
} as const;

const fontSizes = {
  xs: rem("12px"),
  sm: rem("14px"),
  md: rem("16px"),
  lg: rem("18px"),
  xl: rem("20px"),
  "2xl": rem("24px"),
  "3xl": rem("36px"),
  "4xl": rem("48px"),
  "5xl": rem("64px"),
} as const;

const lineHeights = {
  base: "1.4",
  double: "2",
  normal: "normal",
  none: "1",
} as const;

const textTransform = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  none: "none",
} as const;

const zIndices = {
  basic: 1,
  sticky: 20,
  dropdown: 30,
  popup: 50,
  header: 100,
  drawer: 900,
  overlay: 1000,
  modal: 9000,
}

export const defaultTheme = {
  colors,
  breakpoints,
  mediaQueries,
  space,
  fontFamily,
  fontWeights,
  fontSizes,
  lineHeights,
  textTransform,
  zIndices,
} as const;
