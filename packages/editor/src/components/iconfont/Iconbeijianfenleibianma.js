/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconbeijianfenleibianma = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1260 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M465.368615 14.808615h160.610462V997.218462h-160.689231V14.808615z m249.462154 0h107.126154V997.218462h-107.126154V14.808615z m458.988308 0h80.187077V997.218462h-80.187077V14.808615z m-891.195077 0h80.187077V997.218462H282.624V14.808615z m614.872615 0h187.313231V997.218462h-187.313231V14.808615zM6.301538 14.808615h187.313231V997.218462H6.301538V14.808615z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

Iconbeijianfenleibianma.defaultProps = {
  size: 18,
};

export default Iconbeijianfenleibianma;
