/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icondaochubaogao = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M854.5792 288.6144l-215.1936-215.1936a31.9488 31.9488 0 0 0-22.5792-9.4208H192a31.9488 31.9488 0 0 0-32 32v832c0 17.7152 14.336 32 32 32h640c17.7152 0 32-14.336 32-32V311.296a32.1536 32.1536 0 0 0-9.4208-22.6816z m-64.3584 37.376h-188.2112V137.7792l188.2112 188.2112z m1.792 562.0224H231.936V135.9872h302.0288v216.0128c0 23.1936 18.7904 41.984 41.984 41.984h216.0128v494.0288zM504.0128 617.984H320a8.0384 8.0384 0 0 0-7.9872 8.0384v47.9744c0 4.4032 3.584 7.9872 7.9872 7.9872h184.0128c4.4032 0 7.9872-3.584 7.9872-7.9872v-47.9744a8.0384 8.0384 0 0 0-7.9872-8.0384z m-192-128v48.0256c0 4.4032 3.584 7.9872 7.9872 7.9872h384c4.4032 0 7.9872-3.584 7.9872-7.9872V489.984a8.0384 8.0384 0 0 0-7.9872-7.9872h-384a8.0384 8.0384 0 0 0-7.9872 7.9872z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Icondaochubaogao.defaultProps = {
  size: 18,
};

export default Icondaochubaogao;
