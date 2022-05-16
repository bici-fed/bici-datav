/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconcaidanShujuyingyong = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M661.312 128a128 128 0 0 1 82.816 225.6l56.832 117.504a117.312 117.312 0 1 1-57.6 27.84l-56.896-117.44a128.64 128.64 0 0 1-43.52 1.216l-133.44 266.368a128 128 0 1 1-182.272 16.896L223.808 528.576a106.624 106.624 0 0 1-138.432-101.824 106.688 106.688 0 1 1 190.976 65.344l102.4 135.936a127.616 127.616 0 0 1 73.536-6.784l131.84-263.168A128 128 0 0 1 661.376 128z m-234.624 560.512a58.24 58.24 0 1 0 0 116.352 58.24 58.24 0 0 0 0-116.352z m394.624-155.2a53.312 53.312 0 1 0 0 106.688 53.312 53.312 0 0 0 0-106.688zM192 378.24a48.512 48.512 0 1 0 0 96.96 48.512 48.512 0 0 0 0-96.96z m469.312-180.352a58.24 58.24 0 1 0 0 116.352 58.24 58.24 0 0 0 0-116.352z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconcaidanShujuyingyong.defaultProps = {
  size: 18,
};

export default IconcaidanShujuyingyong;
