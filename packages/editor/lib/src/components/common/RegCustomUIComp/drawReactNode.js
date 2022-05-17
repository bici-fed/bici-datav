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
import React from 'react';
import ReactDOM from 'react-dom';
import { s8, createDiv, rectangle, createLayerDiv } from '@bici-topology/core';
// 存放原生dom节点
export var reactNodesData = {};
var drawReactNode = function (ReactComponent) { return function (ctx, node) {
    // 绘制一个底图，类似于占位符。
    rectangle(ctx, node);
    // 如果未知组件，直接返回
    if (!ReactComponent) {
        return;
    }
    // 需要设置一个唯一的id，方便绘画引擎识别
    if (!node.elementId) {
        node.elementId = s8();
    }
    // 节点的elementLoaded用于判断第三方图形库是否第一次加载，是否需要初始化
    // 这是一个辅助变量，用户自己赋值使用或不用
    if (!node.elementLoaded) {
        if (!document.getElementById(node.elementId)) {
            // 创建一个div容器
            reactNodesData[node.id] = {
                div: createDiv(node)
            };
            if (node.isEditable) {
                reactNodesData[node.id + "-layer"] = {
                    div: createLayerDiv(node)
                };
                document.body.appendChild(reactNodesData[node.id + "-layer"].div);
            }
            document.body.appendChild(reactNodesData[node.id].div);
            // 添加当前节点到div层，否则无法显示
            node.addToDiv();
        }
        // 初始化 react 组件
        if (node && node.property) {
            reactNodesData[node.id].component = ReactDOM.render(<ReactComponent {...node.property.props} node={node}/>, reactNodesData[node.id].div);
        }
    }
    // 节点的elementRendered用于判断第三方图形库是否需要重绘
    // 绘画引擎需要重绘节点时，会把此属性设置为false
    if (!node.elementRendered) {
        // 初始化时，等待父div先渲染完成，避免初始图表控件太大。
        setTimeout(function () {
            // 重绘完成，避免不必要的重复重绘
            node.elementRendered = true;
        });
    }
}; };
var ModalContainer = /** @class */ (function (_super) {
    __extends(ModalContainer, _super);
    function ModalContainer(props) {
        return _super.call(this, props) || this;
    }
    ModalContainer.prototype.componentWillUnmount = function () {
        document.removeChild(this.props.el);
    };
    ModalContainer.prototype.render = function () {
        return ReactDOM.createPortal(this.props.children, this.props.el);
    };
    return ModalContainer;
}(React.Component));
export default drawReactNode;
//# sourceMappingURL=drawReactNode.js.map