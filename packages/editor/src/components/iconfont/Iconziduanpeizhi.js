/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconziduanpeizhi = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512.512 110.6944L164.5568 311.3472v401.3056l348.0576 200.6528 348.0064-200.6528V311.3472L512.5632 110.6944zM530.2272 29.44l392.0896 226.048c10.9056 6.2464 17.6128 17.92 17.6128 30.464v452.096a35.1744 35.1744 0 0 1-17.6128 30.464l-392.0896 226.048a35.328 35.328 0 0 1-35.2256 0L102.8096 768.512a35.1744 35.1744 0 0 1-17.6128-30.464v-452.096c0-12.5952 6.7072-24.2176 17.6128-30.464L494.9504 29.44a35.328 35.328 0 0 1 35.2256 0z m-17.6128 627.712A145.3056 145.3056 0 0 1 367.104 512a145.3056 145.3056 0 0 1 145.408-145.2032c80.2816 0 145.408 65.024 145.408 145.2032a145.3056 145.3056 0 0 1-145.408 145.2032z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

Iconziduanpeizhi.defaultProps = {
  size: 18,
};

export default Iconziduanpeizhi;
