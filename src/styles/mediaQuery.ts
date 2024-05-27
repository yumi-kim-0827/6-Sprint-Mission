const BREAKPOINT_TABLET = 768;
const BREAKPOINT_PC = 1200;

export const onTablet = `@media (min-width: ${BREAKPOINT_TABLET}px) and (max-width: ${
  BREAKPOINT_PC - 1
}px)`;

export const onPc = `@media (min-width: ${BREAKPOINT_PC}px)`;

export const onTabletAndPc = `@media (min-width: ${BREAKPOINT_TABLET}px)`;
