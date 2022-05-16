/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconhouyitian = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M0 0m48.761905 0l926.47619 0q48.761905 0 48.761905 48.761905l0 926.47619q0 48.761905-48.761905 48.761905l-926.47619 0q-48.761905 0-48.761905-48.761905l0-926.47619q0-48.761905 48.761905-48.761905Z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
      <path
        d="M630.735238 481.450667l-205.482667-156.818286c-24.380952-18.627048-59.538286-1.219048-59.538285 29.45219v313.660953c0 30.695619 35.157333 48.079238 59.538285 29.476571l205.507048-156.842666a37.059048 37.059048 0 0 0 0-58.928762z"
        fill={getIconColor(color, 1, '#096DD9')}
      />
    </svg>
  );
};

Iconhouyitian.defaultProps = {
  size: 18,
};

export default Iconhouyitian;
