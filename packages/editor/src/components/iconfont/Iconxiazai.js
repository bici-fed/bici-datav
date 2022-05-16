/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconxiazai = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M972.8 640.128v276.992c0 30.592-25.792 55.36-57.6 55.424L108.8 972.8c-31.808 0-57.6-24.768-57.6-55.36v-276.992H137.6v248.512l748.928-0.32v-248.512H972.8zM524.288 51.2c15.936 0 28.8 12.416 28.8 27.712v552l161.344-155.136a29.632 29.632 0 0 1 38.016-2.304l2.688 2.304 20.416 19.584a26.88 26.88 0 0 1 2.368 36.48l-2.368 2.688-246.528 236.16a27.712 27.712 0 0 1-38.4 0L245.12 534.528a26.944 26.944 0 0 1 0-39.168l20.352-19.584a29.632 29.632 0 0 1 40.704 0l160.512 154.304V78.912c0-15.36 12.928-27.712 28.8-27.712h28.8z"
        fill={getIconColor(color, 0, '#222222')}
      />
    </svg>
  );
};

Iconxiazai.defaultProps = {
  size: 18,
};

export default Iconxiazai;
