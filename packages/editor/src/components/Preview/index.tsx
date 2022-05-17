import React, {useEffect, useState} from 'react';
import { ConfigProvider } from 'antd';
import {Lock, Node, Topology} from '@bici-topology/core';
import { isNumber, getFixed } from '../utils/cacl';
import { formatTimer } from '../utils/Property2NodeProps';
import * as _ from 'lodash';
import {
  echartsObjs,
  register as registerChart,
} from '@bici-topology/chart-diagram';
import {
  register as reactNodesData
} from '../common/RegCustomUIComp'
import { replacer, reviver } from '../utils/serializing';
import { register as registerBiciComp } from '@bici-topology/bici-diagram';
import moment from "moment";
import 'antd/dist/antd.less';
import styles from './index.module.less'
import {getTimeLineOption} from "../config/charts/timeline";
import {defaultTimelineShowData} from "../data/defines";
import {clientParam, handleRequestError, loginSZGC, maxContentLength, timeout, withCredentials} from "../data/api";
import axios from "axios";
import {getBarOption} from "../config/charts/bar";
import {getGroupBarOption} from "../config/charts/groupbar";
import {getStackBarOption} from "../config/charts/stackbar";
import {getHorizontalBarOption} from "../config/charts/horizontalbar";
import {getPieOptionByChangeProp} from "../config/charts/pie";
export let canvas;
let x, y;
export class PreviewProps {
  history?: any;
  key?: number;
  ref?: any;
  // 画布数据 json对象
  data?: any;
  websocketConf?: {
    url: string;
  };
  isApp?:boolean;
}

// echartsObjs[node.id].chart
const Preview = ({ data, websocketConf,isApp }: PreviewProps) => {
  let websocketData=null;
  let websocket_data_list=[]
  let userInterval=[];
  let interfaceToken='';
  const socketNodeMap={};
  const socketDataMap={};
  let canvasOptions = {
    rotateCursor: '/rotate.cur',
    locked: Lock.NoMove,
    disableTranslate:!isApp,
    isApp: isApp,
    width:data?.width,
    height:data?.height,
    on:(event: string, data: any)=>{},
  };

  const [drawerVisible,setDrawerVisible]=useState(false);
  const [deviceType,setDeviceType]=useState();
  const [reqData,setReqData]=useState<string|undefined>();
  const [currentNode,setCurrentNode]=useState();
  let renderCanvasInterval;


  (window as any).οnfοcus= function (window: any){
    renderCanvasInterval=setInterval(()=>{
      canvas.updateProps(false);
    },1000);
  }

  window.onblur = function() {
    clearInterval(renderCanvasInterval);
  };



  useEffect(() => {
    canvasRegister();
    canvas = new Topology('topology-canvas-preview', canvasOptions);

    // 渲染页面数据
    if (data != undefined && typeof data == 'object') {
      data.locked = 2;
      canvas.open(data);
      canvas.resize({width:data?.width,height:data?.height});
    }
    initWebsocketData();
    if(data){
      canvas.data.pens
          .filter((pen) => pen.name === 'combine')
          .forEach((pen) => canvas.uncombine(pen));
      initRestfullData(canvas.data.pens);
    }
    canvas._emitter.on("lfOpenDrawer",initEmmitevent)

    renderCanvasInterval=setInterval(()=>{
      canvas.updateProps(false);
    },1000);

    return () => {
      canvas.closeSocket();
      canvas.destroy();
      userInterval.forEach(item=>{
        clearInterval(item)
      })
      // clearInterval(renderCanvasInterval);
    };
  }, [data]);

// useEffect(()=>{
//   canvas._emitter.on("lfOpenDrawer",initEmmitevent)
// },[currentNode])

  const initEmmitevent=data=>{
    setDeviceType(data.node.id);
    setReqData(JSON.stringify(data.reqData||{}));
    setDrawerVisible(true);
    setCurrentNode(data);
  }



  const onMessage = (event: string, data: any) => {
    if(event=='node'){
      if(!data.property) return;
      if(data.property.echartsType=='statusBtn'){
        setDeviceType(data.id);
        setReqData(data.property.reqData);
        setDrawerVisible(true);
        setCurrentNode(data);
      }else if(data.property.type=='openUrl'){
        const getUrl = ()=>{
          const p = window.location.protocol;
          const url = window.location.host;
          return `${p}//${url}`;
        }
        const host = getUrl();
        const uri = `${host}${data.property.url}`;
        top.window.open(uri)
      }
    }
  }
  canvasOptions.on = onMessage;


  /**
   * 注册图形库
   */
  const canvasRegister = () => {
    registerChart();
    registerBiciComp();
    reactNodesData();
  };

  // 数据卡片颜色根据数据变化
  const setCardStyle = (
    node: Node,
    fontFamily: string,
    color: string,
    size: number,
    bkColor: string
  ) => {
    if (fontFamily) {
      node.font.fontFamily = fontFamily;
      node.children[0].font.fontFamily = fontFamily;
    }
    if (color) {
      node.font.color = color;
      node.children[0].font.color = color;
    }
    if (size) {
      node.children[0].font.fontSize = size;
    }
    if (bkColor) {
      node.fillStyle = bkColor;
    }
  };

  // 停止数据推送时更新图表
  const stopCompData=(pens,intval)=>{
    (pens || []).map((node) => {
      // 循环遍历
      if(node.name=="combine"){
        stopCompData(node.children,intval);
      }else if (node.property?.dataPointParam?.qtDataList?.length > 0) {
        if (node.name == 'echarts'){// echart图表组件
          if(websocketData&&intval%2==0){

            const theChart = node.property.echartsType;
            switch (theChart){
              case "timeLine":
                const dataRows = node.property.dataPointSelectedRows;

                break
              case 'gauge':

                break;
              default:
                break
            }
          }
        }else {
          const dataRow = node.property.dataPointSelectedRows[0];
          if(dataRow&&intval%2==0){// 每2秒检测一次
            const nodeType=node.name;
            const hasData=_.findIndex(websocket_data_list,item=>{
              if(item){
                return item.id==dataRow.id;
              }else{
                return false;
              }
            });
            switch (nodeType){
              case "biciVarer":
                  if(hasData<0){ // 没有数据
                    node.text="0"
                    // canvas.updateProps(false,[node])
                  }
                break;
              case "biciMeasure":
                if(hasData<0){
                  node.property.value = node.property.dataMin;
                  // canvas.updateProps(false,[node]);
                }
                break;
              case "biciCard":
                if(hasData<0) {
                  node.children[0].text = '0.00';
                  // canvas.updateProps(false, [node]);
                }
                break;
              case "biciPilot":
                if(hasData<0) {
                  node.strokeStyle = node.property.color;
                  if (node.property.showText) {
                    node.text = node.property.text;
                  }
                }
                break;
              default:
                break;
            }
          }
        }
      }
    });
  }
  /**
   * 初始话数据接口更新数据
   */
  const initRestfullData =  (pens)=>{
    if (pens.length > 0) {
      // 有数据，去遍历所有数据为接口类型的组件
      pens.forEach(async node=>{
        // 如果是图表组件，下面就需要判断具体的是那种图表组件
        if(node.name=='combine'){
          initRestfullData(node.children)
        }else if(node.property){
          if(node.property.dataMethod=="restful"){
            // 第一次请求数据
           loginAndFetchData(node)
            // 对于有轮训需求的数据设置轮训
            if(node.property.pullRate){
              const interval = setInterval(async ()=>{
                loginAndFetchData(node)
              },node.property.pullRate*(node.property.pullRateUnit||1)*1000)
              userInterval.push(interval);
            }
          }
        }
      })
    }
  }
  /**
   * 登陆并获取数据
   * @param node
   */
  const loginAndFetchData=(node)=>{
    requestData(node).then(data=>{

      mapRestDataToChart(node,data)
    })
    // if(!interfaceToken){
    //   loginSZGC().then((res:string)=>{
    //     interfaceToken=res;
    //     requestData(node).then(data=>{
    //       mapRestDataToChart(node,data)
    //     })
    //   })
    // }else{
    //   requestData(node).then(data=>{
    //     mapRestDataToChart(node,data)
    //   })
    // }
  }

  /**
   * rest请求的数据更新到图表上
   * @param node
   * @param res
   * 统计组件数据格式：
   * {
    "code": 1000,
    "msg": "success",
    "data": {
        text:"产量",
        value:"1024",
        unit:"t"
    }
}
图表数据格式：
   {
    "code": 1000,
    "msg": "success",
    "data": {
        "dimensions": [
            "xdata",
            "2020-09"
        ],
        "source": [
            [
                "补强板",
                99.899
            ],
            [
                "电梯导轨",
                1457.332
            ],
            [
                "扁钢",
                1768.992
            ]
        ]
    }
}
   */
  const mapRestDataToChart=(node: any, res: any)=>{

    if(res.front_error){// 请求出错，不做处理
      return;
    }
    let resTmp=null;
    if(typeof res=='string'){// 如果请求结果是字符串，尝试解析成对象
      resTmp=JSON.parse(res)
    }else{
      resTmp=res;
    }
    if(resTmp){
      if(
          resTmp.hasOwnProperty("text") ||
          resTmp.hasOwnProperty("value")||
          resTmp.hasOwnProperty("unit"))
      {// 说明是统计组件的数据
        const nodeType = node.name;
        switch (nodeType) {
          case "biciText":
            node.children[0].text=resTmp["value"]+resTmp["unit"]
            node.children[1].text=resTmp["text"]
            // canvas.updateProps(false,[node])
            break;
          case "biciCard2":
            node.children[0].text=resTmp["text"]
            node.children[1].text=resTmp["unit"]
            node.children[2].text=resTmp["value"]
            // canvas.updateProps(false,[node])
            break;
        }
      }else if(resTmp.hasOwnProperty("dimensions")&&resTmp.hasOwnProperty("source")){// 是图表组件的数据
        const nodeType = node.property.echartsType;

        switch (nodeType) {
          case 'groupBar':
            node.data.echarts.option=getGroupBarOption(node,res);
            break;
          case 'verticalBar':
            node.data.echarts.option=getBarOption(node,res)
            break;
          case 'stackBar':
            node.data.echarts.option=getStackBarOption(node,res);
            break;
          case 'horizontalBar':
            node.data.echarts.option=getHorizontalBarOption(node,res);
            break;
          case 'circleAndPie':
            node.data.echarts.option= getPieOptionByChangeProp(node,res)
            break;
          case 'timeLine':
            break;
          case 'dataTable':
            // console.log("表格==",res);
            // node.property.props={
            //   ...node.property.props,
            //   data:res,
            // }
            /**
             * 用改变属性的方式无法实时更新数据
             */
            canvas.dispatch("requestDataSuccess"+node.id,res);
            break;
        }
        updateChartNode(node)
      }
    }else{

    }
  }
  /**
   * 请求接口数据
   * @param node
   */
  const requestData=(node)=>{
    return new Promise((resolve,reject)=>{
      var myURL = new URL(node.property.dataSourceUrl||node.property.dataUrl)
      const ajax = axios.create({baseURL: `${myURL.origin}/`, timeout, maxContentLength,withCredentials})
      // const ajax = axios.create({baseURL: `http://qt.test.bicisims.com`, timeout, maxContentLength,withCredentials})
      ajax.request({
        url:myURL.pathname,//myURL.pathname
        method:'get',
        headers: {
          // token: '2sdIEuFCYR768oVd4fvUyj'||interfaceToken,
          'Content-Type': 'application/json',
        },

      }).then(res=>{
        if(res&&res.data.code==1000){
          resolve(res.data.data)
        }else{
          resolve({front_error:2})
        }
      }).catch((error)=>{
        handleRequestError(error);
        resolve({front_error:1});
      });
    })
  }

  const initWebsocketData = () => {
    canvas.closeSocket();
    if (websocketConf !== undefined) {
      canvas.openSocket(`${websocketConf.url}`);
    }
    if (canvas != undefined && canvas.socket != undefined) {
      canvas.socket.socket.onopen = () => {
        if (canvas.data && canvas.data.pens.length > 0) {
          // 有数据，去遍历有websocket的组件，并订阅
          if (canvas.socket != undefined) {
            sendMessage(canvas.data.pens)
          }
        }
      };
      canvas.socket.socket.onmessage = (data) => {
        canvas.dispatch("socketDataSuccess", data);
        const nodes=[]
        websocketData=JSON.parse(data.data);
        websocket_data_list.push(websocketData);
        if (canvas.data && canvas.data.pens.length > 0) {
          // 有数据，去遍历有websocket的组件，并订阅
          if (canvas.socket != undefined) {
            const r = JSON.parse(data.data);
            for(const k in socketNodeMap){
              let kv=k.split('__');
              if(kv[1]==r.id){
                nodes.push(socketNodeMap[k]);
              }
            }
            updateComp(canvas.data.pens, data);
          }
        }
      };
      canvas.socket.socket.onclose=(e)=>{
      }
    }
    //canvas.data.pens
    updateTimerCom(canvas.data.pens);
  };
  const sendMessage=(pens)=>{
    (pens || []).map((node) => {
      // 循环遍历
      if(node.name=="combine"){
        sendMessage(node.children)
      }else if (node.property?.dataPointParam?.qtDataList?.length > 0) {
        let socketId = node.property.dataPointParam.qtDataList[0].id;
        let k = node.id+'__'+socketId;
        socketNodeMap[k] = node;
        socketDataMap[socketId]='';
        const dcList = node.property.dataPointParam.qtDataList.map(item=>{
          return {
            dc: item.dataCode,
            intervalTime: item.intervalTime,
            count: 0,
            ext: 'number',
          }
        })
        canvas.socket.socket.send(
            JSON.stringify({
              dcList,
              subscribe: true,
              companyId:'',
              nodeTid: node.TID,
              nodeId: node.id,
            })
        );
      }
    });
  }
  const updateTimerCom = (pens: any) => {
    (pens || []).map((node) => {
      if (node.name == 'biciTimer') {
        setInterval(() => {
          formatTimer(node, canvas);
        }, 1000);
      } else if (node.name == 'combine') {
        updateTimerCom(node.children);
      }
    });
  };
  let timedata=[];
  for(let i=0;i<10;i++){
    timedata.push({
      name:moment().subtract(1, "seconds"),
      value:[moment().subtract(1, "seconds"),null]
    })
  }

  const updateComp = (pens: any, data:any) => {
    let theChart;
    // {"dc":"Data2022042017504628","ts":1650783704941,"v":2582,"vt":1}
    const v = JSON.parse(data.data);
    const r = {
      id: v.dc,
      value: v.v,
      time: v.ts,
      type: v.vt,
    };


    (pens || []).map((node: Node) => {
      if (node.name == 'combine') {
        updateComp(node.children, data);
      } else if (node.name == 'echarts') {
        // 如果是图表组件，下面就需要判断具体的是那种图表组件
        theChart = node.property.echartsType;
        switch (theChart) {
          case 'gauge':
            if (node.property.dataPointSelectedRows[0]?.dataCode == r.id) {
              const cd = {
                value: undefined,
                name: node.property.chartTitle,
              };
              cd.value = getFixed(r.value, node.property.dataDot);
              if(r.value==undefined){
                cd.value=node.property.dataMin
              }
              if(cd.value){
                node.data.echarts.option.series[0].data[0] = cd;
                updateChartNode(node);
              }
            }
            break;
          case 'timeLine':
            let selectedRows = node.property.dataPointSelectedRows;

            const timesxAix=node.data.echarts.option.dataset.source[0];
            (selectedRows || []).map((row,index) => {
              if (row.dataCode == r.id) {
                if(index==0){
                  timesxAix.push(moment(parseInt(r.time/1000+"")*1000).format("LTS"))
                  if(timesxAix.length>defaultTimelineShowData){
                    timesxAix.splice(1,1)
                  }
                  node.data.echarts.option = getTimeLineOption(node, null, r, timesxAix,true);
                }else{
                  node.data.echarts.option = getTimeLineOption(node, null, r);
                }
              }
            });
            updateChartNode(node);
            break;
          case 'pie':

            break;
          case "circleAndPie":
          case "verticalBar":
          case "horizontalBar":
            const n = node.property.dataDot;
            const rows = (node.property.dataPointSelectedRows||[]).map(row=>{
              if(row.dataCode==r.id){
                return {
                  ...row,
                  value:getFixed(r.value, n)
                }
              }else{
                return row;
              }
            });
            node.property.dataPointSelectedRows=rows;
            if(theChart=='circleAndPie'){
              node.data.echarts.option = getPieOptionByChangeProp(node, null);
            }else if(theChart=='verticalBar'){
              node.data.echarts.option = getBarOption(node, null);
            }else if(theChart=='horizontalBar'){
              node.data.echarts.option = getHorizontalBarOption(node, null);
            }
            updateChartNode(node)
            break;
          default:
        }
        //
      } else if (node.property?.dataPointParam?.qtDataList?.length > 0) {
        // 非图表组件
        if (node.name == 'biciVarer') {
          const tt=node.property.dataPointParam.qtDataList[0].dataCode == r.id;
          if ( tt ) {
            if(r.value===undefined){
              node.text=""
              // canvas.updateProps(false,[node])
              return;
            }
            if (isNumber(r.value)) {
              // 数值型
              const n = node.property.dataDot;
              if(r.value<0.0000000000000000001){
                node.text = r.value+'';
              }else{
                node.text = getFixed(r.value,n);
              }
            } else {
              node.text = r.value+'';
            }
            if(r.value===true||r.value==='true'){
              node.text=node.property.dataPointSelectedRows[0].trueDisplay||r.value
            }
            if(r.value===false||r.value==='false'){
              node.text=node.property.dataPointSelectedRows[0].falseDisplay||r.value
            }
            // 保存最新值
            socketDataMap[r.id]=r.value;
            // canvas.updateProps( false,[node]);
          }
        }else if(node.name === 'biciMeasure'){
          console.log('计量器.....', node.property.dataPointSelectedRows[0]?.dataCode, r.id)
          if (node.property.dataPointSelectedRows[0]?.dataCode == r.id) {
            node.property.value = r.value;
            if(r.value==undefined){
              node.property.value = node.property.dataMin;
            }
            // canvas.updateProps(false);
          }
        } else if (node.name === 'biciCard') {
          if (node.property.dataPointParam.qtDataList[0].dataCode == r.id) {
            const n = node.property.dataDot;
            let val = getFixed(r.value, n);
            if(r.value==undefined){
              val="0.00"
            }
            node.children[0].text = val;
            const bottom = node.property.limit.bottom;
            const top = node.property.limit.top;
            const tempVal = parseFloat(val);
            if (!isNaN(bottom)&&tempVal < bottom && node.property.showLimit) {
              const showColor = node.property.bottomLimit.showBkColor
                ? node.property.bottomLimit.bkColor
                : node.property.normal.bkColor;
              // 小于下限
              setCardStyle(
                node,
                node.property.bottomLimit.fontFamily,
                node.property.bottomLimit.color,
                parseInt(node.property.bottomLimit.fontSize),
                showColor
              );
            } else if (!isNaN(top)&&tempVal > top && node.property.showLimit) {
              const showColor = node.property.bottomLimit.showBkColor
                ? node.property.topLimit.bkColor
                : node.property.normal.bkColor;
              // 高于上限
              setCardStyle(
                node,
                node.property.topLimit.fontFamily,
                node.property.topLimit.color,
                parseInt(node.property.topLimit.fontSize),
                showColor
              );
            } else {
              setCardStyle(
                node,
                node.property.normal.fontFamily,
                node.property.normal.color,
                parseInt(node.property.normal.fontSize),
                node.property.normal.bkColor
              );
            }
            // canvas.updateProps(false);
          }
        } else if (node.name === 'biciPilot') {
          if ( node.property.dataPointParam.qtDataList[0].dataCode == r.id ) {
            let flag = false;
            node.property.val = r.value;
            if(r.value==undefined){
              node.property.val=0;
            }
            if (node.property.lightRange) {
              for (const item of node.property.lightRange) {
                if (node.property.stateType === 'single') {
                  if (item.lightRangeVal == r.value) {
                    node.strokeStyle =
                      item?.lightRangeColor || node.strokeStyle;
                    if (node.property.showText) {
                      node.text = item?.lightRangeText || node.property.text;
                    }
                    flag = true;
                    break;
                  }
                } else {

                  if ((item.lightRangeBottom <= r.value && item.lightRangeTop > r.value)||
                      (!item.lightRangeBottom&&item.lightRangeTop > r.value)||
                      (!item.lightRangeTop&&item.lightRangeBottom <= r.value)
                  ) {
                    node.strokeStyle =
                      item?.lightRangeColor || node.strokeStyle;
                    if (node.property.showText) {
                      node.text = item?.lightRangeText || node.property.text;
                    }
                    flag = true;
                    break;
                  }
                }
              }
              if (!flag) {
                node.strokeStyle = node.property.color;
                if (node.property.showText) {
                  node.text = node.property.text;
                }
              }
            }
            // canvas.updateProps(false);
          }
        }else if(node.name=='rectangle'){
          if(r.value){
            node.text=r.value+"℃"
          }else{
            node.text="暂无数据"
          }
          // canvas.updateProps(false);
        }else if(node.name=='dataTable'){
            const n = node.property.dataDot;
            const rows = (node.property.dataPointSelectedRows||[]).map(row=>{
              if(row.dataCode==r.id){
                return {
                  ...row,
                  value:getFixed(r.value, n)
                }
              }else{
                return row;
              }
            });
            node.property.dataPointSelectedRows=rows;
            // canvas.updateProps(false);
        }
      }
    });
  };

  const updateChartNode = (node) => {
    // 更新图表数据
    if(echartsObjs[node.id]){
      node.elementRendered = false;
      echartsObjs[node.id].chart.setOption(
        JSON.parse(JSON.stringify(node.data.echarts.option, replacer), reviver),
          true
      );
      echartsObjs[node.id].chart.resize();
      node.elementRendered = true;
    }else{
      node.elementLoaded=false;
    }
  };
  /**
   * 自动适应窗口大小
   */

  const onHandleFit = () => {
    const rect = canvas.getRect();
    rect.calcCenter();
    x = document.body.clientWidth / 2 - rect.center.x;
    y = (document.body.clientHeight - 66) / 2 - rect.center.y;
    canvas.translate(x, y);
    initWebsocketData();
  };

  /**
   * 实际大小
   */

  const onHandlePre = () => {
    canvas.translate(-x, -y);
    x = 0;
    y = 0;
    initWebsocketData();
  };

  const onDrawerClose=()=>{
    setDrawerVisible(false);
  }

  return (
    <ConfigProvider prefixCls="antdv4">
      <div
        id="topology-canvas-preview"
        className={styles.topology_canvas_preview}
        style={{
          margin:"auto auto",
          height: isApp?'100%':data?.height,
          width: isApp?'100%':data?.width,
          overflow: "hidden!important",
          backgroundColor:data?.bkColor,
          // backgroundImage: `url(${data?.bkImage})`,
        }}
      >
      </div>
    </ConfigProvider>
  );
};




// @ts-ignore
export default Preview;
