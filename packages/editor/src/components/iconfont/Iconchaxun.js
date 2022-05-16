/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconchaxun = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 3072 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M384 163.84c-195.7888 0-348.16 152.3712-348.16 348.16s152.3712 348.16 348.16 348.16 348.16-152.3712 348.16-348.16S579.7888 163.84 384 163.84zM1536 163.84c-195.7888 0-348.16 152.3712-348.16 348.16s152.3712 348.16 348.16 348.16 348.16-152.3712 348.16-348.16S1731.7888 163.84 1536 163.84z m1152 0c-195.7888 0-348.16 152.3712-348.16 348.16s152.3712 348.16 348.16 348.16 348.16-152.3712 348.16-348.16-174.08-348.16-348.16-348.16z"
        fill={getIconColor(color, 0, '#222222')}
        fill-opacity=".7"
      />
    </svg>
  );
};

Iconchaxun.defaultProps = {
  size: 18,
};

export default Iconchaxun;
