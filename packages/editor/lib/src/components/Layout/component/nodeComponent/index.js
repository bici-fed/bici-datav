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
import React, { useMemo, useEffect, useState, Fragment, useCallback, useImperativeHandle, } from 'react';
import { Form, InputNumber, Tabs, Collapse, Row, Col, Input, Select, Tag, Checkbox, Button, Space, Tooltip, Radio, message, Popconfirm } from 'antd';
import { PlusOutlined, MinusCircleOutlined, DeleteOutlined, } from '@ant-design/icons';
import ColorPicker from '../../../common/ColorPicker/ColorPicker';
import { canvas } from '../../index';
import { alignNodes } from '@bici-topology/layout/src/align';
import CustomIcon from '../../../config/iconConfig';
import DataBindModal from '../../../FilterDataPoint';
import styles from './index.module.less';
import { getNodeType } from '../../../utils/Property2NodeProps';
import * as _ from 'lodash';
import { echartsObjs } from '@bici-topology/chart-diagram/src/echarts';
import { replacer, reviver } from '../../../utils/serializing';
import { eraseOverlapIntervals } from '../../../utils/cacl';
import { defaultLineColors } from '../../../data/defines';
import { getTimeLineOption } from "../../../config/charts/timeline";
import CustomizedDynamicForm from '../../../common/CustomizedDynamicForm';
import { fetchDataSourceList } from '../../../data/api';
import { getPieOptionByChangeProp } from "../../../config/charts/pie";
import { getBarOption } from "../../../config/charts/bar";
import { getHorizontalBarOption } from "../../../config/charts/horizontalbar";
var Panel = Collapse.Panel;
var TabPane = Tabs.TabPane;
var TextArea = Input.TextArea;
var Option = Select.Option;
// 对齐方式 key 对齐方式 val 图标名称
var alignObj = {
    left: ['左对齐', 'iconzuoduiqi'],
    right: ['右对齐', 'iconyouduiqi'],
    top: ['顶部对齐', 'iconshangduiqi'],
    bottom: ['底部对齐', 'iconxiaduiqi'],
    center: ['垂直居中', 'iconzongxiangjuzhong'],
    middle: ['水平居中', 'iconhengxiangjuzhong'],
};
// 需要显示文件填充的节点列表
var fillStyleNodeList = ['circle', 'rectangle', 'biciVarer', 'combine', 'dateFormat'];
// 字体样式
var fontStyleNodeList = [
    'biciPilot',
    'circle',
    'rectangle',
    'text',
    'biciVarer',
    'dateFormat',
];
// 边框样式
var boardStyleNodeList = ['circle', 'rectangle', 'biciVarer', 'combine'];
// 不展示旋转
var disabledRotateList = ['biciPilot', 'echarts', 'biciCard', 'QTLiveVideo'];
var NodeCanvasProps = React.forwardRef(function (_a, ref) {
    var _b, _c, _d, _e, _f;
    var data = _a.data, onFormValueChange = _a.onFormValueChange, onPropertyFormValueChange = _a.onPropertyFormValueChange, setIsSave = _a.setIsSave, onAddDataPoint = _a.onAddDataPoint, onAddVedioSource = _a.onAddVedioSource, dataPointPropsMap = _a.dataPointPropsMap, onCustomizedDynamicFormChange = _a.onCustomizedDynamicFormChange, uploaConfig = _a.uploaConfig;
    var form = Form.useForm()[0];
    var propertyForm = Form.useForm()[0];
    var _g = useState(false), visible = _g[0], setVisible = _g[1];
    var _h = useState('small'), pilotBtnSize = _h[0], setPilotBtnSize = _h[1];
    var _j = useState({
        italicBtn: '#fff',
        boldBtn: '#fff',
        color: "#222",
    }), btnColor = _j[0], setBtnColor = _j[1];
    var _k = ((_b = data === null || data === void 0 ? void 0 : data.node) === null || _b === void 0 ? void 0 : _b.rect) || {}, x = _k.x, y = _k.y, width = _k.width, height = _k.height;
    var _l = (data === null || data === void 0 ? void 0 : data.node) || {}, rotate = _l.rotate, lineWidth = _l.lineWidth, strokeStyle = _l.strokeStyle, text = _l.text, id = _l.id, name = _l.name, fillStyle = _l.fillStyle;
    var _m = ((_c = data === null || data === void 0 ? void 0 : data.node) === null || _c === void 0 ? void 0 : _c.font) || {}, color = _m.color, fontSize = _m.fontSize, fontFamily = _m.fontFamily, textAlign = _m.textAlign;
    var property = (data === null || data === void 0 ? void 0 : data.node).property; // 用户自定义数据片段
    var _o = useState((property === null || property === void 0 ? void 0 : property.dataPointSelectedRows) || []), dataPointSelectedRows = _o[0], setDataPointSelectedRows = _o[1];
    var _p = useState(false), showSelectDataPoint = _p[0], setShowSelectDataPoint = _p[1];
    var addLineColorBtnRef = React.useRef();
    var removeLineColorBtnRef = React.useRef();
    var _q = property || {}, dataMethod = _q.dataMethod, dataDot = _q.dataDot, dataSourceId = _q.dataSourceId, dataSourceUrl = _q.dataSourceUrl, reqData = _q.reqData, dataPointReq = _q.dataPointReq;
    var _r = useState(false), refreshProperty = _r[0], setRefreshProperty = _r[1];
    var _s = useState(((_d = property === null || property === void 0 ? void 0 : property.video) === null || _d === void 0 ? void 0 : _d.selectedRows) || []), selectedVideoRows = _s[0], setSelectedVideoRows = _s[1];
    var disableSource = ['react'];
    if (data.node.name == 'biciPilot') {
        disableSource = [];
    }
    // 渲染数据点弹出窗口 不包含 disableSource:['react','complex','dataPoint]
    var selectedRowKeys = [];
    data.node.property &&
        (data.node.property.dataPointSelectedRows || []).map(function (row) {
            selectedRowKeys.push(row.id);
            return row;
        });
    useEffect(function () {
        var temp = __assign({}, btnColor);
        if (data.node.font.fontStyle !== 'normal') {
            temp = __assign(__assign({}, temp), { italicBtn: '#1890ff' });
        }
        if (data.node.font.fontWeight !== 'normal') {
            temp = __assign(__assign({}, temp), { boldBtn: '#1890ff' });
        }
        setBtnColor(temp);
        // 设置基本表单
        form.setFieldsValue({
            x: Math.round(x),
            y: Math.round(y),
            width: Math.round(width),
            height: Math.round(height),
            rotate: parseInt(rotate),
            lineWidth: lineWidth,
            strokeStyle: strokeStyle,
            color: color,
            fontSize: parseInt(fontSize),
            fontFamily: fontFamily.split(','),
            text: text,
            textAlign: textAlign,
            fillStyle: fillStyle,
            showFillStyle: fillStyle ? true : false,
            showBoardColor: strokeStyle ? true : false,
        });
    }, [
        x,
        y,
        width,
        height,
        rotate,
        text,
        lineWidth,
        strokeStyle,
        color,
        fontSize,
        fontFamily,
        text,
        fillStyle,
        textAlign,
        property,
    ]);
    useEffect(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
        setShowSelectDataPoint((property === null || property === void 0 ? void 0 : property.limitType) == 'custom');
        propertyForm.setFieldsValue({
            dataMethod: dataMethod,
            dataDot: dataDot,
            reqData: reqData,
            dataPointReq: dataPointReq,
            'date.show': (_a = property === null || property === void 0 ? void 0 : property.date) === null || _a === void 0 ? void 0 : _a.show,
            'date.format': (_b = property === null || property === void 0 ? void 0 : property.date) === null || _b === void 0 ? void 0 : _b.format,
            'time.show': (_c = property === null || property === void 0 ? void 0 : property.time) === null || _c === void 0 ? void 0 : _c.show,
            'time.format': (_d = property === null || property === void 0 ? void 0 : property.time) === null || _d === void 0 ? void 0 : _d.format,
        });
        if (data.node.name === 'biciCard') {
            // 设置数据卡片
            propertyForm.setFieldsValue({
                showTitle: property.showTitle,
                cardTitle: property.cardTitle,
                limitType: property.limitType,
                showLimit: property.showLimit,
                'limit.bottom': property.limit.bottom,
                'limit.top': property.limit.top,
                'normal.fontFamily': property.normal.fontFamily,
                'normal.fontSize': property.normal.fontSize,
                'normal.color': property.normal.color,
                'normal.showBkColor': property.normal.showBkColor,
                'normal.bkColor': property.normal.bkColor,
                'topLimit.fontFamily': property.topLimit.fontFamily,
                'topLimit.fontSize': property.topLimit.fontSize,
                'topLimit.color': property.topLimit.color,
                'topLimit.showBkColor': property.topLimit.showBkColor,
                'topLimit.bkColor': property.topLimit.bkColor,
                'bottomLimit.fontFamily': property.bottomLimit.fontFamily,
                'bottomLimit.fontSize': property.bottomLimit.fontSize,
                'bottomLimit.color': property.bottomLimit.color,
                'bottomLimit.showBkColor': property.bottomLimit.showBkColor,
                'bottomLimit.bkColor': property.bottomLimit.bkColor,
            });
        }
        else if (data.node.name === 'biciPilot') {
            propertyForm.setFieldsValue({
                color: property.color,
                size: Math.round(width / 2),
                showText: property.showText,
                text: property.text,
                stateType: property.stateType,
                lightRange: property.lightRange,
            });
            var btnSize = width / 2 <= 15 ? 'small' : width / 2 <= 20 ? 'middle' : 'large';
            setPilotBtnSize(btnSize);
        }
        else if (data.node.name == 'echarts' ||
            data.node.name == 'biciMeasure' ||
            data.node.name == 'biciText' ||
            data.node.name == 'pdMonthReport' ||
            data.node.name == 'productQueue' ||
            data.node.name === 'biciCard2' ||
            data.node.name === 'liveVideo' ||
            data.node.name === 'QTLiveVideo' ||
            data.node.name === 'dataTable') {
            var lineRangedefaultColor_1 = defaultLineColors.map(function (color) {
                return {
                    lineGraphRangeColor: color,
                    lineGraphRangeCheck: true
                };
            });
            var nodeLineRangeColor_1 = [];
            if (property && property.lineGraphRange) {
                nodeLineRangeColor_1 = _.compact(property.lineGraphRange);
            }
            lineRangedefaultColor_1.map(function (colorObj, index) {
                if (nodeLineRangeColor_1[index] != null) {
                    lineRangedefaultColor_1[index] = nodeLineRangeColor_1[index];
                }
            });
            propertyForm.setFieldsValue({
                dataMax: property.dataMax,
                dataMin: property.dataMin,
                marks: property.marks,
                markChecked: property.markChecked,
                chartTitleColor: property.chartTitleColor,
                chartTitleColorChecked: property.chartTitleColorChecked,
                pullRate: property.pullRate,
                pullRateUnit: property.pullRateUnit,
                dataFormat: property.dataFormat,
                dataUrl: property.dataUrl,
                dataSourceId: dataSourceId,
                dataSourceUrl: dataSourceUrl,
                videoURL: property.videoURL,
                'checked-0': property.dataColors && ((_e = property.dataColors[0]) === null || _e === void 0 ? void 0 : _e.checked),
                'color-0': property.dataColors && ((_f = property.dataColors[0]) === null || _f === void 0 ? void 0 : _f.color),
                'top-0': property.dataColors && ((_g = property.dataColors[0]) === null || _g === void 0 ? void 0 : _g.top),
                'bottom-0': property.dataColors && ((_h = property.dataColors[0]) === null || _h === void 0 ? void 0 : _h.bottom),
                'checked-1': property.dataColors && ((_j = property.dataColors[1]) === null || _j === void 0 ? void 0 : _j.checked),
                'color-1': property.dataColors && ((_k = property.dataColors[1]) === null || _k === void 0 ? void 0 : _k.color),
                'top-1': property.dataColors && ((_l = property.dataColors[1]) === null || _l === void 0 ? void 0 : _l.top),
                'bottom-1': property.dataColors && ((_m = property.dataColors[1]) === null || _m === void 0 ? void 0 : _m.bottom),
                'checked-2': property.dataColors && ((_o = property.dataColors[2]) === null || _o === void 0 ? void 0 : _o.checked),
                'color-2': property.dataColors && ((_p = property.dataColors[2]) === null || _p === void 0 ? void 0 : _p.color),
                'top-2': property.dataColors && ((_q = property.dataColors[2]) === null || _q === void 0 ? void 0 : _q.top),
                'bottom-2': property.dataColors && ((_r = property.dataColors[2]) === null || _r === void 0 ? void 0 : _r.bottom),
                'checked-3': property.dataColors && ((_s = property.dataColors[3]) === null || _s === void 0 ? void 0 : _s.checked),
                'color-3': property.dataColors && ((_t = property.dataColors[3]) === null || _t === void 0 ? void 0 : _t.color),
                'top-3': property.dataColors && ((_u = property.dataColors[3]) === null || _u === void 0 ? void 0 : _u.top),
                'bottom-3': property.dataColors && ((_v = property.dataColors[3]) === null || _v === void 0 ? void 0 : _v.bottom),
                'checked-4': property.dataColors && ((_w = property.dataColors[4]) === null || _w === void 0 ? void 0 : _w.checked),
                'color-4': property.dataColors && ((_x = property.dataColors[4]) === null || _x === void 0 ? void 0 : _x.color),
                'top-4': property.dataColors && ((_y = property.dataColors[4]) === null || _y === void 0 ? void 0 : _y.top),
                'bottom-4': property.dataColors && ((_z = property.dataColors[4]) === null || _z === void 0 ? void 0 : _z.bottom),
                smooth: property.smooth && property.smooth,
                limitType: property.limitType && property.limitType,
                dataTopChecked: property.dataTopChecked && property.dataTopChecked,
                dataTop: property.dataTop && property.dataTop,
                dataBottom: property.dataBottom && property.dataBottom,
                selectDataPoint: property.dataBottom + '~' + property.dataTop,
                chartTitleChecked: property.chartTitleChecked && property.chartTitleChecked,
                chartTitle: property.chartTitle && property.chartTitle,
                lineReferenceChecked: property.lineReferenceChecked && property.lineReferenceChecked,
                lineReferenceColor: property.lineReferenceColor && property.lineReferenceColor,
                chartUnitChecked: property.chartUnitChecked && property.chartUnitChecked,
                chartUnit: property.chartUnit && property.chartUnit,
                lineGraphRange: lineRangedefaultColor_1,
                chartBackgroundColor: property.chartBackgroundColor && property.chartBackgroundColor,
                chartBackgroundChecked: property.chartBackgroundChecked && property.chartBackgroundChecked,
            });
        }
    }, [property, refreshProperty]);
    // 对父组件暴露保存数据的接口
    useImperativeHandle(ref, function () { return ({
        onDataPointBind: function (selectedRowKeys, selectedRows) {
            onDataPointBind(selectedRowKeys, selectedRows);
        },
        onVedioBind: function (selectedRowKeys, selectedRows) {
            onVedioBind(selectedRowKeys, selectedRows);
        },
    }); }, [property]);
    // 字段值更新时触发的回掉
    var handleValuesChange = function (changedValues) {
        if ('fillStyle' in changedValues) {
            form.setFieldsValue({ showFillStyle: true });
        }
        if ('strokeStyle' in changedValues) {
            form.setFieldsValue({ showBoardColor: true });
        }
        if ('showFillStyle' in changedValues) {
            changedValues.fillStyle = changedValues.showFillStyle
                ? form.getFieldValue('fillStyle')
                : '';
        }
        if ('showBoardColor' in changedValues) {
            changedValues.strokeStyle = changedValues.showBoardColor
                ? form.getFieldValue('strokeStyle')
                : '#222';
        }
        onFormValueChange && onFormValueChange(changedValues);
    };
    var handlePropertyValuesChange = function (changedValues, allValues) {
        if (changedValues.dataPointReq) {
            var points = (changedValues.dataPointReq || '').split(',');
            (points || []).map(function (pid, index) {
                data.node.property.dataPointParam.qtDataList[index] = {
                    id: pid,
                    type: 5,
                    time: 1,
                };
            });
        }
        onPropertyFormValueChange && onPropertyFormValueChange(allValues);
    };
    //
    // 设置对齐方式
    var handleAlign = function (key) {
        var pens = canvas.activeLayer.pens;
        var rect = canvas.activeLayer.rect;
        if (pens.length >= 2) {
            alignNodes(pens, rect, key);
            canvas.cache();
            canvas.render();
            setIsSave(false);
        }
    };
    // 设置日期格式
    var onSetBiciTimerDataFmt = function () { };
    // 数据绑定方式
    var handlePropertyDataMethodChange = function (value) {
        data.node.property.dataMethod = value;
        setRefreshProperty(!refreshProperty);
    };
    // 添加数据点
    var addDataPoint = function () {
        //setVisible(!visible);
        onAddDataPoint && onAddDataPoint(data.node, disableSource, selectedRowKeys);
    };
    // 添加视频源
    var addVedioSource = function () {
        var _a;
        onAddVedioSource && onAddVedioSource(data.node, [], (_a = data.node.property.video) === null || _a === void 0 ? void 0 : _a.selectedRowKeys);
    };
    // 获得选中的视频直播源
    var onVedioBind = function (selectedRowKeys, selectedRows) {
        var tmp = __assign(__assign({}, data.node.property.video), { selectedRowKeys: selectedRowKeys, selectedRows: selectedRows });
        data.node.property.video = tmp;
        setSelectedVideoRows(selectedRows);
        setRefreshProperty(!refreshProperty);
    };
    // 获得选中的数据点
    var onDataPointBind = function (selectedRowKeys, selectedRows) {
        console.log(selectedRowKeys, selectedRows);
        // if (selectedRows.length === 0) {
        //   return;
        // }
        // associationObject: "11111"
        // attention: 2
        // channel: 4
        // dataCode: "Data2103250007"
        // dataName: "精轧"
        // dataType: 1
        // effectiveLowerLimit: 3000
        // effectiveUpperLimit: 4000
        // id: "4bb099f2ae4b4db88276567127a5fe7e"
        // intervalTime: 1
        // isOtherPoint: 0
        // position: "500精轧控制室"
        // scopeMax: 2000
        // scopeMin: 1000
        // status: -1
        // type: 1
        // unit: "C"
        // dataPointPropsMap有问题，绑定数据点是type又变成datatype了，后续需要修复
        // console.log("selectedRows",selectedRows,selectedRowKeys,dataPointPropsMap)
        selectedRows = (selectedRows || []).map(function (row) {
            return __assign(__assign({}, row), { id: row[dataPointPropsMap.id], type: row.dataType || row.type, dataName: row[dataPointPropsMap.dataName] || row.name || row.dataName, intervalTime: row.intervalTime || 1, scopeMin: row[dataPointPropsMap.scopeMin], scopeMax: row[dataPointPropsMap.scopeMax], status: row.status + '', dataCode: row.dataCode || row.code });
        });
        var nodeType = getNodeType(data.node);
        if (property && property.dataPointSelectedRows) {
            if (nodeType == 'timeLine' ||
                nodeType == 'dataTable' ||
                nodeType == 'horizontalBar' ||
                nodeType == 'circleAndPie' ||
                nodeType == 'verticalBar') {
                // 最多可绑定十个数据点
                if (nodeType == 'dataTable') {
                    selectedRows = selectedRows.slice(0, 20);
                }
                else {
                    selectedRows = selectedRows.slice(0, 10);
                }
                selectedRows = selectedRows.sort(function (a, b) {
                    return a.intervalTime - b.intervalTime;
                });
                if (data.node.property.dataPointSelectedRows.length <= 20) {
                    data.node.property.dataPointSelectedRows = selectedRows;
                    selectedRows.map(function (row, index) {
                        // console.log("row====",row)
                        var q = {
                            id: selectedRows[index][dataPointPropsMap.id],
                            type: row.dataType || row.type,
                            intervalTime: selectedRows[index][dataPointPropsMap.intervalTime] || 1,
                            dataCode: selectedRows[index].dataCode || selectedRows[index].code,
                        };
                        data.node.property.dataPointParam.qtDataList[index] = q;
                    });
                    setDataPointSelectedRows(selectedRows);
                    if (nodeType == 'dataTable') {
                    }
                    else {
                        updateChartOption();
                    }
                }
            }
            else {
                var selectedData = selectedRows[0];
                if (nodeType === 'biciCard') {
                    var scopeMin = !isNaN(Number(selectedData === null || selectedData === void 0 ? void 0 : selectedData.scopeMin))
                        ? selectedData === null || selectedData === void 0 ? void 0 : selectedData.scopeMin
                        : undefined;
                    var scopeMax = !isNaN(Number(selectedData === null || selectedData === void 0 ? void 0 : selectedData.scopeMax))
                        ? selectedData === null || selectedData === void 0 ? void 0 : selectedData.scopeMax
                        : undefined;
                    if (property.limitType == 'dataPoint') {
                        data.node.property.limit.bottom = scopeMin;
                        data.node.property.limit.top = scopeMax;
                        propertyForm.setFieldsValue({
                            dataBottom: scopeMin,
                            dataTop: scopeMax,
                        });
                    }
                }
                // 只绑定一个数据点
                data.node.property.dataPointSelectedRows = selectedRows;
                data.node.property.dataPointParam.qtDataList[0] = {
                    id: selectedData.id,
                    type: selectedData.type || selectedData.dataType,
                    intervalTime: selectedRows[0][dataPointPropsMap.intervalTime] || 1,
                    dataCode: selectedRows[0].dataCode || selectedRows[0].code,
                };
                setDataPointSelectedRows(selectedRows);
            }
            setIsSave(false);
        }
        canvas.dispatch('addDataPoint', {});
        setRefreshProperty(!refreshProperty);
    };
    // 选择数据点，将数值配置上区
    var handleChangeDataPoint = function (value) {
        var dataTween = value.split('~');
        if (data.node.property.limitType == 'dataPoint') {
            propertyForm.setFieldsValue({
                dataBottom: dataTween[0] == 'undefined' ? '' : dataTween[0],
                dataTop: dataTween[1] == 'undefined' ? '' : dataTween[1],
            });
            onPropertyFormValueChange &&
                onPropertyFormValueChange({
                    dataBottom: dataTween[0] == 'undefined' ? '' : dataTween[0],
                    dataTop: dataTween[1] == 'undefined' ? '' : dataTween[1],
                });
        }
    };
    var updateChartOption = function () {
        data.node.elementRendered = false;
        var nodeType = getNodeType(data.node);
        var newOption = {};
        switch (nodeType) {
            case 'timeLine':
                newOption = getTimeLineOption(data.node, undefined, undefined);
                break;
            case 'circleAndPie':
                newOption = getPieOptionByChangeProp(data.node, null);
                break;
            case 'verticalBar':
                newOption = getBarOption(data.node, null);
                break;
            case 'horizontalBar':
                newOption = getHorizontalBarOption(data.node, null);
                break;
            default:
        }
        data.node.data.echarts.option = newOption;
        // 更新图表数据
        echartsObjs[data.node.id].chart.setOption(JSON.parse(JSON.stringify(newOption, replacer), reviver), true);
        echartsObjs[data.node.id].chart.resize();
        canvas.updateProps(true, [data.node]);
    };
    var renderDataPointModal = useCallback(function () {
        var _a;
        return (<DataBindModal visible={true} disableSource={disableSource} selectedRows={(_a = data.node.property) === null || _a === void 0 ? void 0 : _a.dataPointSelectedRows} onCancel={addDataPoint} onGetSelectRow={onDataPointBind} selectedRowKeys={selectedRowKeys} node={data.node} mode={data.node.property.echartsType == 'timeLine' ? 'checkbox' : 'radio'}></DataBindModal>);
    }, [visible]);
    /**
     * 渲染位置和大小的表单
     */
    var renderPositionForm = useMemo(function () {
        return (<Panel header="位置和大小" key="pos">
        <Form form={form} onValuesChange={handleValuesChange}>
          <Row>
            <Col span={14}>
              <Form.Item name="x" label="位置">
                <Input suffix={<span style={{ color: '#999999' }}>X</span>}/>
              </Form.Item>
            </Col>
            <Col span={9} push={1}>
              <Form.Item name="y">
                <Input suffix={<span style={{ color: '#999999' }}>Y</span>}/>
              </Form.Item>
            </Col>
            <Col span={14}>
              <Form.Item name="width" label="宽高">
                <Input suffix={<span style={{ color: '#999999' }}>W</span>}/>
              </Form.Item>
            </Col>
            <Col span={9} push={1}>
              <Form.Item name="height">
                <Input suffix={<span style={{ color: '#999999' }}>H</span>}/>
              </Form.Item>
            </Col>
            {!disabledRotateList.includes(data === null || data === void 0 ? void 0 : data.node.name) && (<Col span={14}>
                <Form.Item name="rotate" label="旋转">
                  <Input suffix={<span style={{ color: '#999999' }}>°</span>}/>
                </Form.Item>
              </Col>)}
          </Row>
        </Form>
      </Panel>);
    }, [x, y, width, height, rotate, data === null || data === void 0 ? void 0 : data.node]);
    /**
     * 渲染填充样式
     */
    var renderFillStyle = useMemo(function () {
        return (<Panel header="填充" key="fill">
        <Form form={form} onValuesChange={handleValuesChange}>
          <Row align="middle">
            <Col span={8}>
              <Form.Item name="showFillStyle" label="颜色" labelCol={{ span: 16 }} labelAlign="left" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
            <Col push={1}>
              <Form.Item name="fillStyle">
                <ColorPicker />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Panel>);
    }, [fillStyle, data === null || data === void 0 ? void 0 : data.node]);
    /**
     * 渲染边框样式
     */
    var renderBorderStyle = useMemo(function () {
        return (<Panel header="边框" key="border">
        <Form form={form} onValuesChange={handleValuesChange}>
          <Row align="middle">
            <Col span={8}>
              <Form.Item name="showBoardColor" label="颜色" labelCol={{ span: 16 }} labelAlign="left" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
            <Col span={6} push={1}>
              <Form.Item name="strokeStyle">
                <ColorPicker />
              </Form.Item>
            </Col>
            <Col push={2}>
              <Form.Item name="lineWidth" initialValue={1}>
                <InputNumber min={1}/>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Panel>);
    }, [strokeStyle, lineWidth, data === null || data === void 0 ? void 0 : data.node]);
    // 字体的斜体和加粗功能
    var fontStyleChange = function (val) {
        if (val === 'fontStyle') {
            // 斜体
            if (data.node.font.fontStyle === 'normal') {
                data.node.font.fontStyle = 'italic';
                setBtnColor(__assign(__assign({}, btnColor), { italicBtn: '#1890ff', color: '#fff' }));
            }
            else {
                data.node.font.fontStyle = 'normal';
                setBtnColor(__assign(__assign({}, btnColor), { italicBtn: '#fff', color: "#222" }));
            }
        }
        else {
            // 加粗
            if (data.node.font.fontWeight === 'normal') {
                data.node.font.fontWeight = 'bold';
                setBtnColor(__assign(__assign({}, btnColor), { boldBtn: '#1890ff', color: '#fff' }));
            }
            else {
                data.node.font.fontWeight = 'normal';
                setBtnColor(__assign(__assign({}, btnColor), { boldBtn: '#fff', color: '#222' }));
            }
        }
        setIsSave(false);
        canvas.updateProps(true, [data.node]);
    };
    /**
     * 渲染字体的表单
     */
    var renderFontForm = useMemo(function () {
        return (<Panel header="字符" key="font">
        <Form form={form} onValuesChange={handleValuesChange}>
          <Row>
            <Col span={14}>
              <Form.Item name="color" label="颜色字号" labelCol={{ span: 14 }} labelAlign="left">
                <ColorPicker />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item name="fontSize">
                <InputNumber min={0} style={{ width: "100%" }}/>
              </Form.Item>
            </Col>
          </Row>
          <Row>
          <Col span={24}>
            <Form.Item name="fontFamily" label="字体">
              <Select allowClear getPopupContainer={function () { return document.querySelector('#editLayout'); }}>
                <Option value='"Microsoft YaHei"' style={{ fontFamily: '"Microsoft YaHei"' }}>
                  微软雅黑
                </Option>
                <Option value="SimSun" style={{ fontFamily: 'SimSun' }}>
                  宋体
                </Option>
                <Option value="KaiTi" style={{ fontFamily: 'KaiTi' }}>
                  楷体
                </Option>
                <Option value="SimHei" style={{ fontFamily: 'SimHei' }}>
                  黑体
                </Option>
                <Option value='"Hiragino Sans GB"' style={{ fontFamily: '"Hiragino Sans GB"' }}>
                  冬青黑体
                </Option>
                <Option value="Arial" style={{ fontFamily: 'Arial' }}>
                  Arial
                </Option>
                <Option value="Tahoma" style={{ fontFamily: 'Tahoma' }}>
                  Tahoma
                </Option>
                <Option value="Helvetica" style={{ fontFamily: 'Helvetica' }}>
                  Helvetica
                </Option>
              </Select>
            </Form.Item>
          </Col>
          </Row>
          <Row>
          <Col span={24}>
            <Form.Item wrapperCol={{ offset: 4 }}>
              <Button.Group style={{ width: '100%', justifyContent: 'flex-end' }}>
                <Button size="small" style={{ width: '50%', background: btnColor.italicBtn }} icon={<CustomIcon type="iconzu"/>} onClick={function () { return fontStyleChange('fontStyle'); }}/>
                <Button size="small" style={{ width: '50%', background: btnColor.boldBtn }} icon={<CustomIcon type="iconjiacu"/>} onClick={function () { return fontStyleChange('fontWeight'); }}/>
              </Button.Group>
            </Form.Item>
          </Col>
          </Row>
          {data.node.name !== 'biciPilot' && (<Fragment>
              <Row>
              <Col span={24}>
                <Form.Item name="textAlign" wrapperCol={{ offset: 4 }}>
                  <Radio.Group buttonStyle="solid" style={{ width: '100%' }}>
                    <Radio.Button value="left" style={{ width: '25%', textAlign: 'center' }}>
                      <CustomIcon type="iconleft"/>
                    </Radio.Button>
                    <Radio.Button value="center" style={{ width: '25%', textAlign: 'center' }}>
                      <CustomIcon type="iconjuzhongduiqi"/>
                    </Radio.Button>
                    <Radio.Button value="right" style={{ width: '25%', textAlign: 'center' }}>
                      <CustomIcon type="iconyouduiqi2"/>
                    </Radio.Button>
                    <Radio.Button value="justify" style={{ width: '25%', textAlign: 'center' }}>
                      <CustomIcon type="iconjustify"/>
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>
              </Row>
              <Row>
              <Col span={24}>
                <Form.Item name="text" label="内容">
                  <Input />
                </Form.Item>
              </Col>
              </Row>
            </Fragment>)}
        </Form>
      </Panel>);
    }, [color, fontFamily, fontSize, text, data === null || data === void 0 ? void 0 : data.node, btnColor]);
    /**
     * 渲染元素本身数据
     */
    var renderDataForm = useMemo(function () {
        var formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
        };
        return (<Form {...formItemLayout}>
        <Col>
          <Form.Item label="ID">
            <span className="ant-form-text">
              <Tag color="#f50">{id}</Tag>
            </span>
          </Form.Item>
        </Col>
      </Form>);
    }, [id, data === null || data === void 0 ? void 0 : data.node]);
    /**
     * 渲染时间组件的属性设置
     */
    var renderBiciTimerDataForm = useMemo(function () {
        return (<React.Fragment>
        {renderFillStyle}
        {renderFontForm}
        <Panel header="时间格式" key="biciTimer">
          <Form form={propertyForm} onValuesChange={handlePropertyValuesChange}>
            <Row>
              <Col span={10}>
                <Form.Item name="date.show" valuePropName="checked" label="日期" labelCol={{ span: 14 }} labelAlign="left">
                  <Checkbox />
                </Form.Item>
              </Col>
              <Col span={14}>
                <Form.Item name="date.format" rules={[{ required: true, message: '日期格式不能为空' }]}>
                  <Select placeholder="设置日期格式" onChange={onSetBiciTimerDataFmt} allowClear={false}>
                    <Option value="L">YYYY-MM-DD</Option>
                    <Option value="LL">YYYY/MM/DD</Option>
                    <Option value="l">YY/MM/DD</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <Form.Item name="time.show" valuePropName="checked" label="时间" labelCol={{ span: 14 }} labelAlign="left">
                  <Checkbox />
                </Form.Item>
              </Col>
              <Col span={14}>
                <Form.Item name="time.format" rules={[{ required: true, message: '时间格式不能为空' }]}>
                  <Select placeholder="设置时间格式" onChange={onSetBiciTimerDataFmt} allowClear={false}>
                    <Option value="LTS">hh：mm：ss</Option>
                    <Option value="LT">hh:mm(24h)</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Panel>
      </React.Fragment>);
    }, [color, fontFamily, fontSize, text, data === null || data === void 0 ? void 0 : data.node, btnColor]);
    /**
     * 删除直播上的数据源
     * @param y
     * @param item
     */
    var handleDeleteVideoConfirm = function (y, item) {
        console.log(data.node.property.video);
        if (y) {
            data.node.property.video.selectedRows = [];
            data.node.property.video.selectedRowKeys = [];
            setIsSave(false);
            setSelectedVideoRows([]);
            setRefreshProperty(!refreshProperty);
        }
    };
    /**
     * 删除绑定到组件上数据点,删除数据点
     * @param y
     * @param item
     */
    var handleDeleteConfirm = function (y, item) {
        if (y) {
            setIsSave(false);
            setRefreshProperty(!refreshProperty);
            var nodeType = getNodeType(data.node);
            if (nodeType == 'timeLine' ||
                nodeType == 'dataTable' ||
                nodeType == 'horizontalBar' ||
                nodeType == 'circleAndPie' ||
                nodeType == 'verticalBar') {
                var itemRowIndex = _.findIndex(property.dataPointSelectedRows, function (r) { return r.id == item.id; });
                var itemQueryIndex = _.findIndex(property.dataPointParam.qtDataList, function (r) { return r.id == item.id; });
                if (data.node.property.dataPointParam) {
                    data.node.property.dataPointParam.qtDataList.splice(itemQueryIndex, 1);
                }
                data.node.property.dataPointSelectedRows.splice(itemRowIndex, 1);
                var newRows = _.cloneDeep(data.node.property.dataPointSelectedRows);
                setDataPointSelectedRows(newRows);
                if (data.node.name !== 'dataTable') {
                    updateChartOption();
                }
            }
            else {
                if (data.node.property.dataPointParam) {
                    data.node.property.dataPointParam.qtDataList = [];
                    data.node.property.dataPointSelectedRows = [];
                }
                setDataPointSelectedRows([]);
            }
            canvas.dispatch('addDataPoint', {});
        }
    };
    /**
     * 渲染元素额外数据 {"qtDataList":[{"id":"6413f3a606754c31987ec584ed56d5b7","type":2}],"subscribe":true,"page":"动态曲线"}
     *
     */
    // 选择接口来源发生变化
    var onDataSourceChange = useCallback(function (value) {
        propertyForm.setFieldsValue({
            dataSourceUrl: null,
        });
        var dataSourceObj = _.find(dataSource, function (item) { return item.id == value; });
        if (dataSourceObj) {
            setRemoteInterfaces(dataSourceObj.externalInterfaceManageDetailList);
        }
    }, [data === null || data === void 0 ? void 0 : data.node]);
    // 外部接口外层list
    var _t = useState([]), dataSource = _t[0], setDataSource = _t[1];
    // 外部接口内层list
    var _u = useState([]), remoteInterfaces = _u[0], setRemoteInterfaces = _u[1];
    // 加载接口数据
    var getDataSourceFocus = function () {
        if (dataSource.length == 0) {
            fetchDataSourceList({ companyId: uploaConfig.industry.mappingId, pagination: { current: 1, pageSize: 10 } }).then(function (res) {
                if (res.data.data) {
                    setDataSource(res.data.data.list);
                    var dataSourceObj = _.find(res.data.data.list, function (item) { return item.id == data.node.property.dataSourceId; });
                    if (dataSourceObj) {
                        setRemoteInterfaces(dataSourceObj.externalInterfaceManageDetailList);
                    }
                }
            });
        }
    };
    // 获取接口列表数据
    useEffect(function () {
        getDataSourceFocus();
    }, []);
    var renderExtraDataForm = useMemo(function () {
        return (<Form form={propertyForm} onValuesChange={handlePropertyValuesChange}>
        <Row>
          <Col span={24}>
          <Form.Item name="dataMethod" label="关联方式">
            {name == 'dataTable' ||
                (property === null || property === void 0 ? void 0 : property.echartsType) == 'circleAndPie' ||
                (property === null || property === void 0 ? void 0 : property.echartsType) == 'horizontalBar' ||
                (property === null || property === void 0 ? void 0 : property.echartsType) == 'verticalBar' ? (<Select placeholder="选择" onChange={handlePropertyDataMethodChange} allowClear={false}>
                <Option value="point">数据点</Option>
                <Option value="restful">接口传入</Option>
              </Select>) : (<Select placeholder="选择" onChange={handlePropertyDataMethodChange} allowClear={false} disabled>
                <Option value="point">数据点</Option>
                <Option value="restful">接口传入</Option>
              </Select>)}
          </Form.Item>
          </Col>
          {(property === null || property === void 0 ? void 0 : property.dataMethod) == 'restful' ? <React.Fragment>
              <Col span={24}>
               <Form.Item name="dataSourceId" label="接口来源">
                <Select showSearch style={{ width: 199 }} placeholder="接口来源" optionFilterProp="children" onChange={onDataSourceChange}>
                  {(dataSource || []).map(function (item) {
                    return (<Option value={item.id} key={item.id}>{item.source}</Option>);
                })}
                </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="dataSourceUrl" label="接口名称">
                <Select showSearch style={{ width: 199 }} placeholder="接口名称" optionFilterProp="children">
                  {(remoteInterfaces || []).map(function (item) {
                    return (<Option value={item.url} key={item.id}>{item.name}</Option>);
                })}
                </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="dataFormat" label="报文格式">
                  <TextArea placeholder="报文格式" autoSize={{ minRows: 2, maxRows: 10 }}/>
                </Form.Item>
              </Col>
              {/* <Col span={24}>
                  <Form.Item name="dataUrl" label="接口地址">
                    <TextArea
                        placeholder="请输入网页地址"
                        autoSize={{ minRows: 2, maxRows: 10 }}
                    />
                  </Form.Item>
                </Col> */}
              <Col span={15}>
                <Form.Item name="pullRate" label="拉取频率">
                  <InputNumber min={0} max={1000000}/>
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item name="pullRateUnit">
                  <Select style={{ width: 60 }}>
                  {[{ t: 1, n: '秒' }, { t: 60, n: '分' }, { t: 3600, n: '时' }].map(function (item) { return <Option key={item.t} value={item.t}>{item.n}</Option>; })}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={4}>
              <Form.Item>&nbsp;&nbsp;一次</Form.Item>
              </Col>
            </React.Fragment> : ''}
          {(property === null || property === void 0 ? void 0 : property.dataMethod) == 'point' ? <Col span={24}>
              <Form.Item label="数据点">
                <Button type="dashed" onClick={function () { return addDataPoint(); }} icon={<PlusOutlined />} style={{ color: "#096DD9" }}>
                  添加数据点
                </Button>
              </Form.Item>
            </Col> : ''}
          {(property === null || property === void 0 ? void 0 : property.dataMethod) == 'point' && ((property === null || property === void 0 ? void 0 : property.dataPointSelectedRows) || []).map(function (item, index) {
                return (<Col span={24} key={index}>
              <Form.Item label={"\u6570\u636E\u70B9".concat(index + 1)} key={index} wrapperCol={{ style: { alignItems: 'flex-end' } }}>
                <span>{item.dataName || item.name}</span>
                <Popconfirm placement="left" title="确定删除数据点吗？" onConfirm={function (y) { return handleDeleteConfirm(y, item); }} okText="是" cancelText="否">
                  <Button type="link" icon={<DeleteOutlined />}></Button>
                </Popconfirm>

              </Form.Item>
          </Col>);
            })}
          <Col span={24}>
            <Form.Item name="dataDot" label="显示精度">
              <InputNumber min={0} max={5}/>
            </Form.Item>
          </Col>
          {(data.node.image || data.node.name == 'pointEnergyCarousel' || data.node.name == 'arrowBtn' || data.node.name == 'VODCarousel' || data.node.name == 'stationCarousel' || data.node.name == 'emptyCom') && (<Col span={24}>
                  <Form.Item name="reqData" label="请求参数">
                    <TextArea rows={10}/>
                  </Form.Item>
                </Col>)}
          <Col span={24}>
            <Form.Item name="dataPointReq" label="绑定设备数据点">
              <TextArea />
            </Form.Item>
          </Col>
        </Row>
      </Form>);
    }, [data === null || data === void 0 ? void 0 : data.node, propertyForm, dataPointSelectedRows, dataSource, remoteInterfaces, refreshProperty]);
    /**
     * 渲染对齐方式
     */
    var renderAlign = useMemo(function () {
        return (<Row justify="space-around" style={{ borderBottom: '1px solid #d9d9d9' }}>
        {Object.keys(alignObj).map(function (key, index) {
                return (<Col key={index} span={4}>
              <Tooltip title={alignObj[key][0]} getPopupContainer={function () { return document.querySelector('#editLayout'); }}>
                <Button size="large" type="text" icon={<CustomIcon type={alignObj[key][1]}/>} onClick={function () { return handleAlign(key); }}/>
              </Tooltip>
            </Col>);
            })}
      </Row>);
    }, [alignObj, data === null || data === void 0 ? void 0 : data.node]);
    var checkCardRange = function () {
        var bottom = propertyForm.getFieldValue('limit.bottom');
        var top = propertyForm.getFieldValue('limit.top');
        if (top < bottom) {
            message.config({
                getContainer: function () { return document.getElementById('editLayout'); },
            });
            message.error('下限不能大于上限');
        }
    };
    var limitTypeOnChange = function (e) {
        var selectRows = data.node.property.dataPointSelectedRows;
        if (e.target.value === 'dataPoint' && selectRows && selectRows.length > 0) {
            var selectedData = selectRows[0];
            var scopeMin = !isNaN(Number(selectedData === null || selectedData === void 0 ? void 0 : selectedData.scopeMin))
                ? selectedData === null || selectedData === void 0 ? void 0 : selectedData.scopeMin
                : undefined;
            var scopeMax = !isNaN(Number(selectedData === null || selectedData === void 0 ? void 0 : selectedData.scopeMax))
                ? selectedData === null || selectedData === void 0 ? void 0 : selectedData.scopeMax
                : undefined;
            propertyForm.setFieldsValue({
                showLimit: property.showLimit,
                'limit.bottom': scopeMin,
                'limit.top': scopeMax,
            });
            data.node.property.limit.bottom = scopeMin;
            data.node.property.limit.top = scopeMax;
            onPropertyFormValueChange && onPropertyFormValueChange({
                showLimit: property.showLimit,
                'limit.bottom': scopeMin,
                'limit.top': scopeMax,
            });
        }
    };
    /**
     * 渲染数据卡片样式设置  property
     */
    var renderDataCard = useMemo(function () {
        var statusObj = {
            normal: '正常状态',
            bottomLimit: '低于下限',
            topLimit: '高于上限',
        };
        return (<Fragment>
        <Panel header="基本信息" key="info">
          <Form form={propertyForm} onValuesChange={handlePropertyValuesChange}>
            <Row>
              <Col span={10}>
                <Form.Item label="标题" name="showTitle" labelCol={{ span: 12 }} labelAlign="left" valuePropName="checked">
                  <Checkbox />
                </Form.Item>
              </Col>
              <Col span={14}>
                <Form.Item name="cardTitle">
                  <Input placeholder="标题名称" maxLength={20} style={{ width: "100%" }}/>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item name="limitType" label="上下限" labelCol={{ span: 9 }} labelAlign="left">
                  <Radio.Group options={[
                { label: ' 自定义 ', value: 'custom' },
                { label: ' 数据点 ', value: 'dataPoint' },
            ]} style={{ float: 'right' }} onChange={limitTypeOnChange} optionType="button" buttonStyle="solid"/>
                </Form.Item>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col span={4}>
                <Form.Item name="showLimit" valuePropName="checked">
                  <Checkbox />
                </Form.Item>
              </Col>
              <Col span={20}>
                <Input.Group compact>
                  <Form.Item name="limit.bottom" dependencies={['limit.top']} rules={[
                function (_a) {
                    var getFieldValue = _a.getFieldValue;
                    return ({
                        validator: function (_, value) {
                            if (!value || getFieldValue('limit.top') >= value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('');
                        },
                    });
                },
            ]}>
                    <InputNumber style={{ width: 88 }} placeholder="下限"/>
                  </Form.Item>
                  <Input style={{
                width: 30,
                pointerEvents: 'none',
            }} placeholder="~" disabled/>
                  <Form.Item name="limit.top" dependencies={['limit.bottom']} rules={[
                function (_a) {
                    var getFieldValue = _a.getFieldValue;
                    return ({
                        validator: function (_, value) {
                            if (!value || getFieldValue('limit.bottom') <= value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('');
                        },
                    });
                },
            ]}>
                    <InputNumber style={{ width: 88 }} placeholder="上限" onBlur={checkCardRange}/>
                  </Form.Item>
                </Input.Group>
              </Col>
            </Row>
          </Form>
        </Panel>
        {Object.keys(statusObj).map(function (key) {
                return (<Panel header={"\u6837\u5F0F-".concat(statusObj[key])} key={key}>
              <Form form={propertyForm} onValuesChange={handlePropertyValuesChange}>
                <Form.Item name={"".concat(key, ".fontFamily")} label="字体" labelCol={{ span: 7 }} labelAlign="left">
                  <Select allowClear getPopupContainer={function () {
                        return document.querySelector('#editLayout');
                    }}>
                    <Option value='"Microsoft YaHei"' style={{ fontFamily: '"Microsoft YaHei"' }}>
                      微软雅黑
                    </Option>
                    <Option value="SimSun" style={{ fontFamily: 'SimSun' }}>
                      宋体
                    </Option>
                    <Option value="KaiTi" style={{ fontFamily: 'KaiTi' }}>
                      楷体
                    </Option>
                    <Option value="SimHei" style={{ fontFamily: 'SimHei' }}>
                      黑体
                    </Option>
                    <Option value='"Hiragino Sans GB"' style={{ fontFamily: '"Hiragino Sans GB"' }}>
                      冬青黑体
                    </Option>
                    <Option value="Arial" style={{ fontFamily: 'Arial' }}>
                      Arial
                    </Option>
                    <Option value="Tahoma" style={{ fontFamily: 'Tahoma' }}>
                      Tahoma
                    </Option>
                    <Option value="Helvetica" style={{ fontFamily: 'Helvetica' }}>
                      Helvetica
                    </Option>
                  </Select>
                </Form.Item>
                <Row>
                  <Col span={7}>
                    <Form.Item label="颜色字号"></Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item name={"".concat(key, ".color")}>
                      <ColorPicker />
                    </Form.Item>
                  </Col>
                  <Col span={11}>
                    <Form.Item name={"".concat(key, ".fontSize")}>
                      <InputNumber min={12} style={{ width: "100%" }}/>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={7}>
                    <Form.Item label="背景颜色"></Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name={"".concat(key, ".showBkColor")} valuePropName="checked">
                      <Checkbox />
                    </Form.Item>
                  </Col>
                  <Col span={10}>
                    <Form.Item name={"".concat(key, ".bkColor")}>
                      <ColorPicker />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Panel>);
            })}
      </Fragment>);
    }, [propertyForm, property, data.node, property === null || property === void 0 ? void 0 : property.limitType, data.node, property === null || property === void 0 ? void 0 : property.dataPointSelectedRows]);
    // 改变指示灯大小
    var changePolitSize = function (size) {
        var node = data.node;
        if (propertyForm.getFieldValue('showText')) {
            node.text = propertyForm.getFieldValue('text');
        }
        node.rect.width = size * 2;
        node.rect.height = size * 2;
        form.setFieldsValue({ width: size * 2, height: size * 2 });
        node.property.size = size;
        propertyForm.setFieldsValue({ size: size });
        setPilotBtnSize(size === 15 ? 'small' : size === 20 ? 'middle' : 'large');
        canvas.updateProps(false, [node]);
    };
    var checkPilotSingleRepeat = function () {
        var vals = propertyForm
            .getFieldValue('lightRange')
            .map(function (item) { return item === null || item === void 0 ? void 0 : item.lightRangeVal; });
        var tmpSet = new Set(vals);
        if (tmpSet.size !== vals.length) {
            message.config({
                getContainer: function () { return document.getElementById('editLayout'); },
            });
            message.error('单点值不能重复');
        }
    };
    var checkPilotRangeRepeat = function () {
        var vals = propertyForm
            .getFieldValue('lightRange')
            .map(function (item) { return [item === null || item === void 0 ? void 0 : item.lightRangeBottom, item === null || item === void 0 ? void 0 : item.lightRangeTop]; });
        var flag = false;
        if (!vals.flat().includes(undefined)) {
            message.config({
                getContainer: function () { return document.getElementById('editLayout'); },
            });
            vals.some(function (item) {
                if (item[1] < item[0]) {
                    message.error('下限不能大于上限');
                    flag = true;
                    return true;
                }
            });
            if (flag)
                return;
            var nums = eraseOverlapIntervals(vals);
            if (nums.length !== 0) {
                message.error('范围值出现重叠');
            }
        }
    };
    /**
     * 渲染指示灯样式
     */
    var renderLight = useMemo(function () {
        var radioButtonStyle = { height: 26, lineHeight: '24px' };
        return (<Panel header="样式" key="biciLight">
        <Form form={propertyForm} onValuesChange={handlePropertyValuesChange} labelCol={{ span: 6 }} labelAlign="left">
          <Col span={24}>
            <Form.Item name="color" label="颜色">
              <ColorPicker />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="size" label="尺寸">
              <InputNumber placeholder="请输入直径" min={0} style={{ width: '100%' }} onChange={changePolitSize}/>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item wrapperCol={{ offset: 6 }}>
              <Button.Group style={{ width: '100%' }}>
                <Button block size="small" style={{
                background: pilotBtnSize === 'small' ? '#1890ff' : '#F0F0F0',
                color: pilotBtnSize === 'small' ? '#ffffff' : '#000000',
            }} onClick={function () { return changePolitSize(15); }}>
                  小
                </Button>
                <Button block size="small" style={{
                background: pilotBtnSize === 'middle' ? '#1890ff' : '#F0F0F0',
                color: pilotBtnSize === 'middle' ? '#ffffff' : '#000000',
            }} onClick={function () { return changePolitSize(20); }}>
                  中
                </Button>
                <Button block size="small" style={{
                background: pilotBtnSize === 'large' ? '#1890ff' : '#F0F0F0',
                color: pilotBtnSize === 'large' ? '#ffffff' : '#000000',
            }} onClick={function () { return changePolitSize(30); }}>
                  大
                </Button>
              </Button.Group>
            </Form.Item>
          </Col>
          <Row>
            <Col span={10}>
              <Form.Item name="showText" label="文字标签" labelCol={{ span: 16 }} valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
            <Col span={14}>
              <Form.Item name="text">
                <Input maxLength={10}/>
              </Form.Item>
            </Col>
          </Row>
          <Col span={24}>
            <Form.Item name="stateType" label="状态定义">
              <Radio.Group options={[
                { label: '单点值', value: 'single', style: radioButtonStyle },
                { label: '范围值', value: 'range', style: radioButtonStyle },
            ]} style={{ float: 'right' }} onChange={function () { return propertyForm.setFieldsValue({ lightRange: [] }); }} optionType="button" buttonStyle="solid"/>
            </Form.Item>
          </Col>
          <Form.List name="lightRange">
            {function (fields, _a) {
                var add = _a.add, remove = _a.remove;
                return (<Fragment>
                {fields.map(function (field) { return (<Space key={field.key} style={{ display: 'flex', marginBottom: 5 }} align="center" size="small">
                    <Form.Item {...field} name={[field.name, 'lightRangeColor']}>
                      <ColorPicker />
                    </Form.Item>
                    {propertyForm.getFieldValue('stateType') === 'single' && (<Fragment>
                        <Form.Item {...field} name={[field.name, 'lightRangeVal']} rules={[{ required: true, message: '必填' }]}>
                          <InputNumber placeholder="数值" onBlur={checkPilotSingleRepeat}/>
                        </Form.Item>
                        <Form.Item {...field} name={[field.name, 'lightRangeText']}>
                          <Input placeholder="文本"/>
                        </Form.Item>
                      </Fragment>)}

                    {propertyForm.getFieldValue('stateType') === 'range' && (<Fragment>
                        <Form.Item {...field} name={[field.name, 'lightRangeBottom']} rules={[{ required: true, message: '必填' }]}>
                          <InputNumber style={{ width: 60 }} placeholder="下限"/>
                        </Form.Item>

                        <Form.Item {...field} name={[field.name, 'lightRangeTop']} rules={[{ required: true, message: '必填' }]}>
                          <InputNumber style={{ width: 60 }} placeholder="上限" onBlur={checkPilotRangeRepeat}/>
                        </Form.Item>
                        <Form.Item {...field} name={[field.name, 'lightRangeText']}>
                          <Input style={{ width: 50 }} placeholder="文本"/>
                        </Form.Item>
                      </Fragment>)}
                    <Form.Item>
                      <MinusCircleOutlined onClick={function () { return remove(field.name); }}/>
                    </Form.Item>
                  </Space>); })}
                {fields.length < 10 && (<Form.Item>
                    <Button type="dashed" onClick={function () { return add(); }} block icon={<PlusOutlined />}>
                      添加
                    </Button>
                  </Form.Item>)}
              </Fragment>);
            }}
          </Form.List>
        </Form>
      </Panel>);
    }, [propertyForm, property, data === null || data === void 0 ? void 0 : data.node, pilotBtnSize]);
    /**
     * 渲染计量器样式
     */
    var renderMeter = useMemo(function () {
        return (<Panel header="样式" key="style">
        <Form form={propertyForm} onValuesChange={handlePropertyValuesChange}>
          {(data === null || data === void 0 ? void 0 : data.node.name) === 'biciMeasure' && (<React.Fragment>
            <Row>
              <Col span={10}>
                <Form.Item label="单位" name="chartUnitChecked" labelCol={{ span: 12 }} labelAlign="left" valuePropName="checked">
                  <Checkbox />
                </Form.Item>
              </Col>
              <Col span={14}>
                <Form.Item name="chartUnit">
                  <Input placeholder="单位" maxLength={5}/>
                </Form.Item>
              </Col>
            </Row>
              <Row>
                <Col span={10}>
                <Form.Item label="刻度" name="markChecked" labelCol={{ span: 12 }} labelAlign="left" valuePropName="checked">
                <Checkbox />
                </Form.Item>
                </Col>
                <Col span={14}>
                <Form.Item name="marks">
                  <InputNumber placeholder="刻度个数" min={1} max={100}></InputNumber>
                </Form.Item>
                </Col>
              </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item name="chartTitleColor" label="标题颜色" labelCol={{ span: 10 }} labelAlign="left">
                      <ColorPicker></ColorPicker>
                    </Form.Item>
                  </Col>
                </Row>
              </React.Fragment>)}
          <Row>
            <Col>
              <Form.Item label="范围"></Form.Item>
            </Col>
            <Col>
              <Input.Group compact>
                <Form.Item name="dataMin" dependencies={['dataMax']} rules={[
                function (_a) {
                    var getFieldValue = _a.getFieldValue;
                    return ({
                        validator: function (_, value) {
                            if (!value || getFieldValue('dataMax') >= value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('');
                        },
                    });
                },
            ]}>
                  <InputNumber style={{ width: 85 }} placeholder="下限"/>
                </Form.Item>
                <Input style={{
                width: 30,
                pointerEvents: 'none',
            }} placeholder="~" disabled/>
                <Form.Item name="dataMax" rules={[
                {
                    required: true,
                    message: ' ',
                },
                function (_a) {
                    var getFieldValue = _a.getFieldValue;
                    return ({
                        validator: function (rule, value) {
                            if (!value || getFieldValue('dataMin') <= value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(' ');
                        },
                    });
                },
            ]}>
                  <InputNumber style={{
                width: 85,
            }} placeholder="上限" required={true}/>
                </Form.Item>
              </Input.Group>
            </Col>
          </Row>
          {/*<Form.Item name="scale" label="刻度">*/}
          {/*  <Input placeholder="请输入个数" suffix="个" />*/}
          {/*</Form.Item>*/}
          <Row>
            <Form.Item label="颜色分区"></Form.Item>
          </Row>
          {((property === null || property === void 0 ? void 0 : property.dataColors) || []).map(function (item, index) { return (<Row key={index}>
              <Col span={3}>
                <Form.Item name={"checked-".concat(index)} valuePropName="checked">
                  <Checkbox />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name={"color-".concat(index)}>
                  <ColorPicker />
                </Form.Item>
              </Col>
              <Col span={15}>
                <Input.Group compact>
                  <Form.Item name={"bottom-".concat(index)}>
                    <InputNumber style={{ width: 60 }} placeholder="下限" disabled/>
                  </Form.Item>
                  <Input style={{ width: 30, pointerEvents: 'none' }} placeholder="~" disabled/>
                  <Form.Item name={"top-".concat(index)}>
                    <InputNumber style={{ width: 60 }} placeholder="上限"/>
                  </Form.Item>
                </Input.Group>
              </Col>
            </Row>); })}
        </Form>
      </Panel>);
    }, [property, data === null || data === void 0 ? void 0 : data.node]);
    /**
     * 渲染仪表盘样式
     */
    var renderGauge = useMemo(function () {
        return (<Fragment>
        <Panel header="基本信息" key="info">
          <Form form={propertyForm} onValuesChange={handlePropertyValuesChange}>
            <Row>
              <Col span={10}>
                <Form.Item label="标题" name="chartTitleChecked" labelCol={{ span: 12 }} labelAlign="left" valuePropName="checked">
                  <Checkbox />
                </Form.Item>
              </Col>
              <Col span={14}>
                <Form.Item name="chartTitle">
                  <Input placeholder="标题名称" maxLength={20}/>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <Form.Item label="单位" name="chartUnitChecked" labelCol={{ span: 12 }} labelAlign="left" valuePropName="checked">
                  <Checkbox />
                </Form.Item>
              </Col>
              <Col span={14}>
                <Form.Item name="chartUnit">
                  <Input placeholder="单位" maxLength={20}/>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <Form.Item label="刻度" name="markChecked" labelCol={{ span: 12 }} labelAlign="left" valuePropName="checked">
                  <Checkbox />
                </Form.Item>
              </Col>
              <Col span={13}>
                <Form.Item name="marks">
                  <InputNumber placeholder="刻度个数" min={1} max={100}></InputNumber>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item name="chartTitleColor" label="标题颜色" labelCol={{ span: 10 }} labelAlign="left">
                  <ColorPicker></ColorPicker>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Panel>
        {renderMeter}
      </Fragment>);
    }, [property, data === null || data === void 0 ? void 0 : data.node]);
    /**
     * 渲染实时曲线图样式
     */
    var renderLineGraph = useMemo(function () {
        var _a;
        return (<Fragment>
        <Panel header="基本信息" key="lineInfo">
          <Form form={propertyForm} onValuesChange={handlePropertyValuesChange}>
            <Row>
              <Col span={6}>
                <Form.Item label="标题" name="chartTitleChecked" valuePropName="checked">
                  <Checkbox />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="chartTitleColor">
                  <ColorPicker />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="chartTitle">
                  <Input placeholder="标题" maxLength={20}/>
                </Form.Item>
              </Col>
            </Row>
            <Col span={24}>
              <Form.Item label="上下限" name="limitType">
                <Radio.Group options={[
                { label: '自定义', value: 'custom' },
                { label: '数据点', value: 'dataPoint' },
            ]} style={{ float: 'right' }} optionType="button" buttonStyle="solid" onChange={function (value) {
                if (value.target.value == 'custom') {
                    setShowSelectDataPoint(true);
                }
                else {
                    setShowSelectDataPoint(false);
                }
            }}/>
              </Form.Item>
            </Col>
            <Row justify="space-between">
              <Col>
                <Form.Item name="dataTopChecked" valuePropName="checked">
                  <Checkbox />
                </Form.Item>
              </Col>
              <Col>
                <Input.Group compact>
                  <Form.Item name="dataBottom" dependencies={['dataTop']} rules={[
                function (_a) {
                    var getFieldValue = _a.getFieldValue;
                    return ({
                        validator: function (_, value) {
                            if (!value || getFieldValue('dataTop') >= value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('');
                        },
                    });
                },
            ]}>
                    <InputNumber style={{ width: 85 }} placeholder="下限" readOnly={!showSelectDataPoint}/>
                  </Form.Item>
                  <Input style={{
                width: 30,
                pointerEvents: 'none',
            }} placeholder="~" disabled/>
                  <Form.Item name="dataTop" dependencies={['dataBottom']} rules={[
                function (_a) {
                    var getFieldValue = _a.getFieldValue;
                    return ({
                        validator: function (_, value) {
                            if (!value || getFieldValue('dataBottom') <= value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('');
                        },
                    });
                },
            ]}>
                    <InputNumber style={{
                width: 85,
            }} placeholder="上限" readOnly={!showSelectDataPoint}/>
                  </Form.Item>
                </Input.Group>
              </Col>
            </Row>
            <Row style={{
                display: showSelectDataPoint ? 'none' : 'block',
            }}>
              <Col push={4} span={20}>
                <Form.Item name="selectDataPoint">
                  <Select style={{ width: '100%' }} onChange={handleChangeDataPoint} placeholder="选择数据点">
                    {(((_a = data.node.property) === null || _a === void 0 ? void 0 : _a.dataPointSelectedRows) || []).map(function (item, index) {
                return (<Option value={item.scopeMin + '~' + item.scopeMax} key={index}>
                            {item.dataName}
                          </Option>);
            })}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Panel>
        <Panel header="样式" key="lineStyle">
          <Form form={propertyForm} onValuesChange={handlePropertyValuesChange}>
            <Col span={24}>
              <Form.Item label="线型" name="smooth">
                <Radio.Group options={[
                { label: '曲线', value: true },
                { label: '折线', value: false },
            ]} style={{ float: 'right' }} optionType="button" buttonStyle="solid"/>
              </Form.Item>
            </Col>
            <Row>
              <Col span={10}>
                <Form.Item label="背景色" labelCol={{ span: 16 }} labelAlign="left" name="chartBackgroundChecked" valuePropName="checked">
                  <Checkbox />
                </Form.Item>
              </Col>
              <Col span={12} push={2}>
                <Form.Item name="chartBackgroundColor">
                  <ColorPicker />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <Form.Item label="参考线" labelCol={{ span: 16 }} labelAlign="left" name="lineReferenceChecked" valuePropName="checked">
                  <Checkbox />
                </Form.Item>
              </Col>
              <Col span={12} push={2}>
                <Form.Item name="lineReferenceColor">
                  <ColorPicker />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item label="曲线颜色"></Form.Item>
              </Col>
              <Col span={16}>
                <Form.List name="lineGraphRange">
                  {function (fields, _a) {
                var add = _a.add, remove = _a.remove;
                return (<Fragment>
                        {fields.map(function (field) { return (<Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="center" size={20}>
                              <Form.Item {...field} name={[field.name, 'lineGraphRangeCheck']} valuePropName="checked" style={{ marginBottom: 0 }}>
                                <Checkbox />
                              </Form.Item>
                              <Form.Item {...field} name={[field.name, 'lineGraphRangeColor']} style={{ marginBottom: 0 }}>
                                <ColorPicker />
                              </Form.Item>
                              <Form.Item style={{ display: 'none' }}>
                                <MinusCircleOutlined ref={removeLineColorBtnRef} onClick={function () { return remove(field.name); }}/>
                              </Form.Item>
                            </Space>); })}
                        {fields.length < 10 ? (<Form.Item style={{ display: 'none' }}>
                              <Button type="dashed" ref={addLineColorBtnRef} onClick={function () { return add(); }} block icon={<PlusOutlined />}>
                                添加
                              </Button>
                            </Form.Item>) : null}
                      </Fragment>);
            }}
                </Form.List>
              </Col>
            </Row>

          </Form>
        </Panel>
      </Fragment>);
    }, [property, data === null || data === void 0 ? void 0 : data.node, showSelectDataPoint, refreshProperty]);
    // 动态渲染style表单
    var dynamicForm = useMemo(function () {
        var _a, _b;
        return (<CustomizedDynamicForm formStyle={(_b = (_a = data === null || data === void 0 ? void 0 : data.node.property) === null || _a === void 0 ? void 0 : _a.form) === null || _b === void 0 ? void 0 : _b.style} onChange={function (group, fields) {
                onCustomizedDynamicFormChange && onCustomizedDynamicFormChange(group, fields);
                setRefreshProperty(!refreshProperty);
            }}/>);
    }, [(_e = data === null || data === void 0 ? void 0 : data.node) === null || _e === void 0 ? void 0 : _e.id, refreshProperty]);
    // 渲染视频直播组件的数据属性
    var renderVideoProp = useMemo(function () {
        return (<Form form={propertyForm} onValuesChange={handlePropertyValuesChange}>
        {name == 'liveVideo' ? (<React.Fragment>
                <Row>
                  <Col>
                    <Form.Item label="视频源">
                      <Button type="dashed" onClick={function () { return addVedioSource(); }} icon={<PlusOutlined />} style={{ color: "#096DD9" }}>
                        添加视频源
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  {(selectedVideoRows || []).map(function (item, index) {
                    return (<Col span={24} key={index}>
                          <Form.Item label={"\u89C6\u9891\u6E90".concat(index + 1)} key={index} wrapperCol={{ style: { alignItems: 'flex-end' } }}>
                            <span>{item.deviceName}&nbsp;|&nbsp;{item.name}</span>
                            <Popconfirm placement="left" title="确定删视频源吗？" onConfirm={function (y) { return handleDeleteVideoConfirm(y, item); }} okText="是" cancelText="否">
                              <Button type="link" icon={<DeleteOutlined />}></Button>
                            </Popconfirm>

                          </Form.Item>
                        </Col>);
                })}
                </Row>
              </React.Fragment>) : ''}

        {name == 'QTLiveVideo' ? (<Row>
                <Col span={24}>
                  <Form.Item name="videoURL" label="RTSP直播源">
                    <TextArea rows={4} placeholder='例如：rtsp://36.156.138.177:554/ceshi1.rtsp'/>
                  </Form.Item>
                </Col>
              </Row>) : ''}
      </Form>);
    }, [(_f = data === null || data === void 0 ? void 0 : data.node) === null || _f === void 0 ? void 0 : _f.id, refreshProperty, selectedVideoRows]);
    var divHeight = document.body.clientHeight - 200;
    return (<div className={styles.rightArea} style={{ overflow: 'hidden' }}>
      {renderAlign}
      {!data.multi && (<Tabs defaultActiveKey="1" centered>
          <TabPane tab="&nbsp;&nbsp;&nbsp;&nbsp;外&nbsp;&nbsp;观&nbsp;&nbsp;&nbsp;&nbsp;" key="1" style={{ margin: 0 }}>
            <div style={{ height: divHeight, overflowX: "hidden" }}>
              <Collapse defaultActiveKey={['pos', 'lineInfo', 'lineStyle', 'info', 'style']} expandIconPosition="right" ghost={false} bordered={false}>
                {renderPositionForm}
                {fontStyleNodeList.includes(name) && renderFontForm}
                {fillStyleNodeList.includes(name) && renderFillStyle}
                {boardStyleNodeList.includes(name) && renderBorderStyle}
                {name === 'biciPilot' && renderLight}
                {name === 'biciTimer' && renderBiciTimerDataForm}
                {name === 'biciCard' && renderDataCard}
                {(data === null || data === void 0 ? void 0 : data.node.name) === 'biciMeasure' && renderMeter}
                {(property === null || property === void 0 ? void 0 : property.echartsType) === 'timeLine' && renderLineGraph}
                {(property === null || property === void 0 ? void 0 : property.echartsType) === 'gauge' && renderGauge}
                {(name === 'webPage' || name == "biciText" || name == "dataTable" ||
                (property === null || property === void 0 ? void 0 : property.echartsType) == 'circleAndPie' ||
                (property === null || property === void 0 ? void 0 : property.echartsType) == 'stackBar' ||
                (property === null || property === void 0 ? void 0 : property.echartsType) == 'horizontalBar' ||
                (property === null || property === void 0 ? void 0 : property.echartsType) == 'verticalBar' ||
                (property === null || property === void 0 ? void 0 : property.echartsType) == 'groupBar') && dynamicForm}
              </Collapse>
            </div>
          </TabPane>
          <TabPane tab="&nbsp;&nbsp;&nbsp;&nbsp;数&nbsp;&nbsp;据&nbsp;&nbsp;&nbsp;&nbsp;" key="2" style={{ margin: 0 }}>
          <div style={{ height: divHeight, overflowX: "hidden" }}>
            <Row style={{ margin: "0 15px" }}>
              <Col span={24}>
                {(data.node.name == 'biciVarer' ||
                data.node.name == 'echarts' ||
                data.node.name == 'biciCard' ||
                data.node.name == 'biciCard2' ||
                data.node.name == 'biciPilot' ||
                data.node.name == 'biciMeasure' ||
                data.node.name == 'biciText' ||
                data.node.name == 'productQueue' ||
                data.node.name == 'dataTable' ||
                data.node.name == 'pdMonthReport' ||
                data.node.name == 'rectangle' ||
                data.node.name == 'pointEnergyCarousel' ||
                data.node.name == 'statusBtn' ||
                data.node.name == 'emptyCom' ||
                data.node.name == 'stationCarousel' ||
                data.node.name == 'dateFormat' ||
                data.node.name == 'VODCarousel') && renderExtraDataForm}
                {(data.node.name == 'liveVideo' || data.node.name == 'QTLiveVideo') && renderVideoProp}
              </Col>
            </Row>
            </div>
          </TabPane>
        </Tabs>)}
      {visible && renderDataPointModal()}
    </div>);
});
export default NodeCanvasProps;
//# sourceMappingURL=index.js.map