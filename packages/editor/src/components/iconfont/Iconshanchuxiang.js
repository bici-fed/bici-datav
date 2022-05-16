/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconshanchuxiang = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 64a448 448 0 1 0 0.0512 896.0512A448 448 0 0 0 512 64z m192 472.0128c0 4.4032-3.584 7.9872-7.9872 7.9872H327.9872a8.0384 8.0384 0 0 1-7.9872-7.9872V487.936c0-4.4032 3.584-7.9872 7.9872-7.9872h368.0256c4.4032 0 7.9872 3.584 7.9872 7.9872v48.0256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconshanchuxiang.defaultProps = {
  size: 18,
};

export default Iconshanchuxiang;
