/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconshanchuHongse = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M359.9872 184.0128h-7.9872c4.4032 0 7.9872-3.584 7.9872-7.9872v7.9872h304.0256v-7.9872c0 4.352 3.584 7.9872 7.9872 7.9872h-7.9872V256h71.9872V175.9744c0-35.2768-28.672-64-64-64h-320c-35.328 0-64 28.7232-64 64V256h71.9872V184.0128zM864 256H160a31.9488 31.9488 0 0 0-32 32v32c0 4.4032 3.584 7.9872 7.9872 7.9872h60.416l24.6784 523.008a64.0512 64.0512 0 0 0 63.8976 61.0304h454.0416c34.2016 0 62.2592-26.8288 63.8976-61.0304l24.6784-523.008h60.416c4.4032 0 7.9872-3.584 7.9872-7.9872v-32A31.9488 31.9488 0 0 0 864 256z m-132.7104 583.9872H292.7104l-24.2176-512h487.0144l-24.2176 512zM373.6576 394.4448h71.68v358.4h-71.68v-358.4z m204.9536 1.2288h71.68v358.4h-71.68v-358.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconshanchuHongse.defaultProps = {
  size: 18,
};

export default IconshanchuHongse;
