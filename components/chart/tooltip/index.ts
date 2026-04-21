export {
  ChartPointerTooltipOverlay,
} from './chart-pointer-tooltip-overlay';
export type { ChartPointerTooltipOverlayProps } from './chart-pointer-tooltip-overlay';
/** Built-in tooltip layout when `renderTooltip` is not provided. */
export type ChartTooltipPreset = 'card' | 'dark' | 'compact' | 'kpi' | 'striped';

/** Tooltip preset or `none` to hide the React Native tooltip overlay. */
export type ChartTooltipOption = ChartTooltipPreset | 'none';

