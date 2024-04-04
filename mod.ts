import data from "./data.ts"

class Color {
    r
    g
    b
    constructor([r, g, b]: number[]) {
        this.r = r
        this.g = g
        this.b = b
    }
    toRgbStr() {
        return `rgb(${this.r},${this.g},${this.b})`
    }
}

/**
 * @param n: 0-1
 * @returns [r: 0-1, g: 0-1, b: 0-1]
 */
export const fromRange0to1 =
(n: number) =>
new Color(data[data.length * n])

