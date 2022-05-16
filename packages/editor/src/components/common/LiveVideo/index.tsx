import React, { Component } from 'react';
import flvjs from 'flv.js';
import PropTypes from 'prop-types';
import VideoPlayer from './Player/VideoPlayer';
import axios from 'axios';
import {canvas} from "../../Layout";

////sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.fl

export default class LiveVideo extends Component<any,any> {
  constructor(props){
    super(props);
    const {node}=this.props;
    const videoObj=node.property.video?.selectedRows[0];
    this.state={
      videoObj:videoObj,
      rePushStream:node.property.video?.rePushStream,
      updateStream:node.property.video?.updateStream
    }
    
  }
    stopStream () {
        const token = window["__CONKPIT_TOKEN"];
        const {videoObj: videoItem} = this.state;
        if(!videoItem) return;
        const timeout = 600000
        const maxContentLength = Math.pow(1024, 2);
        const myURL = new URL(this.state.updateStream);
        const client = axios.create({
            baseURL: `${myURL.origin}`,
            timeout,
            maxContentLength,
            headers: {
                token,
                'Content-Type': 'application/json',
            },
        }) // 基础请求包装对象
        const params = {
            channels: [{id: videoItem.id, channel: videoItem.channel, oldRate: videoItem.rate}],
        }
        client.post('/api/surveillance/channel/stopStream', params);
    }
  removeVideo=()=>{
      this.stopStream();
  }

    // 修改流地址 （切换画质）
 updateStream = (params) => {
  const timeout = 600000
  const maxTimeout = 600000
  const maxContentLength = Math.pow(1024, 2);
  const myURL = new URL(this.state.updateStream);
  const client = axios.create({ baseURL: `${myURL.origin}`, timeout, maxContentLength }) // 基础请求包装对象
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
        const that = this;
        if(canvas){
            canvas.on('deleteNode',(nodes)=>{
                (nodes||[]).forEach(n=>{
                    if(n.name=='liveVideo'&&n.id===that.props.node.id){
                        that.removeVideo();
                    }
                })
            })
        }
        this.visibilitychange();
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
                            videoEleObj[video].currentTime = buffered.end(0)-0.5;
                        }
                    }
                } else if (document[state] === hidden) {
                }
            },
            false
        )
    }
    render() {
      const videoObj=this.props.node.property.video?.selectedRows[0];
      return (
         <VideoPlayer
            height={400}
            videoObj={videoObj}
            removeVideo={this.removeVideo}
            updateVideoUrl={this.updateVideoUrl}
            rePushStream={this.state.rePushStream}
          />
      );
    }
  }
  
