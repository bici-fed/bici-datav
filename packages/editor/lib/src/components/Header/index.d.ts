import type { Topology } from '@bici-topology/core';
import React from 'react';
import { History } from 'history';
import { BasicTarget } from 'ahooks/lib/utils/dom';
interface HeaderProps {
    canvas?: Topology;
    history?: History;
    rootRef?: BasicTarget<HTMLElement>;
    isSave?: boolean;
    scaleVal?: number;
    setIsSave?: (value: boolean) => void;
    onExtraSetting?: () => void;
    onScaleCanvas?: (scale: number) => void;
    onEditorSaveCb?: (canvasData: any) => void;
    onPoweroff?: () => void;
    autoSaveInterval?: number;
    onPreview?: (data: any) => void;
    ref?: any;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
