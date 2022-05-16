/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icondian = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M513.1 512.1m-395.4 0a395.4 395.4 0 1 0 790.8 0 395.4 395.4 0 1 0-790.8 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Icondian.defaultProps = {
  size: 18,
};

export default Icondian;
