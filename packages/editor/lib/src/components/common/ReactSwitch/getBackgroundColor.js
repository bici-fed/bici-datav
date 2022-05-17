function createBackgroundColor(pos, checkedPos, uncheckedPos, offColor, onColor) {
    var relativePos = (pos - uncheckedPos) / (checkedPos - uncheckedPos);
    if (relativePos === 0) {
        return offColor;
    }
    if (relativePos === 1) {
        return onColor;
    }
    var newColor = '#';
    for (var i = 1; i < 6; i += 2) {
        var offComponent = parseInt(offColor.substr(i, 2), 16);
        var onComponent = parseInt(onColor.substr(i, 2), 16);
        var weightedValue = Math.round((1 - relativePos) * offComponent + relativePos * onComponent);
        var newComponent = weightedValue.toString(16);
        if (newComponent.length === 1) {
            newComponent = "0".concat(newComponent);
        }
        newColor += newComponent;
    }
    return newColor;
}
function convertShorthandColor(color) {
    if (color.length === 7) {
        return color;
    }
    var sixDigitColor = '#';
    for (var i = 1; i < 4; i += 1) {
        sixDigitColor += color[i] + color[i];
    }
    return sixDigitColor;
}
export default function getBackgroundColor(pos, checkedPos, uncheckedPos, offColor, onColor) {
    var sixDigitOffColor = convertShorthandColor(offColor);
    var sixDigitOnColor = convertShorthandColor(onColor);
    return createBackgroundColor(pos, checkedPos, uncheckedPos, sixDigitOffColor, sixDigitOnColor);
}
//# sourceMappingURL=getBackgroundColor.js.map