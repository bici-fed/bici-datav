/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconmima = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M768 341.333333h-42.666667V256c0-117.76-95.573333-213.333333-213.333333-213.333333S298.666667 138.24 298.666667 256v85.333333H256c-46.933333 0-85.333333 38.4-85.333333 85.333334v426.666666c0 46.933333 38.4 85.333333 85.333333 85.333334h512c46.933333 0 85.333333-38.4 85.333333-85.333334V426.666667c0-46.933333-38.4-85.333333-85.333333-85.333334zM379.733333 256c0-72.96 59.306667-132.266667 132.266667-132.266667 72.96 0 132.266667 59.306667 132.266667 132.266667v85.333333H379.733333V256zM768 853.333333H256V426.666667h512v426.666666z m-298.666667-256H341.333333v85.333334h341.333334v-85.333334h-213.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconmima.defaultProps = {
  size: 18,
};

export default Iconmima;
