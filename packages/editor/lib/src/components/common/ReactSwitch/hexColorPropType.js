// Make sure color props are strings that start with "#" since other ways to write colors are not supported.
var hexColorPropType = function (props, propName, componentName) {
    var prop = props[propName];
    if (typeof prop !== 'string' ||
        prop[0] !== '#' ||
        (prop.length !== 4 && prop.length !== 7)) {
        return new Error("Invalid prop '".concat(propName, "' supplied to '").concat(componentName, "'. '").concat(propName, "' has to be either a 3-digit or 6-digit hex-color string. Valid examples: '#abc', '#123456'"));
    }
    return null;
};
export default hexColorPropType;
//# sourceMappingURL=hexColorPropType.js.map