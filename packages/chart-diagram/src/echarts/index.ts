import { s8, Node, createDiv, rectangle } from '@bici-topology/core';
import { reviver } from '../serializing';
export const echartsObjs: any = {};

export function echarts(ctx: CanvasRenderingContext2D, node: Node) {
  // 绘制一个底图，类似于占位符。
  rectangle(ctx, node);

  // tslint:disable-next-line:no-shadowed-variable
  const echarts = echartsObjs.echarts || (window as any).echarts;
  if (!node.data || !echarts) {
    return;
  }

  if (typeof node.data === 'string') {
    node.data = JSON.parse(node.data, reviver);
  }
  if (typeof node.property === 'string') {
    node.property = JSON.parse(node.property, reviver);
  }


  if (!node.data.echarts) {
    return;
  }

  if (!node.elementId) {
    node.elementId = s8();
  }
  if (!node.elementLoaded) {
    echartsObjs[node.id] = {
      div: createDiv(node),
    };
    node.elementLoaded = true;
    document.body.appendChild(echartsObjs[node.id].div);
    // 添加当前节点到div层
    node.addToDiv();
    // echartsObjs[node.id].chart = echarts.init(
    //   echartsObjs[node.id].div,
    //   node.data.echarts.theme
    // );
    echartsObjs[node.id].chart = echarts.init(echartsObjs[node.id].div, node.data.echarts.theme);

    node.elementRendered = false;

    // 等待父div先渲染完成，避免初始图表控件太大
    setTimeout(() => {
      echartsObjs[node.id].chart.resize();
    });
  }

  if (!node.elementRendered) {
    // 初始化时，等待父div先渲染完成，避免初始图表控件太大。
    setTimeout(() => {
      echartsObjs[node.id].chart.setOption(
        JSON.parse(JSON.stringify(node.data.echarts.option), reviver)
      );
      echartsObjs[node.id].chart.resize();
      node.elementRendered = true;
    });
  }
}
