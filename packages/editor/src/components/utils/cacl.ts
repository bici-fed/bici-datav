export function calcCanvas(
  width: string | number = 826,
  height: string | number = 1168
) {
  let minWidth = 3198;
  let minHeight = 2288;
  let left = 1186;
  let top = 560;
  let kw = 3.8316707;
  let kh = 1.95976027;
  width = width as number;
  height = height as number;
  if (width <= height) {
    minWidth = width * kw;
    minHeight = height * kh;
  } else {
    minWidth = width * kh;
    minHeight = height * kw;
  }
  left = (minWidth - width) / 2;
  top = (minHeight - height) / 2;
  return {
    minWidth,
    minHeight,
    left,
    top,
  };
}
export function calcScroll(
  width: string | number = 826,
  height: string | number = 1168
) {}
export function getHexColor(color) {
  if (color === 'transparent') return 'transparent';
  if (color == undefined) {
    return color;
  }
  var a = parseFloat(color.a || 1),
    r = Math.floor(a * parseInt(color.r) + (1 - a) * 255),
    g = Math.floor(a * parseInt(color.g) + (1 - a) * 255),
    b = Math.floor(a * parseInt(color.b) + (1 - a) * 255);
  return (
    '#' +
    ('0' + r.toString(16)).slice(-2) +
    ('0' + g.toString(16)).slice(-2) +
    ('0' + b.toString(16)).slice(-2)
  );
}

/**
 * 将base64的图片数据转化成file对象上传
 * @param data
 */
export function base64ToFile(data) {
  // 将base64 的图片转换成file对象上传 atob将ascii码解析成binary数据
  let binary = atob(data.split(',')[1]);
  let mime = data.split(',')[0].match(/:(.*?);/)[1];
  let array = [];
  for (let i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  let fileData = new Blob([new Uint8Array(array)], {
    type: mime,
  });

  let file = new File([fileData], `${new Date().getTime()}.png`, {
    type: mime,
  });

  return file;
}

// 保留n位小数并格式化输出（不足的部分补0）
export function roundFun(value: any, n: any) {
  if(!isNumber(value)){
    return value;
  }
  let s = (Math.round(value * Math.pow(10, n)) / Math.pow(10, n));
  // let rs = s.indexOf('.');
  // if (rs < 0) {
  //   s += '.';
  // }
  // for (let i = s.length - s.indexOf('.'); i <= n; i++) {
  //   s += '0';
  // }
  return s;
}

export function getFixed(num,fix):string {
  if(typeof num!=='number'){
    return "";
  }
  let sh=Math.round(num*Math.pow(10, fix))/Math.pow(10, fix);
  let numStr = sh.toString()
  let index = numStr.indexOf('.')
  if(index<0) return numStr;
  if(fix==0){
    return numStr.slice(0, index + fix)+''
  }
  return numStr.slice(0, index + fix+1)+''
}

/**
 * 处理图表二维数组中数字精度问题
 * @param node
 * @param source
 */
export function handleDotData(node,source){
  const dot = node.property.dataDot||0;
  (source||[]).forEach(((item,i)=>{
    item.forEach((v,index)=>{
      if(isNumber(v)&&index>0){
        item[index]=parseFloat(getFixed(v,dot))
      }
    })
    source[i]=item;
  }))
}


// 判断区间是否有重叠，返回重叠区
export function eraseOverlapIntervals(intervals):any[] {
  intervals.sort((a, b) => a[1] - b[1]); //按照区间末位对这些区间排个位，保证结束时间是按序上升的，从前往后取总是能取到当前结束时间的最小值
  // 重叠的区间
  let res = []

  let flag = -Infinity; //记录前一区间的结束值，此处一开始需取负无穷，因为必须保证这里一开始是最小的
  // let sum = 0; //记录需要移除的区间个数
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] >= flag) {
      //区间起点大于前一区间的结束点
      flag = intervals[i][1];
    } else {
      // sum += 1; //有重叠
      res.push(intervals[i]);
    }
  }
  return res;
}

// 获取数组中重复元素的索引
export function calcRepeatIndex(newArr) {
  var obj = {};

  newArr.forEach((newAr, index) => {
    // init with array if the key is falsy (undefined in this case)
    obj[newAr] = obj[newAr] || [];

    // push the current index into the array
    obj[newAr].push(index);
  });

  var res = {};
  for (const key in obj) {
    if (obj[key].length > 1) {
      res[key] = obj[key];
    }
  }
  if (Object.keys(res).length > 0) {
    return res;
  }
}
export function rgbaStringToRgb(rgba,isFilter) {
  //用来判断是否把连续的0去掉
  isFilter = isFilter || false;
  if (typeof rgba === "string") {
    // var arr = Str.match(/(0\d{2,})|([1-9]\d+)/g);
    //"/[1-9]\d{1,}/g",表示匹配1到9,一位数以上的数字(不包括一位数).
    //"/\d{2,}/g",  表示匹配至少二个数字至多无穷位数字
    var arr = rgba.match( isFilter ? /[1-9]\d{1,}/g : /\d{2,}/g);
    return (arr||[]).map(function (item) {
      //转换为整数，
      //但是提取出来的数字，如果是连续的多个0会被改为一个0，如000---->0，
      //或者0开头的连续非零数字，比如015，会被改为15，这是一个坑
      return parseInt(item);
      //字符串，连续的多个0也会存在，不会被去掉
      // return item;
    });
  } else {
    return [];
  }
}
export function getContrastColor(rgbStr) {
  const rgb=rgbaStringToRgb(rgbStr,true);

  var hsl = rgbToHsl(rgb[0],rgb[1],rgb[2]);
  if(hsl[2]){
    hsl[2] = (hsl[2] + 0.5) % 1.0;
    var new_rgb = hslToRgb.apply(this, hsl);
    return ['rgb(',parseInt(new_rgb[0]),',',parseInt(new_rgb[1]),',',parseInt(new_rgb[2]),')'].join('');
  }else{
    return "rgba(255,255,255,0.8)";
  }

}
/**

 * Converts an HSL color value to RGB. Conversion formula

 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.

 * Assumes h, s, and l are contained in the set [0, 1] and

 * returns r, g, and b in the set [0, 255].

 *

 * @param   Number  h       The hue

 * @param   Number  s       The saturation

 * @param   Number  l       The lightness

 * @return  Array           The RGB representation

 */

export function hslToRgb(h, s, l) {

  var r, g, b;



  if (s == 0) {

    r = g = b = l; // achromatic

  } else {


    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;

    var p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);

    g = hue2rgb(p, q, h);

    b = hue2rgb(p, q, h - 1 / 3);

  }



  return [r * 255, g * 255, b * 255];

}
function hue2rgb(p, q, t) {

  if (t < 0) t += 1;

  if (t > 1) t -= 1;

  if (t < 1 / 6) return p + (q - p) * 6 * t;

  if (t < 1 / 2) return q;

  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;

  return p;

}


/**

 * Converts an RGB color value to HSL. Conversion formula

 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.

 * Assumes r, g, and b are contained in the set [0, 255] and

 * returns h, s, and l in the set [0, 1].

 *

 * @param   Number  r       The red color value

 * @param   Number  g       The green color value

 * @param   Number  b       The blue color value

 * @return  Array           The HSL representation

 */

export function rgbToHsl(r, g, b) {

  r /= 255, g /= 255, b /= 255;

  var max = Math.max(r, g, b), min = Math.min(r, g, b);

  var h, s, l = (max + min) / 2;



  if (max == min) {

    h = s = 0; // achromatic

  } else {

    var d = max - min;

    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {

      case r: h = (g - b) / d + (g < b ? 6 : 0); break;

      case g: h = (b - r) / d + 2; break;

      case b: h = (r - g) / d + 4; break;

    }

    h /= 6;

  }
  return [h, s, l];
}

export function isNumber(obj:any){
  return Object.prototype.toString.call(obj)==='[object Number]';
}

export function isRTSP(str) {
  const reg= /^rtsp:\/\/([a-z]{0,10}:.{0,10}@)?(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  const reg1= /^rtsp:\/\/([a-z]{0,10}:.{0,10}@)?(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5]):[0-9]{1,5}/;
  const reg2= /^rtsp:\/\/([a-z]{0,10}:.{0,10}@)?(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\//;
  return (reg.test(str) || reg1.test(str) || reg2.test(str));
}
