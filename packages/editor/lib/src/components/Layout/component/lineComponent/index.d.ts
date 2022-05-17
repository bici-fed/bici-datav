import React from 'react';
import './index.module.less';
import { FormProps } from 'antd/lib/form/Form';
interface ICanvasProps extends FormProps {
    data?: any;
    onFormValueChange?: (value: any) => void;
}
declare const LineCanvasProps: React.FC<ICanvasProps>;
export default LineCanvasProps;
