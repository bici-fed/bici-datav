/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconfenxi = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M311.3984 1018.7776a30.208 30.208 0 0 1 0-60.416h429.4656a30.208 30.208 0 0 1 0 60.416H311.3984zM888.4224 47.2064H163.84a120.832 120.832 0 0 0-120.832 120.832v557.7728a120.832 120.832 0 0 0 120.832 120.7808h724.6848a120.832 120.832 0 0 0 120.7296-120.832V167.9872a120.832 120.832 0 0 0-120.832-120.832h0.0512z m-44.032 246.8864l-232.8576 273.92a42.2912 42.2912 0 0 1-62.9248 1.6896L417.1264 430.592l-165.9392 150.528a30.1568 30.1568 0 0 1-40.6016-44.6464l179.0976-162.56a42.3424 42.3424 0 0 1 59.1872 2.2016l129.7408 137.6256 219.7504-258.7136a30.208 30.208 0 0 1 45.9776 39.1168z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </svg>
  );
};

Iconfenxi.defaultProps = {
  size: 18,
};

export default Iconfenxi;
