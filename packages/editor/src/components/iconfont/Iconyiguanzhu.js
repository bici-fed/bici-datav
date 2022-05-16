/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconyiguanzhu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M990.549333 400.042667a44.885333 44.885333 0 0 0-36.238222-30.549334l-277.845333-40.391111-124.302222-251.790222A44.885333 44.885333 0 0 0 512 52.280889c-17.066667 0-32.597333 9.784889-40.163556 25.031111L347.591111 329.102222l-277.845333 40.391111A44.942222 44.942222 0 0 0 44.828444 446.008889l201.045334 195.925333-47.274667 276.764445a44.942222 44.942222 0 0 0 65.024 47.217777l248.490667-130.730666 248.547555 130.673778a45.169778 45.169778 0 0 0 47.217778-3.356445 44.942222 44.942222 0 0 0 17.806222-43.804444l-47.445333-276.764445 201.102222-195.925333a45.169778 45.169778 0 0 0 11.207111-45.966222z"
        fill={getIconColor(color, 0, '#F7B500')}
      />
    </svg>
  );
};

Iconyiguanzhu.defaultProps = {
  size: 18,
};

export default Iconyiguanzhu;
