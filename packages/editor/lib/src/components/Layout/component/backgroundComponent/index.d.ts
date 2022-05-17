import React from 'react';
import { Topology } from '@bici-topology/core';
import { FormProps } from 'antd/lib/form/Form';
interface ICanvasProps extends FormProps {
    data?: Topology;
    baseUrl?: string;
    onFormValueChange?: any;
    onEventValueChange?: any;
    websocketConf?: any;
    preInstallBgImages?: any;
    svgRef?: any;
    canvasRef?: any;
    onChangeCanvasSize?: (sizeInfo: any) => void;
    onChangeBkImage?: (imageUrl: string) => void;
    isSave?: boolean;
    setIsSave?: (value: boolean) => void;
    uploadConfig?: any;
}
declare const BackgroundCanvasProps: React.FC<ICanvasProps>;
export default BackgroundCanvasProps;
