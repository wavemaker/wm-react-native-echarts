/**
 * ArgTypes for Geo chart (common + geo-specific).
 */
import { commonChartArgTypes } from '../args/common';

const geoOnlyArgTypes = {
  data: {
    ...commonChartArgTypes.data,
    description:
      'Array of { name, value } for each region. Region names must match the map GeoJSON feature names.',
  },
  mapJson: {
    control: false,
    description: 'GeoJSON FeatureCollection for the map. Pass the map data to display.',
  },
  mapName: {
    control: 'text',
    description: 'Name used when registering the map. Default: "world"',
  },
  showLegend: {
    control: 'boolean',
    description: 'Whether to show the visual map (color scale) legend. Default: true',
  },
  showHighlighter: {
    control: 'boolean',
    description: 'Whether to emphasize the hovered region. Default: true',
  },
  tooltipFormatter: {
    control: false,
    description: 'Custom formatter for tooltip. (params: { name, value }) => string',
  },
  visualMapMin: {
    control: 'number',
    description: 'Minimum value for the color scale. Auto-derived from data if not set.',
  },
  visualMapMax: {
    control: 'number',
    description: 'Maximum value for the color scale. Auto-derived from data if not set.',
  },
  onSelect: {
    control: false,
    description: 'Called when the user taps/clicks a map region. Receives name and value.',
  },
} as const;

export const geoChartArgTypes = {
  ...commonChartArgTypes,
  ...geoOnlyArgTypes,
} as const;
