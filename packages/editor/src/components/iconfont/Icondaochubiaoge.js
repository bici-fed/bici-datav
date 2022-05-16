/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icondaochubiaoge = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M928 160H96a31.9488 31.9488 0 0 0-32 32v640c0 17.7152 14.336 32 32 32h832c17.7152 0 32-14.336 32-32V192a31.9488 31.9488 0 0 0-32-32z m-39.9872 208.0256h-211.968V231.936h211.968v136.0384z m0 224h-211.968V431.9744h211.968v160.0512zM412.0064 431.9744h199.9872v160.0512H412.0064V431.9744z m199.9872-64H412.0064V231.9872h199.9872v136.0384z m-476.0064 64h211.968v160.0512h-211.968V431.9744z m0-199.9872h211.968v136.0384h-211.968V231.936z m0 424.0384h211.968v135.9872h-211.968v-135.9872z m275.968 0h200.0384v135.9872H412.0064v-135.9872z m476.0576 135.9872h-211.968v-135.9872h211.968v135.9872z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Icondaochubiaoge.defaultProps = {
  size: 18,
};

export default Icondaochubiaoge;
