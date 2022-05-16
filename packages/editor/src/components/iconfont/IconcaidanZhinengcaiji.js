/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconcaidanZhinengcaiji = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M689.92 85.312c12.096 0 23.68 5.248 31.68 14.4l120.704 137.28a43.008 43.008 0 0 1 11.008 28.736v630.72a42.24 42.24 0 0 1-42.24 42.24H212.928a42.24 42.24 0 0 1-42.24-42.24V265.728c0-11.712 4.736-22.272 12.352-29.888l120.192-136.192a42.24 42.24 0 0 1 31.68-14.336h354.944z m99.392 202.176H234.688v587.2l186.432-0.064v-156.096H330.432a10.56 10.56 0 0 1-9.472-15.296l1.984-2.688L511.872 512l190.912 188.48a10.56 10.56 0 0 1-4.032 17.536l-3.328 0.512H602.816l-0.064 156.096h186.56V287.552zM512.064 587.136l-78.272 78.08h40.704v209.408h74.88l0.128-209.408h41.6l-79.04-78.08zM704.192 384a21.12 21.12 0 0 1 21.12 21.12v21.76a21.12 21.12 0 0 1-21.12 21.12H319.808a21.12 21.12 0 0 1-21.12-21.12v-21.76a21.12 21.12 0 0 1 21.12-21.12h384.384z m-25.92-234.688H346.56l-66.56 74.112h464.448l-66.176-74.112z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconcaidanZhinengcaiji.defaultProps = {
  size: 18,
};

export default IconcaidanZhinengcaiji;
