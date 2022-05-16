/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconchakanxiangqing = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1102 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M1010.609231 328.231385a441.974154 441.974154 0 1 0-520.822154 669.538461H144.147692a104.999385 104.999385 0 0 1-104.999384-105.078154V131.308308A104.999385 104.999385 0 0 1 144.147692 26.230154h761.462154a104.999385 104.999385 0 0 1 104.999385 105.078154v196.923077z m-70.892308 461.508923l113.585231 113.58523a59.864615 59.864615 0 0 1-84.598154 84.519385L855.118769 874.338462a350.995692 350.995692 0 1 1 84.598154-84.519385zM718.532923 341.070769c54.114462 6.537846 99.091692 41.196308 135.876923 106.574769a26.230154 26.230154 0 0 0 45.764923-25.678769c-44.425846-79.084308-103.187692-124.297846-175.261538-133.041231a26.230154 26.230154 0 0 0-6.301539 52.145231z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </svg>
  );
};

Iconchakanxiangqing.defaultProps = {
  size: 18,
};

export default Iconchakanxiangqing;
