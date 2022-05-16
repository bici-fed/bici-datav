/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconchakanshujudianquxian = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M914.752 0C972.8 0 1024 51.2 1024 109.248v805.504C1024 972.8 972.8 1024 914.752 1024H109.248C51.2 1024 0 972.8 0 914.752V109.248C0 51.2 51.2 0 109.248 0zM631.488 238.912c-17.088 0-30.72 10.24-37.568 27.328l-102.4 307.2-61.44-143.36a29.76 29.76 0 0 0-27.328-20.48c-13.632-3.392-23.872 0-34.112 10.24l-54.592 54.592h-92.16A37.888 37.888 0 0 0 184.32 512c0 20.48 17.088 37.568 37.568 37.568h109.184c10.24 0 20.48-3.456 27.328-10.24L385.728 512l78.464 184.32c6.848 13.632 20.48 23.872 37.568 23.872a33.28 33.28 0 0 0 34.112-27.264l95.616-286.72 34.112 116.032c3.392 17.088 20.48 27.328 37.568 27.328h98.944c20.48 0 37.568-17.088 37.568-37.568a37.888 37.888 0 0 0-37.568-37.568h-71.68l-57.984-208.192c-6.848-17.088-20.48-27.328-40.96-27.328z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

Iconchakanshujudianquxian.defaultProps = {
  size: 18,
};

export default Iconchakanshujudianquxian;
