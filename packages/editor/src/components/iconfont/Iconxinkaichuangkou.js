/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconxinkaichuangkou = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1293 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M258.694737 0v853.315368H1293.473684V0H258.694737z m948.547368 768h-862.315789v-512h862.315789v512z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M86.231579 341.315368h86.231579V256H0V1024h948.547368v-85.315368h-862.315789z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

Iconxinkaichuangkou.defaultProps = {
  size: 18,
};

export default Iconxinkaichuangkou;
