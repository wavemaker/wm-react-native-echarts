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