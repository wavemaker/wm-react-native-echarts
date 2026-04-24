export const getAxisByMinMax = (min = 0, max = 100, interval?: number) => {
    interval = interval || Math.floor((max - min) / 10) || 1;
    const axisArray: number[] = [];
    for (let i = min; i <= max; i += interval) {
        axisArray.push(i);
    }
    if (axisArray[axisArray.length - 1] !== max) {
        axisArray.push(max);
    }
    return axisArray;
}

export const getAxis = (data: number[]) => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    return getAxisByMinMax(min, max);
}

function axisMinMaxIntervalFromFields(params: {
  min?: number;
  max?: number;
  interval?: number;
}): { min?: number; max?: number; interval?: number } | undefined {
  const out: { min?: number; max?: number; interval?: number } = {};
  if (params.min !== undefined) out.min = params.min;
  if (params.max !== undefined) out.max = params.max;
  if (params.interval !== undefined) out.interval = params.interval;
  if (out.min === undefined && out.max === undefined && out.interval === undefined) {
    return undefined;
  }
  return out;
}

/**
 * Maps explicit Cartesian Y (value) axis props to axis `min` / `max` / `interval`.
 * When all three are omitted, returns `undefined` so the chart library chooses the scale.
 */
export function valueAxisBoundsFromProps(params: {
  minY?: number;
  maxY?: number;
  intervalY?: number;
}): { min?: number; max?: number; interval?: number } | undefined {
  return axisMinMaxIntervalFromFields({
    min: params.minY,
    max: params.maxY,
    interval: params.intervalY,
  });
}

/**
 * Maps explicit Cartesian X-axis props to axis `min` / `max` / `interval`.
 * When all three are omitted, returns `undefined` so the chart library chooses the scale.
 */
export function xAxisBoundsFromProps(params: {
  minX?: number;
  maxX?: number;
  intervalX?: number;
}): { min?: number; max?: number; interval?: number } | undefined {
  return axisMinMaxIntervalFromFields({
    min: params.minX,
    max: params.maxX,
    interval: params.intervalX,
  });
}