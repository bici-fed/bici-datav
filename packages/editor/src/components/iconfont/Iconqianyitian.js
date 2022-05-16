/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconqianyitian = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M0 0m48.761905 0l926.47619 0q48.761905 0 48.761905 48.761905l0 926.47619q0 48.761905-48.761905 48.761905l-926.47619 0q-48.761905 0-48.761905-48.761905l0-926.47619q0-48.761905 48.761905-48.761905Z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
      <path
        d="M364.007619 541.45219l205.482667 156.842667c24.380952 18.627048 59.538286 1.219048 59.538285-29.45219V355.157333c0-30.671238-35.157333-48.079238-59.538285-29.45219l-205.507048 156.818286a37.059048 37.059048 0 0 0 0 58.928761z"
        fill={getIconColor(color, 1, '#096DD9')}
      />
    </svg>
  );
};

Iconqianyitian.defaultProps = {
  size: 18,
};

export default Iconqianyitian;
