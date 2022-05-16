/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconZYshouqi = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1280 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M156.8 440.96a64 64 0 1 1-57.6-113.92l512-256a64 64 0 0 1 57.6 0l512 256a64 64 0 0 1-57.6 113.92L640 199.68 156.8 440.96z m0 576a64 64 0 0 1-57.6-113.92l512-256a64 64 0 0 1 57.6 0l512 256a64 64 0 0 1-57.6 113.92L640 775.68 156.8 1016.96z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

IconZYshouqi.defaultProps = {
  size: 18,
};

export default IconZYshouqi;
