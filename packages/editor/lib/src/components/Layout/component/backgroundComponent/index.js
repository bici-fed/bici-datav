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
import React, { useMemo, useEffect, useState } from 'react';
import { Form, Row, Col, Input, Collapse, Button, Popover, Upload, Checkbox, message, InputNumber, } from 'antd';
import { DownOutlined, UploadOutlined } from '@ant-design/icons';
import ColorPicker from '../../../common/ColorPicker/ColorPicker';
import ReactSwitch from '../../../common/ReactSwitch';
import { canvas } from '../../index';
import CustomIcon from '../../../config/iconConfig';
import { dynamicWebSocketData } from '../../../common/DynamicWebSocketData';
import { calcCanvas } from '../../../utils/cacl';
import * as _ from 'lodash';
var Panel = Collapse.Panel;
var panelSizeObj = {
    '16:9': ['1920*1080', '1680*1050', '1600*900', '1366*768'],
    '4:3': ['1024*768', '800*600'],
    '2:3': ['1280*1920', '768*1024', '640*960', '600*800'],
};
var BackgroundCanvasProps = function (_a) {
    var data = _a.data, baseUrl = _a.baseUrl, onChangeCanvasSize = _a.onChangeCanvasSize, onChangeBkImage = _a.onChangeBkImage, websocketConf = _a.websocketConf, uploadConfig = _a.uploadConfig, props = __rest(_a, ["data", "baseUrl", "onChangeCanvasSize", "onChangeBkImage", "websocketConf", "uploadConfig"]);
    var form = Form.useForm()[0];
    var _b = useState(data.canvas.width <= data.canvas.height), rcSwitchState = _b[0], setRcSwitchState = _b[1]; // 页面布局切换
    var _c = useState(''), bkUrl = _c[0], setBkUrl = _c[1]; // 保存背景图片url地址
    // 控制Popover的显示隐藏
    var _d = useState({
        resolution: false,
        bgSelect: false, // 预设背景选择
    }), popoverVisible = _d[0], setPopoverVisible = _d[1];
    var _e = useState(websocketConf.url), wsAddress = _e[0], setWsAddress = _e[1];
    var _f = useState("预设背景"), preBgImageName = _f[0], setPreBgImageName = _f[1];
    useEffect(function () {
        // 回显数值
        var w = data.canvas.width;
        var h = data.canvas.height;
        var bgColor = data.data.bkColor;
        // const bkImage = data.data.bkImage;
        var isUploadBgImg = false;
        if (data.data.bkImage) {
            isUploadBgImg = !props.preInstallBgImages
                .map(function (item) { return item.img; })
                .includes(data.data.bkImage);
            var index = _.findIndex(props.preInstallBgImages, function (item) { return item.img == data.data.bkImage; });
            console.log("index==", index, props.preInstallBgImages, data.data.bkImage);
            if (index >= 0) {
                setPreBgImageName("预设背景" + (index + 1));
                form.setFieldsValue({
                    bgVal: "预设背景" + (index + 1)
                });
            }
        }
        var sizeValText = Object.values(panelSizeObj).flat().includes("".concat(w, "*").concat(h))
            ? "\u9884\u8BBE\u00B7".concat(w, "*").concat(h)
            : Object.values(panelSizeObj).flat().includes("".concat(h, "*").concat(w))
                ? "\u9884\u8BBE\u00B7".concat(h, "*").concat(w)
                : "\u81EA\u5B9A\u4E49";
        form.setFieldsValue({
            sizeVal: sizeValText,
            w: w,
            h: h,
            bgColor: bgColor,
            bgColorCheck: !!bgColor,
            bgImgCheck: isUploadBgImg,
            gridCheck: data.data.grid ? data.data.grid : false,
            gridSize: data.data.gridSize,
            gridColor: data.data.gridColor,
        });
    }, [form]);
    /**
     * 渲染位置和大小的表单
     */
    var handleFormValueChange = function (changeValues) {
        if (changeValues.bgColor) {
            data.data['bkColor'] = changeValues.bgColor;
            data.render();
            form.setFieldsValue({ bgColorCheck: true });
        }
        if (changeValues.gridSize) {
            var gridSize = parseInt(changeValues.gridSize);
            data.data['gridSize'] = gridSize;
            if (data.data.grid) {
                canvas.render();
            }
        }
        else if (changeValues.gridColor) {
            data.data['gridColor'] = changeValues.gridColor;
            if (data.data.grid) {
                canvas.render();
            }
        }
        props.setIsSave(false);
    };
    // 背景图片checkbox切换
    var handleBgImgChange = function (e) {
        if (e.target.checked) {
            selectedBgImg(bkUrl);
        }
        else {
            canvas.clearBkImg();
            delete data.data['bkImage'];
            canvas.render();
            onChangeBkImage && onChangeBkImage('');
            props.setIsSave(false);
        }
    };
    var beforeUpload = function (file) {
        var isLt1M = file.size / 1024 / 1024 / 1024 < 10;
        if (!isLt1M) {
            message.error('上传图片不可大于10M');
        }
        return isLt1M;
    };
    // 画布背景图片上传
    var bgUploadChange = function (_a) {
        var file = _a.file;
        if (file.status === 'done') {
            var url = file.response.data[0];
            selectedBgImg(url);
            setBkUrl(url);
            form.setFieldsValue({ bgImgCheck: true });
        }
    };
    // 设置背景图片
    var selectedBgImg = function (url, item) {
        if (item === void 0) { item = undefined; }
        if (data.data['bkImage'] && data.data['bkImage'] === url) {
            // 再次点击，取消图片
            canvas.clearBkImg();
            data.data['bkImage'] = undefined;
            onChangeBkImage && onChangeBkImage('预设背景');
            setPreBgImageName("预设背景");
            form.setFieldsValue({
                bgVal: "预设背景"
            });
        }
        else {
            // 修改背景图片前，需要先canvas.clearBkImg清空旧图片
            canvas.clearBkImg();
            data.data['bkImage'] = url;
            onChangeBkImage && onChangeBkImage(url);
            if (item) {
                setPreBgImageName("预设背景" + item.key);
                form.setFieldsValue({
                    bgVal: "预设背景" + item.key
                });
            }
            else {
                setPreBgImageName("预设背景");
                form.setFieldsValue({
                    bgVal: "预设背景"
                });
            }
        }
        setPopoverVisible(__assign(__assign({}, popoverVisible), { bgSelect: false }));
        canvas.render();
        props.setIsSave(false);
    };
    // 背景颜色显示隐藏
    var bkColorCheckChange = function (e) {
        var result = e.target.checked ? form.getFieldValue('bgColor') : '#ccc';
        data.data['bkColor'] = result;
        if (!e.target.checked) {
            delete data.data['bkColor'];
        }
        canvas.render();
        props.setIsSave(false);
    };
    // 网格选择切换
    var gridOnChange = function (e) {
        // canvas.showGrid(e.target.checked);
        data.data.grid = e.target.checked;
        data.data.gridSize = form.getFieldValue('gridSize');
        canvas.render();
        props.setIsSave(false);
    };
    // 设置宽高
    var panelSizeChange = function () {
        var _a = form.getFieldsValue(['w', 'h']), w = _a.w, h = _a.h;
        var width = parseInt(w);
        var height = parseInt(h);
        var r = calcCanvas(width, height);
        data.resize({ width: width, height: height });
        canvas.render();
        onChangeCanvasSize && onChangeCanvasSize(__assign(__assign({}, r), { width: width, height: height }));
        form.setFieldsValue({ sizeVal: "\u81EA\u5B9A\u4E49" });
    };
    // 画布布局切换
    var handleRCSwitchStateChange = function () {
        setRcSwitchState(!rcSwitchState);
        // 宽高互换
        var width = data.canvas.height;
        var height = data.canvas.width;
        var r = calcCanvas(width, height);
        data.resize({ width: width, height: height });
        canvas.render();
        onChangeCanvasSize && onChangeCanvasSize(__assign(__assign({}, r), { width: width, height: height }));
        form.setFieldsValue({
            w: width,
            h: height,
        });
    };
    // 选择画布大小后重新渲染画布
    var selectedResolution = function (size) {
        var width = +size.split('*')[0];
        var height = +size.split('*')[1];
        form.setFieldsValue({
            w: width,
            h: height,
            sizeVal: "\u9884\u8BBE\u00B7".concat(width, "*").concat(height),
        });
        setRcSwitchState(!(width > height));
        // 隐藏Popover
        setPopoverVisible(__assign(__assign({}, popoverVisible), { resolution: false }));
        var r = calcCanvas(width, height);
        canvas.resize({ width: width, height: height });
        onChangeCanvasSize && onChangeCanvasSize(__assign(__assign({}, r), { width: width, height: height }));
    };
    // 分辨率Popover
    var resolutionContent = useMemo(function () {
        return (<div>
        {Object.keys(panelSizeObj).map(function (key, index) {
                return (<div key={index}>
              <h3>{key}</h3>
              <Row gutter={[0, 16]}>
                {panelSizeObj[key].map(function (val, index) {
                        return (<Col span={12} key={index}>
                      <a href="#" onClick={function (e) {
                                e.preventDefault();
                                selectedResolution(val);
                            }}>
                        {val}
                      </a>
                    </Col>);
                    })}
              </Row>
            </div>);
            })}
      </div>);
    }, [panelSizeObj]);
    var bgSeletedContent = (<div>
      <h3>预设图片</h3>
      <div style={{ maxHeight: 500, overflowY: 'scroll' }}>
        {(props.preInstallBgImages || []).map(function (item) {
            return (<Row key={item.key} style={{
                    position: 'relative',
                    cursor: 'pointer',
                    border: '1px solid #096DD9',
                    boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.06)',
                }} onClick={function () { return selectedBgImg(item.img, item); }}>
                <img src={item.img} alt={"\u9884\u8BBE\u80CC\u666F".concat(item)} width={260} height={120}/>
                <Checkbox style={{ position: 'absolute', top: 0, right: '5px' }} checked={item.img === data.data.bkImage}/>
              </Row>);
        })}
      </div>
    </div>);
    var renderDefultOptions = (<Collapse defaultActiveKey={['1', '2', '3']} expandIconPosition="right" ghost={false} bordered={false}>
      <Panel header="基础属性" key="1">
        <Form form={form}>
          <Popover placement="bottom" trigger="click" transitionName="" content={resolutionContent} visible={popoverVisible.resolution} onVisibleChange={function (visible) {
            return setPopoverVisible(__assign(__assign({}, popoverVisible), { resolution: visible }));
        }} getPopupContainer={function () { return document.querySelector('#editLayout'); }}>
            <Form.Item name="sizeVal" initialValue="自定义">
              <Input suffix={<DownOutlined />} readOnly/>
            </Form.Item>
          </Popover>

          <Row style={{ marginTop: 15 }} gutter={[9, 0]} align="middle">
            <Col span={9}>
              <Form.Item name="w">
                <Input suffix="W" onChange={panelSizeChange}/>
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item name="h">
                <Input suffix="H" onChange={panelSizeChange}/>
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item>
                <ReactSwitch onChange={handleRCSwitchStateChange} checked={rcSwitchState} offHandleColor="#096DD9" onHandleColor="#096DD9" offColor="#ccc" onColor="#ccc" uncheckedIcon={<CustomIcon style={{ lineHeight: 2.2 }} type="iconshu"/>} checkedIcon={<CustomIcon style={{ lineHeight: 2.2 }} type="iconheng"/>}/>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Panel>
      <Panel header="背景" key="2">
        <Form form={form} onValuesChange={handleFormValueChange}>
          <Popover placement="bottom" trigger="click" transitionName="" content={bgSeletedContent} arrowPointAtCenter autoAdjustOverflow={false} visible={popoverVisible.bgSelect} onVisibleChange={function (visible) {
            return setPopoverVisible(__assign(__assign({}, popoverVisible), { bgSelect: visible }));
        }} getPopupContainer={function () { return document.querySelector('#editLayout'); }}>
            <Form.Item name="bgVal" initialValue={preBgImageName}>
              <Input readOnly suffix={<DownOutlined />}/>
            </Form.Item>
          </Popover>

          <Row style={{ marginTop: 15 }} align="middle">
            <Col push={1}>
              <Form.Item name="bgColorCheck" label="背景颜色" valuePropName="checked">
                <Checkbox onChange={bkColorCheckChange}/>
              </Form.Item>
            </Col>
            <Col push={2}>
              <Form.Item name="bgColor">
                <ColorPicker />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col push={1}>
              <Form.Item name="bgImgCheck" label="背景图片" valuePropName="checked">
                <Checkbox onChange={handleBgImgChange}/>
              </Form.Item>
            </Col>
            <Col push={2}>
              <Form.Item>
                <Upload action={"".concat(uploadConfig.preInstall.baseURL, "/").concat(uploadConfig.preInstall.url)} accept="image/*" data={uploadConfig.preInstall.data} headers={{
            token: uploadConfig.preInstall.token,
        }} showUploadList={false} beforeUpload={beforeUpload} onChange={bgUploadChange}>
                  <Button icon={<UploadOutlined />}>上传</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Panel>
      <Panel header="网格" key="3">
        <Form form={form} onValuesChange={handleFormValueChange}>
          <Row align="middle">
            <Col push={1}>
              <Form.Item name="gridCheck" label="网格" valuePropName="checked">
                <Checkbox onChange={gridOnChange}/>
              </Form.Item>
            </Col>
            <Col push={2}>
              <Form.Item name="gridColor">
                <ColorPicker />
              </Form.Item>
            </Col>
            <Col push={3} span={8}>
              <Form.Item name="gridSize" initialValue={30}>
                <InputNumber min={1}/>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Panel>
    </Collapse>);
    /**
     * 发起websocket连接
     */
    var onHandleConnectWS = function () {
        canvas.openSocket(wsAddress);
        // 将绑定获得wenbsocket数据
        dynamicWebSocketData();
        // const index = new WebSocket(wsAddress);
        // //打开事件
        // index.onopen = function() {
        //
        //   index.send(JSON.stringify({
        //     qtDataList: [{id: "6413f3a606754c31987ec584ed56d5b7", type: 2},{id: "b32723eaebfe48aaa0f85970c3a39036", type: 2}],
        //     subscribe: true
        //   }));
        // };
        // //获得消息事件
        // index.onmessage = function(msg) {
        //   //发现消息进入    开始处理前端触发逻辑
        // };
        // //关闭事件
        // index.onclose = function() {
        // };
        // //发生了错误事件
        // index.onerror = function() {
        //   alert("Socket发生了错误");
        //   //此时可以尝试刷新页面
        // }
    };
    return (<div>
      {/*<Tabs defaultActiveKey="1" tabBarStyle={{ padding: '0 20px' }}>*/}
      {/*  <TabPane tab="图文设置" key="1">*/}
      {/*    {renderDefultOptions}*/}
      {/*     <ul className={styles.bottomTip}>*/}
      {/*      <li>← ↑ → ↓ ：移动5个像素</li>*/}
      {/*      <li>Ctrl + 鼠标点击：多选</li>*/}
      {/*      <li>Ctrl + 鼠标滚轮：缩放画布</li>*/}
      {/*      <li>Ctrl + ← ↑ → ↓ ：移动1个像素</li>*/}
      {/*      <li>Ctrl + 鼠标拖拽空白：移动整个画布</li>*/}
      {/*      <li>Shift/Alt + 鼠标拖拽节点：独立拖拽（子）节点</li>*/}
      {/*    </ul> */}
      {/*  </TabPane>*/}
      {/*  <TabPane tab="消息通信" key="2" style={{ margin: 0 }}>*/}
      {/*    <Collapse defaultActiveKey={['1']}>*/}
      {/*      <Panel header="websocket地址" key="1">*/}
      {/*        <TextArea*/}
      {/*          placeholder="请输入websocket地址"*/}
      {/*          value={wsAddress}*/}
      {/*          onChange={(e) => setWsAddress(e.target.value)}*/}
      {/*        />*/}
      {/*        <Button*/}
      {/*          type="primary"*/}
      {/*          style={{ width: 265, marginTop: 10 }}*/}
      {/*          onClick={() => onHandleConnectWS()}*/}
      {/*        >*/}
      {/*          测试连接*/}
      {/*        </Button>*/}
      {/*      </Panel>*/}
      {/*    </Collapse>*/}
      {/*  </TabPane>*/}
      {/*</Tabs>*/}
      {renderDefultOptions}
    </div>);
};
export default BackgroundCanvasProps;
//# sourceMappingURL=index.js.map