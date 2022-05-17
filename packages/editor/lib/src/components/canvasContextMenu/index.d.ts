import React, { Component } from 'react';
import { Topology, Node, Line, Lock } from '@bici-topology/core';
import { FormInstance } from 'antd/es/form';
export interface CanvasContextMenuProps {
    data: {
        node?: Node;
        line?: Line;
        multi?: boolean;
        nodes?: Node[];
        locked?: Lock;
    };
    canvas: Topology;
    show?: boolean;
    combineCom?: any;
    onNeedHide?: () => void;
    getNewComponents?: () => void;
    isSave?: boolean;
    setIsSave?: (value: boolean) => void;
}
export default class CanvasContextMenu extends Component<CanvasContextMenuProps> {
    state: {
        newComVisible: boolean;
        componentName: string;
    };
    formRef: React.RefObject<FormInstance<any>>;
    saveNewComponent(params: any): Promise<import("axios").AxiosResponse<any>>;
    onTop(): void;
    onBottom(): void;
    onCombine(stand: boolean): void;
    onUncombine: () => void;
    onLock: () => void;
    onNewComponent: () => void;
    handleOk: () => void;
    handleCancel: () => void;
    onCheck: () => Promise<void>;
    uncombineNodes: (nodes: any, result: any) => void;
    renderNewComponentModal: () => JSX.Element;
    render(): JSX.Element;
}
