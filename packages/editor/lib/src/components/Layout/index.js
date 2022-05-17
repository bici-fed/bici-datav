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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState, } from "react";
import { Lock, s8, Topology } from "@bici-topology/core";
import { echartsObjs, register as registerChart } from "@bici-topology/chart-diagram";
import { register as registerBiciComp } from "@bici-topology/bici-diagram";
import { Tabs, Tooltip, ConfigProvider } from "antd";
import { Tools } from "../config/config";
import { useClickAway } from "ahooks";
import { replacer, reviver } from "../utils/serializing";
import Header from "../Header";
import NodeComponent from "./component/nodeComponent";
import BackgroundComponent from "./component/backgroundComponent";
import LineComponent from "./component/lineComponent";
import SystemComponent from "./LeftAreaComponent/SystemComponent";
import CustomComponent from "./LeftAreaComponent/CustomComponent";
import PicComponent from "./LeftAreaComponent/PicComponent";
import styles from "./index.module.less";
import CanvasContextMenu from "../canvasContextMenu";
import { calcCanvas, eraseOverlapIntervals } from "../utils/cacl";
import * as _ from "lodash";
import moment from "moment";
import { getGaugeOption } from "../config/charts/gauge";
import { getTimeLineOption } from "../config/charts/timeline";
import { register as registerReactNode } from '../common/RegCustomUIComp';
import { getPieOptionByChangeProp } from "../config/charts/pie";
import { getStackBarOption } from "../config/charts/stackbar";
import { getBarOption } from "../config/charts/bar";
import { getGroupBarOption } from "../config/charts/groupbar";
import { getHorizontalBarOption } from "../config/charts/horizontalbar";
var TabPane = Tabs.TabPane;
export var canvas;
/**
 * 编辑器画布
 * @param history
 * @constructor
 */
export var EditorLayout = React.forwardRef(function (props, ref) {
    var _a, _b, _c;
    var history = props.history;
    var layoutRef = useRef();
    var contextMenuRef = useRef();
    var headerRef = useRef();
    var _d = useState(true), isSave = _d[0], setIsSave = _d[1];
    var _e = useState(1), scaleVal = _e[0], setScaleVal = _e[1];
    var _f = useState(""), bkImageUrl = _f[0], setBkImageUrl = _f[1];
    var nodeRef = useRef();
    var _g = useState({
        minWidth: 3199,
        minHeight: 2289,
        left: 1168,
        top: 560,
        width: ((_a = props === null || props === void 0 ? void 0 : props.editorData) === null || _a === void 0 ? void 0 : _a.width) || 826,
        height: ((_b = props === null || props === void 0 ? void 0 : props.editorData) === null || _b === void 0 ? void 0 : _b.height) || 1168,
    }), canvasSizeInfo = _g[0], setCanvasSizeInfo = _g[1];
    var _h = useState({
        node: null,
        line: null,
        multi: false,
        nodes: null,
        // locked: Lock.None
    }), selected = _h[0], setSelected = _h[1];
    // 是否显示右键菜单
    var _j = useState(false), showContextmenu = _j[0], setShowContextmenu = _j[1];
    var _k = useState({
        position: "fixed",
        zIndex: "10",
        display: "none",
        left: "",
        top: "",
        bottom: "",
    }), contextmenu = _k[0], setContextmenu = _k[1];
    var _l = useState(false), isLoadCanvas = _l[0], setIsLoadCanvas = _l[1];
    var _m = useState(false), showHeader = _m[0], setShowHeader = _m[1];
    var svgRef = useRef();
    var canvasRef = useRef();
    var customCompRef = useRef();
    var canvasOptions = {
        rotateCursor: "/rotate.cur",
        autoExpandDistance: 0,
        viewPadding: [0],
        autoAnchor: false,
        cacheLen: 50,
        hideInput: false,
        disableEmptyLine: false,
        disableScale: false,
        minScale: 0.3,
        maxScale: 3.1,
        // color: "#096DD9",
        // hoverColor: "#096DD9",
        // activeColor:'#999999',
        rule: false,
        locked: Lock.None,
        disableTranslate: false,
        isApp: false,
    };
    useClickAway(function () {
        setShowContextmenu(false);
    }, contextMenuRef);
    // 对父组件暴露保存数据的接口
    useImperativeHandle(ref, function () { return ({
        getIsSave: function () {
            return isSave;
        },
        handleSaveData: function () {
            if (headerRef !== undefined) {
                headerRef.current.save();
            }
        },
        handleDataPointBind: function (selectedRowKeys, selectedRows) {
            // @ts-ignore
            nodeRef === null || nodeRef === void 0 ? void 0 : nodeRef.current.onDataPointBind(selectedRowKeys, selectedRows);
        },
        handleVedioBind: function (selectedRowKeys, selectedRows) {
            // @ts-ignore
            nodeRef === null || nodeRef === void 0 ? void 0 : nodeRef.current.onVedioBind(selectedRowKeys, selectedRows);
        }
    }); }, [isSave]);
    useEffect(function () {
        window["__CONKPIT_API_URL"] = props.apiURL;
        window["__CONKPIT_TOKEN"] = props.token;
        canvasOptions.on = onMessage;
        canvasRegister();
        canvas = new Topology("topology-canvas", canvasOptions);
        if (props.editorData != undefined && typeof props.editorData == "object") {
            canvas.open(props.editorData);
        }
        if (props.editorData) {
            var w = props.editorData.width;
            var h = props.editorData.height;
            var r = calcCanvas(w, h);
            setCanvasSizeInfo(__assign(__assign({}, r), { width: w, height: h }));
            canvas.data["gridColor"] = props.editorData.gridColor;
            if (canvas.data.grid) {
                canvas.data.grid = true;
            }
            setIsLoadCanvas(true);
            canvas.scaleContainer(props.editorData.scale);
            canvas.resize({ width: w, height: h });
            canvas.render();
        }
        else {
            setIsLoadCanvas(false);
            canvas.render();
        }
        setShowHeader(true);
    }, [props.editorData]);
    useEffect(function () {
        handleScaleCanvas(scaleVal);
    }, [canvasSizeInfo]);
    /**
     * 滚动条居中
     */
    var scrollCenter = function () {
        var fullDiv = document.querySelector("#full");
        fullDiv.scrollTo((fullDiv.scrollWidth - fullDiv.offsetWidth) / 2, (fullDiv.scrollHeight - fullDiv.offsetHeight) / 2);
    };
    /**
     * 注册图形库
     */
    var canvasRegister = function () {
        registerChart();
        registerBiciComp();
        registerReactNode();
    };
    var onDrag = function (event, node, custom) {
        if (custom === void 0) { custom = false; }
        if ((node.data.name == "liveVideo" && props.websocketConf.video) || (node.data.name == "QTLiveVideo" && props.websocketConf.video)) {
            node.data.property.video = __assign(__assign({}, node.data.property.video), { updateStream: props.websocketConf.video.updateStream, rePushStream: props.websocketConf.video.rePushStream, pushStream: props.websocketConf.video.pushStream });
        }
        if (custom) {
            var data = node;
            // 解决拖动新建组件添加到页面会删除相同组件的bug
            data.id = s8(); // Topology
            event.dataTransfer.setData("text", JSON.stringify(data, replacer));
        }
        else {
            event.dataTransfer.setData("text", JSON.stringify(node.data, replacer));
        }
    };
    var handleGaugeOption = function (values) {
        for (var k in values) {
            var kindex = k.split("-");
            var index = parseInt(kindex[1]);
            if (k.indexOf("-") > 0) {
                selected.node.property.dataColors[index][kindex[0]] = values[k];
            }
        }
        selected.node.property.dataMax = values.dataMax;
        selected.node.property.dataMin = values.dataMin;
        var lineColors = [];
        (selected.node.property.dataColors || []).map(function (item) {
            if (item.checked) {
                var lineColor = [];
                if ((item.top - selected.node.property.dataMin) >= 0) {
                    lineColor[0] = Math.abs((item.top - selected.node.property.dataMin) /
                        (selected.node.property.dataMax - selected.node.property.dataMin));
                    lineColor[1] = item.color;
                    lineColors.push(lineColor);
                }
            }
        });
        if (lineColors.length == 0) {
            lineColors = undefined;
        }
        selected.node.data.echarts.option = getGaugeOption({
            max: selected.node.property.dataMax,
            min: selected.node.property.dataMin,
            lineColors: lineColors,
            chartTitle: selected.node.property.chartTitle,
            chartTitleChecked: selected.node.property.chartTitleChecked,
            chartUnitChecked: selected.node.property.chartUnitChecked,
            chartUnit: selected.node.property.chartUnit,
            chartTitleColor: selected.node.property.chartTitleColor,
            markChecked: selected.node.property.markChecked,
            marks: selected.node.property.marks,
        }, values);
    };
    var handleTimeLineOption = function (values) {
        var changedProps = values;
        for (var key in changedProps) {
            if (typeof changedProps[key] === "object") {
                selected.node.property[key] = changedProps[key];
            }
            else {
                if (changedProps[key] !== undefined) {
                    selected.node[key] = changedProps[key];
                }
            }
        }
        selected.node.data.echarts.option = getTimeLineOption(selected.node, values, undefined);
        // 更新图表数据
        echartsObjs[selected.node.id].chart.setOption(JSON.parse(JSON.stringify(selected.node.data.echarts.option), reviver));
        echartsObjs[selected.node.id].chart.resize();
        selected.node.elementRendered = false;
        canvas.updateProps(true, [selected.node]);
    };
    // 计量器
    var handleChartMeasureOption = function (values) {
        for (var k in values) {
            if (k.indexOf("-") > 0) {
                var kindex = k.split("-");
                var index = parseInt(kindex[1]);
                selected.node.property.dataColors[index][kindex[0]] = values[k];
            }
        }
        selected.node.property.dataMax = values.dataMax;
        selected.node.property.dataMin = values.dataMin;
        var lineColors = [];
        (selected.node.property.dataColors || []).map(function (item) {
            if (item.checked) {
                var lineColor = [];
                lineColor[0] = Math.abs(item.top / selected.node.property.dataMax);
                lineColor[1] = item.color;
                lineColors.push(lineColor);
            }
        });
        if (lineColors.length == 0) {
            lineColors = undefined;
        }
    };
    /**
     * 数据卡片自定义数据逻辑处理
     */
    var handleBiciCard = function (value) {
        var cardTitle = value.cardTitle, showTitle = value.showTitle, showLimit = value.showLimit;
        if (showTitle !== undefined) {
            selected.node.text = showTitle ? cardTitle : "";
        }
        if (showLimit !== undefined) {
            selected.node.children[1].text = showLimit
                ? "\u4E0B\u9650: ".concat(!isNaN(parseInt(value["limit.bottom"])) ? value["limit.bottom"] : "", "   \u4E0A\u9650: ").concat(!isNaN(parseInt(value["limit.top"])) ? value["limit.top"] : "")
                : "";
        }
        if (value["limit.top"] < value["limit.bottom"]) {
            selected.node.children[1].text = '';
        }
        if ("limit.top" in value) {
            // 下限不能高于上限
            var limitTop = value["limit.top"];
            var limitBottom = value["limit.bottom"];
            if (limitTop && limitBottom && limitTop < limitBottom) {
                selected.node.property.limit.top = undefined;
                selected.node.property.limit.bottom = undefined;
            }
        }
        if ("normal.showBkColor" in value) {
            if (value["normal.showBkColor"]) {
                selected.node.fillStyle = value["normal.bkColor"];
            }
            else {
                selected.node.fillStyle = "";
            }
        }
        if ("normal.fontSize" in value) {
            selected.node.children[0].font.fontSize = value["normal.fontSize"];
        }
        if ("normal.color" in value) {
            selected.node.children[0].font.color = value["normal.color"];
        }
    };
    /**
     * 指示灯自定义数据处理
     */
    var handlePilot = function (value) {
        var color = value.color, text = value.text, showText = value.showText, stateType = value.stateType, lightRange = value.lightRange;
        selected.node.strokeStyle = color;
        selected.node.text = showText ? text : "";
        if (lightRange.length > 0) {
            if (lightRange.includes(undefined)) {
                return;
            }
            if (stateType === "single") {
                var vals = lightRange.map(function (item) { return item === null || item === void 0 ? void 0 : item.lightRangeVal; });
                var tmpSet = new Set(vals);
                if (tmpSet.size !== vals.length) {
                    var tmp_1 = {};
                    var lightRangeTmp = _.cloneDeep(lightRange);
                    lightRangeTmp = lightRangeTmp.reduce(function (item, next) {
                        tmp_1[next.lightRangeVal] ? "" : (tmp_1[next.lightRangeVal] = true && item.push(next));
                        return item;
                    }, []);
                    selected.node.property.lightRange = lightRangeTmp;
                }
            }
            else {
                var vals = lightRange.map(function (item) { return [item === null || item === void 0 ? void 0 : item.lightRangeBottom, item === null || item === void 0 ? void 0 : item.lightRangeTop]; });
                if (!vals.flat().includes(undefined)) {
                    var nums = eraseOverlapIntervals(vals);
                    if (nums.length !== 0) {
                        var lightRangeTmp_1 = _.cloneDeep(lightRange);
                        nums.forEach(function (num) {
                            lightRangeTmp_1.forEach(function (item, index) {
                                if (item.lightRangeBottom === num[0] && item.lightRangeTop === num[1]) {
                                    lightRangeTmp_1.splice(index, 1);
                                }
                            });
                        });
                        selected.node.property.lightRange = lightRangeTmp_1;
                    }
                }
            }
        }
    };
    /**
     * 当表单数据变化时, 重新渲染canvas
     * @params {object} value - 图形的宽度,高度, x, y等等
     */
    var onHandleFormValueChange = useCallback(function (value) {
        setIsSave(false);
        var x = value.x, y = value.y, width = value.width, height = value.height, rotate = value.rotate, color = value.color, fontSize = value.fontSize, fontFamily = value.fontFamily, fillStyle = value.fillStyle, strokeStyle = value.strokeStyle, lineWidth = value.lineWidth, text = value.text, textAlign = value.textAlign;
        var changedProps = {
            rect: {
                x: x ? Number(x) : undefined,
                y: y ? Number(y) : undefined,
                width: width ? Number(width) : undefined,
                height: height ? Number(height) : undefined,
            },
            font: {
                color: color,
                textAlign: textAlign,
                fontSize: isNaN(Number(fontSize)) ? undefined : Number(fontSize),
                fontFamily: fontFamily,
            },
            rotate: isNaN(Number(rotate)) ? undefined : Number(rotate),
            strokeStyle: strokeStyle,
            lineWidth: isNaN(Number(lineWidth)) ? undefined : Number(lineWidth),
            fillStyle: fillStyle,
            text: text,
        };
        for (var key in changedProps) {
            if (typeof changedProps[key] === "object") {
                for (var k in changedProps[key]) {
                    if (changedProps[key][k] !== undefined) {
                        selected.node[key][k] = changedProps[key][k];
                    }
                }
            }
            else {
                if (changedProps[key] !== undefined) {
                    selected.node[key] = changedProps[key];
                }
            }
        }
        canvas.updateProps(true, [selected.node]);
    }, [selected]);
    /*当自定义的属性发生变化时*/
    var onHandlePropertyFormValueChange = useCallback(function (value) {
        setIsSave(false);
        canvas.cache();
        // 只能两层嵌套，后期需要更改，如果有多层的话
        // canvas.setValue(selected.node.id, 'setValue');
        // 通知有数据属性更新,会重新渲染画布
        var name = selected.node.name;
        // if (name === "biciCard") {
        //   selected.node.property.preType = selected.node.property.limitType;
        // }
        for (var key in value) {
            if (key.indexOf(".") > 0) {
                if (key != undefined) {
                    var k = key.split(".");
                    selected.node.property[k[0]][k[1]] = value[key];
                }
            }
            else {
                if (value[key] !== undefined) {
                    selected.node.property[key] = value[key];
                    if (selected.node.name == "QTLiveVideo") {
                        canvas.dispatch("changeVideoUrl", { selNode: selected.node, videoURL: value[key] });
                    }
                }
            }
        }
        switch (name) {
            case "biciCard":
                handleBiciCard(value);
                break;
            case "biciPilot":
                handlePilot(value);
                break;
            case "biciMeasure":
                handleChartMeasureOption(value);
                break;
            case "biciTimer":
                var y = "";
                var h = "";
                var node = selected.node;
                if (value["date.show"]) {
                    y = moment().format(value["date.format"]);
                }
                if (value["time.show"]) {
                    h = moment().format(value["time.format"]);
                }
                node.text = y + " " + h;
                if (node.text == " ") {
                    node.text = moment().format("LLLL");
                }
                canvas.updateProps(false);
                break;
            case "echarts":
                var theChart = selected.node.property.echartsType;
                if (theChart == "gauge") {
                    handleGaugeOption(value);
                }
                else if (theChart === "timeLine") {
                    handleTimeLineOption(value);
                }
                break;
        }
        setIsSave(false);
        // 更新属性变化
        canvas.updateProps(false, [selected.node]);
    }, [selected]);
    var onEventValueChange = useCallback(function (value) {
        setIsSave(false);
        selected.node.events = value;
        canvas.updateProps(true, selected.node);
    }, [selected]);
    /**
     * 切换画布大小
     */
    var handleChangeCanvasSize = useCallback(function (sizeInfo) {
        setIsSave(false);
        canvas.cache();
        setCanvasSizeInfo(sizeInfo);
    }, []);
    /**
     * 切换画布背景图片
     */
    var handleChangeBkImage = useCallback(function (imgUrl) {
        setIsSave(false);
        canvas.cache();
        setBkImageUrl(imgUrl);
    }, []);
    /**
     * 当线条表单数据变化时, 重新渲染canvas
     * @params {object} value - 图形的宽度,高度, x, y等等
     */
    var onHandleLineFormValueChange = useCallback(function (value) {
        var dash = value.dash, lineWidth = value.lineWidth, strokeStyle = value.strokeStyle, name = value.name, fromArrow = value.fromArrow, toArrow = value.toArrow, other = __rest(value, ["dash", "lineWidth", "strokeStyle", "name", "fromArrow", "toArrow"]);
        var changedValues = {
            line: {
                rect: other,
                lineWidth: lineWidth,
                dash: dash,
                strokeStyle: strokeStyle,
                name: name,
                fromArrow: fromArrow,
                toArrow: toArrow,
            },
        };
        if (changedValues.line) {
            // 遍历查找修改的属性，赋值给原始line
            for (var key in changedValues.line) {
                if (Array.isArray(changedValues.line[key])) {
                }
                else if (typeof changedValues.line[key] === "object") {
                    for (var k in changedValues.line[key]) {
                        selected.line[key][k] = changedValues.line[key][k];
                    }
                }
                else {
                    selected.line[key] = changedValues.line[key];
                }
            }
        }
        canvas.updateProps(true, [selected.line]);
        setIsSave(false);
    }, [selected]);
    var handleCustomizedDynamicFormChange = function (group, fields) {
        var g = _.findIndex(selected.node.property.form.style, function (item) { return item.group == group; });
        selected.node.property.form.style[g].formItems = fields;
        (fields || []).forEach(function (field) {
            var fieldName = field.name;
            if (fieldName.length == 1) {
                for (var key in selected.node.property.props) {
                    if (field.name[0] == key) {
                        selected.node.property.props[key] = field.value;
                        break;
                    }
                }
                selected.node.property.props[field.name[0]] = field.value;
            }
        });
        selected.node.elementRendered = false;
        if (selected.node.property.echartsType == 'circleAndPie') {
            selected.node.data.echarts.option = getPieOptionByChangeProp(selected.node, null);
        }
        else if (selected.node.property.echartsType == 'stackBar') {
            selected.node.data.echarts.option = getStackBarOption(selected.node, null);
        }
        else if (selected.node.property.echartsType == 'verticalBar') {
            selected.node.data.echarts.option = getBarOption(selected.node, null);
        }
        else if (selected.node.property.echartsType == 'groupBar') {
            selected.node.data.echarts.option = getGroupBarOption(selected.node, null);
        }
        else if (selected.node.property.echartsType == 'horizontalBar') {
            selected.node.data.echarts.option = getHorizontalBarOption(selected.node, null);
        }
        else if (selected.node.name == 'biciText') {
            var child_1 = selected.node.children[0];
            if (group == '副标题') {
                child_1 = selected.node.children[1];
            }
            child_1.font.fontSize = selected.node.property.props["titleFontSize"];
            child_1.font.color = selected.node.property.props["titleFontColor"];
            child_1.font.fontFamily = selected.node.property.props["titleFontFamily"];
            child_1.font.textAlign = selected.node.property.props["titlePosition"];
            (selected.node.property.props.titleFontStyle || []).forEach(function (item) {
                if (item.name == 'bold') {
                    if (item.checked) {
                        child_1.font.fontWeight = item.value;
                    }
                    else {
                        child_1.font.fontWeight = 'normal';
                    }
                }
                if (item.name == 'italic') {
                    if (item.checked) {
                        child_1.font.fontStyle = item.value;
                    }
                    else {
                        child_1.font.fontStyle = 'normal';
                    }
                }
            });
        }
        canvas.updateProps(true, [selected.node]);
        setIsSave(false);
    };
    /**
     * 监听画布上元素的事件
     * @params {string} event - 事件名称
     * @params {object} data - 节点数据
     */
    var onMessage = function (event, data) {
        switch (event) {
            case "resize":
                break;
            case "dblclick":
                setIsSave(false);
                break;
            case "node": // 节点切换或者点击
                // console.log(data);
                // const reqData=(data.property?.reqData||'').replace(/[\r|\n|\r\n]/g,"");
                // if(reqData){
                //   console.log(JSON.parse(reqData));
                // }
                setSelected({
                    node: data,
                    line: null,
                    multi: false,
                    nodes: null,
                    // locked: Lock.None
                });
                setIsSave(false);
                break;
            case "addNode":
                setIsSave(false);
                setSelected({
                    node: data,
                    line: null,
                    multi: false,
                    nodes: null,
                    // locked: Lock.None
                });
                setIsLoadCanvas(true);
                //=================解决新建组件添加到画布纵坐标不显示的问题
                if (data.name == 'echarts' && data.property.echartsType == "timeLine") {
                    data.data.echarts.option = getTimeLineOption(data, undefined, undefined);
                    // 更新图表数据
                    echartsObjs[data.id].chart.setOption(JSON.parse(JSON.stringify(data.data.echarts.option), reviver));
                }
                else if (data.name == 'combine') {
                    (data.children || []).map(function (item) {
                        if (item.name == 'echarts' && item.property.echartsType == "timeLine") {
                            item.data.echarts.option = getTimeLineOption(item, undefined, undefined);
                            // 更新图表数据
                            echartsObjs[item.id].chart.setOption(JSON.parse(JSON.stringify(item.data.echarts.option), reviver));
                        }
                        else if (item.name == 'echarts' && item.property.echartsType == "gauge") {
                            handleGaugeOption(undefined);
                            // 更新图表数据
                            echartsObjs[item.id].chart.setOption(JSON.parse(JSON.stringify(item.data.echarts.option), reviver));
                        }
                    });
                }
                //==================
                break;
            case "delete":
                setIsSave(false);
                canvas.dispatch('deleteNode', data);
                setSelected({
                    node: undefined,
                    line: null,
                    multi: false,
                    nodes: null,
                    // locked: Lock.None
                });
                break;
            case "line": // 连线
            case "addLine":
                setIsSave(false);
                setSelected({
                    node: null,
                    line: data,
                    multi: false,
                    nodes: null,
                    // locked: Lock.None
                });
                break;
            case "space": // 空白处
                setIsLoadCanvas(true);
                setSelected({
                    node: null,
                    line: null,
                    multi: false,
                    nodes: null,
                    // locked: Lock.None
                });
                setIsSave(false);
                break;
            case "rotated":
                var temp = data[0];
                temp.rotate += temp.offsetRotate;
                setIsSave(false);
                setSelected(__assign(__assign({}, selected), { node: temp }));
                break;
            case "move":
                setIsSave(false);
                setSelected(Object.assign({}, __assign(__assign({}, selected), { node: data[0] })));
                break;
            case "resizePens":
                setIsSave(false);
                setSelected(Object.assign({}, __assign(__assign({}, selected), { node: data[0] })));
                // 重新绘制图表
                if (data.name == "echarts") {
                    var chart = echartsObjs[data.id].chart;
                    chart.setOption(data.data.echarts.option, true);
                }
                break;
            case "multi":
                setSelected(Object.assign({}, {
                    node: data[0],
                    line: null,
                    multi: true,
                    nodes: data,
                    // locked: Lock.None
                }));
                break;
            case "scale":
                if (typeof data === "number") {
                    setScaleVal(data);
                    scrollCenter();
                }
                break;
            case "translate":
                var fullDiv = document.querySelector("#full");
                fullDiv.scrollBy(-data.offsetX, -data.offsetY);
                break;
            default:
                break;
        }
    };
    /**
     * 画布右侧配置区域
     */
    var rightAreaConfig = useMemo(function () {
        return {
            node: selected && (<NodeComponent data={selected} onFormValueChange={onHandleFormValueChange} onEventValueChange={onEventValueChange} onPropertyFormValueChange={onHandlePropertyFormValueChange} setIsSave={setIsSave} onAddDataPoint={props.onAddDataPoint} onAddVedioSource={props.onAddVedioSource} ref={nodeRef} dataPointPropsMap={props.dataPointPropsMap} uploaConfig={props.uploadConfig} onCustomizedDynamicFormChange={handleCustomizedDynamicFormChange}/>),
            line: selected && (<LineComponent data={selected} onFormValueChange={onHandleLineFormValueChange}/>),
            default: canvas && (<BackgroundComponent data={canvas} baseUrl={props.apiURL} websocketConf={props.websocketConf} preInstallBgImages={props.preInstallBgImages} svgRef={svgRef} canvasRef={canvasRef} onChangeCanvasSize={handleChangeCanvasSize} onChangeBkImage={handleChangeBkImage} isSave={isSave} setIsSave={setIsSave} uploadConfig={props.uploadConfig}/>), // 渲染画布背景的组件
        };
    }, [
        selected,
        onHandleFormValueChange,
        onHandleLineFormValueChange,
        onEventValueChange,
        isLoadCanvas,
        canvas,
        props.dataPointPropsMap,
    ]);
    /**
     * 处理放大缩小
     * @param scale
     */
    var handleScaleCanvas = function (scale) {
        canvas.render();
        scrollCenter();
    };
    /**
     * 渲染画布右侧区域操作栏
     */
    var renderRightArea = useMemo(function () {
        if (isLoadCanvas) {
            var _component_1 = rightAreaConfig.default;
            Object.keys(rightAreaConfig).forEach(function (item) {
                if (selected[item]) {
                    _component_1 = rightAreaConfig[item];
                }
            });
            return _component_1;
        }
    }, [selected, rightAreaConfig, isLoadCanvas]);
    // 渲染头部
    var renderHeader = useMemo(function () {
        if (showHeader) {
            return (<Header ref={headerRef} canvas={canvas} history={history} rootRef={layoutRef} isSave={isSave} scaleVal={scaleVal} setIsSave={setIsSave} onExtraSetting={props.onExtraSetting} onEditorSaveCb={props.onEditorSaveCb} onPoweroff={props.onPoweroff} autoSaveInterval={props.autoSaveInterval} onPreview={props.onPreview} onScaleCanvas={handleScaleCanvas}/>);
        }
    }, [showHeader, history, layoutRef, isSave, scaleVal, canvas]);
    // 右键菜单
    var handleContextMenu = function (event) {
        setShowContextmenu(!showContextmenu);
        event.preventDefault();
        event.stopPropagation();
        if (event.clientY + 360 < document.body.clientHeight) {
            setContextmenu({
                position: "fixed",
                zIndex: "10",
                display: "block",
                left: event.clientX + "px",
                top: event.clientY + "px",
                bottom: "",
            });
        }
        else {
            setContextmenu({
                position: "fixed",
                zIndex: "10",
                display: "block",
                left: event.clientX + "px",
                top: "",
                bottom: document.body.clientHeight - event.clientY + "px",
            });
        }
    };
    var renderContextMenu = (<div style={contextmenu} ref={contextMenuRef}>
      <CanvasContextMenu data={selected} canvas={canvas} show={showContextmenu} isSave={isSave} setIsSave={setIsSave} onNeedHide={function () { return setShowContextmenu(false); }} combineCom={props.uploadConfig.combineCom} getNewComponents={(_c = customCompRef.current) === null || _c === void 0 ? void 0 : _c.getNewComponents}/>
    </div>);
    var divHeight = document.body.clientHeight - 200;
    return (<ConfigProvider prefixCls="antdv4">
      <div id="editLayout" ref={layoutRef}>
        {renderHeader}
        <div className={styles.page}>
          {/*<ResizePanel direction="e" style={{ width: 250 }}>*/}
          <div className={styles.tool} style={{ overflow: "hidden" }}>
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="&nbsp;&nbsp;&nbsp;&nbsp;组&nbsp;件&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" key="1" style={{ margin: 0 }}>
                <div style={{ height: divHeight, overflow: "auto" }}>
                  <SystemComponent onDrag={onDrag} Tools={Tools} toolConfig={props.websocketConf.toolsConfig}/>
                  <CustomComponent ref={customCompRef} onDrag={onDrag} combineCom={props.uploadConfig.combineCom}/>
                </div>
              </TabPane>
              <TabPane tab="&nbsp;&nbsp;&nbsp;&nbsp;图&nbsp;&nbsp;库&nbsp;&nbsp;&nbsp;&nbsp;" key="2" style={{ margin: 0 }}>
                <PicComponent uploaConfig={props.uploadConfig} industrialLibrary={props.industrialLibrary}/>
              </TabPane>
            </Tabs>
          </div>
          {/*</ResizePanel>*/}
          <div className={styles.full} id="full" style={{ background: "#efefef" }}>
            <div id="topology-canvas-wrapper">
              <svg className={styles.svg} id="topology-canvas-svg" ref={svgRef} style={{
            minWidth: canvasSizeInfo.minWidth,
            minHeight: canvasSizeInfo.minHeight,
        }}></svg>
              {props.boardData && (<p className={styles.titleInfo} style={{
                left: canvasSizeInfo.left,
                top: canvasSizeInfo.top,
            }}>
                  {props.boardData.code ?
                <React.Fragment>
                      <Tooltip title={props.boardData.code}>
                        <span>No.{props.boardData.code}</span>
                      </Tooltip>
                      <span style={{ margin: "0 5px" }}>/</span>
                      </React.Fragment>
                : ''}
                  {props.boardData.name ?
                <React.Fragment>
                      <Tooltip title={props.boardData.name}>
                        <span>{props.boardData.name}</span>
                      </Tooltip>
                      <span style={{ margin: "0 5px" }}>/</span>
                      </React.Fragment>
                : ''}
                  {props.boardData.typeName ?
                <React.Fragment>
                      <Tooltip title={props.boardData.typeName}>
                    <span>{props.boardData.typeName}</span>
                  </Tooltip>
                      <span style={{ margin: "0 5px" }}>/</span>
                      </React.Fragment>
                : ''}
                  {props.boardData.remark ? <Tooltip title={props.boardData.remark}>
                    <span>{props.boardData.remark}</span>
                  </Tooltip> : ''}
                </p>)}
              <div className={styles.topology_canvas} ref={canvasRef} id="topology-canvas" style={{
            position: "absolute",
            borderWidth: 1,
            overflow: "hidden",
            left: canvasSizeInfo.left,
            top: canvasSizeInfo.top,
            width: canvasSizeInfo.width,
            height: canvasSizeInfo.height,
            background: "#fff",
            boxShadow: "0px 0px 2px 1px #d1d1d1",
            border: "1px solid #f3f3f3",
        }} onContextMenu={handleContextMenu}/>
            </div>
          </div>
          <div className={styles.props} id="props" style={{ overflow: "hidden" }}>
            {renderRightArea}
          </div>
          {renderContextMenu}
        </div>
      </div>
    </ConfigProvider>);
});
//# sourceMappingURL=index.js.map