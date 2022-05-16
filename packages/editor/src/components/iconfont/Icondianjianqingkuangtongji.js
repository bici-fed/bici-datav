/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icondianjianqingkuangtongji = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M94.272 116.608C94.272 56.448 143.168 7.68 203.2 7.68h656c60.16 0 108.928 48.768 108.928 108.928v765.184c0 60.16-48.768 108.864-108.928 108.928H203.2a108.928 108.928 0 0 1-108.928-108.928V116.608zM531.2 663.04a273.088 273.088 0 1 0 0-546.112 273.088 273.088 0 0 0 0 546.112z m-218.432 163.84c0 30.336 24.32 54.592 54.4 54.592h328.064c29.696 0 54.4-24.448 54.4-54.592a54.4 54.4 0 0 0-54.4-54.592H367.168a54.784 54.784 0 0 0-54.4 54.592z m218.688-382.272H531.2a54.464 54.464 0 0 1-54.592-54.656v-163.84c0-30.336 24.448-54.592 54.592-54.592 30.336 0 54.592 24.448 54.592 54.592V335.36h54.08a54.592 54.592 0 1 1 0 109.248H531.52z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

Icondianjianqingkuangtongji.defaultProps = {
  size: 18,
};

export default Icondianjianqingkuangtongji;
