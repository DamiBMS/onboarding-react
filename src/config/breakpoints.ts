export const SIZES = {
  MOBILE: 320,
  TABLET: 768,
  DESKTOP: 992,
  DESKTOP_LG: 1200,
}

/* Breakpoints */
export const BREAKPOINTS = {
  DESKTOP_LG: `min-width: ${SIZES.DESKTOP_LG}px`,
  DESKTOP: `(min-width: ${SIZES.DESKTOP}px) and (max-width: ${SIZES.DESKTOP_LG - 1}px)`,
  TABLET: `(min-width: ${SIZES.TABLET}px) and (max-width: ${SIZES.DESKTOP - 1}px)`,
  MOBILE: `(min-width: ${SIZES.MOBILE}px) and (max-width: ${SIZES.TABLET - 1}px)`,
}