/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconcaidanShujutianbaotongji = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M896.448 170.688a42.24 42.24 0 0 1 42.24 42.24v598.144a42.24 42.24 0 0 1-42.24 42.24H127.552a42.24 42.24 0 0 1-42.24-42.24V212.928a42.24 42.24 0 0 1 42.24-42.24h768.896z m-21.76 64H149.312v554.624h725.376V234.688zM522.88 384a21.12 21.12 0 0 1 21.12 21.12v256.448a21.12 21.12 0 0 1-21.12 21.12h-21.76a21.12 21.12 0 0 1-21.12-21.12V405.12A21.12 21.12 0 0 1 501.12 384h21.76z m181.312 64a21.12 21.12 0 0 1 21.12 21.12v192.448a21.12 21.12 0 0 1-21.12 21.12h-21.76a21.12 21.12 0 0 1-21.12-21.12V469.12a21.12 21.12 0 0 1 21.12-21.12h21.76zM341.568 320a21.12 21.12 0 0 1 21.12 21.12v320.448a21.12 21.12 0 0 1-21.12 21.12h-21.76a21.12 21.12 0 0 1-21.12-21.12V341.12a21.12 21.12 0 0 1 21.12-21.12h21.76z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconcaidanShujutianbaotongji.defaultProps = {
  size: 18,
};

export default IconcaidanShujutianbaotongji;
