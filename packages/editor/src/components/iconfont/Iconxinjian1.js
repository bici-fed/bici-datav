/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconxinjian1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M750.9504 0C925.2352 0 1024 98.816 1024 273.0496v477.9008C1024 924.7744 925.184 1024 750.9504 1024H273.0496C98.304 1024 0 924.7744 0 750.9504V273.0496C0 98.7648 98.816 0 273.0496 0zM511.7952 307.2a38.656 38.656 0 0 0-38.6048 34.5088v130.048H342.016a38.5536 38.5536 0 0 0-34.816 38.2464c0.0512 19.8144 15.104 36.352 34.816 38.2464h131.584v130.5088A38.1952 38.1952 0 0 0 512 716.8c21.1968 0 38.4-17.0496 38.4-38.0416v-130.5088h131.584a38.5536 38.5536 0 0 0 34.816-38.2464 38.5536 38.5536 0 0 0-34.816-38.2464h-131.584v-130.048A38.656 38.656 0 0 0 511.7952 307.2z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

Iconxinjian1.defaultProps = {
  size: 18,
};

export default Iconxinjian1;
