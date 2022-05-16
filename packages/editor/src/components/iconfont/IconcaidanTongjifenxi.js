/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconcaidanTongjifenxi = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M874.88 832a21.12 21.12 0 0 1 21.12 21.12v21.76a21.12 21.12 0 0 1-21.12 21.12H149.12a21.12 21.12 0 0 1-21.12-21.12v-21.76a21.12 21.12 0 0 1 21.12-21.12h725.76z m-640-426.688a21.12 21.12 0 0 1 21.12 21.12v320.448a21.12 21.12 0 0 1-21.12 21.12h-21.76a21.12 21.12 0 0 1-21.12-21.12V426.432a21.12 21.12 0 0 1 21.12-21.12h21.76zM426.88 128a21.12 21.12 0 0 1 21.12 21.12v597.76a21.12 21.12 0 0 1-21.12 21.12h-21.76a21.12 21.12 0 0 1-21.12-21.12V149.12A21.12 21.12 0 0 1 405.12 128h21.76z m192 384a21.12 21.12 0 0 1 21.12 21.12v213.76a21.12 21.12 0 0 1-21.12 21.12h-21.76a21.12 21.12 0 0 1-21.12-21.12V533.12A21.12 21.12 0 0 1 597.12 512h21.76z m192-192a21.12 21.12 0 0 1 21.12 21.12v405.76a21.12 21.12 0 0 1-21.12 21.12h-21.76a21.12 21.12 0 0 1-21.12-21.12V341.12a21.12 21.12 0 0 1 21.12-21.12h21.76z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconcaidanTongjifenxi.defaultProps = {
  size: 18,
};

export default IconcaidanTongjifenxi;
