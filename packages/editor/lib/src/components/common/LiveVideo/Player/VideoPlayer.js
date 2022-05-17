var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Menu, Dropdown } from 'antd';
import { RedoOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import { useFullscreen } from 'ahooks';
import flvjs from 'flv.js';
import styles from './video.module.less';
import axios from 'axios';
var VideoPlayer = function (props) {
    var _a = useState(false), hasVideo = _a[0], setHasVideo = _a[1];
    var _b = useState('1'), selectKey = _b[0], setSelectKey = _b[1];
    var videoRef = useRef();
    var wrapperRef = useRef();
    var videoPlayer = useRef();
    var _c = useFullscreen(wrapperRef), isFullscreen = _c[0], toggleFull = _c[1].toggleFull;
    var videoObj = props.videoObj, showChannel = props.showChannel, removeVideo = props.removeVideo, updateVideoUrl = props.updateVideoUrl, showChannelSelect = props.showChannelSelect;
    useEffect(function () {
        if (videoObj === null || videoObj === void 0 ? void 0 : videoObj.flv) {
            createPlayer(videoObj === null || videoObj === void 0 ? void 0 : videoObj.flv);
        }
        if (typeof (videoObj === null || videoObj === void 0 ? void 0 : videoObj.rate) !== 'undefined') {
            setSelectKey(videoObj.rate + '');
        }
        return function () {
            destroyPlayer();
        };
    }, [videoObj === null || videoObj === void 0 ? void 0 : videoObj.flv, videoObj === null || videoObj === void 0 ? void 0 : videoObj.rate]);
    var createPlayer = function (url) {
        if (flvjs.isSupported()) {
            videoPlayer.current = flvjs.createPlayer({
                type: 'flv',
                hasAudio: false,
                isLive: true,
                url: url,
                config: {
                    isLive: true,
                    enableWorker: true,
                    enableStashBuffer: false,
                    stashInitialSize: 128,
                },
            });
            videoPlayer.current.on(flvjs.Events.LOADING_COMPLETE, function () {
                console.log('--== video  LOADING_COMPLETE ==--');
            });
            videoPlayer.current.on(flvjs.Events.ERROR, function (errType, errDetail) {
                console.log('on error: ', errType, errDetail);
            });
            videoPlayer.current.attachMediaElement(videoRef.current);
            videoPlayer.current.load();
            var playPromise = videoPlayer.current.play();
            if (playPromise) {
                playPromise
                    .then(function () {
                    console.log('视频加载成功', videoPlayer.current);
                    setHasVideo(true);
                })
                    .catch(function (e) {
                    console.log('视频加载失败');
                });
            }
        }
    };
    var destroyPlayer = function () {
        var _a, _b, _c, _d;
        (_a = videoPlayer.current) === null || _a === void 0 ? void 0 : _a.pause();
        (_b = videoPlayer.current) === null || _b === void 0 ? void 0 : _b.unload();
        (_c = videoPlayer.current) === null || _c === void 0 ? void 0 : _c.detachMediaElement();
        (_d = videoPlayer.current) === null || _d === void 0 ? void 0 : _d.destroy();
        videoPlayer.current = undefined;
        setHasVideo(false);
    };
    // 重新推流
    var rePushStream = function (params) {
        var timeout = 600000;
        var maxTimeout = 600000;
        var maxContentLength = Math.pow(1024, 2);
        var myURL = new URL(props.rePushStream);
        var client = axios.create({ baseURL: "".concat(myURL.origin), timeout: timeout, maxContentLength: maxContentLength }); // 基础请求包装对象
        return client.post("".concat(myURL.pathname), params);
    };
    // 刷新，重新推流
    var redoVideoStream = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(videoObj && videoObj.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, rePushStream({
                            id: videoObj.id,
                            rate: videoObj.rate,
                            surveillanceDeviceId: videoObj.surveillanceDeviceId || videoObj.deviceId,
                        })];
                case 1:
                    res = _a.sent();
                    console.log("res", res);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    // 选择画质
    var handleMenuClick = function (e) {
        if (hasVideo && e.key !== selectKey) {
            var flag = false;
            // destroyPlayer(videoPlayer)
            if (videoObj.boardId) {
                flag = updateVideoUrl(videoObj.boardId, Number(e.key));
            }
            else {
                flag = updateVideoUrl(videoObj.id, Number(e.key));
            }
            flag && setSelectKey(e.key);
        }
    };
    var menu = (<Menu onClick={handleMenuClick} selectedKeys={[selectKey]}>
      <Menu.Item key="0">超清</Menu.Item>
      <Menu.Item key="1">高清</Menu.Item>
    </Menu>);
    return (<div className={styles.videoContainer} ref={wrapperRef}>
      <video ref={videoRef} className={styles.video} autoPlay muted height="100%" width="100%">
        设备不支持
      </video>
      {!showChannel && !hasVideo && (<span className={styles.channelIcon} style={{ color: 'white' }}>
          {/* <ZYTGIcon type="iconshipinjiankong" style={{ fontSize: 32, marginBottom: 5 }} /> */}
          暂无视频画面,请刷新重试
        </span>)}
      {showChannel && !hasVideo && (<span className={styles.channelIcon} style={{ color: (videoObj === null || videoObj === void 0 ? void 0 : videoObj.id) && !(videoObj === null || videoObj === void 0 ? void 0 : videoObj.flv) ? 'red' : 'white' }}>
          {/* <ZYTGIcon type="iconshipinjiankong" style={{ fontSize: 32, marginBottom: 5 }} /> */}
          {(videoObj === null || videoObj === void 0 ? void 0 : videoObj.id) ? ((videoObj === null || videoObj === void 0 ? void 0 : videoObj.flv) ? '暂无视频画面,请刷新重试' : '请选择通道重新登录') : '暂未绑定通道'}
        </span>)}
      <Row className={styles.videoHeader} align="middle">
        <Col span={4}>
          <Dropdown overlay={menu} getPopupContainer={function () { return wrapperRef.current; }}>
            <a className="ant-dropdown-link" style={{ color: 'white' }} onClick={function (e) { return e.preventDefault(); }}>
              {/* <ZYTGIcon type="iconhuazhixuanze" style={{ marginRight: 5 }} /> */}
              画质设置
            </a>
          </Dropdown>
        </Col>
        <Col span={16} style={{ textAlign: 'center', fontSize: 14, fontWeight: 500 }}>
          <span>{(videoObj === null || videoObj === void 0 ? void 0 : videoObj.name) || ''}</span>
        </Col>
      </Row>
      <Row className={styles.videoControl} justify="space-between" align="middle">
        <Col span={showChannel ? 2 : 12}>
          <a style={{ color: 'white' }} onClick={redoVideoStream}>
            <RedoOutlined style={{ marginRight: 5 }}/>
            刷新
          </a>
        </Col>
        {showChannel && !isFullscreen && (<Col span={8}>
            <a style={{ color: 'white' }} onClick={function () { return showChannelSelect(videoObj); }}>
              <VideoCameraAddOutlined style={{ marginRight: 5 }}/>
              选择通道
            </a>
          </Col>)}
        <Col span={12} style={{ textAlign: 'right' }}>
          {/* 全屏缩放 */}
          <a style={{ color: 'white' }} onClick={toggleFull}>
            {isFullscreen ? (<>
                退出全屏
                {/* <ZYTGIcon type="icontuichuquanping-copy" style={{ marginLeft: 5 }} /> */}
              </>) : (<>
                显示全屏
                {/* <ZYTGIcon type="iconquanpingxianshi-copy" style={{ marginLeft: 5 }} /> */}
              </>)}
          </a>
        </Col>
      </Row>
    </div>);
};
VideoPlayer.defaultProps = {
    height: 300,
    videoObj: undefined,
    showChannel: false,
    removeVideo: undefined,
    updateVideoUrl: function (id, rate) {
        return false;
    },
    showChannelSelect: function () { },
    idx: undefined,
};
export default VideoPlayer;
//# sourceMappingURL=VideoPlayer.js.map