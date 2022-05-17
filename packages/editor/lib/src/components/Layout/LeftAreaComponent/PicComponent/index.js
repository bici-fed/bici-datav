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
import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Upload, Form, message, Collapse } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { clientParam } from '../../../data/api';
import { useClickAway } from 'ahooks';
import CompContextMenu from '../../../common/CompContextMenu';
import styles from './index.module.less';
import { industry_List, onDrag } from './config';
import IndustryList from "./IndustryList";
var Panel = Collapse.Panel;
var Layout = function (_a) {
    var _b;
    var uploaConfig = _a.uploaConfig, industrialLibrary = _a.industrialLibrary;
    var formRef = Form.useForm()[0];
    // 是否显示右键菜单
    var _c = useState(false), showContextmenu = _c[0], setShowContextmenu = _c[1];
    var _d = useState([]), list = _d[0], setList = _d[1];
    var _e = useState({
        position: 'fixed',
        zIndex: '10',
        display: 'none',
        left: '',
        top: '',
        bottom: '',
    }), contextmenu = _e[0], setContextmenu = _e[1];
    var _f = useState(null), selectedItem = _f[0], setSelectedItem = _f[1];
    var contextMenuRef = useRef();
    var divHeight = document.body.clientHeight - 170;
    useEffect(function () {
    }, []);
    useClickAway(function () {
        setShowContextmenu(false);
    }, contextMenuRef);
    useEffect(function () {
        requstPicList();
    }, [uploaConfig.self]);
    // 请求获取图片列表
    var requstPicList = function () {
        clientParam(uploaConfig.self.baseURL)
            .request({
            url: uploaConfig.self.apiUrl.list,
            data: uploaConfig.self.data,
            params: uploaConfig.self.data,
            method: 'get',
            headers: {
                token: uploaConfig.self.token,
                'Content-Type': 'application/json',
            },
        })
            .then(function (res) {
            var data = res.data.data;
            if (data) {
                data.forEach(function (item) {
                    item.name = item.name.substring(0, item.name.lastIndexOf('.'));
                    item.type = item.name.substring(item.name.lastIndexOf('.') + 1);
                    // getBase64(item.url, (data: string) => {
                    //   item.url = item.url;
                    // });
                });
            }
            setList(data);
        });
    };
    function getBase64(url, callback) {
        var Img = new Image();
        var dataURL = '';
        Img.src = url + '?v=' + Math.random();
        Img.setAttribute('crossOrigin', 'Anonymous');
        Img.onload = function () {
            var canvas = document.createElement('canvas');
            var width = Img.width;
            var height = Img.height;
            canvas.width = width;
            canvas.height = height;
            canvas.getContext('2d').drawImage(Img, 0, 0, width, height);
            dataURL = canvas.toDataURL('image/png');
            return callback ? callback(dataURL) : null;
        };
    }
    var beforeUpload = function (file) {
        var isLt1M = file.size / 1024 / 1024 < 1;
        if (!isLt1M) {
            message.error('上传图片不可大于1M');
        }
        return isLt1M;
    };
    var onHandleUpload = function (_a) {
        var file = _a.file;
        if (file.status === 'done') {
            requstPicList();
        }
    };
    // 确定重命名
    var handleOk = function () { return __awaiter(void 0, void 0, void 0, function () {
        var values, errorInfo_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, formRef.validateFields(['componentName'])];
                case 1:
                    values = _a.sent();
                    clientParam(uploaConfig.baseURL)
                        .post(uploaConfig.self.apiUrl.update, {
                        id: selectedItem.id,
                        name: values.componentName + '.' + selectedItem.type,
                    }, {
                        headers: {
                            'X-Requested-With': 'XMLHttpRequest',
                            token: uploaConfig.self.token,
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(function (res) {
                        message.success('重命名成功！');
                        requstPicList();
                    });
                    return [3 /*break*/, 3];
                case 2:
                    errorInfo_1 = _a.sent();
                    console.error('Failed:', errorInfo_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleDelete = function () {
        if (selectedItem == null) {
            message.error('请选择要删除的组件！').then(function () {
                message.destroy();
            });
            return;
        }
        clientParam(uploaConfig.baseURL)
            .get(uploaConfig.self.apiUrl.delete, {
            headers: {
                token: uploaConfig.self.token,
            },
            params: {
                id: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.id,
            },
        })
            .then(function (res) {
            message.success('删除组件成功！', 2, function () {
                message.destroy();
                return null;
            });
            requstPicList();
        });
    };
    // 右键菜单
    var handleContextMenu = function (event, item) {
        setShowContextmenu(!showContextmenu);
        setSelectedItem(item);
        event.preventDefault();
        event.stopPropagation();
        if (event.clientY + 360 < document.body.clientHeight) {
            setContextmenu({
                position: 'fixed',
                zIndex: '10',
                display: 'block',
                left: event.clientX + 'px',
                top: event.clientY + 'px',
                bottom: '',
            });
        }
        else {
            setContextmenu({
                position: 'fixed',
                zIndex: '10',
                display: 'block',
                left: event.clientX + 'px',
                top: '',
                bottom: document.body.clientHeight - event.clientY + 'px',
            });
        }
    };
    return (<div className={styles.container}>
      <Collapse defaultActiveKey={['999']} expandIconPosition="right" ghost={false} bordered={false} style={{ height: divHeight, overflow: "auto" }}>

        {/*<Panel header="工业图库" key="9999">*/}
        {/*  <Row>*/}
        {/*    {industrialLibrary?.map((item, index) => (*/}
        {/*        <Col*/}
        {/*            key={index}*/}
        {/*            span={8}*/}
        {/*            className={styles.colStyle}*/}
        {/*            style={{ textAlign: 'center' }}*/}
        {/*        >*/}
        {/*          <a*/}
        {/*              title={item.name}*/}
        {/*              draggable*/}
        {/*              href="#"*/}
        {/*              onClick={(e) => e.preventDefault()}*/}
        {/*              onDragStart={(ev) => onDrag(ev, item)}*/}
        {/*          >*/}
        {/*            <img*/}
        {/*                alt={item.name}*/}
        {/*                src={item.url}*/}
        {/*                style={{height: 60, width: 60 }}*/}
        {/*            />*/}
        {/*            <span*/}
        {/*                style={{*/}
        {/*                  marginTop: 5,*/}
        {/*                  overflow: 'hidden',*/}
        {/*                  display: 'block',*/}
        {/*                  whiteSpace: 'nowrap',*/}
        {/*                  textOverflow: 'ellipsis',*/}
        {/*                }}*/}
        {/*            >*/}
        {/*            {item.name}*/}
        {/*          </span>*/}
        {/*          </a>*/}
        {/*        </Col>*/}
        {/*    ))}*/}
        {/*  </Row>*/}
        {/*</Panel>*/}
        <Panel header="自定义上传" key="998">
          <Row>
            {list === null || list === void 0 ? void 0 : list.map(function (item, index) { return (<Col key={index} span={8} className={styles.colStyle} style={{ textAlign: 'center' }} onContextMenu={function (event) { return handleContextMenu(event, item); }}>
                  <a title={item.name} draggable href="#" onClick={function (e) { return e.preventDefault(); }} onDragStart={function (ev) { return onDrag(ev, item); }}>
                    <img alt={item.name} src={item.url} style={{ width: 60, height: 60 }}/>
                    <span style={{
                marginTop: 5,
                overflow: 'hidden',
                display: 'block',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                color: "#333"
            }}>
                    {item.name}
                  </span>
                  </a>
                </Col>); })}
            <Col key="upload" span={12} className={styles.colStyle} style={{ textAlign: 'center' }}>
              <Upload listType="picture-card" showUploadList={false} action={"".concat(uploaConfig.self.baseURL).concat(uploaConfig.self.url)} accept="image/*" data={{
            mappingType: uploaConfig.self.data.mappingType,
            mappingId: uploaConfig.self.data.mappingId,
        }} headers={{
            token: uploaConfig.self.token,
        }} beforeUpload={beforeUpload} onChange={onHandleUpload}>
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>上传</div>
                </div>
              </Upload>
            </Col>
          </Row>
        </Panel>

        {(((_b = uploaConfig === null || uploaConfig === void 0 ? void 0 : uploaConfig.industry) === null || _b === void 0 ? void 0 : _b.projectIndustryCats) || industry_List).map(function (item, index) {
            return <Panel key={index} header={item[1]}>
            <IndustryList uploaConfig={uploaConfig} mappingType={item[0]}></IndustryList>
          </Panel>;
        })}
      </Collapse>

      <CompContextMenu contextMenuRef={contextMenuRef} showContextmenu={showContextmenu} contextmenu={contextmenu} name={selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.name} form={formRef} handleOk={handleOk} handleDelete={handleDelete}/>
    </div>);
};
export default Layout;
//# sourceMappingURL=index.js.map