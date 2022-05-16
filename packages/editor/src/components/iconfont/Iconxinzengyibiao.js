/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconxinzengyibiao = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 0a512.576 512.576 0 0 1 512 512 512 512 0 1 1-512-512z m0 111.424a400.576 400.576 0 0 0 0 801.152A401.152 401.152 0 0 0 912.576 512 400.576 400.576 0 0 0 512 111.424z m11.712 177.728c30.72 0 55.68 24.96 55.68 55.68V456.32h111.424a55.68 55.68 0 1 1 0 111.488h-111.36v111.36a55.68 55.68 0 1 1-111.488 0v-111.36h-111.36a55.68 55.68 0 1 1 0-111.488h111.36V344.96c0-30.784 24.96-55.744 55.68-55.744z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

Iconxinzengyibiao.defaultProps = {
  size: 18,
};

export default Iconxinzengyibiao;
