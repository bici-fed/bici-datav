/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconduoxuan = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M880 112a32 32 0 0 1 32 32v736a32 32 0 0 1-32 32H144a32 32 0 0 1-32-32V144a32 32 0 0 1 32-32z m-40.021333 72.021333H184.021333v656h656V184.021333z m-151.04 168.96c6.442667 0 10.24 7.424 6.442666 12.714667l-210.56 292.010667a31.786667 31.786667 0 0 1-51.712 0l-124.586666-172.8a8.021333 8.021333 0 0 1 6.485333-12.714667h46.890667a32 32 0 0 1 25.898666 13.312l71.210667 98.816 157.098667-218.026667a31.829333 31.829333 0 0 1 25.898666-13.312z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

Iconduoxuan.defaultProps = {
  size: 18,
};

export default Iconduoxuan;
