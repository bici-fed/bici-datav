var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { useEffect, useState } from 'react';
import { ConfigProvider } from 'antd';
import { Lock, Topology } from '@bici-topology/core';
import { isNumber, getFixed } from '../utils/cacl';
import { formatTimer } from '../utils/Property2NodeProps';
import * as _ from 'lodash';
import { echartsObjs, register as registerChart, } from '@bici-topology/chart-diagram';
import { register as reactNodesData } from '../common/RegCustomUIComp';
import { replacer, reviver } from '../utils/serializing';
import { register as registerBiciComp } from '@bici-topology/bici-diagram';
import moment from "moment";
import 'antd/dist/antd.less';
import styles from './index.module.less';
import { getTimeLineOption } from "../config/charts/timeline";
import { defaultTimelineShowData } from "../data/defines";
import { handleRequestError, maxContentLength, timeout, withCredentials } from "../data/api";
import axios from "axios";
import { getBarOption } from "../config/charts/bar";
import { getGroupBarOption } from "../config/charts/groupbar";
import { getStackBarOption } from "../config/charts/stackbar";
import { getHorizontalBarOption } from "../config/charts/horizontalbar";
import { getPieOptionByChangeProp } from "../config/charts/pie";
export var canvas;
var x, y;
var PreviewProps = /** @class */ (function () {
    function PreviewProps() {
    }
    return PreviewProps;
}());
export { PreviewProps };
// echartsObjs[node.id].chart
var Preview = function (_a) {
    var data = _a.data, websocketConf = _a.websocketConf, isApp = _a.isApp;
    var websocketData = null;
    var websocket_data_list = [];
    var userInterval = [];
    var interfaceToken = '';
    var socketNodeMap = {};
    var socketDataMap = {};
    var canvasOptions = {
        rotateCursor: '/rotate.cur',
        locked: Lock.NoMove,
        disableTranslate: !isApp,
        isApp: isApp,
        width: data === null || data === void 0 ? void 0 : data.width,
        height: data === null || data === void 0 ? void 0 : data.height,
        on: function (event, data) { },
    };
    var _b = useState(false), drawerVisible = _b[0], setDrawerVisible = _b[1];
    var _c = useState(), deviceType = _c[0], setDeviceType = _c[1];
    var _d = useState(), reqData = _d[0], setReqData = _d[1];
    var _e = useState(), currentNode = _e[0], setCurrentNode = _e[1];
    var renderCanvasInterval;
    window.οnfοcus = function (window) {
        renderCanvasInterval = setInterval(function () {
            canvas.updateProps(false);
        }, 1000);
    };
    window.onblur = function () {
        clearInterval(renderCanvasInterval);
    };
    useEffect(function () {
        canvasRegister();
        canvas = new Topology('topology-canvas-preview', canvasOptions);
        // 渲染页面数据
        if (data != undefined && typeof data == 'object') {
            data.locked = 2;
            canvas.open(data);
            canvas.resize({ width: data === null || data === void 0 ? void 0 : data.width, height: data === null || data === void 0 ? void 0 : data.height });
        }
        initWebsocketData();
        if (data) {
            canvas.data.pens
                .filter(function (pen) { return pen.name === 'combine'; })
                .forEach(function (pen) { return canvas.uncombine(pen); });
            initRestfullData(canvas.data.pens);
        }
        canvas._emitter.on("lfOpenDrawer", initEmmitevent);
        renderCanvasInterval = setInterval(function () {
            canvas.updateProps(false);
        }, 1000);
        return function () {
            canvas.closeSocket();
            canvas.destroy();
            userInterval.forEach(function (item) {
                clearInterval(item);
            });
            // clearInterval(renderCanvasInterval);
        };
    }, [data]);
    // useEffect(()=>{
    //   canvas._emitter.on("lfOpenDrawer",initEmmitevent)
    // },[currentNode])
    var initEmmitevent = function (data) {
        setDeviceType(data.node.id);
        setReqData(JSON.stringify(data.reqData || {}));
        setDrawerVisible(true);
        setCurrentNode(data);
    };
    var onMessage = function (event, data) {
        if (event == 'node') {
            if (!data.property)
                return;
            if (data.property.echartsType == 'statusBtn') {
                setDeviceType(data.id);
                setReqData(data.property.reqData);
                setDrawerVisible(true);
                setCurrentNode(data);
            }
            else if (data.property.type == 'openUrl') {
                var getUrl = function () {
                    var p = window.location.protocol;
                    var url = window.location.host;
                    return "".concat(p, "//").concat(url);
                };
                var host = getUrl();
                var uri = "".concat(host).concat(data.property.url);
                top.window.open(uri);
            }
        }
    };
    canvasOptions.on = onMessage;
    /**
     * 注册图形库
     */
    var canvasRegister = function () {
        registerChart();
        registerBiciComp();
        reactNodesData();
    };
    // 数据卡片颜色根据数据变化
    var setCardStyle = function (node, fontFamily, color, size, bkColor) {
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
    var stopCompData = function (pens, intval) {
        (pens || []).map(function (node) {
            var _a, _b, _c;
            // 循环遍历
            if (node.name == "combine") {
                stopCompData(node.children, intval);
            }
            else if (((_c = (_b = (_a = node.property) === null || _a === void 0 ? void 0 : _a.dataPointParam) === null || _b === void 0 ? void 0 : _b.qtDataList) === null || _c === void 0 ? void 0 : _c.length) > 0) {
                if (node.name == 'echarts') { // echart图表组件
                    if (websocketData && intval % 2 == 0) {
                        var theChart = node.property.echartsType;
                        switch (theChart) {
                            case "timeLine":
                                var dataRows = node.property.dataPointSelectedRows;
                                break;
                            case 'gauge':
                                break;
                            default:
                                break;
                        }
                    }
                }
                else {
                    var dataRow_1 = node.property.dataPointSelectedRows[0];
                    if (dataRow_1 && intval % 2 == 0) { // 每2秒检测一次
                        var nodeType = node.name;
                        var hasData = _.findIndex(websocket_data_list, function (item) {
                            if (item) {
                                return item.id == dataRow_1.id;
                            }
                            else {
                                return false;
                            }
                        });
                        switch (nodeType) {
                            case "biciVarer":
                                if (hasData < 0) { // 没有数据
                                    node.text = "0";
                                    // canvas.updateProps(false,[node])
                                }
                                break;
                            case "biciMeasure":
                                if (hasData < 0) {
                                    node.property.value = node.property.dataMin;
                                    // canvas.updateProps(false,[node]);
                                }
                                break;
                            case "biciCard":
                                if (hasData < 0) {
                                    node.children[0].text = '0.00';
                                    // canvas.updateProps(false, [node]);
                                }
                                break;
                            case "biciPilot":
                                if (hasData < 0) {
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
    };
    /**
     * 初始话数据接口更新数据
     */
    var initRestfullData = function (pens) {
        if (pens.length > 0) {
            // 有数据，去遍历所有数据为接口类型的组件
            pens.forEach(function (node) { return __awaiter(void 0, void 0, void 0, function () {
                var interval;
                return __generator(this, function (_a) {
                    // 如果是图表组件，下面就需要判断具体的是那种图表组件
                    if (node.name == 'combine') {
                        initRestfullData(node.children);
                    }
                    else if (node.property) {
                        if (node.property.dataMethod == "restful") {
                            // 第一次请求数据
                            loginAndFetchData(node);
                            // 对于有轮训需求的数据设置轮训
                            if (node.property.pullRate) {
                                interval = setInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        loginAndFetchData(node);
                                        return [2 /*return*/];
                                    });
                                }); }, node.property.pullRate * (node.property.pullRateUnit || 1) * 1000);
                                userInterval.push(interval);
                            }
                        }
                    }
                    return [2 /*return*/];
                });
            }); });
        }
    };
    /**
     * 登陆并获取数据
     * @param node
     */
    var loginAndFetchData = function (node) {
        requestData(node).then(function (data) {
            mapRestDataToChart(node, data);
        });
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
    };
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
    var mapRestDataToChart = function (node, res) {
        if (res.front_error) { // 请求出错，不做处理
            return;
        }
        var resTmp = null;
        if (typeof res == 'string') { // 如果请求结果是字符串，尝试解析成对象
            resTmp = JSON.parse(res);
        }
        else {
            resTmp = res;
        }
        if (resTmp) {
            if (resTmp.hasOwnProperty("text") ||
                resTmp.hasOwnProperty("value") ||
                resTmp.hasOwnProperty("unit")) { // 说明是统计组件的数据
                var nodeType = node.name;
                switch (nodeType) {
                    case "biciText":
                        node.children[0].text = resTmp["value"] + resTmp["unit"];
                        node.children[1].text = resTmp["text"];
                        // canvas.updateProps(false,[node])
                        break;
                    case "biciCard2":
                        node.children[0].text = resTmp["text"];
                        node.children[1].text = resTmp["unit"];
                        node.children[2].text = resTmp["value"];
                        // canvas.updateProps(false,[node])
                        break;
                }
            }
            else if (resTmp.hasOwnProperty("dimensions") && resTmp.hasOwnProperty("source")) { // 是图表组件的数据
                var nodeType = node.property.echartsType;
                switch (nodeType) {
                    case 'groupBar':
                        node.data.echarts.option = getGroupBarOption(node, res);
                        break;
                    case 'verticalBar':
                        node.data.echarts.option = getBarOption(node, res);
                        break;
                    case 'stackBar':
                        node.data.echarts.option = getStackBarOption(node, res);
                        break;
                    case 'horizontalBar':
                        node.data.echarts.option = getHorizontalBarOption(node, res);
                        break;
                    case 'circleAndPie':
                        node.data.echarts.option = getPieOptionByChangeProp(node, res);
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
                        canvas.dispatch("requestDataSuccess" + node.id, res);
                        break;
                }
                updateChartNode(node);
            }
        }
        else {
        }
    };
    /**
     * 请求接口数据
     * @param node
     */
    var requestData = function (node) {
        return new Promise(function (resolve, reject) {
            var myURL = new URL(node.property.dataSourceUrl || node.property.dataUrl);
            var ajax = axios.create({ baseURL: "".concat(myURL.origin, "/"), timeout: timeout, maxContentLength: maxContentLength, withCredentials: withCredentials });
            // const ajax = axios.create({baseURL: `http://qt.test.bicisims.com`, timeout, maxContentLength,withCredentials})
            ajax.request({
                url: myURL.pathname,
                method: 'get',
                headers: {
                    // token: '2sdIEuFCYR768oVd4fvUyj'||interfaceToken,
                    'Content-Type': 'application/json',
                },
            }).then(function (res) {
                if (res && res.data.code == 1000) {
                    resolve(res.data.data);
                }
                else {
                    resolve({ front_error: 2 });
                }
            }).catch(function (error) {
                handleRequestError(error);
                resolve({ front_error: 1 });
            });
        });
    };
    var initWebsocketData = function () {
        canvas.closeSocket();
        if (websocketConf !== undefined) {
            canvas.openSocket("".concat(websocketConf.url));
        }
        if (canvas != undefined && canvas.socket != undefined) {
            canvas.socket.socket.onopen = function () {
                if (canvas.data && canvas.data.pens.length > 0) {
                    // 有数据，去遍历有websocket的组件，并订阅
                    if (canvas.socket != undefined) {
                        sendMessage(canvas.data.pens);
                    }
                }
            };
            canvas.socket.socket.onmessage = function (data) {
                canvas.dispatch("socketDataSuccess", data);
                var nodes = [];
                websocketData = JSON.parse(data.data);
                websocket_data_list.push(websocketData);
                if (canvas.data && canvas.data.pens.length > 0) {
                    // 有数据，去遍历有websocket的组件，并订阅
                    if (canvas.socket != undefined) {
                        var r = JSON.parse(data.data);
                        for (var k in socketNodeMap) {
                            var kv = k.split('__');
                            if (kv[1] == r.id) {
                                nodes.push(socketNodeMap[k]);
                            }
                        }
                        updateComp(canvas.data.pens, data);
                    }
                }
            };
            canvas.socket.socket.onclose = function (e) {
            };
        }
        //canvas.data.pens
        updateTimerCom(canvas.data.pens);
    };
    var sendMessage = function (pens) {
        (pens || []).map(function (node) {
            var _a, _b, _c;
            // 循环遍历
            if (node.name == "combine") {
                sendMessage(node.children);
            }
            else if (((_c = (_b = (_a = node.property) === null || _a === void 0 ? void 0 : _a.dataPointParam) === null || _b === void 0 ? void 0 : _b.qtDataList) === null || _c === void 0 ? void 0 : _c.length) > 0) {
                var socketId = node.property.dataPointParam.qtDataList[0].id;
                var k = node.id + '__' + socketId;
                socketNodeMap[k] = node;
                socketDataMap[socketId] = '';
                var dcList = node.property.dataPointParam.qtDataList.map(function (item) {
                    return {
                        dc: item.dataCode,
                        intervalTime: item.intervalTime,
                        count: 0,
                        ext: 'number',
                    };
                });
                canvas.socket.socket.send(JSON.stringify({
                    dcList: dcList,
                    subscribe: true,
                    companyId: '',
                    nodeTid: node.TID,
                    nodeId: node.id,
                }));
            }
        });
    };
    var updateTimerCom = function (pens) {
        (pens || []).map(function (node) {
            if (node.name == 'biciTimer') {
                setInterval(function () {
                    formatTimer(node, canvas);
                }, 1000);
            }
            else if (node.name == 'combine') {
                updateTimerCom(node.children);
            }
        });
    };
    var timedata = [];
    for (var i = 0; i < 10; i++) {
        timedata.push({
            name: moment().subtract(1, "seconds"),
            value: [moment().subtract(1, "seconds"), null]
        });
    }
    var updateComp = function (pens, data) {
        var theChart;
        // {"dc":"Data2022042017504628","ts":1650783704941,"v":2582,"vt":1}
        var v = JSON.parse(data.data);
        var r = {
            id: v.dc,
            value: v.v,
            time: v.ts,
            type: v.vt,
        };
        (pens || []).map(function (node) {
            var _a, _b, _c, _d, _e, _f;
            if (node.name == 'combine') {
                updateComp(node.children, data);
            }
            else if (node.name == 'echarts') {
                // 如果是图表组件，下面就需要判断具体的是那种图表组件
                theChart = node.property.echartsType;
                switch (theChart) {
                    case 'gauge':
                        if (((_a = node.property.dataPointSelectedRows[0]) === null || _a === void 0 ? void 0 : _a.dataCode) == r.id) {
                            var cd = {
                                value: undefined,
                                name: node.property.chartTitle,
                            };
                            cd.value = getFixed(r.value, node.property.dataDot);
                            if (r.value == undefined) {
                                cd.value = node.property.dataMin;
                            }
                            if (cd.value) {
                                node.data.echarts.option.series[0].data[0] = cd;
                                updateChartNode(node);
                            }
                        }
                        break;
                    case 'timeLine':
                        var selectedRows = node.property.dataPointSelectedRows;
                        var timesxAix_1 = node.data.echarts.option.dataset.source[0];
                        (selectedRows || []).map(function (row, index) {
                            if (row.dataCode == r.id) {
                                if (index == 0) {
                                    timesxAix_1.push(moment(parseInt(r.time / 1000 + "") * 1000).format("LTS"));
                                    if (timesxAix_1.length > defaultTimelineShowData) {
                                        timesxAix_1.splice(1, 1);
                                    }
                                    node.data.echarts.option = getTimeLineOption(node, null, r, timesxAix_1, true);
                                }
                                else {
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
                        var n_1 = node.property.dataDot;
                        var rows = (node.property.dataPointSelectedRows || []).map(function (row) {
                            if (row.dataCode == r.id) {
                                return __assign(__assign({}, row), { value: getFixed(r.value, n_1) });
                            }
                            else {
                                return row;
                            }
                        });
                        node.property.dataPointSelectedRows = rows;
                        if (theChart == 'circleAndPie') {
                            node.data.echarts.option = getPieOptionByChangeProp(node, null);
                        }
                        else if (theChart == 'verticalBar') {
                            node.data.echarts.option = getBarOption(node, null);
                        }
                        else if (theChart == 'horizontalBar') {
                            node.data.echarts.option = getHorizontalBarOption(node, null);
                        }
                        updateChartNode(node);
                        break;
                    default:
                }
                //
            }
            else if (((_d = (_c = (_b = node.property) === null || _b === void 0 ? void 0 : _b.dataPointParam) === null || _c === void 0 ? void 0 : _c.qtDataList) === null || _d === void 0 ? void 0 : _d.length) > 0) {
                // 非图表组件
                if (node.name == 'biciVarer') {
                    var tt = node.property.dataPointParam.qtDataList[0].dataCode == r.id;
                    if (tt) {
                        if (r.value === undefined) {
                            node.text = "";
                            // canvas.updateProps(false,[node])
                            return;
                        }
                        if (isNumber(r.value)) {
                            // 数值型
                            var n = node.property.dataDot;
                            if (r.value < 0.0000000000000000001) {
                                node.text = r.value + '';
                            }
                            else {
                                node.text = getFixed(r.value, n);
                            }
                        }
                        else {
                            node.text = r.value + '';
                        }
                        if (r.value === true || r.value === 'true') {
                            node.text = node.property.dataPointSelectedRows[0].trueDisplay || r.value;
                        }
                        if (r.value === false || r.value === 'false') {
                            node.text = node.property.dataPointSelectedRows[0].falseDisplay || r.value;
                        }
                        // 保存最新值
                        socketDataMap[r.id] = r.value;
                        // canvas.updateProps( false,[node]);
                    }
                }
                else if (node.name === 'biciMeasure') {
                    console.log('计量器.....', (_e = node.property.dataPointSelectedRows[0]) === null || _e === void 0 ? void 0 : _e.dataCode, r.id);
                    if (((_f = node.property.dataPointSelectedRows[0]) === null || _f === void 0 ? void 0 : _f.dataCode) == r.id) {
                        node.property.value = r.value;
                        if (r.value == undefined) {
                            node.property.value = node.property.dataMin;
                        }
                        // canvas.updateProps(false);
                    }
                }
                else if (node.name === 'biciCard') {
                    if (node.property.dataPointParam.qtDataList[0].dataCode == r.id) {
                        var n = node.property.dataDot;
                        var val = getFixed(r.value, n);
                        if (r.value == undefined) {
                            val = "0.00";
                        }
                        node.children[0].text = val;
                        var bottom = node.property.limit.bottom;
                        var top_1 = node.property.limit.top;
                        var tempVal = parseFloat(val);
                        if (!isNaN(bottom) && tempVal < bottom && node.property.showLimit) {
                            var showColor = node.property.bottomLimit.showBkColor
                                ? node.property.bottomLimit.bkColor
                                : node.property.normal.bkColor;
                            // 小于下限
                            setCardStyle(node, node.property.bottomLimit.fontFamily, node.property.bottomLimit.color, parseInt(node.property.bottomLimit.fontSize), showColor);
                        }
                        else if (!isNaN(top_1) && tempVal > top_1 && node.property.showLimit) {
                            var showColor = node.property.bottomLimit.showBkColor
                                ? node.property.topLimit.bkColor
                                : node.property.normal.bkColor;
                            // 高于上限
                            setCardStyle(node, node.property.topLimit.fontFamily, node.property.topLimit.color, parseInt(node.property.topLimit.fontSize), showColor);
                        }
                        else {
                            setCardStyle(node, node.property.normal.fontFamily, node.property.normal.color, parseInt(node.property.normal.fontSize), node.property.normal.bkColor);
                        }
                        // canvas.updateProps(false);
                    }
                }
                else if (node.name === 'biciPilot') {
                    if (node.property.dataPointParam.qtDataList[0].dataCode == r.id) {
                        var flag = false;
                        node.property.val = r.value;
                        if (r.value == undefined) {
                            node.property.val = 0;
                        }
                        if (node.property.lightRange) {
                            for (var _i = 0, _g = node.property.lightRange; _i < _g.length; _i++) {
                                var item = _g[_i];
                                if (node.property.stateType === 'single') {
                                    if (item.lightRangeVal == r.value) {
                                        node.strokeStyle =
                                            (item === null || item === void 0 ? void 0 : item.lightRangeColor) || node.strokeStyle;
                                        if (node.property.showText) {
                                            node.text = (item === null || item === void 0 ? void 0 : item.lightRangeText) || node.property.text;
                                        }
                                        flag = true;
                                        break;
                                    }
                                }
                                else {
                                    if ((item.lightRangeBottom <= r.value && item.lightRangeTop > r.value) ||
                                        (!item.lightRangeBottom && item.lightRangeTop > r.value) ||
                                        (!item.lightRangeTop && item.lightRangeBottom <= r.value)) {
                                        node.strokeStyle =
                                            (item === null || item === void 0 ? void 0 : item.lightRangeColor) || node.strokeStyle;
                                        if (node.property.showText) {
                                            node.text = (item === null || item === void 0 ? void 0 : item.lightRangeText) || node.property.text;
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
                }
                else if (node.name == 'rectangle') {
                    if (r.value) {
                        node.text = r.value + "℃";
                    }
                    else {
                        node.text = "暂无数据";
                    }
                    // canvas.updateProps(false);
                }
                else if (node.name == 'dataTable') {
                    var n_2 = node.property.dataDot;
                    var rows = (node.property.dataPointSelectedRows || []).map(function (row) {
                        if (row.dataCode == r.id) {
                            return __assign(__assign({}, row), { value: getFixed(r.value, n_2) });
                        }
                        else {
                            return row;
                        }
                    });
                    node.property.dataPointSelectedRows = rows;
                    // canvas.updateProps(false);
                }
            }
        });
    };
    var updateChartNode = function (node) {
        // 更新图表数据
        if (echartsObjs[node.id]) {
            node.elementRendered = false;
            echartsObjs[node.id].chart.setOption(JSON.parse(JSON.stringify(node.data.echarts.option, replacer), reviver), true);
            echartsObjs[node.id].chart.resize();
            node.elementRendered = true;
        }
        else {
            node.elementLoaded = false;
        }
    };
    /**
     * 自动适应窗口大小
     */
    var onHandleFit = function () {
        var rect = canvas.getRect();
        rect.calcCenter();
        x = document.body.clientWidth / 2 - rect.center.x;
        y = (document.body.clientHeight - 66) / 2 - rect.center.y;
        canvas.translate(x, y);
        initWebsocketData();
    };
    /**
     * 实际大小
     */
    var onHandlePre = function () {
        canvas.translate(-x, -y);
        x = 0;
        y = 0;
        initWebsocketData();
    };
    var onDrawerClose = function () {
        setDrawerVisible(false);
    };
    return (<ConfigProvider prefixCls="antdv4">
      <div id="topology-canvas-preview" className={styles.topology_canvas_preview} style={{
            margin: "auto auto",
            height: isApp ? '100%' : data === null || data === void 0 ? void 0 : data.height,
            width: isApp ? '100%' : data === null || data === void 0 ? void 0 : data.width,
            overflow: "hidden!important",
            backgroundColor: data === null || data === void 0 ? void 0 : data.bkColor,
            // backgroundImage: `url(${data?.bkImage})`,
        }}>
      </div>
    </ConfigProvider>);
};
// @ts-ignore
export default Preview;
//# sourceMappingURL=index.js.map