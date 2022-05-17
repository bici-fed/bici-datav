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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { checkedIcon as defaultCheckedIcon, uncheckedIcon as defaultUncheckedIcon, } from './icons.jsx';
import getBackgroundColor from './getBackgroundColor';
import hexColorPropType from './hexColorPropType';
var ReactSwitch = /** @class */ (function (_super) {
    __extends(ReactSwitch, _super);
    function ReactSwitch(props) {
        var _this = _super.call(this, props) || this;
        var height = props.height, width = props.width, handleDiameter = props.handleDiameter, checked = props.checked;
        _this.$handleDiameter = handleDiameter || height - 2;
        _this.$checkedPos = Math.max(width - height, width - (height + _this.$handleDiameter) / 2);
        _this.$uncheckedPos = Math.max(0, (height - _this.$handleDiameter) / 2);
        _this.state = {
            $pos: checked ? _this.$checkedPos : _this.$uncheckedPos,
        };
        _this.$lastDragAt = 0;
        _this.$lastKeyUpAt = 0;
        _this.$onMouseDown = _this.$onMouseDown.bind(_this);
        _this.$onMouseMove = _this.$onMouseMove.bind(_this);
        _this.$onMouseUp = _this.$onMouseUp.bind(_this);
        _this.$onTouchStart = _this.$onTouchStart.bind(_this);
        _this.$onTouchMove = _this.$onTouchMove.bind(_this);
        _this.$onTouchEnd = _this.$onTouchEnd.bind(_this);
        _this.$onClick = _this.$onClick.bind(_this);
        _this.$onInputChange = _this.$onInputChange.bind(_this);
        _this.$onKeyUp = _this.$onKeyUp.bind(_this);
        _this.$setHasOutline = _this.$setHasOutline.bind(_this);
        _this.$unsetHasOutline = _this.$unsetHasOutline.bind(_this);
        _this.$getInputRef = _this.$getInputRef.bind(_this);
        return _this;
    }
    ReactSwitch.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.checked === this.props.checked) {
            return;
        }
        var $pos = this.props.checked ? this.$checkedPos : this.$uncheckedPos;
        this.setState({ $pos: $pos });
    };
    ReactSwitch.prototype.$onDragStart = function (clientX) {
        this.$inputRef.focus();
        this.setState({
            $startX: clientX,
            $hasOutline: true,
            $dragStartingTime: Date.now(),
        });
    };
    ReactSwitch.prototype.$onDrag = function (clientX) {
        var _a = this.state, $startX = _a.$startX, $isDragging = _a.$isDragging, $pos = _a.$pos;
        var checked = this.props.checked;
        var startPos = checked ? this.$checkedPos : this.$uncheckedPos;
        var mousePos = startPos + clientX - $startX;
        // We need this check to fix a windows glitch where onDrag is triggered onMouseDown in some cases
        if (!$isDragging && clientX !== $startX) {
            this.setState({ $isDragging: true });
        }
        var newPos = Math.min(this.$checkedPos, Math.max(this.$uncheckedPos, mousePos));
        // Prevent unnecessary rerenders
        if (newPos !== $pos) {
            this.setState({ $pos: newPos });
        }
    };
    ReactSwitch.prototype.$onDragStop = function (event) {
        var _a = this.state, $pos = _a.$pos, $isDragging = _a.$isDragging, $dragStartingTime = _a.$dragStartingTime;
        var checked = this.props.checked;
        var halfwayCheckpoint = (this.$checkedPos + this.$uncheckedPos) / 2;
        // Simulate clicking the handle
        var timeSinceStart = Date.now() - $dragStartingTime;
        if (!$isDragging || timeSinceStart < 250) {
            this.$onChange(event);
            // Handle dragging from checked position
        }
        else if (checked) {
            if ($pos > halfwayCheckpoint) {
                this.setState({ $pos: this.$checkedPos });
            }
            else {
                this.$onChange(event);
            }
            // Handle dragging from unchecked position
        }
        else if ($pos < halfwayCheckpoint) {
            this.setState({ $pos: this.$uncheckedPos });
        }
        else {
            this.$onChange(event);
        }
        this.setState({ $isDragging: false, $hasOutline: false });
        this.$lastDragAt = Date.now();
    };
    ReactSwitch.prototype.$onMouseDown = function (event) {
        event.preventDefault();
        // Ignore right click and scroll
        if (typeof event.button === 'number' && event.button !== 0) {
            return;
        }
        this.$onDragStart(event.clientX);
        window.addEventListener('mousemove', this.$onMouseMove);
        window.addEventListener('mouseup', this.$onMouseUp);
    };
    ReactSwitch.prototype.$onMouseMove = function (event) {
        event.preventDefault();
        this.$onDrag(event.clientX);
    };
    ReactSwitch.prototype.$onMouseUp = function (event) {
        this.$onDragStop(event);
        window.removeEventListener('mousemove', this.$onMouseMove);
        window.removeEventListener('mouseup', this.$onMouseUp);
    };
    ReactSwitch.prototype.$onTouchStart = function (event) {
        this.$checkedStateFromDragging = null;
        this.$onDragStart(event.touches[0].clientX);
    };
    ReactSwitch.prototype.$onTouchMove = function (event) {
        this.$onDrag(event.touches[0].clientX);
    };
    ReactSwitch.prototype.$onTouchEnd = function (event) {
        event.preventDefault();
        this.$onDragStop(event);
    };
    ReactSwitch.prototype.$onInputChange = function (event) {
        // This condition is unfortunately needed in some browsers where the input's change event might get triggered
        // right after the dragstop event is triggered (occurs when dropping over a label element)
        if (Date.now() - this.$lastDragAt > 50) {
            this.$onChange(event);
            // Prevent clicking label, but not key activation from setting outline to true - yes, this is absurd
            if (Date.now() - this.$lastKeyUpAt > 50) {
                this.setState({ $hasOutline: false });
            }
        }
    };
    ReactSwitch.prototype.$onKeyUp = function () {
        this.$lastKeyUpAt = Date.now();
    };
    ReactSwitch.prototype.$setHasOutline = function () {
        this.setState({ $hasOutline: true });
    };
    ReactSwitch.prototype.$unsetHasOutline = function () {
        this.setState({ $hasOutline: false });
    };
    ReactSwitch.prototype.$getInputRef = function (el) {
        this.$inputRef = el;
    };
    ReactSwitch.prototype.$onClick = function (event) {
        event.preventDefault();
        this.$inputRef.focus();
        this.$onChange(event);
        this.setState({ $hasOutline: false });
    };
    ReactSwitch.prototype.$onChange = function (event) {
        var _a = this.props, checked = _a.checked, onChange = _a.onChange, id = _a.id;
        onChange(!checked, event, id);
    };
    ReactSwitch.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, className = _a.className, offColor = _a.offColor, onColor = _a.onColor, offHandleColor = _a.offHandleColor, onHandleColor = _a.onHandleColor, checkedIcon = _a.checkedIcon, uncheckedIcon = _a.uncheckedIcon, boxShadow = _a.boxShadow, activeBoxShadow = _a.activeBoxShadow, height = _a.height, width = _a.width, handleDiameter = _a.handleDiameter, // just to filter this prop out
        rest = __rest(_a, ["disabled", "className", "offColor", "onColor", "offHandleColor", "onHandleColor", "checkedIcon", "uncheckedIcon", "boxShadow", "activeBoxShadow", "height", "width", "handleDiameter"]);
        var _b = this.state, $pos = _b.$pos, $isDragging = _b.$isDragging, $hasOutline = _b.$hasOutline;
        var rootStyle = {
            position: 'relative',
            display: 'inline-block',
            textAlign: 'left',
            opacity: disabled ? 0.5 : 1,
            direction: 'ltr',
            borderRadius: 2,
            WebkitTransition: 'opacity 0.25s',
            MozTransition: 'opacity 0.25s',
            transition: 'opacity 0.25s',
            touchAction: 'none',
            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none',
        };
        var backgroundStyle = {
            height: height,
            width: width,
            margin: Math.max(0, (this.$handleDiameter - height) / 2),
            position: 'relative',
            background: getBackgroundColor($pos, this.$checkedPos, this.$uncheckedPos, offColor, onColor),
            borderRadius: 2,
            border: '1px solid #096DD9',
            cursor: disabled ? 'default' : 'pointer',
            WebkitTransition: $isDragging ? null : 'background 0.25s',
            MozTransition: $isDragging ? null : 'background 0.25s',
            transition: $isDragging ? null : 'background 0.25s',
        };
        var checkedIconStyle = {
            height: height,
            width: Math.min(height * 1.5, width - (this.$handleDiameter + height) / 2 + 1),
            position: 'relative',
            textAlign: 'center',
            opacity: ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
            pointerEvents: 'none',
            WebkitTransition: $isDragging ? null : 'opacity 0.25s',
            MozTransition: $isDragging ? null : 'opacity 0.25s',
            transition: $isDragging ? null : 'opacity 0.25s',
        };
        var uncheckedIconStyle = {
            height: height,
            width: Math.min(height * 1.5, width - (this.$handleDiameter + height) / 2 + 1),
            position: 'absolute',
            textAlign: 'center',
            opacity: 1 -
                ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
            right: 0,
            top: 0,
            pointerEvents: 'none',
            WebkitTransition: $isDragging ? null : 'opacity 0.25s',
            MozTransition: $isDragging ? null : 'opacity 0.25s',
            transition: $isDragging ? null : 'opacity 0.25s',
        };
        var handleStyle = {
            height: this.$handleDiameter,
            width: this.$handleDiameter,
            background: getBackgroundColor($pos, this.$checkedPos, this.$uncheckedPos, offHandleColor, onHandleColor),
            display: 'inline-block',
            textAlign: 'center',
            cursor: disabled ? 'default' : 'pointer',
            borderRadius: 0,
            position: 'absolute',
            transform: "translateX(".concat($pos, "px)"),
            top: Math.max(0, (height - this.$handleDiameter) / 2),
            outline: 0,
            boxShadow: $hasOutline ? activeBoxShadow : boxShadow,
            border: 0,
            WebkitTransition: $isDragging
                ? null
                : 'background-color 0.25s, transform 0.25s, box-shadow 0.15s',
            MozTransition: $isDragging
                ? null
                : 'background-color 0.25s, transform 0.25s, box-shadow 0.15s',
            transition: $isDragging
                ? null
                : 'background-color 0.25s, transform 0.25s, box-shadow 0.15s',
        };
        var inputStyle = {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            width: 1,
            outline: 'none',
        };
        return (<div className={className} style={rootStyle}>
        <div className="react-switch-bg" style={backgroundStyle} onClick={disabled ? null : this.$onClick} onMouseDown={function (e) { return e.preventDefault(); }}>
          {checkedIcon && <div style={checkedIconStyle}>{checkedIcon}</div>}
          {uncheckedIcon && (<div style={uncheckedIconStyle}>{uncheckedIcon}</div>)}
        </div>
        <div className="react-switch-handle" style={handleStyle} onClick={function (e) { return e.preventDefault(); }} onMouseDown={disabled ? null : this.$onMouseDown} onTouchStart={disabled ? null : this.$onTouchStart} onTouchMove={disabled ? null : this.$onTouchMove} onTouchEnd={disabled ? null : this.$onTouchEnd} onTouchCancel={disabled ? null : this.$unsetHasOutline}>
          {this.props.checked
                ? this.props.uncheckedIcon
                : this.props.checkedIcon}
        </div>
        <input type="checkbox" role="switch" disabled={disabled} style={inputStyle} {...rest} 
        /* anything below should NOT get overriden by ...rest */
        ref={this.$getInputRef} onFocus={this.$setHasOutline} onBlur={this.$unsetHasOutline} onKeyUp={this.$onKeyUp} onChange={this.$onInputChange}/>
      </div>);
    };
    return ReactSwitch;
}(Component));
ReactSwitch.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    offColor: hexColorPropType,
    onColor: hexColorPropType,
    offHandleColor: hexColorPropType,
    onHandleColor: hexColorPropType,
    handleDiameter: PropTypes.number,
    uncheckedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
    checkedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
    boxShadow: PropTypes.string,
    activeBoxShadow: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    id: PropTypes.string,
    className: PropTypes.string,
};
ReactSwitch.defaultProps = {
    disabled: false,
    offColor: '#888',
    onColor: '#080',
    offHandleColor: '#fff',
    onHandleColor: '#fff',
    uncheckedIcon: defaultUncheckedIcon,
    checkedIcon: defaultCheckedIcon,
    boxShadow: null,
    activeBoxShadow: '0 0 2px 3px #3bf',
    height: 28,
    width: 56,
};
export default ReactSwitch;
//# sourceMappingURL=index.js.map