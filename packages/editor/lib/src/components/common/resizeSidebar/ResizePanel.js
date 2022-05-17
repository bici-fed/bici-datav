var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { DraggableCore } from "react-draggable";
import debounce from "lodash.debounce";
import $ from "cash-dom";
import classNames from "classnames/bind";
import style from "./ResizePanel.module.css";
var cx = classNames.bind(style);
var ResizePanelProps = /** @class */ (function () {
    function ResizePanelProps() {
    }
    return ResizePanelProps;
}());
var ResizePanelState = /** @class */ (function () {
    function ResizePanelState() {
    }
    return ResizePanelState;
}());
var ResizePanel = /** @class */ (function (_super) {
    __extends(ResizePanel, _super);
    function ResizePanel(props) {
        var _this = _super.call(this, props) || this;
        _this.isHorizontal = function () {
            return _this.props.direction === "w" || _this.props.direction === "e";
        };
        _this.handleDrag = function (e, ui) {
            var direction = _this.props.direction;
            var factor = direction === "e" || direction === "s" ? -1 : 1;
            // modify the size based on the drag delta
            var delta = _this.isHorizontal() ? ui.deltaX : ui.deltaY;
            _this.setState(function (s, p) { return ({ size: Math.max(10, s.size - delta * factor) }); });
        };
        _this.handleDragEnd = function (e, ui) {
            _this.validateSize();
        };
        _this.state = { size: 0 };
        _this.contentRef = React.createRef();
        _this.wrapperRef = React.createRef();
        _this.validateSize = debounce(_this.validateSize, 100).bind(_this);
        return _this;
    }
    ResizePanel.prototype.componentDidMount = function () {
        var content = this.contentRef.current;
        var actualContent = content.children[0];
        var initialSize = this.isHorizontal()
            ? $(actualContent).outerWidth(true)
            : $(actualContent).outerHeight(true);
        // Initialize the size value based on the content's current size
        this.setState({ size: initialSize });
        this.validateSize();
    };
    ResizePanel.prototype.validateSize = function () {
        var isHorizontal = this.isHorizontal();
        var content = this.contentRef.current;
        var wrapper = this.wrapperRef.current;
        var actualContent = content.children[0];
        var containerParent = wrapper.parentElement;
        //
        // Or if our size doesn't equal the actual content size, then we
        // must have pushed past the min size of the content, so resize back
        //let minSize = isHorizontal ? $(actualContent).outerWidth(true) : $(actualContent).outerHeight(true);
        var minSize = isHorizontal
            ? actualContent.scrollWidth
            : actualContent.scrollHeight;
        var margins = isHorizontal
            ? $(actualContent).outerWidth(true) - $(actualContent).outerWidth()
            : $(actualContent).outerHeight(true) - $(actualContent).outerHeight();
        minSize += margins;
        if (this.state.size !== minSize) {
            this.setState(__assign(__assign({}, this.state), { size: minSize }));
        }
        else {
            // If our resizing has left the parent container's content overflowing
            // then we need to shrink back down to fit
            var overflow = isHorizontal
                ? containerParent.scrollWidth - containerParent.clientWidth
                : containerParent.scrollHeight - containerParent.clientHeight;
            if (overflow) {
                this.setState(__assign(__assign({}, this.state), { size: isHorizontal
                        ? actualContent.clientWidth - overflow
                        : actualContent.clientHeight - overflow }));
            }
        }
    };
    ResizePanel.prototype.render = function () {
        var _this = this;
        var dragHandlers = {
            onDrag: this.handleDrag,
            onStop: this.handleDragEnd
        };
        var direction = this.props.direction;
        var isHorizontal = this.isHorizontal();
        var containerClass = cx({
            ContainerHorizontal: isHorizontal,
            ContainerVertical: !isHorizontal
        });
        if (this.props.containerClass) {
            containerClass += " ".concat(this.props.containerClass);
        }
        var containerStyle = __assign({}, this.props.style) || {};
        if (this.state.size !== 0) {
            containerStyle.flexGrow = 0;
            containerStyle[isHorizontal ? "width" : "height"] = "auto";
        }
        var handleClasses = this.props.handleClass ||
            cx({
                ResizeHandleHorizontal: isHorizontal,
                ResizeHandleVertical: !isHorizontal
            });
        var resizeBarClasses = this.props.borderClass ||
            cx({
                ResizeBarHorizontal: isHorizontal,
                ResizeBarVertical: !isHorizontal
            });
        var contentStyle = isHorizontal
            ? { width: this.state.size + "px" }
            : { height: this.state.size + "px" };
        var contentClassName = cx("ResizeContent", {
            ResizeContentHorizontal: isHorizontal,
            ResizeContentVertical: !isHorizontal
        });
        var content = [
            <div key="content" ref={this.contentRef} className={contentClassName} style={contentStyle}>
        {React.Children.only(this.props.children)}
      </div>
        ];
        var handleClick = function () {
            _this.setState({ size: 0 });
        };
        var handle = (<DraggableCore key="handle" {...dragHandlers} allowAnyClick={true}>
        <div className={resizeBarClasses}>
          <div className={handleClasses} onClick={handleClick}>
            <span />
          </div>
        </div>
      </DraggableCore>);
        // Insert the handle at the beginning of the content if our directio is west or north
        if (direction === "w" || direction === "n") {
            content.unshift(handle);
        }
        else {
            content.push(handle);
        }
        return (<div ref={this.wrapperRef} className={containerClass} style={containerStyle}>
        {content}
      </div>);
    };
    return ResizePanel;
}(React.Component));
export default ResizePanel;
//# sourceMappingURL=ResizePanel.js.map