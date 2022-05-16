/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icontuichuquanping = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M925.888 537.6c11.776 0 21.312 9.6 21.312 21.312v53.376c0 11.776-9.6 21.312-21.312 21.312H633.6v292.288c0 11.776-9.6 21.312-21.312 21.312h-53.376a21.312 21.312 0 0 1-21.312-21.312v-345.6c0-23.616 19.072-42.688 42.688-42.688h345.6z m-460.8-460.8c11.776 0 21.312 9.6 21.312 21.312v345.6a42.688 42.688 0 0 1-42.688 42.688h-345.6a21.312 21.312 0 0 1-21.312-21.312v-53.376c0-10.24 7.296-18.88 17.024-20.864l4.288-0.448H390.4V98.112c0-11.776 9.6-21.312 21.312-21.312h53.376z"
        fill={getIconColor(color, 0, '#222222')}
      />
    </svg>
  );
};

Icontuichuquanping.defaultProps = {
  size: 18,
};

export default Icontuichuquanping;
