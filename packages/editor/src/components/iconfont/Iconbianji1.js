/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconbianji1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M1020.8 510.72v408.32a102.4 102.4 0 0 1-102.144 101.952H102.144A102.4 102.4 0 0 1 0 918.912V102.4A102.4 102.4 0 0 1 102.144 0.448h357.184c30.656 0 51.072 20.416 51.072 51.008 0 30.656-20.48 51.072-51.072 51.072H153.152c-30.592 0-51.008 20.416-51.008 51.008v714.432c0 30.592 20.416 51.008 51.008 51.008h714.432c30.72 0 51.072-20.416 51.072-51.008V510.72c0-30.656 20.48-51.072 51.008-51.072 30.592 0 51.008 20.416 51.008 51.072h0.064zM1010.56 10.56c20.352 25.536 15.36 61.248-10.24 81.664l-561.408 561.28c-15.296 25.6-45.888 35.84-71.424 20.48-25.536-15.36-35.712-45.888-20.48-71.424 5.12-5.12 10.24-15.36 20.48-20.48l556.224-561.28c20.48-25.6 61.248-25.6 86.784-10.24z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

Iconbianji1.defaultProps = {
  size: 18,
};

export default Iconbianji1;
