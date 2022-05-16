/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconxiayibu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#EBF5FF')}
      />
      <path
        d="M468.401231 280.024615a14.769231 14.769231 0 0 1 0 20.873847l-199.561846 199.522461a10.24 10.24 0 0 0 0 14.493539l199.561846 199.561846a14.769231 14.769231 0 1 1-20.873846 20.873846l-199.561847-199.522462a39.778462 39.778462 0 0 1 0-56.280615l199.522462-199.522462a14.769231 14.769231 0 0 1 20.873846 0z m-5.632 198.104616a29.538462 29.538462 0 1 1 0 59.076923 29.538462 29.538462 0 0 1 0-59.076923z m295.384615 0a29.538462 29.538462 0 1 1 0 59.076923 29.538462 29.538462 0 0 1 0-59.076923z m-196.923077 0a29.538462 29.538462 0 1 1 0 59.076923 29.538462 29.538462 0 0 1 0-59.076923z m98.461539 0a29.538462 29.538462 0 1 1 0 59.076923 29.538462 29.538462 0 0 1 0-59.076923z"
        fill={getIconColor(color, 1, '#096DD9')}
      />
    </svg>
  );
};

Iconxiayibu.defaultProps = {
  size: 18,
};

export default Iconxiayibu;
