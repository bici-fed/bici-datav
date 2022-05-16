/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icon4Ping = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1450 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M0 0h682.666667v469.333333H0zM0 554.666667h682.666667v469.333333H0zM768 554.666667h682.666667v469.333333H768zM768 0h682.666667v469.333333H768z"
        fill={getIconColor(color, 0, '#C8DEF7')}
      />
    </svg>
  );
};

Icon4Ping.defaultProps = {
  size: 18,
};

export default Icon4Ping;
