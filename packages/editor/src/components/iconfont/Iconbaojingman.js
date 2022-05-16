/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconbaojingman = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M972.032 890.752v65.024c0 8.256-6.72 14.976-15.04 14.976H52.032v-65.024c0-8.32 6.656-14.976 14.976-14.976h904.96zM846.912 140.736v695.04c0 8.256-6.72 14.976-14.976 14.976H177.024v-441.6A274.816 274.816 0 0 1 305.408 183.04c32.448-22.144 70.336-35.584 113.536-40.384a277.76 277.76 0 0 1 35.328-1.92h392.768zM177.024 206.976V272c0 8.32-6.72 14.976-15.04 14.976H67.008V222.08c0-8.32 6.72-15.04 14.976-15.04h95.04zM176.64 60.16l67.2 67.2-46.016 45.952a14.976 14.976 0 0 1-21.184 0l-67.2-67.2 45.952-45.952a14.976 14.976 0 0 1 21.248 0zM335.744 19.52c8.32 0 14.976 6.72 14.976 14.976v94.976H285.76a14.976 14.976 0 0 1-15.04-14.976V19.52h65.024z"
        fill={getIconColor(color, 0, '#FA6400')}
      />
    </svg>
  );
};

Iconbaojingman.defaultProps = {
  size: 18,
};

export default Iconbaojingman;
