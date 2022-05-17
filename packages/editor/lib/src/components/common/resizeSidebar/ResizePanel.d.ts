import React from "react";
declare class ResizePanelProps {
    direction?: 'w' | 'e' | 's' | 'n';
    containerClass?: string;
    style?: any;
    handleClass?: any;
    borderClass?: any;
}
declare class ResizePanelState {
    size?: number;
}
declare class ResizePanel extends React.Component<ResizePanelProps, ResizePanelState> {
    contentRef?: any;
    wrapperRef?: any;
    constructor(props: any);
    isHorizontal: () => boolean;
    componentDidMount(): void;
    validateSize(): void;
    handleDrag: (e: any, ui: any) => void;
    handleDragEnd: (e: any, ui: any) => void;
    render(): JSX.Element;
}
export default ResizePanel;
