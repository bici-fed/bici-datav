import React from "react";
interface CheckBoxItem {
    name: string;
    value: any;
    checked: boolean;
    icon: string;
}
interface CheckboxGroupProps {
    value?: CheckBoxItem[];
    disabled?: boolean;
    onChange?: (value: object) => void;
}
declare const CheckboxGroup: React.FC<CheckboxGroupProps>;
export default CheckboxGroup;
