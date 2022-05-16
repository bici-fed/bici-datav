/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icondianjiyichushujudian = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M875.456 148.544c-198.144-198.08-524.032-198.08-722.112 0-198.08 198.144-198.08 524.032 0 722.112 198.08 198.08 523.968 198.08 722.112 0 198.08-198.08 198.08-517.632 0-722.112z m-204.48 568.704L511.232 557.504 351.36 717.248c-12.8 12.8-31.936 12.8-44.672 0-12.8-12.8-12.8-31.936 0-44.672l159.744-159.808-159.744-159.744c-12.8-12.8-12.8-31.936 0-44.736 12.8-12.8 31.936-12.8 44.672 0l159.808 159.808 159.744-159.808c12.8-12.8 31.936-12.8 44.736 0 12.8 12.8 12.8 32 0 44.8L555.904 512.704l159.808 159.808c12.8 12.8 12.8 31.936 0 44.672-12.8 12.8-32 12.8-44.8 0z"
        fill={getIconColor(color, 0, '#E02020')}
      />
    </svg>
  );
};

Icondianjiyichushujudian.defaultProps = {
  size: 18,
};

export default Icondianjiyichushujudian;
