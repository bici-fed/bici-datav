/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconcaidanBanciguanli = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M811.072 512a42.24 42.24 0 0 1 42.24 42.24v342.208a42.24 42.24 0 0 1-42.24 42.24H212.928a42.24 42.24 0 0 1-42.24-42.24V554.24a42.24 42.24 0 0 1 42.24-42.24l129.792 0.064C387.84 551.872 447.104 576 512 576s124.16-24.128 169.28-63.936L811.072 512zM340.352 576H234.688v299.072h555.136V576h-105.472c-44.16 43.072-104.512 62.912-172.352 62.912S384 619.84 340.352 576zM512 85.312A213.312 213.312 0 1 1 512 512a213.312 213.312 0 0 1 0-426.688z m0 64A149.312 149.312 0 1 0 512 448a149.312 149.312 0 0 0 0-298.688z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconcaidanBanciguanli.defaultProps = {
  size: 18,
};

export default IconcaidanBanciguanli;
