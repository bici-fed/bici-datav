/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconyichang = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M507.686788 0C227.452121 0 0 225.093818 0 502.411636s227.452121 502.380606 507.686788 502.380606c280.265697 0 507.717818-225.062788 507.717818-502.380606C1015.404606 225.093818 787.952485 0 507.655758 0z m-50.796606 703.332848c0-27.741091 22.55903-50.20703 50.269091-50.20703h1.05503a50.269091 50.269091 0 0 1 0 100.476121h-1.05503a50.269091 50.269091 0 0 1-50.269091-50.269091z m0-201.448727V301.955879a50.796606 50.796606 0 1 1 101.531151 0v199.928242a50.796606 50.796606 0 1 1-101.531151 0z"
        fill={getIconColor(color, 0, '#FAAD14')}
      />
    </svg>
  );
};

Iconyichang.defaultProps = {
  size: 18,
};

export default Iconyichang;
