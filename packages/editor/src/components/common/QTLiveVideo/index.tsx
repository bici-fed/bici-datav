import React, { Component } from 'react';
import VideoPlayer from './Player/VideoPlayer';
import axios from 'axios';
import {canvas} from "../../Layout";
import {isRTSP} from "../../utils/cacl";
import * as _ from 'lodash';

export default class QTLiveVideo extends Component<any,any> {
  constructor(props){
    super(props);
    const {node}=this.props;
    const videoObj=node.property.video?.selectedRows[0];
    this.state={
      videoObj:videoObj,
      rePushStream:node.property.video?.rePushStream,
      updateStream:node.property.video?.updateStream,
      pushStream:node.property.video?.pushStream,
      onlyURL:node.property.hasOwnProperty('videoURL'),
    }
  }


    getVideoURL(){
      const that=this;
        // 根据输入的视频地址，从后端获取视频流地址，这是针对url视频组件的
        const token = window["__CONKPIT_TOKEN"]
        axios.request({
            url: `${this.state.pushStream}`,// this.props.node.property.videoURL,
            method:'post',
            data:{
                code: this.props.node.id,
                rtsp: this.props.node.property.videoURL,
            },
            headers: {
                token: token,
                'Content-Type': 'application/json',
            },
        }).then(res=>{
            that.setState({
                videoObj: res.data.data
            });
        })
    }

    // 停止推流 （关闭视频）
    stopStream () {
        const token = window["__CONKPIT_TOKEN"];
        if(!this.props.node) return;
        const timeout = 600000
        const maxContentLength = Math.pow(1024, 2);
        const myURL = new URL(this.state.updateStream);
        const client = axios.create({
            baseURL: `${myURL.origin}`,
            timeout,
            maxContentLength,
            headers: {
                token: token,
                'Content-Type': 'application/json',
            },
        }) // 基础请求包装对象
        const params = {
            code: this.props.node.id,
            rtsp: this.props.node.property.videoURL,
        };
        client.post('/api/applications/service/remote/customComponent/stopStream', params);
    }
    // 移除视频对象
    removeVideo  (videoItem) {
      if(isRTSP(this.props.node.property.videoURL)){
          this.stopStream()
      }
    }

    // 修改流地址 （切换画质）
     updateStream = (params) => {
      const token = window["__CONKPIT_TOKEN"]
      const timeout = 600000
      const maxTimeout = 600000
      const maxContentLength = Math.pow(1024, 2);
      const myURL = new URL(this.state.updateStream);
      const client = axios.create({
          baseURL: `${myURL.origin}`,
          timeout,
          maxContentLength,
          headers: {
              token: token,
              'Content-Type': 'application/json',
          },
      }) // 基础请求包装对象
      return client.post(`${myURL.pathname}`, params);
     }
  // 更新流地址 （切换画质）
     updateVideoUrl = async (id, rate) => {
        let flag = false
        const data:any = await this.updateStream({
          surveillanceDeviceId: this.state.videoObj.surveillanceDeviceId,
          channels: [
            {
              id,
              oldRate: this.state.videoObj.rate,
              rate,
              channel: this.state.videoObj.channel,
            },
          ],
        });

        if (data && data.length && data[0].flv) {
          this.setState({
            ...this.state.videoObj,
            flv: data[0].flv,
            rate: data[0].rate,
          })
          flag = true
        }
        return flag
      }

    componentDidMount(){
      const {node}=this.props;
      this.setState({
        videoObj: node.property.video?.selectedRows[0],
      });
      if(this.state.onlyURL&&isRTSP(this.props.node.property.videoURL)){
          this.getVideoURL();
      }
      if(node&&node.property.stopStream){
          this.stopStream();
      }
      const that = this;
      if(canvas){
          canvas.on('deleteNode',(nodes)=>{
              (nodes||[]).forEach(n=>{
                  if(n.name=='QTLiveVideo'&&n.id===that.props.node.id){
                      that.stopStream();
                  }
              })
          })
      }
      // 监听页面切换，保持视频直播始终实施的
        this.visibilitychange();
      // 监听rtsp地址变化
        if(canvas){
            canvas._emitter.on("changeVideoUrl",(param)=>{
                const func = _.debounce(()=>{
                    if(isRTSP(param.videoURL)){
                        that.getVideoURL();
                    }
                },2000);
                func();
            })
        }
    }


    componentWillUnmount() {

    }

    visibilitychange () {
        let hidden
        let visibilityChange
        let visible
        let state
        if (typeof document.hidden !== 'undefined') {
            hidden = 'hidden'
            visibilityChange = 'visibilitychange'
            visible = 'visible'
            state = 'visibilityState'
        } else if (typeof (document as any).mozHidden !== 'undefined') {
            hidden = 'mozHidden'
            visibilityChange = 'mozvisibilitychange'
            visible = 'mozVisibilityState'
            state = 'mozVisibilityState'
        } else if (typeof (document as any).msHidden !== 'undefined') {
            hidden = 'msHidden'
            visibilityChange = 'msvisibilitychange'
            visible = 'msVisibilityState'
            state = 'msVisibilityState'
        } else if (typeof (document as any).webkitHidden !== 'undefined') {
            hidden = 'webkitHidden'
            visibilityChange = 'webkitvisibilitychange'
            visible = 'webkitVisibilityState'
        }
        // 标签页切换媒体播放时间重置
        document.addEventListener(
            visibilityChange,
            function () {
                if (document[state] === visible) {
                    const videoEleObj = document.getElementsByTagName('video')
                    for (const video in videoEleObj) {
                        const { buffered } = videoEleObj[video]
                        if (buffered && buffered.length > 0) {
                            videoEleObj[video].currentTime = buffered.end(0) - 0.5
                        }
                    }
                } else if (document[state] === hidden) {
                }
            },
            false
        )
    }

    render() {
      const videoObj=this.state.videoObj;
      return (
         <VideoPlayer
            height={400}
            videoObj={videoObj}
            removeVideo={this.removeVideo.bind(this)}
            updateVideoUrl={this.updateVideoUrl}
            rePushStream={this.state.rePushStream}
            onlyURL={this.state.onlyURL}
          />
      );
    }
  }

