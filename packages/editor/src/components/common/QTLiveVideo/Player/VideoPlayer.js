import React, { useState, useEffect, useRef } from 'react'
import { Row, Col, Menu, Dropdown, Button } from 'antd'
import { CloseOutlined, RedoOutlined, VideoCameraAddOutlined } from '@ant-design/icons'
import { useFullscreen } from 'ahooks'
import flvjs from 'flv.js'
import styles from './video.module.less'
import axios from 'axios';

const VideoPlayer = (props) => {
  const [hasVideo, setHasVideo] = useState(false)
  const [selectKey, setSelectKey] = useState('1')


  const videoRef = useRef()
  const wrapperRef = useRef()
  const videoPlayer = useRef()

  const [isFullscreen, { toggleFull }] = useFullscreen(wrapperRef)

  const {videoObj, showChannel, updateVideoUrl, removeVideo, showChannelSelect } = props

  useEffect(() => {
    if (videoObj?.flv) {
      createPlayer(videoObj?.flv)
    }

    if (typeof videoObj?.rate !== 'undefined') {
      setSelectKey(videoObj.rate + '')
    }

    return () => {
      destroyPlayer()
    }
  }, [videoObj?.flv, videoObj?.rate])

  const createPlayer = (url) => {
    if (flvjs.isSupported()) {
      videoPlayer.current = flvjs.createPlayer({
        type: 'flv',
        hasAudio: false,
        isLive: true,
        url,
        config: {
          isLive: true,
          enableWorker: true,
          enableStashBuffer: false,
          stashInitialSize: 128,
        },
      })

      videoPlayer.current.on(flvjs.Events.LOADING_COMPLETE, () => {
        console.log('--== video  LOADING_COMPLETE ==--')
      })

      videoPlayer.current.on(flvjs.Events.ERROR, (errType, errDetail) => {
        console.log('on error: ', errType, errDetail)
      })

      videoPlayer.current.attachMediaElement(videoRef.current)
      videoPlayer.current.load()
      let playPromise = videoPlayer.current.play()
      if (playPromise) {
        playPromise
          .then(() => {
            setHasVideo(true)
          })
          .catch((e) => {
            console.log('视频加载失败')
          })
      }
    }
  }

  const destroyPlayer = () => {
    videoPlayer.current?.pause()
    videoPlayer.current?.unload()
    videoPlayer.current?.detachMediaElement()
    videoPlayer.current?.destroy()
    videoPlayer.current = undefined
    setHasVideo(false)
    // removeVideo&&removeVideo()
  }

// 重新推流
  const rePushStream = (params) => {
    const token = window.localStorage.getItem('access_token')
    const timeout = 600000
    const maxContentLength = Math.pow(1024, 2)
    const myURL = new URL(props.rePushStream)
    const client = axios.create({
      baseURL: `${myURL.origin}`,
      timeout,
      maxContentLength,
      headers: {
        token: token,
        'Content-Type': 'application/json',
      }}) // 基础请求包装对象
    return client.post(`${myURL.pathname}`, params);
   }

  // 刷新，重新推流
  const redoVideoStream = async () => {
    console.log('>>>redoVideoStream', videoObj);
    if (videoObj && videoObj.code) {
      const res = await rePushStream({
        code: videoObj.code,
        rtsp: videoObj.rtsp,
      })
      if (res.data.data && res.data.data.flv) {
        destroyPlayer()
        createPlayer(res.data.data.flv)
      }
    }
  }


  // 选择画质
  const handleMenuClick = (e) => {
    if (hasVideo && e.key !== selectKey) {
      let flag = false
      // destroyPlayer(videoPlayer)
      if (videoObj.boardId) {
        flag = updateVideoUrl(videoObj.boardId, Number(e.key))
      } else {
        flag = updateVideoUrl(videoObj.id, Number(e.key))
      }

      flag && setSelectKey(e.key)
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick} selectedKeys={[selectKey]}>
      <Menu.Item key="0">超清</Menu.Item>
      <Menu.Item key="1">高清</Menu.Item>
    </Menu>
  )

  return (
    <div className={styles.videoContainer} ref={wrapperRef}>
      <video ref={videoRef} className={styles.video} autoPlay muted height="100%" width="100%">
        设备不支持
      </video>
      {!showChannel && !hasVideo && (
        <span className={styles.channelIcon} style={{ color: 'white' }}>
          {/* <ZYTGIcon type="iconshipinjiankong" style={{ fontSize: 32, marginBottom: 5 }} /> */}
          若长时间无效请刷新重试或联系管理员
        </span>
      )}
      <Row className={styles.videoHeader} align="middle">
        {props.onlyURL?'':(
            <Col span={4}>
              <Dropdown overlay={menu} getPopupContainer={() => wrapperRef.current}>
                <a className="ant-dropdown-link" style={{ color: 'white' }} onClick={(e) => e.preventDefault()}>
                  {/* <ZYTGIcon type="iconhuazhixuanze" style={{ marginRight: 5 }} /> */}
                  画质设置
                </a>
              </Dropdown>
            </Col>
        )}
        <Col span={16} style={{ textAlign: 'center', fontSize: 14, fontWeight: 500 }}>
          <span>{videoObj?.name || ''}</span>
        </Col>
      </Row>
      <Row className={styles.videoControl} justify="space-between" align="middle">
        <Col span={showChannel ? 2 : 12}>
          <a style={{ color: 'white' }} onClick={redoVideoStream}>
            <RedoOutlined style={{ marginRight: 5 }} />
            刷新
          </a>
        </Col>
        {showChannel && !isFullscreen && (
          <Col span={8}>
            <a style={{ color: 'white' }} onClick={() => showChannelSelect(videoObj)}>
              <VideoCameraAddOutlined style={{ marginRight: 5 }} />
              选择通道
            </a>
          </Col>
        )}
        <Col span={12} style={{ textAlign: 'right' }}>
          {/* 全屏缩放 */}
          <a style={{ color: 'white' }} onClick={toggleFull}>
            {isFullscreen ? (
              <>
                退出全屏
                {/* <ZYTGIcon type="icontuichuquanping-copy" style={{ marginLeft: 5 }} /> */}
              </>
            ) : (
              <>
                显示全屏
                {/* <ZYTGIcon type="iconquanpingxianshi-copy" style={{ marginLeft: 5 }} /> */}
              </>
            )}
          </a>
        </Col>
      </Row>
    </div>
  )
}

VideoPlayer.defaultProps = {
  height: 300,
  videoObj: undefined,
  showChannel: false,
  removeVideo: undefined,
  updateVideoUrl: (id, rate) => {
    return false
  },
  showChannelSelect: () => {},
  idx: undefined,
}

export default VideoPlayer
