/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconzhexiantu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M888.0128 792.0128H199.9872V167.936a8.0384 8.0384 0 0 0-7.9872-7.9872H135.9872a8.0384 8.0384 0 0 0-7.9872 7.9872V856.064c0 4.4032 3.584 7.9872 7.9872 7.9872h752.0256c4.4032 0 7.9872-3.584 7.9872-7.9872v-56.0128a8.0384 8.0384 0 0 0-7.9872-7.9872zM305.8176 637.696c3.072 3.072 8.0896 3.072 11.264 0l138.3424-137.5744 127.5904 128.3584c3.072 3.072 8.192 3.072 11.264 0l275.456-275.3024c3.072-3.072 3.072-8.192 0-11.264l-39.6288-39.6288a8.0384 8.0384 0 0 0-11.264 0l-230.0416 229.888-127.3856-128.1536a8.0384 8.0384 0 0 0-11.3152 0l-183.808 182.6816c-3.072 3.072-3.072 8.192 0 11.264l39.5264 39.7312z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconzhexiantu.defaultProps = {
  size: 18,
};

export default Iconzhexiantu;
