import React from 'react';
import ReactDOM from 'react-dom';
import { s8, createDiv, rectangle, createLayerDiv } from '@bici-datav/core';

// 存放原生dom节点
export const reactNodesData = {};


const drawReactNode = (ReactComponent) => (ctx, node) => {
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
        if(!document.getElementById(node.elementId)){
            // 创建一个div容器
            reactNodesData[node.id] = {
                div: createDiv(node)
            };
            if(node.isEditable){
                reactNodesData[node.id+"-layer"] = {
                    div: createLayerDiv(node)
                };
                document.body.appendChild(reactNodesData[node.id+"-layer"].div);
            }
            document.body.appendChild(reactNodesData[node.id].div);

            // 添加当前节点到div层，否则无法显示
            node.addToDiv();
        }
        // 初始化 react 组件
        if(node && node.property) {
            reactNodesData[node.id].component = ReactDOM.render(
                <ReactComponent {...node.property.props} node={node} />,
                reactNodesData[node.id].div
            );
        }
    }

    // 节点的elementRendered用于判断第三方图形库是否需要重绘
    // 绘画引擎需要重绘节点时，会把此属性设置为false
    if (!node.elementRendered) {
        // 初始化时，等待父div先渲染完成，避免初始图表控件太大。
        setTimeout(() => {
            // 重绘完成，避免不必要的重复重绘
            node.elementRendered = true;
        });
    }
};


class ModalContainer extends React.Component<any,any> {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        document.removeChild(this.props.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.props.el
        );
    }
}


export default drawReactNode;
