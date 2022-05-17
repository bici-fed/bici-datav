import React from 'react';
import { FormProps } from 'antd/lib/form/Form';
import { DataPointPropsMap, Node } from '../../../data/defines';
import { FieldData } from '../../../common/CustomizedDynamicForm';
interface ICanvasProps extends FormProps {
    data?: any;
    onFormValueChange?: any;
    onPropertyFormValueChange?: any;
    onEventValueChange: any;
    setIsSave?: (isSave: boolean) => void;
    onAddDataPoint?: (node: Node, disableSource: string[], selectedRowKeys: string[]) => void;
    onAddVedioSource?: (node: Node, disableSource: string[], selectedRowKeys: string[]) => void;
    onCustomizedDynamicFormChange?: (group: string, fields: FieldData[]) => void;
    ref?: any;
    dataPointPropsMap: DataPointPropsMap;
    uploaConfig: any;
}
declare const NodeCanvasProps: React.FC<ICanvasProps>;
export default NodeCanvasProps;
