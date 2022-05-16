/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icon1Ping = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1450 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M0 0h1450.666667v1024H0z"
        fill={getIconColor(color, 0, '#C8DEF7')}
      />
    </svg>
  );
};

Icon1Ping.defaultProps = {
  size: 18,
};

export default Icon1Ping;
