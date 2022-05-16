import * as React from "react";
import { Empty} from "antd";
import CustomIcon from "../config/iconConfig";
interface State {
    error?: Error
    errorInfo?: React.ErrorInfo
    crashed?: boolean
    timer?: any
}
export type ErrorChild = React.ReactNode | ((error: Error, errorInfo: React.ErrorInfo) => React.ReactNode)

export default function withCatchable<T extends object>(WrappedComponent: React.ComponentType<T>, errorChild?: ErrorChild): React.ComponentType<T> {

    return class Catchable extends React.Component<T, State> {
        constructor(props: T) {
            super(props);
            this.state = {
                error: null,
                errorInfo: null,
                crashed: false,
                timer: 1,
            };
        }
        componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
            this.setState({
                error, errorInfo, crashed: true
            });
            if (console && console.group) {
                console.group(`%c组件${WrappedComponent.name || ""}崩溃了|Compnent Crashed`, "font-size:20px;color:#ff0047");
                console.error(error);
                console.error(errorInfo.componentStack);
                console.groupEnd()
            }
        }
        componentWillUnmount(){
            clearTimeout(this.state.timer);
        }

        private renderErrorChild = () => {
            try {
                const { error, errorInfo } = this.state;
                const timer = setTimeout(()=>{
                    this.setState({crashed: false});
                },20000);
                this.setState({timer})

                return typeof errorChild === "function" ?
                errorChild(error, errorInfo) : (errorChild ||
                    <div style={{height:"100%",background:'#4A4A4A'}}>
                        <Empty
                        image={<CustomIcon type="iconwushuju" />}
                        imageStyle={{
                          height: 60,
                        }}
                        description={
                          <span>
                            <span style={{ color: 'red' }} title={error.message}>嵌入网页包含不合法的请求，。<br/>请修改网页地址并刷新页面</span>
                          </span>
                        }
                      >
                      </Empty>
                    </div>
                );
            } catch (e) {
                return <span style={{ color: 'red' }} title={e.message}>Error Child Component Crashed</span>;
            }
        }
        render() {
            return (
                <React.Fragment>
                    {this.state.crashed ? this.renderErrorChild() : <WrappedComponent {...this.props} />}
                </React.Fragment>
            )
        }
    }
}
