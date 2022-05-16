/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconsousuo = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M1004.096 927.104L800.256 723.2a448.448 448.448 0 0 0 93.248-274.56 448.32 448.32 0 0 0-130.752-317.312A446.08 446.08 0 0 0 620.8 35.2 445.312 445.312 0 0 0 446.848 0a444.416 444.416 0 0 0-315.904 131.648A448.32 448.32 0 0 0 0.192 448.896a448.192 448.192 0 0 0 130.752 317.312 446.4 446.4 0 0 0 142.016 96.256 441.216 441.216 0 0 0 173.888 35.328 443.136 443.136 0 0 0 274.944-94.912l203.52 203.52a56.064 56.064 0 0 0 78.912 0 56.384 56.384 0 0 0-0.128-79.36z m-557.248-121.152c-195.84 0-355.2-160.192-355.2-357.12 0-196.992 159.296-357.12 355.2-357.12 195.84 0 355.2 160.128 355.2 357.12 0 196.928-159.36 357.12-355.2 357.12z"
        fill={getIconColor(color, 0, '#222222')}
        fill-opacity=".7"
      />
    </svg>
  );
};

Iconsousuo.defaultProps = {
  size: 18,
};

export default Iconsousuo;
