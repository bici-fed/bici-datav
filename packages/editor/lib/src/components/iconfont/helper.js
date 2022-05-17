/* eslint-disable */
/**
 * @param {string | string[] | undefined} color
 * @param {number} index
 * @param {string} defaultColor
 * @return {string}
 */
export var getIconColor = function (color, index, defaultColor) {
    return color
        ? (typeof color === 'string'
            ? color
            : color[index] || defaultColor)
        : defaultColor;
};
//# sourceMappingURL=helper.js.map