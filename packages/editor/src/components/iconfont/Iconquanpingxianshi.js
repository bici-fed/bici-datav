/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconquanpingxianshi = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M588.8 98.112v53.376c0 11.776-9.6 21.312-21.312 21.312H172.8v394.688c0 11.776-9.6 21.312-21.312 21.312h-53.376a21.312 21.312 0 0 1-21.312-21.312v-448c0-23.616 19.072-42.688 42.688-42.688h448c11.776 0 21.312 9.6 21.312 21.312zM435.2 925.888v-53.376a21.312 21.312 0 0 1 21.312-21.312H851.2V456.512c0-11.776 9.6-21.312 21.312-21.312h53.376c11.776 0 21.312 9.6 21.312 21.312v448a42.688 42.688 0 0 1-42.688 42.688h-448a21.312 21.312 0 0 1-21.312-21.312z"
        fill={getIconColor(color, 0, '#222222')}
      />
    </svg>
  );
};

Iconquanpingxianshi.defaultProps = {
  size: 18,
};

export default Iconquanpingxianshi;
