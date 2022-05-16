/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconshanchu1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M983.26 161.646H40.74a40.375 40.375 0 0 0 0 80.75h80.677v659.748c0 69.413 71.095 121.27 134.656 121.27h511.708c63.414 0 107.739-49.883 107.739-121.197V242.395h107.666a40.375 40.375 0 0 0 0-80.822zM794.77 902.217c0 18.432-4.68 40.375-26.916 40.375H256.146c-25.16 0-53.833-21.504-53.833-40.375V242.395H794.77v659.749zM390.802 80.823h242.396a40.375 40.375 0 0 0 0-80.823H390.802a40.375 40.375 0 0 0 0 80.823zM377.417 875.3a40.375 40.375 0 0 0 40.375-40.448V350.135a40.375 40.375 0 0 0-80.75 0v484.718c0 22.308 18.067 40.448 40.375 40.448z m242.396 0a40.375 40.375 0 0 0 40.374-40.448V350.135a40.375 40.375 0 0 0-80.822 0v484.718c0 22.308 18.139 40.448 40.448 40.448z"
        fill={getIconColor(color, 0, '#D0021B')}
      />
    </svg>
  );
};

Iconshanchu1.defaultProps = {
  size: 18,
};

export default Iconshanchu1;
