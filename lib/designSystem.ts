import type { CSSProperties } from "react";

export const designSystem = {
  pageWrapperMaxPx: 1280,
  pageWrapperGutterRem: 2.5,
  containerFullGutterRem: 1.5,
  containerLargePercent: 100,
  containerMediumRem: 48,
  containerSmallRem: 38,
  largeMediaRem: 72,
  sectionPaddingRem: 4.5,
  sectionStackGapRem: 3,
  containerGapRem: 1.6,
} as const;

export const designSystemCssVars = {
  "--page-wrapper-max": `${designSystem.pageWrapperMaxPx}px`,
  "--page-wrapper-gutter": `${designSystem.pageWrapperGutterRem}rem`,
  "--container-full-gutter": `${designSystem.containerFullGutterRem}rem`,
  "--container-large": `${designSystem.containerLargePercent}%`,
  "--container-medium": `${designSystem.containerMediumRem}rem`,
  "--container-small": `${designSystem.containerSmallRem}rem`,
  "--media-large": `${designSystem.largeMediaRem}rem`,
  "--space-section": `${designSystem.sectionPaddingRem}rem`,
  "--space-section-stack": `${designSystem.sectionStackGapRem}rem`,
  "--space-container-gap": `${designSystem.containerGapRem}rem`,
} as CSSProperties;
