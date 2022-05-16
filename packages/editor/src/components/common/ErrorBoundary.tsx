import React from "react";
import {Empty} from "antd";

export default class ErrorBoundary extends React.Component<any,any> {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // 更新 state 使下一次渲染能够显示降级后的 UI
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // 你同样可以将错误日志上报给服务器
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // 你可以自定义降级后的 UI 并渲染
        return (
            <div className="custui-webpage"  style={{height:"100%"}}>
                    <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        imageStyle={{
                          height: 60,
                        }}
                        description={
                          <span style={{color:'red'}}>
                            加载网页出错了
                          </span>
                        }
                      >
                      </Empty>
                </div>
        );
      }
  
      return this.props.children; 
    }
  }