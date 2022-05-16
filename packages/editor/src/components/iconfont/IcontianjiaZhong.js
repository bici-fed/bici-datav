/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IcontianjiaZhong = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 64a448 448 0 1 1-0.0512 896.0512A448 448 0 0 1 512 64z m24.0128 256H487.936a8.0384 8.0384 0 0 0-7.9872 7.9872v152.0128H327.9872a8.0384 8.0384 0 0 0-7.9872 7.9872v48.0256c0 4.4032 3.584 7.9872 7.9872 7.9872h152.0128v152.0128c0 4.4032 3.584 7.9872 7.9872 7.9872h48.0256c4.4032 0 7.9872-3.584 7.9872-7.9872v-152.0128h152.0128c4.4032 0 7.9872-3.584 7.9872-7.9872V487.936a8.0384 8.0384 0 0 0-7.9872-7.9872h-152.0128V327.9872a8.0384 8.0384 0 0 0-7.9872-7.9872z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IcontianjiaZhong.defaultProps = {
  size: 18,
};

export default IcontianjiaZhong;
