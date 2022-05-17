export default ReactSwitch;
declare class ReactSwitch extends React.Component<any, any, any> {
    constructor(props: any);
    $handleDiameter: any;
    $checkedPos: number;
    $uncheckedPos: number;
    state: {
        $pos: number;
    };
    $lastDragAt: number;
    $lastKeyUpAt: number;
    $onMouseDown(event: any): void;
    $onMouseMove(event: any): void;
    $onMouseUp(event: any): void;
    $onTouchStart(event: any): void;
    $onTouchMove(event: any): void;
    $onTouchEnd(event: any): void;
    $onClick(event: any): void;
    $onInputChange(event: any): void;
    $onKeyUp(): void;
    $setHasOutline(): void;
    $unsetHasOutline(): void;
    $getInputRef(el: any): void;
    componentDidUpdate(prevProps: any): void;
    $onDragStart(clientX: any): void;
    $onDrag(clientX: any): void;
    $onDragStop(event: any): void;
    $checkedStateFromDragging: any;
    $inputRef: any;
    $onChange(event: any): void;
    render(): JSX.Element;
}
declare namespace ReactSwitch {
    namespace propTypes {
        export const checked: PropTypes.Validator<boolean>;
        export const onChange: PropTypes.Validator<(...args: any[]) => any>;
        export const disabled: PropTypes.Requireable<boolean>;
        export { hexColorPropType as offColor };
        export { hexColorPropType as onColor };
        export { hexColorPropType as offHandleColor };
        export { hexColorPropType as onHandleColor };
        export const handleDiameter: PropTypes.Requireable<number>;
        export const uncheckedIcon: PropTypes.Requireable<boolean | PropTypes.ReactElementLike>;
        export const checkedIcon: PropTypes.Requireable<boolean | PropTypes.ReactElementLike>;
        export const boxShadow: PropTypes.Requireable<string>;
        export const activeBoxShadow: PropTypes.Requireable<string>;
        export const height: PropTypes.Requireable<number>;
        export const width: PropTypes.Requireable<number>;
        export const id: PropTypes.Requireable<string>;
        export const className: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const disabled_1: boolean;
        export { disabled_1 as disabled };
        export const offColor: string;
        export const onColor: string;
        export const offHandleColor: string;
        export const onHandleColor: string;
        export { defaultUncheckedIcon as uncheckedIcon };
        export { defaultCheckedIcon as checkedIcon };
        const boxShadow_1: any;
        export { boxShadow_1 as boxShadow };
        const activeBoxShadow_1: string;
        export { activeBoxShadow_1 as activeBoxShadow };
        const height_1: number;
        export { height_1 as height };
        const width_1: number;
        export { width_1 as width };
    }
}
import React from "react";
import PropTypes from "prop-types";
import hexColorPropType from "./hexColorPropType";
import { uncheckedIcon as defaultUncheckedIcon } from "./icons.jsx";
import { checkedIcon as defaultCheckedIcon } from "./icons.jsx";
