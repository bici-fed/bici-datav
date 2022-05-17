import React from 'react';
export interface FieldData {
    name: string | number | (string | number)[];
    value?: any;
    touched?: boolean;
    validating?: boolean;
    errors?: string[];
}
export interface FormFieldGroup {
    group: string;
    formItems: FieldData[];
}
export interface CustomizedFormProps {
    onChange: (group: string, fields: FieldData[]) => void;
    formStyle: FormFieldGroup[];
}
declare const CustomizedDynamicForm: React.FC<CustomizedFormProps>;
export default CustomizedDynamicForm;
