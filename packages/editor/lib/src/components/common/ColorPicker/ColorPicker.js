import React, { useState, useEffect } from 'react';
import reactCSS from 'reactcss';
import { Button } from 'antd';
import { SketchPicker } from 'react-color';
import styleScss from './ColorPicker.module.less';
var ColorPicker = function (props) {
    var value = props.value, disabled = props.disabled, onChange = props.onChange;
    var _a = useState(false), visible = _a[0], setVisible = _a[1];
    var _b = useState(value ? value : 'rgba(222, 222, 222 ,1)'), color = _b[0], setColor = _b[1];
    var triggerChange = function (color) {
        if (onChange) {
            onChange(color);
        }
    };
    useEffect(function () {
        setColor(value ? value : 'rgba(222, 222, 222 ,1)');
    }, [value]);
    var handleClick = function () {
        setVisible(!visible);
    };
    var handleClose = function () {
        setColor(value ? value : 'rgba(222, 222, 222 ,1)');
        setVisible(false);
        handleSetColor();
    };
    var handleChange = function (color) {
        setColor("rgba(".concat(color.rgb.r, ", ").concat(color.rgb.g, ", ").concat(color.rgb.b, ", ").concat(color.rgb.a, ")"));
    };
    var handleSetColor = function () {
        triggerChange(color);
        setVisible(false);
    };
    var styles = reactCSS({
        default: {
            color: {
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: color,
            },
            swatch: {
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
                marginTop: '5px',
            },
            popover: {
                position: 'fixed',
                zIndex: '2',
                right: 300,
                top: 150,
                textAlign: "center",
            },
            cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            },
        },
    });
    return (<div>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color}/>
      </div>
      {visible ? (<div style={styles.popover} className={styleScss.colorPickerContainer}>
          <div style={styles.cover} onClick={handleClose}/>
          <SketchPicker className={styleScss.myColorPicker} color={color} onChange={handleChange}/>
          <Button onClick={handleClose} style={{ marginRight: 20, display: 'none' }}>
            取消
          </Button>
          <Button type="primary" onClick={handleSetColor} disabled={disabled} style={{ display: 'none' }}>
            确定
          </Button>
        </div>) : null}
    </div>);
};
export default ColorPicker;
//# sourceMappingURL=ColorPicker.js.map