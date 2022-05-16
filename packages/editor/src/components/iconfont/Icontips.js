/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icontips = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 0a512 512 0 0 1 512 512 512 512 0 0 1-512 512 512 512 0 0 1-512-512 512 512 0 0 1 512-512z m0 56.888889a455.111111 455.111111 0 1 0 0 910.222222A455.111111 455.111111 0 0 0 512 56.888889z m45.511111 409.6V739.555556H466.488889V466.488889h91.022222z m0-182.044445v91.022223H466.488889V284.444444h91.022222z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

Icontips.defaultProps = {
  size: 18,
};

export default Icontips;
