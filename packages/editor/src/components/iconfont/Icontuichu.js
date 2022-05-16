/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icontuichu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M554.666667 725.333333l59.733333-59.733333-110.933333-110.933333H938.666667v-85.333334H503.466667l110.933333-110.933333L554.666667 298.666667l-213.333334 213.333333 213.333334 213.333333zM170.666667 213.333333h341.333333V128H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333334 85.333333h341.333333v-85.333333H170.666667V213.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Icontuichu.defaultProps = {
  size: 18,
};

export default Icontuichu;
