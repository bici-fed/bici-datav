import React from 'react';
interface Props {
    onDrag?: (event: any, data: any, custom: any) => void;
    combineCom?: any;
    ref?: any;
}
declare const Layout: React.ForwardRefExoticComponent<Pick<Props, "onDrag" | "combineCom"> & React.RefAttributes<unknown>>;
export default Layout;
