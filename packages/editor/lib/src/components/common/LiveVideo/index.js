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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import React, { Component } from 'react';
import VideoPlayer from './Player/VideoPlayer';
import axios from 'axios';
import { canvas } from "../../Layout";
////sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.fl
var LiveVideo = /** @class */ (function (_super) {
    __extends(LiveVideo, _super);
    function LiveVideo(props) {
        var _this = this;
        var _a, _b, _c;
        _this = _super.call(this, props) || this;
        _this.removeVideo = function () {
            _this.stopStream();
        };
        // 修改流地址 （切换画质）
        _this.updateStream = function (params) {
            var timeout = 600000;
            var maxTimeout = 600000;
            var maxContentLength = Math.pow(1024, 2);
            var myURL = new URL(_this.state.updateStream);
            var client = axios.create({ baseURL: "".concat(myURL.origin), timeout: timeout, maxContentLength: maxContentLength }); // 基础请求包装对象
            return client.post("".concat(myURL.pathname), params);
        };
        // 更新流地址 （切换画质）
        _this.updateVideoUrl = function (id, rate) { return __awaiter(_this, void 0, void 0, function () {
            var flag, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        flag = false;
                        return [4 /*yield*/, this.updateStream({
                                surveillanceDeviceId: this.state.videoObj.surveillanceDeviceId,
                                channels: [
                                    {
                                        id: id,
                                        oldRate: this.state.videoObj.rate,
                                        rate: rate,
                                        channel: this.state.videoObj.channel,
                                    },
                                ],
                            })];
                    case 1:
                        data = _a.sent();
                        if (data && data.length && data[0].flv) {
                            this.setState(__assign(__assign({}, this.state.videoObj), { flv: data[0].flv, rate: data[0].rate }));
                            flag = true;
                        }
                        return [2 /*return*/, flag];
                }
            });
        }); };
        var node = _this.props.node;
        var videoObj = (_a = node.property.video) === null || _a === void 0 ? void 0 : _a.selectedRows[0];
        _this.state = {
            videoObj: videoObj,
            rePushStream: (_b = node.property.video) === null || _b === void 0 ? void 0 : _b.rePushStream,
            updateStream: (_c = node.property.video) === null || _c === void 0 ? void 0 : _c.updateStream
        };
        return _this;
    }
    LiveVideo.prototype.stopStream = function () {
        var token = window["__CONKPIT_TOKEN"];
        var videoItem = this.state.videoObj;
        if (!videoItem)
            return;
        var timeout = 600000;
        var maxContentLength = Math.pow(1024, 2);
        var myURL = new URL(this.state.updateStream);
        var client = axios.create({
            baseURL: "".concat(myURL.origin),
            timeout: timeout,
            maxContentLength: maxContentLength,
            headers: {
                token: token,
                'Content-Type': 'application/json',
            },
        }); // 基础请求包装对象
        var params = {
            channels: [{ id: videoItem.id, channel: videoItem.channel, oldRate: videoItem.rate }],
        };
        client.post('/api/surveillance/channel/stopStream', params);
    };
    LiveVideo.prototype.componentDidMount = function () {
        var _a;
        var node = this.props.node;
        this.setState({
            videoObj: (_a = node.property.video) === null || _a === void 0 ? void 0 : _a.selectedRows[0],
        });
        var that = this;
        if (canvas) {
            canvas.on('deleteNode', function (nodes) {
                (nodes || []).forEach(function (n) {
                    if (n.name == 'liveVideo' && n.id === that.props.node.id) {
                        that.removeVideo();
                    }
                });
            });
        }
        this.visibilitychange();
    };
    LiveVideo.prototype.visibilitychange = function () {
        var hidden;
        var visibilityChange;
        var visible;
        var state;
        if (typeof document.hidden !== 'undefined') {
            hidden = 'hidden';
            visibilityChange = 'visibilitychange';
            visible = 'visible';
            state = 'visibilityState';
        }
        else if (typeof document.mozHidden !== 'undefined') {
            hidden = 'mozHidden';
            visibilityChange = 'mozvisibilitychange';
            visible = 'mozVisibilityState';
            state = 'mozVisibilityState';
        }
        else if (typeof document.msHidden !== 'undefined') {
            hidden = 'msHidden';
            visibilityChange = 'msvisibilitychange';
            visible = 'msVisibilityState';
            state = 'msVisibilityState';
        }
        else if (typeof document.webkitHidden !== 'undefined') {
            hidden = 'webkitHidden';
            visibilityChange = 'webkitvisibilitychange';
            visible = 'webkitVisibilityState';
        }
        // 标签页切换媒体播放时间重置
        document.addEventListener(visibilityChange, function () {
            if (document[state] === visible) {
                var videoEleObj = document.getElementsByTagName('video');
                for (var video in videoEleObj) {
                    var buffered = videoEleObj[video].buffered;
                    if (buffered && buffered.length > 0) {
                        videoEleObj[video].currentTime = buffered.end(0) - 0.5;
                    }
                }
            }
            else if (document[state] === hidden) {
            }
        }, false);
    };
    LiveVideo.prototype.render = function () {
        var _a;
        var videoObj = (_a = this.props.node.property.video) === null || _a === void 0 ? void 0 : _a.selectedRows[0];
        return (<VideoPlayer height={400} videoObj={videoObj} removeVideo={this.removeVideo} updateVideoUrl={this.updateVideoUrl} rePushStream={this.state.rePushStream}/>);
    };
    return LiveVideo;
}(Component));
export default LiveVideo;
//# sourceMappingURL=index.js.map