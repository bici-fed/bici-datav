/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconpiliangchuli = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M908.032 27.904c38.912 0 70.528 31.168 70.528 69.312v42.88h1.472v532.672c0 38.912-31.616 70.656-70.592 70.656h-93.312l0.064 176c0 38.848-31.616 70.592-70.528 70.592H114.112A70.592 70.592 0 0 1 43.52 919.488V284.16c0-38.912 31.616-70.528 70.592-70.528h141.12v-115.2c0-38.912 31.68-70.528 70.592-70.528h582.144zM745.6 284.16H114.112v635.328h631.552V284.16zM632.512 403.2a35.2 35.2 0 0 1 7.488 49.28l-222.272 302.208a35.584 35.584 0 0 1-42.176 11.648 36.864 36.864 0 0 1-11.008-6.144l-136.576-109.056a35.328 35.328 0 0 1 44.096-55.04l110.08 87.744 201.088-273.088a35.328 35.328 0 0 1 49.28-7.552z m275.52-304.768H325.76v115.2h419.84c38.912 0 70.528 31.616 70.528 70.528v388.672h93.248V203.328h-1.472V98.496z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

Iconpiliangchuli.defaultProps = {
  size: 18,
};

export default Iconpiliangchuli;
