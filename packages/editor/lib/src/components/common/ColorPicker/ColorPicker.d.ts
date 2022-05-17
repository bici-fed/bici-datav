import React from 'react';
interface ColorPickerProps {
    value?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
}
declare const ColorPicker: React.FC<ColorPickerProps>;
export default ColorPicker;
