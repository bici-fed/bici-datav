var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import React, { Component } from 'react';
import styles from './index.module.less';
import { Form, Input, Modal, message } from 'antd';
import { clientParam } from '../data/api';
import { replacer } from "../utils/serializing";
import * as _ from 'lodash';
var CanvasContextMenu = /** @class */ (function (_super) {
    __extends(CanvasContextMenu, _super);
    function CanvasContextMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            newComVisible: false,
            componentName: '添加到自定义组件',
        };
        _this.formRef = React.createRef();
        _this.onUncombine = function () {
            if (!_this.props.data.node) {
                return;
            }
            _this.props.canvas.uncombine(_this.props.data.node);
            _this.props.canvas.render();
            _this.props.onNeedHide();
            _this.props.setIsSave(false);
        };
        _this.onLock = function () {
            _this.props.data.locked = 2;
            if (_this.props.data.node) {
                _this.props.data.node.locked = _this.props.data.locked;
            }
            if (_this.props.data.nodes) {
                for (var _i = 0, _a = _this.props.data.nodes; _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.locked = _this.props.data.locked;
                }
            }
            _this.props.canvas.render(true);
            _this.props.setIsSave(false);
        };
        // 打开新建组件弹窗
        _this.onNewComponent = function () {
            _this.setState({ newComVisible: true });
        };
        // 确定新建组件
        _this.handleOk = function () {
            _this.onCheck();
        };
        _this.handleCancel = function () {
            _this.setState({ newComVisible: false });
        };
        _this.onCheck = function () { return __awaiter(_this, void 0, void 0, function () {
            var values, cloneNodes, cloneNode, result, newNode, errorInfo_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.formRef.current.validateFields([
                                'componentName',
                            ])];
                    case 1:
                        values = _a.sent();
                        this.setState({ componentName: values.componentName });
                        this.setState({ newComVisible: false });
                        cloneNodes = _.cloneDeep(this.props.data.nodes);
                        cloneNode = _.cloneDeep(this.props.data.node);
                        result = [];
                        if (cloneNodes && cloneNodes.length > 0) {
                            this.uncombineNodes(cloneNodes, result);
                        }
                        else {
                            this.uncombineNodes([cloneNode], result);
                        }
                        newNode = this.props.canvas.toComponent(result);
                        this.props.canvas.render();
                        this.saveNewComponent({
                            componentName: this.state.componentName,
                            componentProperty: JSON.stringify(newNode, replacer),
                        }).then(function (res) {
                            _this.setState({ newComVisible: false });
                            message.info('添加到自定义组件成功').then(function () {
                                message.destroy();
                            });
                            _this.props.getNewComponents();
                            _this.formRef.current.resetFields();
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        errorInfo_1 = _a.sent();
                        console.error('Failed:', errorInfo_1);
                        this.formRef.current.resetFields();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.uncombineNodes = function (nodes, result) {
            (nodes || []).map(function (item) {
                if (item.name == 'combine') {
                    _this.uncombineNodes(item.children, result);
                }
                else {
                    if ('property' in item && item.property && item.property.dataPointSelectedRows != undefined) {
                        item.property.dataPointSelectedRows = [];
                        item.property.dataPointParam.qtDataList = [];
                    }
                    result.push(item);
                }
            });
        };
        _this.renderNewComponentModal = function () {
            return (<Modal title="添加到自定义组件" visible={_this.state.newComVisible} onOk={_this.handleOk} onCancel={_this.handleCancel} maskClosable={false} okText="确定" cancelText="取消" getContainer={function () { return document.querySelector('#editLayout'); }}>
        <Form ref={_this.formRef} preserve={false}>
          <Form.Item rules={[
                    {
                        required: true,
                        message: '请输入组件名称',
                    },
                    {
                        min: 1,
                        message: '不低于1个字符',
                    },
                ]} label="组件名字" name="componentName">
            <Input placeholder="输入组件名字" id="componentName" maxLength={20}/>
          </Form.Item>
        </Form>
      </Modal>);
        };
        return _this;
    }
    CanvasContextMenu.prototype.saveNewComponent = function (params) {
        return clientParam(this.props.combineCom.apiURL).post(this.props.combineCom.add.url, params, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                token: this.props.combineCom.token,
                'Content-Type': 'application/json',
            },
        });
    };
    CanvasContextMenu.prototype.onTop = function () {
        if (this.props.data.node) {
            this.props.canvas.top(this.props.data.node);
        }
        if (this.props.data.nodes) {
            for (var _i = 0, _a = this.props.data.nodes; _i < _a.length; _i++) {
                var item = _a[_i];
                this.props.canvas.top(item);
            }
        }
        this.props.canvas.render();
        this.props.onNeedHide();
        this.props.setIsSave(false);
    };
    CanvasContextMenu.prototype.onBottom = function () {
        if (this.props.data.node) {
            this.props.canvas.bottom(this.props.data.node);
        }
        if (this.props.data.nodes) {
            for (var _i = 0, _a = this.props.data.nodes; _i < _a.length; _i++) {
                var item = _a[_i];
                this.props.canvas.bottom(item);
            }
        }
        this.props.canvas.render();
        this.props.onNeedHide();
        this.props.setIsSave(false);
    };
    CanvasContextMenu.prototype.onCombine = function (stand) {
        if (!this.props.data.nodes) {
            return;
        }
        this.props.canvas.combine(this.props.data.nodes, stand);
        this.props.canvas.render();
        this.props.onNeedHide();
        this.props.setIsSave(false);
    };
    CanvasContextMenu.prototype.render = function () {
        var _this = this;
        return (<div className={styles.menus} style={{ display: this.props.show ? 'block' : 'none' }}>
        <div>
          <a className={this.props.data.node || this.props.data.nodes
                ? ''
                : styles.disabled} onClick={this.onTop.bind(this)}>
            置顶
          </a>
        </div>
        <div>
          <a className={this.props.data.node || this.props.data.nodes
                ? ''
                : styles.disabled} onClick={this.onBottom.bind(this)}>
            置底
          </a>
        </div>
        <div>
          <a className={this.props.data.node || this.props.data.nodes
                ? ''
                : styles.disabled} onClick={function () {
                _this.onNewComponent();
            }}>
            添加到自定义组件
          </a>
        </div>
        <div className={styles.line}/>
        {this.props.data.nodes ? (<div>
            <a onClick={function () {
                    _this.onCombine(false);
                }}>
              组合
            </a>
            {/*<a onClick={() => { this.onCombine(true) }}>包含</a>*/}
          </div>) : null}
        {this.props.data.node && this.props.data.node.name === 'combine' ? (<div>
            <a onClick={this.onUncombine}>取消组合/包含</a>
          </div>) : null}
        {/*<div>*/}
        {/*  <a*/}
        {/*    className={(this.props.data.node || this.props.data.nodes) ? '' : styles.disabled}*/}
        {/*    onClick={this.onLock}*/}
        {/*  >{this.props.data.locked ? '解锁' : '锁定'}</a>*/}
        {/*</div>*/}
        {this.renderNewComponentModal()}
      </div>);
    };
    return CanvasContextMenu;
}(Component));
export default CanvasContextMenu;
//# sourceMappingURL=index.js.map