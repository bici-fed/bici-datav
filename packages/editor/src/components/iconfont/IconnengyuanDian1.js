/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconnengyuanDian1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M363.211605 599.313067h-219.818666c-28.672 0-48.469333-26.282667-38.263467-50.7904L323.582805 24.132267C329.556139 9.557333 344.779605 0 361.812139 0h368.571733c29.115733 0 48.913067 26.965333 37.956267 51.575467l-127.1808 285.525333h239.4112c35.2256 0 53.998933 37.956267 30.788266 62.190933L324.333739 1011.029333c-28.535467 29.730133-81.442133 3.959467-70.3488-34.269866l109.226666-377.514667z"
        fill={getIconColor(color, 0, '#F78F36')}
      />
    </svg>
  );
};

IconnengyuanDian1.defaultProps = {
  size: 18,
};

export default IconnengyuanDian1;
