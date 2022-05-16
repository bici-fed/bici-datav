/* eslint-disable */

import { SVGAttributes, FunctionComponent } from 'react';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

declare const IconcaidanShebeiguanli: FunctionComponent<Props>;

export default IconcaidanShebeiguanli;
