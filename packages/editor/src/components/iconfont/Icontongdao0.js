/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icontongdao0 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 85.312a426.688 426.688 0 1 1 0 853.376A426.688 426.688 0 0 1 512 85.312z m0 64a362.688 362.688 0 1 0 0 725.376A362.688 362.688 0 0 0 512 149.312zM448 341.376c4.608 0 9.152 1.536 12.8 4.288l199.104 149.76a21.312 21.312 0 0 1 0 34.112L460.8 678.4a21.312 21.312 0 0 1-34.112-17.088V362.752c0-11.776 9.536-21.376 21.312-21.376z"
        fill={getIconColor(color, 0, '#222222')}
      />
    </svg>
  );
};

Icontongdao0.defaultProps = {
  size: 18,
};

export default Icontongdao0;
