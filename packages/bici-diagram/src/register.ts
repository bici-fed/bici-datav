import { registerNode } from '@bici-topology/core'
import {biciTimer,biciTimerIconRect,biciTimerTextRect} from './timer'
import {biciVarer,biciVarerIconRect,biciVarerTextRect} from './varer'
import {simpleCard,simpleCardIconRect,simpleCardTextRect} from './card'
import {biciPilotIconRect,biciPilotTextRect,biciPilot} from './pilot'
import {biciMeasure, biciMeasureIconRect, biciMeasureTextRect} from "./measure";
import {simpleText, simpleTextIconRect, simpleTextTextRect} from "./text";

// name - node名称.
// drawFn - node渲染函数。上面的myShape
// anchorsFn - 计算node的锚点，如果为null，表示使用缺省计算锚点方法
// iconRectFn - 计算node的图标区域，如果为null，表示使用缺省计算图标区域方法
// textRectFn - 计算node的文字区域，如果为null，表示使用缺省计算文字区域方法
// force - 如果已经存在同名node，是否覆盖.
// export function registerNode(
//   name: string, // myShape
//   drawFn: (ctx: CanvasRenderingContext2D, node: Node) => void,
//   anchorsFn?: (node: Node) => void,
//   iconRectFn?: (node: Node) => void,
//   textRectFn?: (node: Node) => void,
//   force?: boolean
// );

export function register() {

  registerNode("biciTimer",biciTimer,null,biciTimerIconRect,biciTimerTextRect,true)
  registerNode("biciVarer",biciVarer,null,biciVarerIconRect,biciVarerTextRect,true)
  registerNode("biciCard",simpleCard,null,simpleCardIconRect,simpleCardTextRect,true)
  registerNode("biciCard2",simpleCard,null,simpleCardIconRect,simpleCardTextRect,true)
  registerNode("biciPilot",biciPilot,null,biciPilotIconRect,biciPilotTextRect,true)
  registerNode("biciMeasure",biciMeasure,null,biciMeasureIconRect,biciMeasureTextRect,true)
  registerNode("biciText",simpleText,null,simpleTextIconRect,simpleTextTextRect,true)
  
}
