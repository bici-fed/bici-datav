/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconbianjiHover = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M257.728 752a40.448 40.448 0 0 0 5.952-0.512l168.192-29.44a9.792 9.792 0 0 0 5.312-2.816l423.936-423.936c3.84-3.84 3.84-10.24 0-14.08l-166.208-166.336a9.92 9.92 0 0 0-7.104-2.88 9.92 9.92 0 0 0-7.104 2.88L256.832 538.88a10.176 10.176 0 0 0-2.816 5.312l-29.504 168.192a33.92 33.92 0 0 0 33.216 39.68zM325.12 577.6l362.688-362.624 73.28 73.344-362.688 362.56-88.96 15.744 15.68-89.024z m554.88 258.368H144a32 32 0 0 0-32 32v36.032c0 4.416 3.584 8 8 8h784a8 8 0 0 0 8-8v-36.032a32 32 0 0 0-32-32z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

IconbianjiHover.defaultProps = {
  size: 18,
};

export default IconbianjiHover;
