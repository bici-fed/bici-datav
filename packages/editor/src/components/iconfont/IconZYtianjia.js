/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconZYtianjia = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512.512 81.009778a428.657778 428.657778 0 0 1 304.753778 126.293333 428.657778 428.657778 0 0 1 126.293333 304.753778 428.657778 428.657778 0 0 1-126.293333 304.753778 428.657778 428.657778 0 0 1-304.753778 126.293333 428.657778 428.657778 0 0 1-304.753778-126.293333A428.657778 428.657778 0 0 1 81.464889 512a428.657778 428.657778 0 0 1 126.293333-304.753778 428.657778 428.657778 0 0 1 304.753778-126.293333m0-66.673778a497.777778 497.777778 0 1 0 0.056889 995.555556 497.777778 497.777778 0 0 0-0.056889-995.555556zM234.723556 478.72h555.52v66.673778H234.723556V478.72zM479.175111 234.382222h66.673778v555.463111H479.175111V234.382222z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

IconZYtianjia.defaultProps = {
  size: 18,
};

export default IconZYtianjia;
