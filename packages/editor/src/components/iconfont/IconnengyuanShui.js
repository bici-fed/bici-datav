/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconnengyuanShui = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 1012.64c-56.352 0-111.04-10.816-162.56-32.192a417.184 417.184 0 0 1-132.992-87.52 407.808 407.808 0 0 1-89.888-130.176 399.552 399.552 0 0 1-33.056-159.744c0-79.52 19.008-158.496 56.576-234.656 30.048-61.312 72-121.184 124.896-177.888 90.336-96.96 185.056-156.256 211.936-172.128 7.776-4.608 16.416-6.848 25.216-6.848 8.64 0 17.408 2.24 25.184 6.848 26.88 15.872 121.6 75.168 211.936 172.16 52.896 56.8 94.848 116.544 124.896 177.856 37.344 76.256 56.352 155.36 56.352 234.784 0 55.36-11.136 109.12-33.056 159.744a409.056 409.056 0 0 1-89.92 130.144 419.072 419.072 0 0 1-132.96 87.552A423.936 423.936 0 0 1 512 1012.64z m0-204v-74.88l-9.28-0.32a135.36 135.36 0 0 1-126.08-135.04H301.76l0.32 11.168A210.24 210.24 0 0 0 512 808.64z"
        fill={getIconColor(color, 0, '#4082FD')}
      />
    </svg>
  );
};

IconnengyuanShui.defaultProps = {
  size: 18,
};

export default IconnengyuanShui;
