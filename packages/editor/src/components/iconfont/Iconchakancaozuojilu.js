/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconchakancaozuojilu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z m56.704-538.88V288.384a39.36 39.36 0 0 0-39.36-39.424H411.2v324.928c0 21.76 17.6 39.36 39.36 39.36h118.144v-0.64h195.84c21.76 0 39.36-17.6 39.36-39.36V455.104H606.976c-18.56 0-34.048 12.8-38.272 30.016z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

Iconchakancaozuojilu.defaultProps = {
  size: 18,
};

export default Iconchakancaozuojilu;
