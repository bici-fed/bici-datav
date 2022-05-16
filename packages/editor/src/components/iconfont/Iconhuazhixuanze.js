/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconhuazhixuanze = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M20.48 198.79253333h980.30933333v98.03093334H20.48V198.79253333z m0 261.46133334h980.30933333v98.03093333H20.48V460.25386667z m0 261.39306666h980.30933333v98.03093334H20.48v-98.03093334z"
        fill={getIconColor(color, 0, '#ffffff')}
      />
    </svg>
  );
};

Iconhuazhixuanze.defaultProps = {
  size: 18,
};

export default Iconhuazhixuanze;
