/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconjianding = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M1024 0v1024H0V0h1024zM570.752 224L421.376 372.224l0.96-43.2h-46.72V228.672H289.408V328.96h-56v81.664h53.632L224 543.68l0.256 130.624L289.344 552.96v225.408H375.68V567.04l27.968 21.696 25.664-52.032 39.68 158.336 76.992-20.992-44.288-163.008-67.712 16.384 6.08-11.712L375.68 462.08v-51.328h45.696v69.056l60.672-59.712v69.952h237.504V420.096l60.224 59.712 0.256-107.52L630.464 224l-59.712-0.064V224z m115.2 282.304l-46.592 193.28H410.688v78.848h363.968v-78.784h-51.328l44.352-174.656-81.664-18.688h-0.064z m-65.28-2.304l-76.992 11.648 27.968 155.968 76.992-11.648-27.968-155.968z m-20.096-198.528l104.576 99.584H496l104.512-99.584h0.064z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconjianding.defaultProps = {
  size: 18,
};

export default Iconjianding;
