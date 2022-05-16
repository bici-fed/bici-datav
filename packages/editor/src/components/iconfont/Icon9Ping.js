/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icon9Ping = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1450 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M0 0h439.594667v298.666667H0zM505.536 0h448.384v298.666667H505.536zM1011.072 0H1450.666667v298.666667H1011.072z"
        fill={getIconColor(color, 0, '#C8DEF7')}
      />
      <path
        d="M0 362.666667h439.594667v298.666666H0zM505.536 362.666667h439.594667v298.666666H505.536zM1011.072 362.666667H1450.666667v298.666666H1011.072z"
        fill={getIconColor(color, 1, '#C8DEF7')}
      />
      <path
        d="M0 725.333333h439.594667v298.666667H0zM505.536 725.333333h439.594667v298.666667H505.536zM1011.072 725.333333H1450.666667v298.666667H1011.072z"
        fill={getIconColor(color, 2, '#C8DEF7')}
      />
    </svg>
  );
};

Icon9Ping.defaultProps = {
  size: 18,
};

export default Icon9Ping;
