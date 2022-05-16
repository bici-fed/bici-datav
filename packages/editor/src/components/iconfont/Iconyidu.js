/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconyidu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M956.8 353.6a147.2 147.2 0 0 0-40-30.4l-1.6 1.6L638.4 83.2C603.2 51.2 555.2 32 504 32c-54.4 0-100.8 17.6-137.6 51.2l-257.6 240C62.4 345.6 32 390.4 32 440v420.8c0 72 64 131.2 140.8 131.2h678.4c78.4 0 140.8-59.2 140.8-131.2V440c0-32-12.8-62.4-35.2-86.4zM675.2 624L920 395.2c9.6 12.8 14.4 28.8 14.4 44.8v427.2L675.2 624zM406.4 121.6c25.6-24 60.8-36.8 96-36.8s70.4 12.8 96 36.8l276.8 241.6-278.4 259.2c-51.2 48-136 48-188.8 0L137.6 369.6l268.8-248z m-313.6 760c-1.6-6.4-3.2-14.4-3.2-22.4V440c0-11.2 3.2-24 8-33.6l252.8 235.2-257.6 240z m80 57.6c-17.6 0-33.6-4.8-48-14.4l265.6-248c32 22.4 70.4 33.6 110.4 33.6 49.6 0 96-17.6 132.8-49.6l275.2 256c-16 14.4-35.2 22.4-59.2 22.4H172.8z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

Iconyidu.defaultProps = {
  size: 18,
};

export default Iconyidu;
