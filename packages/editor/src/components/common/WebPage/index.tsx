import React, {useEffect, useMemo, useState} from "react";

import {Button, Empty} from "antd";
import { Node } from "@bici-datav/core";
import { canvas } from '../../Layout/index';
import { default as mitt, Emitter, EventType, Handler } from 'mitt';
import  './style.less';
import classNames from 'classnames';
import withCatchable from '../withCatchable';
import CustomIcon from "../../config/iconConfig";



interface WebPageProps{
    iframe:string;
    node:Node;
}
export let _emitter:Emitter;


class WebPage extends React.Component<WebPageProps,any>{
    iframeDiv:any;
    constructor(prop){
        super(prop);
        _emitter=mitt();
        this.iframeDiv=React.createRef();
        this.state={
            headerClassNames:"header"
        }
        this.handleMouseMoveTop=this.handleMouseMoveTop.bind(this)
    }
    componentDidMount() {
        const iframeEle=this.iframeDiv.current;
        if(this.iframeDiv.current&&this.iframeDiv.current.contentWindow.document.body){
            this.iframeDiv.current.contentWindow.document.body.addEventListener("mousemove",this.handleMouseMoveTop);
        }
    }
    shouldComponentUpdate(nectProps,nextState){
        const isupdate=this.checkURL(nectProps.iframe);
        if(isupdate&&this.iframeDiv.current&&this.iframeDiv.current.contentWindow.document.body){
            this.iframeDiv.current.contentWindow.document.body.addEventListener("mousemove",this.handleMouseMoveTop);
        }
        return true;
    }
    handleMouseMoveTop(e){
        const that=this;
        if(e.pageY<42){
            that.setState({
                headerClassNames:classNames({
                    header:true,
                    headerAnimation:true,
                })
            },()=>{
                that.forceUpdate();
            })
        }else{
            that.setState({
                headerClassNames:classNames({
                    header:true,
                    headerAnimation:false,
                })
            },()=>{
                that.forceUpdate();
            })
        }
    }
    checkURL(value){
        var str=value;
        //判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
        //下面的代码中应用了转义字符"\"输出一个字符"/"
        //在JavaScript中，正则表达式只能使用"/"开头和结束，不能使用双引号
        var Expression=new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i');
        var objExp=new RegExp(Expression);
        if(objExp.test(str)==true){
            return true;
        }else{
            return false;
        }
    }
    onClickButton(e){
        console.log(e)
        canvas.dispatch("customUIclickBtn",{name:'majy'})
    }
    handleError(err){
        console.log("err===",err)
    }
    openNewWindow(e){
        window.open(this.props.iframe)
    }
    render() {
        const isUrl=this.checkURL(this.props.iframe);
        return (
            <div className="custui-webpage"  style={{height:"100%",background:'white'}}>
                {
                    isUrl?(
                        <React.Fragment>
                            <div className={this.state.headerClassNames}>
                                <span></span>
                                <Button type="link" onClick={this.openNewWindow.bind(this)}>打开新页面</Button>
                            </div>
                            <div className="page-content">
                                <iframe
                                ref={this.iframeDiv}
                                src={this.props.iframe}
                                onError={this.handleError.bind(this)}
                                sandbox="allow-scripts allow-forms allow-same-origin"
                                scrolling="no"
                                frameBorder="0"></iframe>
                            </div>
                        </React.Fragment>
                    ):(
                        <Empty
                        image={<CustomIcon type="iconwushuju" />}
                        imageStyle={{
                          height: 60,
                        }}
                        description={
                          <span>
                            暂未连接到正确的网页<br/> 请先在右侧操作栏设置
                          </span>
                        }
                      >
                      </Empty>
                    )
                }
            </div>
        );
    }
}

export default withCatchable(WebPage);
