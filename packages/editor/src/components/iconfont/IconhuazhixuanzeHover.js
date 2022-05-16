/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconhuazhixuanzeHover = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M51.2 218.368h919.04v91.904H51.2V218.368z m0 245.12h919.04v91.904H51.2V463.488z m0 245.056h919.04v91.904H51.2v-91.904z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

IconhuazhixuanzeHover.defaultProps = {
  size: 18,
};

export default IconhuazhixuanzeHover;
