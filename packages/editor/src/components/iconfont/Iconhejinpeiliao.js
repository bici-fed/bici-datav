/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconhejinpeiliao = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M880.0256 112.0256H144.0256a31.9488 31.9488 0 0 0-32.0512 31.9488v736.0512c0 17.664 14.336 32 32.0512 32h735.9488c17.7152 0 32-14.336 32-32V144.0256a31.9488 31.9488 0 0 0-32-32.0512z m-40.0384 727.9616H184.0128V184.0128h655.9744v655.9744zM340.0192 683.008v77.0048c0 4.4032 3.584 7.9872 7.9872 7.9872h47.9744c4.4032 0 8.0384-3.584 8.0384-7.9872V683.008a105.5744 105.5744 0 0 1-64 0z m64-197.9904V263.9872A8.0384 8.0384 0 0 0 395.9808 256h-47.9744a8.0384 8.0384 0 0 0-7.9872 7.9872v221.0304a105.5744 105.5744 0 0 1 64 0zM339.968 683.008a105.5744 105.5744 0 0 0 64 0 104.0384 104.0384 0 1 0-64 0z m0.1024-115.712c0.256-0.6144 0.6656-1.1776 1.024-1.792v-0.1024l1.1776-1.792 0.256-0.512c0.3072-0.512 0.7168-0.9216 1.024-1.3824l0.3072-0.4096c0.512-0.6144 0.8704-1.1264 1.3824-1.5872l0.3072-0.3072 1.1776-1.2288 0.4096-0.3584 1.6384-1.4336a19.2 19.2 0 0 1 1.6896-1.28l0.512-0.3072c0.512-0.3072 0.8704-0.7168 1.3824-1.024l0.4096-0.256c0.5632-0.4096 1.1776-0.7168 1.8944-1.1264l0.4096-0.2048 1.536-0.768 0.6656-0.3072c0.6656-0.3072 1.28-0.6144 1.9968-0.8192 0.6656-0.3072 1.3824-0.512 2.048-0.7168l0.6144-0.2048a10.4448 10.4448 0 0 1 1.7408-0.3584l0.512-0.1024c0.6656-0.2048 1.4848-0.3072 2.1504-0.4096 0.2048 0 0.3072 0 0.512-0.1024l1.792-0.2048h0.6144l2.304-0.1024c0.768 0 1.536 0 2.304 0.1024h0.5632a11.008 11.008 0 0 1 2.304 0.3072c0.7168 0.1024 1.536 0.2048 2.2016 0.4096l0.512 0.1024 1.6896 0.3584 0.6144 0.2048c0.7168 0.2048 1.3824 0.4096 2.0992 0.7168 0.7168 0.2048 1.28 0.512 2.048 0.8192l0.512 0.3072c0.512 0.1536 1.1264 0.512 1.6384 0.768l0.4096 0.2048a18.5856 18.5856 0 0 1 1.8944 1.1264l0.4096 0.256c0.512 0.3072 1.024 0.6144 1.3824 1.024l0.512 0.3072 1.6896 1.28c0.512 0.4096 1.1264 0.9216 1.5872 1.4336l0.4096 0.3584 1.2288 1.2288 0.256 0.3072 1.4336 1.536 0.3072 0.4608c0.4096 0.4096 0.6656 0.8704 1.024 1.3824l0.256 0.512 1.2288 1.792 0.0512 0.1024 1.024 1.792a36.1984 36.1984 0 0 1 0 33.3824l-1.024 1.8432-0.0512 0.1024-1.2288 1.792-0.3072 0.512c-0.3072 0.512-0.6656 0.8704-1.024 1.3824l-0.256 0.4096c-0.512 0.5632-0.9216 1.0752-1.4336 1.536l-0.256 0.3584-1.2288 1.1776-0.4096 0.4096-1.536 1.3824a19.2 19.2 0 0 1-1.7408 1.3312l-0.512 0.3072c-0.512 0.256-0.8704 0.6656-1.3824 1.024l-0.4096 0.256c-0.6144 0.4096-1.1776 0.7168-1.8944 1.0752l-0.4096 0.2048-1.5872 0.8192-0.6144 0.3072c-0.7168 0.3072-1.28 0.6144-1.9968 0.768-0.7168 0.3072-1.3824 0.512-2.0992 0.7168l-0.6144 0.2048a10.4448 10.4448 0 0 1-1.6896 0.4096l-0.512 0.1024c-0.6656 0.2048-1.4848 0.3072-2.2016 0.4096l-0.512 0.1024c-0.5632 0.1024-1.1776 0.1024-1.792 0.1536h-0.5632l-2.304 0.1024c-0.8192 0-1.536 0-2.304-0.1024H368.64c-0.6144 0-1.1776-0.0512-1.792-0.1536-0.2048 0-0.3072 0-0.512-0.1024-0.6656-0.1024-1.4848-0.2048-2.2016-0.4096l-0.512-0.1024-1.6896-0.4096-0.5632-0.2048c-0.7168-0.2048-1.4336-0.4096-2.0992-0.7168-0.7168-0.1536-1.3312-0.512-2.048-0.768l-0.5632-0.3072a11.9296 11.9296 0 0 1-1.5872-0.8192l-0.4096-0.2048a18.5856 18.5856 0 0 1-1.8944-1.0752l-0.4096-0.3072a7.1168 7.1168 0 0 1-1.4336-1.024l-0.512-0.256-1.6384-1.3312a20.0192 20.0192 0 0 1-1.6384-1.3824l-0.4096-0.4096-1.1776-1.1776-0.3072-0.3072a20.0192 20.0192 0 0 1-1.3824-1.5872l-0.3072-0.4096a7.1168 7.1168 0 0 1-1.024-1.4336l-0.256-0.512-1.2288-1.7408v-0.1024c-0.4096-0.6144-0.7168-1.2288-1.024-1.8432a36.1984 36.1984 0 0 1 0-33.3824z m279.8592-28.3136v221.0304c0 4.4032 3.584 7.9872 8.0384 7.9872h47.9744c4.4032 0 7.9872-3.584 7.9872-7.9872v-221.0304a105.5744 105.5744 0 0 1-64 0z m64-197.9904V263.9872A8.0384 8.0384 0 0 0 675.9936 256h-47.9744a8.0384 8.0384 0 0 0-8.0384 7.9872V340.992a105.5744 105.5744 0 0 1 64 0z m-64 197.9904a105.5744 105.5744 0 0 0 64 0 104.0384 104.0384 0 1 0-64 0z m0.1024-115.712l1.024-1.792V421.376l1.1776-1.792 0.3072-0.512c0.3072-0.512 0.7168-0.8704 1.024-1.3824l0.3072-0.4096c0.512-0.5632 0.8704-1.0752 1.3824-1.536l0.3072-0.3584 1.1776-1.1776 0.4096-0.4096 1.5872-1.3824a19.2512 19.2512 0 0 1 1.6896-1.3312l0.512-0.3072c0.512-0.256 0.9216-0.6656 1.4336-1.024l0.3584-0.256c0.6144-0.4096 1.2288-0.7168 1.8944-1.0752l0.4096-0.2048 1.6384-0.8192 0.5632-0.3072c0.7168-0.3072 1.3312-0.6144 2.048-0.768 0.6656-0.3072 1.3824-0.512 2.048-0.7168l0.6144-0.2048a10.4448 10.4448 0 0 1 1.6896-0.4096l0.512-0.1024c0.7168-0.2048 1.536-0.3072 2.2016-0.4096 0.2048 0 0.3072 0 0.512-0.1024 0.5632-0.1024 1.1776-0.1024 1.792-0.1536h0.6144l2.304-0.1024c0.768 0 1.4848 0 2.2528 0.1024h0.6144c0.6144 0 1.2288 0.0512 1.792 0.1536 0.2048 0 0.3072 0 0.512 0.1024 0.7168 0.1024 1.536 0.2048 2.2016 0.4096l0.512 0.1024 1.6896 0.4096 0.6144 0.2048c0.6656 0.2048 1.3824 0.4096 2.048 0.7168 0.7168 0.1536 1.3312 0.512 2.048 0.768l0.6144 0.3072c0.512 0.2048 1.0752 0.512 1.536 0.8192 0.1536 0.1024 0.3584 0.1024 0.4608 0.2048a18.5856 18.5856 0 0 1 1.8944 1.0752l0.4096 0.3072c0.512 0.3072 1.024 0.6144 1.3824 1.024l0.512 0.256 1.6896 1.3312 1.5872 1.3824 0.4096 0.4096 1.1776 1.1776 0.3072 0.3072 1.4336 1.5872 0.256 0.4096a7.1168 7.1168 0 0 1 1.024 1.4336l0.3072 0.512 1.1776 1.7408v0.1024c0.4096 0.6144 0.7168 1.2288 1.024 1.8432a36.1984 36.1984 0 0 1 0 33.3824l-1.024 1.792v0.1024l-1.1776 1.792-0.3072 0.512c-0.3072 0.512-0.7168 0.9216-1.024 1.3824l-0.256 0.4096c-0.512 0.6144-0.9216 1.1264-1.4336 1.5872l-0.3072 0.3072-1.1776 1.2288-0.4096 0.3584-1.5872 1.4336a19.2 19.2 0 0 1-1.6896 1.28l-0.512 0.3072c-0.512 0.3072-0.9216 0.7168-1.3824 1.024l-0.4096 0.256-1.8944 1.1264-0.4096 0.2048c-0.512 0.3072-1.024 0.512-1.5872 0.768l-0.6144 0.3072c-0.7168 0.3072-1.3312 0.6144-2.048 0.8192-0.6656 0.3072-1.3824 0.512-2.048 0.7168l-0.6144 0.2048a10.4448 10.4448 0 0 1-1.6896 0.3584l-0.512 0.1024c-0.7168 0.2048-1.536 0.3072-2.2016 0.4096-0.2048 0-0.3072 0-0.512 0.1024l-1.792 0.2048h-0.6144l-2.2528 0.1024c-0.8192 0-1.536 0-2.304-0.1024h-0.6144c-0.6144 0-1.2288-0.1024-1.792-0.2048-0.2048 0-0.3072 0-0.512-0.1024-0.7168-0.1024-1.536-0.2048-2.2016-0.4096l-0.512-0.1024c-0.5632-0.1024-1.1776-0.3072-1.6896-0.3584l-0.6144-0.2048c-0.6656-0.2048-1.3824-0.4096-2.048-0.7168-0.7168-0.2048-1.3312-0.512-2.048-0.8192l-0.5632-0.3072a11.9296 11.9296 0 0 1-1.6384-0.768l-0.4096-0.2048a18.5856 18.5856 0 0 1-1.8944-1.1264l-0.3584-0.256c-0.512-0.3072-1.024-0.6144-1.4336-1.024l-0.512-0.3072-1.6896-1.28a20.0192 20.0192 0 0 1-1.5872-1.4336l-0.4096-0.3584-1.1776-1.2288-0.3072-0.3072a20.0192 20.0192 0 0 1-1.3824-1.536l-0.3072-0.4608a7.1168 7.1168 0 0 1-1.024-1.3824l-0.3072-0.512-1.1776-1.792v-0.1024l-1.024-1.792a36.1984 36.1984 0 0 1 0-33.3824z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconhejinpeiliao.defaultProps = {
  size: 18,
};

export default Iconhejinpeiliao;
