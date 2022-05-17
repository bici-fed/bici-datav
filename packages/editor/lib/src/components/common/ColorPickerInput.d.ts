import React from 'react';
interface ColorValue {
    r?: number;
    g?: number;
    b?: number;
    a?: number;
}
interface ColorPickerInputProps {
    value?: ColorValue;
    onChange?: (value: ColorValue) => void;
}
declare const ColorPickerInput: React.FC<ColorPickerInputProps>;
export default ColorPickerInput;
