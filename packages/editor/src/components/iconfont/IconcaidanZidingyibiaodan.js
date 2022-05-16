/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconcaidanZidingyibiaodan = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M811.072 85.312a42.24 42.24 0 0 1 42.24 42.24v565.76h-64v-544H234.688v725.376H608v64H212.928a42.24 42.24 0 0 1-42.24-42.24V127.552a42.24 42.24 0 0 1 42.24-42.24h598.144zM714.88 640a21.12 21.12 0 0 1 21.12 21.12v96.128l96.192 0.064a21.12 21.12 0 0 1 21.12 21.12v21.76a21.12 21.12 0 0 1-21.12 21.12H736v96.256a21.12 21.12 0 0 1-21.12 21.12h-21.76a21.12 21.12 0 0 1-21.12-21.12v-96.32l-96.192 0.064a21.12 21.12 0 0 1-21.12-21.12v-21.76a21.12 21.12 0 0 1 21.12-21.12H672V661.12a21.12 21.12 0 0 1 21.12-21.12h21.76z m-138.688-42.688a21.12 21.12 0 0 1 21.12 21.12v21.76a21.12 21.12 0 0 1-21.12 21.12H319.808a21.12 21.12 0 0 1-21.12-21.12v-21.76a21.12 21.12 0 0 1 21.12-21.12h256.384z m128-170.624a21.12 21.12 0 0 1 21.12 21.12v21.76a21.12 21.12 0 0 1-21.12 21.12H319.808a21.12 21.12 0 0 1-21.12-21.12v-21.76a21.12 21.12 0 0 1 21.12-21.12h384.384z m0-170.688a21.12 21.12 0 0 1 21.12 21.12v21.76a21.12 21.12 0 0 1-21.12 21.12H319.808a21.12 21.12 0 0 1-21.12-21.12v-21.76a21.12 21.12 0 0 1 21.12-21.12h384.384z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconcaidanZidingyibiaodan.defaultProps = {
  size: 18,
};

export default IconcaidanZidingyibiaodan;
