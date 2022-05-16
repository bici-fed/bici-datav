/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconkaishianniu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M384 740.266667V283.989333a32 32 0 0 1 53.12-24.064l260.693333 228.693334a32 32 0 0 1 0 48.213333l-260.778666 227.541333A32 32 0 0 1 384 740.266667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconkaishianniu.defaultProps = {
  size: 18,
};

export default Iconkaishianniu;
