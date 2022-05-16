/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconxuanze0 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 64a448 448 0 1 0 0.0512 896.0512A448 448 0 0 0 512 64z m193.536 301.7216l-210.6368 291.9936a31.7952 31.7952 0 0 1-51.712 0L318.5152 484.864a8.0384 8.0384 0 0 1 6.5024-12.6976h46.8992c10.1888 0 19.8656 4.864 25.9072 13.312l71.168 98.816 157.184-218.0608a32 32 0 0 1 25.9072-13.312h46.8992c6.5024 0 10.3424 7.424 6.5024 12.7488z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconxuanze0.defaultProps = {
  size: 18,
};

export default Iconxuanze0;
