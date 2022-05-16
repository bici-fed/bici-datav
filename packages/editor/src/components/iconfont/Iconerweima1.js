/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconerweima1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M0 0h455.104v455.104H0V0z m0 568.896h455.104V1024H0V568.896zM568.896 0H1024v455.104H568.896V0z m0 568.896h113.792V1024H568.896V568.896z m170.688 113.792h113.728V1024h-113.728v-341.312z m170.624-113.792H1024V1024h-113.792V568.896z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

Iconerweima1.defaultProps = {
  size: 18,
};

export default Iconerweima1;
