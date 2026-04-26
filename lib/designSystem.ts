import type { CSSProperties } from "react";

export const designSystem = {
  pageWrapperMaxPx: 1280,
  pageWrapperGutterRem: 2.5,
  containerLargePercent: 100,
  containerMediumRem: 48,
  containerSmallRem: 38,
  largeMediaRem: 72,
} as const;

export const designSystemCssVars = {
  "--page-wrapper-max": `${designSystem.pageWrapperMaxPx}px`,
  "--page-wrapper-gutter": `${designSystem.pageWrapperGutterRem}rem`,
  "--container-large": `${designSystem.containerLargePercent}%`,
  "--container-medium": `${designSystem.containerMediumRem}rem`,
  "--container-small": `${designSystem.containerSmallRem}rem`,
  "--media-large": `${designSystem.largeMediaRem}rem`,
} as CSSProperties;
