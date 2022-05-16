/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icontianjia1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M535.296 488.704v-256h-46.592v256h-256v46.592h256v256h46.592v-256h256v-46.592h-256zM512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z m0-46.528A465.472 465.472 0 1 0 512 46.528a465.472 465.472 0 0 0 0 930.944z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

Icontianjia1.defaultProps = {
  size: 18,
};

export default Icontianjia1;
