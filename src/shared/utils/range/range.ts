export const range = (min: number, max: number, step: number = 1): number[] => {
    const minInt = Math.min(Math.floor(min), Math.floor(max));
    const maxInt = Math.max(Math.floor(min), Math.floor(max));
    const stepInt = Math.floor(step);

    const result = [];
    for (let i = minInt; i < maxInt; i += stepInt) {
        result.push(i);
    }

    return result;
};
