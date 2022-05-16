import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import ColorPicker from './ColorPicker/ColorPicker'

const { Option } = Select;

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

const ColorPickerInput: React.FC<ColorPickerInputProps> = ({ value = {}, onChange }) => {
  return (
    <ColorPicker></ColorPicker>
  );
};
export default ColorPickerInput
