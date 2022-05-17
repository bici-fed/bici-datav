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
import React from "react";
import { Button, Empty } from "antd";
import { canvas } from '../../Layout/index';
import { default as mitt } from 'mitt';
import './style.less';
import classNames from 'classnames';
import withCatchable from '../withCatchable';
import CustomIcon from "../../config/iconConfig";
export var _emitter;
var WebPage = /** @class */ (function (_super) {
    __extends(WebPage, _super);
    function WebPage(prop) {
        var _this = _super.call(this, prop) || this;
        _emitter = mitt();
        _this.iframeDiv = React.createRef();
        _this.state = {
            headerClassNames: "header"
        };
        _this.handleMouseMoveTop = _this.handleMouseMoveTop.bind(_this);
        return _this;
    }
    WebPage.prototype.componentDidMount = function () {
        var iframeEle = this.iframeDiv.current;
        if (this.iframeDiv.current && this.iframeDiv.current.contentWindow.document.body) {
            this.iframeDiv.current.contentWindow.document.body.addEventListener("mousemove", this.handleMouseMoveTop);
        }
    };
    WebPage.prototype.shouldComponentUpdate = function (nectProps, nextState) {
        var isupdate = this.checkURL(nectProps.iframe);
        if (isupdate && this.iframeDiv.current && this.iframeDiv.current.contentWindow.document.body) {
            this.iframeDiv.current.contentWindow.document.body.addEventListener("mousemove", this.handleMouseMoveTop);
        }
        return true;
    };
    WebPage.prototype.handleMouseMoveTop = function (e) {
        var that = this;
        if (e.pageY < 42) {
            that.setState({
                headerClassNames: classNames({
                    header: true,
                    headerAnimation: true,
                })
            }, function () {
                that.forceUpdate();
            });
        }
        else {
            that.setState({
                headerClassNames: classNames({
                    header: true,
                    headerAnimation: false,
                })
            }, function () {
                that.forceUpdate();
            });
        }
    };
    WebPage.prototype.checkURL = function (value) {
        var str = value;
        //判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
        //下面的代码中应用了转义字符"\"输出一个字符"/"
        //在JavaScript中，正则表达式只能使用"/"开头和结束，不能使用双引号
        var Expression = new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i');
        var objExp = new RegExp(Expression);
        if (objExp.test(str) == true) {
            return true;
        }
        else {
            return false;
        }
    };
    WebPage.prototype.onClickButton = function (e) {
        console.log(e);
        canvas.dispatch("customUIclickBtn", { name: 'majy' });
    };
    WebPage.prototype.handleError = function (err) {
        console.log("err===", err);
    };
    WebPage.prototype.openNewWindow = function (e) {
        window.open(this.props.iframe);
    };
    WebPage.prototype.render = function () {
        var isUrl = this.checkURL(this.props.iframe);
        return (<div className="custui-webpage" style={{ height: "100%", background: 'white' }}>
                {isUrl ? (<React.Fragment>
                            <div className={this.state.headerClassNames}>
                                <span></span>
                                <Button type="link" onClick={this.openNewWindow.bind(this)}>打开新页面</Button>
                            </div>
                            <div className="page-content">
                                <iframe ref={this.iframeDiv} src={this.props.iframe} onError={this.handleError.bind(this)} sandbox="allow-scripts allow-forms allow-same-origin" scrolling="no" frameBorder="0"></iframe>
                            </div>
                        </React.Fragment>) : (<Empty image={<CustomIcon type="iconwushuju"/>} imageStyle={{
                    height: 60,
                }} description={<span>
                            暂未连接到正确的网页<br /> 请先在右侧操作栏设置
                          </span>}>
                      </Empty>)}
            </div>);
    };
    return WebPage;
}(React.Component));
export default withCatchable(WebPage);
//# sourceMappingURL=index.js.map