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
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState, } from 'react';
import { clientParam } from '../../../data/api';
import { Row, Col, Form, message, Collapse } from 'antd';
import { useClickAway } from 'ahooks';
import CompContextMenu from '../../../common/CompContextMenu';
import styles from '../../index.module.less';
import CustomIcon from '../../../config/iconConfig';
var Panel = Collapse.Panel;
var Layout = forwardRef(function (props, ref) {
    var onDrag = props.onDrag, combineCom = props.combineCom;
    var formRef = Form.useForm()[0];
    // 是否显示右键菜单
    var _a = useState(false), showContextmenu = _a[0], setShowContextmenu = _a[1];
    var _b = useState({
        position: 'fixed',
        zIndex: '10',
        display: 'none',
        left: '',
        top: '',
        bottom: '',
    }), contextmenu = _b[0], setContextmenu = _b[1];
    var _c = useState(null), selectedCom = _c[0], setSelectedCom = _c[1];
    var contextMenuRef = useRef();
    useClickAway(function () {
        setShowContextmenu(false);
    }, contextMenuRef);
    useImperativeHandle(ref, function () { return ({
        getNewComponents: function () {
            getNewComponents();
        },
    }); });
    // 获取自定义组件
    function getNewComponents() {
        clientParam(combineCom.apiURL)
            .post(combineCom.list.url, combineCom.list.params, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                token: combineCom.token,
                'Content-Type': 'application/json',
            },
        })
            .then(function (r) {
            setComponentList(r.data.data);
        });
    }
    var handleDelete = function () {
        clientParam(combineCom.apiURL)
            .post(combineCom.delete.url, selectedCom, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                token: combineCom.token,
                'Content-Type': 'application/json',
            },
        })
            .then(function (res) {
            message.success('删除组件成功！', 2, function () {
                message.destroy();
                return null;
            });
            getNewComponents();
        });
    };
    var _d = useState([]), componentList = _d[0], setComponentList = _d[1];
    useEffect(function () {
        getNewComponents();
    }, []);
    // 右键菜单
    var handleContextMenu = function (event, item) {
        setShowContextmenu(!showContextmenu);
        setSelectedCom(item);
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
    // 确定重命名
    var handleOk = function () {
        onCheck();
    };
    var onCheck = function () { return __awaiter(void 0, void 0, void 0, function () {
        var values, newCom, errorInfo_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, formRef.validateFields(['componentName'])];
                case 1:
                    values = _a.sent();
                    newCom = __assign(__assign({}, selectedCom), { componentName: values.componentName });
                    clientParam(combineCom.apiURL)
                        .post(combineCom.rename.url, newCom, {
                        headers: {
                            'X-Requested-With': 'XMLHttpRequest',
                            token: combineCom.token,
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(function (res) {
                        message.success('重命名组件成功！');
                        getNewComponents();
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
    return (<Collapse expandIconPosition="right" ghost={false} bordered={false}>
      <Panel header="自定义组件" key={'custom'}>
        <div className={styles.button}>
          <Row align="middle">
            {(componentList || []).map(function (item, key) {
            return (<Col key={key} span={8} style={{
                    marginBottom: 20,
                    textAlign: 'center',
                }} onContextMenu={function (event) { return handleContextMenu(event, item); }}>
                  <a draggable href="#" onClick={function (e) { return e.preventDefault(); }} title={item.componentName} style={{ padding: '0 5px' }} onDragStart={function (ev) {
                    return onDrag(ev, JSON.parse(item.componentProperty), true);
                }}>
                    <CustomIcon type="iconzidingyi" style={{ fontSize: 30, width: 53, height: 53, lineHeight: '53px' }}/>
                    <span style={{
                    overflow: 'hidden',
                    display: 'block',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                }}>
                      {item.componentName}
                    </span>
                  </a>
                </Col>);
        })}
          </Row>
        </div>
      </Panel>
      <CompContextMenu contextMenuRef={contextMenuRef} showContextmenu={showContextmenu} contextmenu={contextmenu} name={selectedCom === null || selectedCom === void 0 ? void 0 : selectedCom.componentName} form={formRef} handleOk={handleOk} handleDelete={handleDelete}/>
    </Collapse>);
});
export default Layout;
//# sourceMappingURL=index.js.map