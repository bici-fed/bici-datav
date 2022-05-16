/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconquanpingxianshiCopy = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M599.38133333 41.08743111v60.73002667c0 13.39847111-10.92266667 24.24832-24.24832 24.24832H126.06577778v449.06723555c0 13.39847111-10.92266667 24.24832-24.24832 24.24832h-60.73002667a24.24832 24.24832 0 0 1-24.24832-24.24832v-509.72444444c0-26.86976 21.69969778-48.56945778 48.56945778-48.56945778h509.72444444c13.39847111 0 24.24832 10.92266667 24.24832 24.24832zM424.61866667 982.91256889v-60.73002667a24.24832 24.24832 0 0 1 24.24832-24.24832H897.93422222V448.86698667c0-13.39847111 10.92266667-24.24832 24.24832-24.24832h60.73002667c13.39847111 0 24.24832 10.92266667 24.24832 24.24832v509.72444444a48.56945778 48.56945778 0 0 1-48.56945778 48.56945778h-509.72444444a24.24832 24.24832 0 0 1-24.24832-24.24832z"
        fill={getIconColor(color, 0, '#ffffff')}
      />
    </svg>
  );
};

IconquanpingxianshiCopy.defaultProps = {
  size: 18,
};

export default IconquanpingxianshiCopy;
