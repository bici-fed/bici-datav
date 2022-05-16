/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconZYzhankai = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1280 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M156.8 583.04a64 64 0 1 0-57.6 113.92l512 256a64 64 0 0 0 57.6 0l512-256a64 64 0 0 0-57.6-113.92L640 824.32 156.8 583.04z m0-576a64 64 0 0 0-57.6 113.92l512 256a64 64 0 0 0 57.6 0l512-256a64 64 0 0 0-57.6-113.92L640 248.32 156.8 7.04z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

IconZYzhankai.defaultProps = {
  size: 18,
};

export default IconZYzhankai;
