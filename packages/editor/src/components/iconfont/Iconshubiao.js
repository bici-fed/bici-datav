/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconshubiao = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M888.32 593.152l-44.352-332.544C823.872 110.08 676.096 0.768 512 0.768S200.128 110.016 179.968 260.48L135.68 593.024c-28.48 212.736 131.84 430.208 376.512 430.208 244.48 0 404.864-217.472 376.256-430.08z m-306.304-248.96a70.016 70.016 0 0 1-140.032 0v-157.44a70.016 70.016 0 0 1 140.032 0v157.44z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

Iconshubiao.defaultProps = {
  size: 18,
};

export default Iconshubiao;
