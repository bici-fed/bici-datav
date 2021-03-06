/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icontuichudenglu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M888.32 757.418667h-53.802667a7.765333 7.765333 0 0 0-7.68 7.68v61.781333H197.034667V197.12H826.88v61.781333c0 4.181333 3.498667 7.68 7.68 7.68h53.845333a7.68 7.68 0 0 0 7.68-7.68V158.72a30.634667 30.634667 0 0 0-30.72-30.72H158.72a30.634667 30.634667 0 0 0-30.72 30.72v706.56c0 17.024 13.696 30.72 30.72 30.72h706.56c17.024 0 30.72-13.696 30.72-30.72v-100.181333a7.68 7.68 0 0 0-7.68-7.68z m18.56-251.733334L765.013333 393.685333a8.021333 8.021333 0 0 0-13.013333 6.314667v75.989333h-314.026667a8.021333 8.021333 0 0 0-7.978666 8.021334v55.978666c0 4.394667 3.626667 8.021333 8.021333 8.021334h313.984v75.989333c0 6.698667 7.808 10.496 13.013333 6.314667l141.866667-112a7.978667 7.978667 0 0 0 0-12.629334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Icontuichudenglu.defaultProps = {
  size: 18,
};

export default Icontuichudenglu;
