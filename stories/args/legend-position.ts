/**
 * Shared Storybook argType for chart `legendPosition`.
 */
export const legendPositionArgType = {
  legendPosition: {
    control: 'select',
    options: ['top', 'bottom', 'left', 'right'],
    description:
      'Legend position. Top and bottom use a horizontal legend that wraps. Left and right use a vertical legend. Default: bottom.',
  },
} as const;
