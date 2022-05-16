/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconchakansuoyourenwu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1365 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M1310.122667 397.056a759.722667 759.722667 0 0 0-127.744-178.688 720.981333 720.981333 0 0 0-1033.813334 0A759.722667 759.722667 0 0 0 20.821333 397.056a191.146667 191.146667 0 0 0 0 173.568c33.706667 65.450667 76.8 125.696 127.744 178.773333a720.981333 720.981333 0 0 0 1033.813334 0 759.722667 759.722667 0 0 0 127.744-178.773333 191.146667 191.146667 0 0 0 0-173.568zM665.514667 703.317333a219.392 219.392 0 1 1 0-438.869333 219.392 219.392 0 0 1 0 438.869333z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

Iconchakansuoyourenwu.defaultProps = {
  size: 18,
};

export default Iconchakansuoyourenwu;
