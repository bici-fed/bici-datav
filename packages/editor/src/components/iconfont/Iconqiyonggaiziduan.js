/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconqiyonggaiziduan = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1609 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M804.571429 18.285714a871.716571 871.716571 0 0 1 761.417142 467.382857 54.857143 54.857143 0 0 1 0 54.857143A871.643429 871.643429 0 0 1 804.571429 1005.714286 871.643429 871.643429 0 0 1 43.154286 538.331429a54.857143 54.857143 0 0 1 0-54.857143A871.716571 871.716571 0 0 1 804.571429 18.285714z m0 109.714286A758.125714 758.125714 0 0 0 154.550857 512 758.125714 758.125714 0 0 0 804.571429 896 758.125714 758.125714 0 0 0 1454.592 512 758.125714 758.125714 0 0 0 804.571429 128zM1024 512a219.428571 219.428571 0 1 1-438.857143 0 219.428571 219.428571 0 0 1 438.857143 0"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

Iconqiyonggaiziduan.defaultProps = {
  size: 18,
};

export default Iconqiyonggaiziduan;
