import { CSSProperties } from 'react';
import { FormInstance } from 'antd/lib/form';
interface CompContextMenuProps {
    contextMenuRef: any;
    showContextmenu: boolean;
    contextmenu: CSSProperties;
    name: string;
    form: FormInstance;
    handleDelete: () => void;
    handleOk: () => void;
}
declare const CompContextMenu: (props: CompContextMenuProps) => JSX.Element;
export default CompContextMenu;
