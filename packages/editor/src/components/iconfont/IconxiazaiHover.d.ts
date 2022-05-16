/* eslint-disable */

import { SVGAttributes, FunctionComponent } from 'react';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

declare const IconxiazaiHover: FunctionComponent<Props>;

export default IconxiazaiHover;
