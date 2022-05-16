/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IcontuichuquanpingCopy = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M982.91256889 541.12711111c13.39847111 0 24.24832 10.92266667 24.24832 24.24832v60.73002667c0 13.39847111-10.92266667 24.24832-24.24832 24.24832H650.35377778v332.55879111c0 13.39847111-10.92266667 24.24832-24.24832 24.24832h-60.73002667a24.24832 24.24832 0 0 1-24.24832-24.24832v-393.216c0-26.86976 21.69969778-48.56945778 48.56945778-48.56945778h393.216z m-524.288-524.288c13.39847111 0 24.24832 10.92266667 24.24832 24.24832v393.216a48.56945778 48.56945778 0 0 1-48.56945778 48.56945778h-393.216a24.24832 24.24832 0 0 1-24.24832-24.24832v-60.73002667c0-11.65084445 8.30122667-21.48124445 19.36952889-23.73859555l4.87879111-0.50972445H373.64622222V41.08743111c0-13.39847111 10.92266667-24.24832 24.24832-24.24832h60.73002667z"
        fill={getIconColor(color, 0, '#ffffff')}
      />
    </svg>
  );
};

IcontuichuquanpingCopy.defaultProps = {
  size: 18,
};

export default IcontuichuquanpingCopy;
