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
import * as React from "react";
import { Empty } from "antd";
import CustomIcon from "../config/iconConfig";
export default function withCatchable(WrappedComponent, errorChild) {
    return /** @class */ (function (_super) {
        __extends(Catchable, _super);
        function Catchable(props) {
            var _this = _super.call(this, props) || this;
            _this.renderErrorChild = function () {
                try {
                    var _a = _this.state, error = _a.error, errorInfo = _a.errorInfo;
                    var timer = setTimeout(function () {
                        _this.setState({ crashed: false });
                    }, 20000);
                    _this.setState({ timer: timer });
                    return typeof errorChild === "function" ?
                        errorChild(error, errorInfo) : (errorChild ||
                        <div style={{ height: "100%", background: '#4A4A4A' }}>
                        <Empty image={<CustomIcon type="iconwushuju"/>} imageStyle={{
                                height: 60,
                            }} description={<span>
                            <span style={{ color: 'red' }} title={error.message}>嵌入网页包含不合法的请求，。<br />请修改网页地址并刷新页面</span>
                          </span>}>
                      </Empty>
                    </div>);
                }
                catch (e) {
                    return <span style={{ color: 'red' }} title={e.message}>Error Child Component Crashed</span>;
                }
            };
            _this.state = {
                error: null,
                errorInfo: null,
                crashed: false,
                timer: 1,
            };
            return _this;
        }
        Catchable.prototype.componentDidCatch = function (error, errorInfo) {
            this.setState({
                error: error,
                errorInfo: errorInfo,
                crashed: true
            });
            if (console && console.group) {
                console.group("%c\u7EC4\u4EF6".concat(WrappedComponent.name || "", "\u5D29\u6E83\u4E86|Compnent Crashed"), "font-size:20px;color:#ff0047");
                console.error(error);
                console.error(errorInfo.componentStack);
                console.groupEnd();
            }
        };
        Catchable.prototype.componentWillUnmount = function () {
            clearTimeout(this.state.timer);
        };
        Catchable.prototype.render = function () {
            return (<React.Fragment>
                    {this.state.crashed ? this.renderErrorChild() : <WrappedComponent {...this.props}/>}
                </React.Fragment>);
        };
        return Catchable;
    }(React.Component));
}
//# sourceMappingURL=withCatchable.js.map