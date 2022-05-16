/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IcontianjiaQueding = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 64a448 448 0 1 1-0.0512 896.0512A448 448 0 0 1 512 64z m0 75.9808a372.0704 372.0704 0 0 0 0 744.0384 372.0704 372.0704 0 0 0 0-744.0384z m186.9824 212.992c6.5024 0 10.3424 7.424 6.4 12.7488l-210.5856 291.9936a31.7952 31.7952 0 0 1-51.712 0L318.5152 484.864a8.0384 8.0384 0 0 1 6.5024-12.6976h46.8992c10.24 0 19.8656 4.9664 25.9072 13.312l71.168 98.816 157.184-218.0608a31.8464 31.8464 0 0 1 25.9072-13.312z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IcontianjiaQueding.defaultProps = {
  size: 18,
};

export default IcontianjiaQueding;
