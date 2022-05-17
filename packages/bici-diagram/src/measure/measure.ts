import { Node } from '@bici-topology/core';

export function biciMeasure(ctx: CanvasRenderingContext2D, node: Node) {
  ctx.beginPath();
  ctx.fillStyle = "#EBEBEB";
  ctx.strokeStyle="#ebebeb";
  // Set line width
  ctx.lineWidth = 0;

  if(node.rect.width<20){
    node.rect.width=20;
  }

// Wall
//   ctx.fillRect(node.rect.x, node.rect.y-2, node.rect.width, node.rect.height+4);
  // 绘制wall圆角
  radiusRect(ctx,node.rect.x, node.rect.y-3, node.rect.width, node.rect.height+6,node.rect.width/2)
  ctx.fill()
  ctx.stroke()
  // radiusRect(ctx,node.rect.x, node.rect.y-2, node.rect.width, node.rect.height+4,4)
  ctx.closePath();


  let scale=10
  if(isNotNaN(node.property.marks)){
    scale = node.property.marks
  }
  const step=node.rect.height/scale;
  let dataMax =  100;
  if(isNotNaN(node.property.dataMax)){
    dataMax = node.property.dataMax
  }
  let dataMin = 0;
  if(isNotNaN(node.property.dataMin)){
    dataMin = node.property.dataMin
  }
  let value = 0
  if(isNotNaN(node.property.value)){
    value = node.property.value
  }
  if(value<dataMin) value=dataMin;
  if(value>dataMax) value=dataMax;
  // 绘制数据柱状图
  ctx.beginPath();
  ctx.fillStyle = "#1890ff";
  let vh=node.rect.height*(value-dataMin)/(dataMax-dataMin)
  // ctx.fillRect(node.rect.x+1.5, node.rect.y+node.rect.height-vh, node.rect.width-3, vh+2);
  if(node.property.value>dataMin){
    radiusRect(ctx,node.rect.x+3, node.rect.y+node.rect.height-vh, node.rect.width-6, vh,(node.rect.width-6)/2)
  }
  ctx.fill();
  ctx.closePath();
  ctx.stroke();
  //-----
  ctx.strokeStyle = "#999999";
  ctx.fillStyle = "#999999";
  //  画直线，也就是刻度
  ctx.font = '12px Arial';
  ctx.lineWidth = 1;
  if(node.property.markChecked){
    for(let i=scale;i>=0;i--){
      ctx.beginPath();
      ctx.moveTo(node.rect.x-14, node.rect.y+i*step);
      ctx.lineTo(node.rect.x-4, node.rect.y+i*step);
      let txt=dataMin+(scale-i)*(dataMax-dataMin)/scale+"";
      txt = getFixed(txt,2);
      ctx.fillText(txt+'', node.rect.x-((txt+'').length)*6-20, node.rect.y+i*step+4.5);
      ctx.closePath();
      ctx.stroke();
    }
  }
  // 绘制单位
  ctx.beginPath();
  ctx.font = '14px Arial';
  ctx.strokeStyle = node.property.chartTitleColor||"#333333";
  ctx.fillStyle = node.property.chartTitleColor||"#333333";
  if(node.property.chartUnitChecked){
    ctx.fillText(getFixed(node.property.value,node.property.dataDot)+" "+node.property.chartUnit, node.rect.x-8, node.rect.y+node.rect.height+20);
  }else{
    ctx.fillText(getFixed(node.property.value,node.property.dataDot), node.rect.x-8, node.rect.y+node.rect.height+20);
  }
  ctx.closePath();
  ctx.stroke();

  // 绘制两端的分段颜色
  let dataColors = node.property.dataColors;
  dataColors=dataColors.filter((item)=>item.checked==true);
  dataColors.sort((a,b)=>{
    return a.top-b.top;
  })
  let beforeHeight=0;
  dataColors.map((item)=>{
    let top=item.top;
    if((top-dataMin)>(dataMax-dataMin)){
      top=dataMax;
    }
    if(top<dataMin) top=dataMin;
    if(top>dataMax) top=dataMax;
    ctx.beginPath();
    ctx.fillStyle = item.color;
    if((dataMax-dataMin)!=0){// 分母不能为0
      let h=node.rect.height*((top-dataMin)/(dataMax-dataMin))
      ctx.fillRect(node.rect.x-4, node.rect.y+(node.rect.height-h), 4, h-beforeHeight);
      // ctx.fillRect(node.rect.x+node.rect.width-4, node.rect.y+(node.rect.height-h), 4, h-beforeHeight);
      ctx.closePath();
      ctx.stroke();
      beforeHeight=h;
    }
  })


}

function getFixed(num,fix):string {
  let sh=Math.round(num*Math.pow(10, fix))/Math.pow(10, fix);
  let numStr = sh.toString()
  let index = numStr.indexOf('.')
  if(index<0) return numStr;
  if(fix==0){
    return numStr.slice(0, index + fix)+""
  }
  return numStr.slice(0, index + fix+1)+""
}



function isNotNaN(value) {
  const r = typeof value === 'number' && !isNaN(value);
  return r;
}
const radiusRect  = (ctx,left, top, width, height, r) => {
    const pi = Math.PI;
    ctx.beginPath();
    ctx.arc(left + r, top + r, r, - pi, -pi / 2);
    ctx.arc(left + width - r, top + r, r, -pi / 2, 0);
    ctx.arc(left + width - r, top + height - r, r, 0, pi / 2);
    ctx.arc(left + r, top + height - r, r, pi / 2, pi);
    ctx.closePath();
}


