/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconxiazai1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M505.7024 660.992c3.1744 4.096 9.4208 4.096 12.5952 0l112.0256-141.6704a7.9872 7.9872 0 0 0-6.2976-12.9024H549.888V167.936a8.0384 8.0384 0 0 0-7.9872-7.9872H481.8944a8.0384 8.0384 0 0 0-7.9872 7.9872V506.368H399.9744c-6.656 0-10.3936 7.68-6.2976 12.9024l112.0256 141.824z m372.2752-34.9696h-59.9552a8.0384 8.0384 0 0 0-8.0384 7.9872v154.0096H214.016v-154.0096a8.0384 8.0384 0 0 0-8.0384-7.9872H146.0224a8.0384 8.0384 0 0 0-8.0384 7.9872v197.9904c0 17.7152 14.336 32 32 32h684.032c17.664 0 32-14.336 32-32v-197.9904a8.0384 8.0384 0 0 0-8.0384-7.9872z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconxiazai1.defaultProps = {
  size: 18,
};

export default Iconxiazai1;
