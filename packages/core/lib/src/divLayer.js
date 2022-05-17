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
import { Store } from '@bici-topology/store-utils';
import { Node, images } from './models/node';
import { Lock } from './models/status';
import { PenType } from './models/pen';
import { Layer } from './layer';
var DivLayer = /** @class */ (function (_super) {
    __extends(DivLayer, _super);
    function DivLayer(parentElem, options, TID) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, TID) || this;
        _this.parentElem = parentElem;
        _this.options = options;
        _this.canvas = document.createElement('div');
        _this.player = document.createElement('div');
        _this.videos = {};
        _this.audios = {};
        _this.iframes = {};
        _this.elements = {};
        _this.gifs = {};
        _this.addDiv = function (node) {
            if (node.audio) {
                if (_this.audios[node.id] && _this.audios[node.id].media.src !== node.audio) {
                    _this.audios[node.id].media.src = node.audio;
                }
                _this.setElemPosition(node, (_this.audios[node.id] && _this.audios[node.id].player) || _this.addMedia(node, 'audio'));
            }
            if (node.video) {
                if (_this.videos[node.id] && _this.videos[node.id].media.src !== node.video) {
                    _this.videos[node.id].media.src = node.video;
                }
                _this.setElemPosition(node, (_this.videos[node.id] && _this.videos[node.id].player) || _this.addMedia(node, 'video'));
            }
            if (node.iframe) {
                if (!_this.iframes[node.id]) {
                    _this.addIframe(node);
                    setTimeout(function () {
                        _this.addDiv(node);
                    });
                }
                else {
                    if (_this.iframes[node.id].src !== node.iframe) {
                        _this.iframes[node.id].src = node.iframe;
                    }
                    _this.setElemPosition(node, _this.iframes[node.id]);
                }
            }
            if (node.elementId) {
                if (!_this.elements[node.id]) {
                    _this.elements[node.id] = document.getElementById(node.elementId);
                    _this.elements[node.id + "-layer"] = document.getElementById(node.elementId + "-layer");
                    if (_this.elements[node.id]) {
                        // 为了添加可交互的组件二增加的代码
                        if (node.isEditable) {
                            console.log("addDiv....");
                            _this.canvas.appendChild(_this.elements[node.id + "-layer"]);
                        }
                        _this.canvas.appendChild(_this.elements[node.id]);
                    }
                }
                _this.setElemPosition(node, _this.elements[node.id]);
                _this.setElemPosition(node, _this.elements[node.id + "-layer"], true);
            }
            if (node.gif) {
                if (node.image.indexOf('.gif') < 0) {
                    node.gif = false;
                    _this.gifs[node.id] && _this.canvas.removeChild(_this.gifs[node.id]);
                    _this.gifs[node.id] = undefined;
                }
                else if (node.img) {
                    if (_this.gifs[node.id] instanceof HTMLDivElement) {
                        var a = _this.gifs[node.id];
                        var b = a.children[0];
                        if (b && b.src !== node.image) {
                            b.src = node.image;
                        }
                    }
                    else {
                        var a = _this.gifs[node.id];
                        if (a && a.src !== node.image) {
                            a.src = node.image;
                        }
                    }
                    _this.setElemPosition(node, _this.gifs[node.id] || _this.addGif(node));
                    // this.setElemPosition(node, this.addGif(node));
                }
                else if (node.image.indexOf('.gif') > 0) {
                    console.log(node.id);
                    if (!_this.gifs[node.id]) {
                        var divid = document.getElementById(node.id);
                        divid && _this.canvas.removeChild(divid);
                        node.gif = false;
                        return;
                    }
                    node.gif = true;
                    var a = _this.gifs[node.id];
                    var b = a.children[0];
                    if (b && b.src !== node.image) {
                        b.src = node.image;
                    }
                }
            }
            if (node.children) {
                for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                    var child = _a[_i];
                    if (child.type === PenType.Line) {
                        continue;
                    }
                    _this.addDiv(child);
                }
            }
        };
        _this.data = Store.get(_this.generateStoreKey('topology-data'));
        if (!_this.options.playIcon) {
            _this.options.playIcon = 'iconfont icon-play';
        }
        if (!_this.options.pauseIcon) {
            _this.options.pauseIcon = 'iconfont icon-pause';
        }
        if (!_this.options.fullScreenIcon) {
            _this.options.fullScreenIcon = 'iconfont icon-full-screen';
        }
        if (!_this.options.loopIcon) {
            _this.options.loopIcon = 'iconfont icon-loop';
        }
        _this.canvas.style.position = 'absolute';
        _this.canvas.style.left = '0';
        _this.canvas.style.top = '0';
        _this.canvas.style.outline = 'none';
        _this.canvas.style.background = 'transparent';
        parentElem.appendChild(_this.canvas);
        parentElem.appendChild(_this.player);
        _this.createPlayer();
        _this.subcribe = Store.subscribe(_this.generateStoreKey('LT:addDiv'), _this.addDiv);
        _this.subcribeNode = Store.subscribe(_this.generateStoreKey('LT:activeNode'), function (node) {
            if (!node || (!node.video && !node.audio)) {
                _this.player.style.top = '-99999px';
                return;
            }
            if (node.audio && _this.audios[node.id]) {
                _this.media = _this.audios[node.id].media;
            }
            else if (node.video && _this.videos[node.id]) {
                _this.media = _this.videos[node.id].media;
            }
            else {
                return;
            }
            _this.curNode = node;
            var rect = _this.parentElem.getBoundingClientRect();
            _this.player.style.top = rect.top + _this.parentElem.clientHeight - 40 + 'px';
            _this.player.style.left = rect.left + 'px';
            _this.player.style.width = _this.parentElem.clientWidth + 'px';
            _this.getMediaCurrent();
            if (_this.media.paused) {
                _this.playBtn.className = _this.options.playIcon;
            }
            else {
                _this.playBtn.className = _this.options.pauseIcon;
            }
        });
        document.addEventListener('fullscreenchange', function (e) {
            if (!_this.media) {
                return;
            }
            if (document.fullscreen) {
                _this.media.controls = true;
                _this.media.style.userSelect = 'initial';
                _this.media.style.pointerEvents = 'initial';
            }
            else {
                _this.media.style.userSelect = 'none';
                _this.media.style.pointerEvents = 'none';
                _this.media.controls = false;
            }
        });
        return _this;
    }
    DivLayer.prototype.createPlayer = function () {
        var _this = this;
        this.player.style.position = 'fixed';
        this.player.style.outline = 'none';
        this.player.style.top = '-99999px';
        this.player.style.height = '40px';
        this.player.style.padding = '10px 15px';
        this.player.style.background = 'rgba(200,200,200,.1)';
        this.player.style.display = 'flex';
        this.player.style.alignItems = 'center';
        this.player.style.userSelect = 'initial';
        this.player.style.pointerEvents = 'initial';
        this.player.style.zIndex = '1';
        this.playBtn = document.createElement('i');
        this.currentTime = document.createElement('span');
        this.progress = document.createElement('div');
        this.progressCurrent = document.createElement('div');
        this.loop = document.createElement('i');
        var fullScreen = document.createElement('i');
        this.playBtn.className = this.options.playIcon;
        this.playBtn.style.fontSize = '18px';
        this.playBtn.style.lineHeight = '20px';
        this.playBtn.style.cursor = 'pointer';
        this.currentTime.style.padding = '0 10px';
        this.currentTime.innerText = '0 / 0';
        this.progress.style.position = 'relative';
        this.progress.style.flexGrow = '1';
        this.progress.style.top = '0';
        this.progress.style.height = '4px';
        this.progress.style.background = '#ccc';
        this.progress.style.borderRadius = '2px';
        this.progress.style.overflow = 'hidden';
        this.progress.style.cursor = 'pointer';
        this.progressCurrent.style.position = 'absolute';
        this.progressCurrent.style.left = '0';
        this.progressCurrent.style.top = '0';
        this.progressCurrent.style.bottom = '0';
        this.progressCurrent.style.width = '0';
        this.progressCurrent.style.background = '#52c41a';
        this.loop.style.margin = '0 10px';
        this.loop.style.padding = '2px 5px';
        this.loop.style.borderRadius = '2px';
        this.loop.className = this.options.loopIcon;
        this.loop.style.fontSize = '18px';
        this.loop.style.lineHeight = '20px';
        this.loop.style.cursor = 'pointer';
        fullScreen.className = this.options.fullScreenIcon;
        fullScreen.style.fontSize = '17px';
        fullScreen.style.lineHeight = '20px';
        fullScreen.style.cursor = 'pointer';
        this.player.appendChild(this.playBtn);
        this.player.appendChild(this.currentTime);
        this.player.appendChild(this.progress);
        this.progress.appendChild(this.progressCurrent);
        this.player.appendChild(this.loop);
        this.player.appendChild(fullScreen);
        this.playBtn.onclick = function () {
            if (_this.media.paused) {
                _this.media.play();
                _this.playBtn.className = _this.options.pauseIcon;
            }
            else {
                _this.media.pause();
                _this.playBtn.className = _this.options.playIcon;
            }
        };
        this.progress.onclick = function (e) {
            _this.media.currentTime = (e.offsetX / _this.progress.clientWidth) * _this.media.duration;
        };
        this.loop.onclick = function () {
            _this.media.loop = !_this.media.loop;
            _this.curNode.playLoop = _this.media.loop;
            if (_this.media.loop) {
                _this.loop.style.background = '#ddd';
            }
            else {
                _this.loop.style.background = 'none';
            }
        };
        fullScreen.onclick = function () {
            _this.media.requestFullscreen();
        };
    };
    DivLayer.prototype.getMediaCurrent = function () {
        if (!this.media) {
            return;
        }
        this.currentTime.innerText =
            this.formatSeconds(this.media.currentTime) + ' / ' + this.formatSeconds(this.media.duration);
        this.progressCurrent.style.width =
            (this.media.currentTime / this.media.duration) * this.progress.clientWidth + 'px';
    };
    DivLayer.prototype.addMedia = function (node, type) {
        var _this = this;
        var player = document.createElement('div');
        var current = document.createElement('div');
        var media = document.createElement(type);
        current.style.position = 'absolute';
        current.style.outline = 'none';
        current.style.left = '0';
        current.style.bottom = '0';
        current.style.height = '2px';
        current.style.background = '#52c41a';
        media.style.position = 'absolute';
        media.style.outline = 'none';
        media.style.left = '0';
        media.style.right = '0';
        media.style.top = '0';
        media.style.bottom = '0';
        if (type === 'video') {
            media.style.width = node.rect.width + 'px';
            media.style.height = node.rect.height + 'px';
        }
        player.style.background = 'transparent';
        if (node.play === 1) {
            media.autoplay = true;
        }
        media.loop = node.playLoop;
        media.ontimeupdate = function () {
            current.style.width = (media.currentTime / media.duration) * node.rect.width + 'px';
            _this.getMediaCurrent();
            if (_this.media === media) {
                if (node.playLoop) {
                    media.loop = true;
                    _this.loop.style.background = '#ddd';
                }
                else {
                    media.loop = false;
                    _this.loop.style.background = 'none';
                }
            }
        };
        media.onended = function () {
            Store.set(_this.generateStoreKey('mediaEnd'), node);
            if (_this.media === media) {
                _this.playBtn.className = _this.options.playIcon;
            }
            _this.playNext(node.nextPlay);
        };
        media.onloadedmetadata = function () {
            _this.getMediaCurrent();
        };
        media.src = node[type];
        player.appendChild(media);
        player.appendChild(current);
        this[type + 's'][node.id] = {
            player: player,
            current: current,
            media: media,
        };
        this.canvas.appendChild(player);
        return player;
    };
    DivLayer.prototype.playNext = function (next) {
        if (!next) {
            return;
        }
        for (var _i = 0, _a = this.data.pens; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!(item instanceof Node)) {
                continue;
            }
            if (item.tags.indexOf(next) > -1) {
                if (item.audio && this.audios[item.id] && this.audios[item.id].media && this.audios[item.id].media.paused) {
                    this.audios[item.id].media.play();
                }
                else if (item.video && this.videos[item.id].media && this.videos[item.id].media.paused) {
                    this.videos[item.id].media.play();
                }
            }
        }
    };
    DivLayer.prototype.addIframe = function (node) {
        var iframe = document.createElement('iframe');
        iframe.scrolling = 'no';
        iframe.frameBorder = '0';
        iframe.src = node.iframe;
        this.iframes[node.id] = iframe;
        this.canvas.appendChild(iframe);
        return iframe;
    };
    DivLayer.prototype.addGif = function (node) {
        node.img.removeAttribute('style');
        node.img.style.width = node.rect.width + 'px';
        node.img.style.height = node.rect.height + 'px';
        var imgWrapper = document.createElement('div');
        imgWrapper.setAttribute('id', node.id);
        imgWrapper.appendChild(node.img);
        this.canvas.appendChild(imgWrapper);
        this.gifs[node.id] = imgWrapper;
        return imgWrapper;
    };
    DivLayer.prototype.setElemPosition = function (node, elem, layer) {
        if (layer === void 0) { layer = false; }
        if (!elem) {
            return;
        }
        elem.style.position = 'absolute';
        elem.style.outline = 'none';
        elem.style.left = node.isEditable ? node.rect.x + 10 + 'px' : node.rect.x + 'px';
        elem.style.top = node.isEditable ? node.rect.y + 10 + 'px' : node.rect.y + 'px';
        elem.style.width = node.isEditable ? node.rect.width - 20 + 'px' : node.rect.width + 'px';
        elem.style.height = node.isEditable ? node.rect.height - 20 + 'px' : node.rect.height + 'px';
        if (node.rotate || node.offsetRotate) {
            elem.style.transform = "rotate(".concat(node.rotate + node.offsetRotate, "deg)");
        }
        if (node.video && this.videos[node.id] && this.videos[node.id].media) {
            this.videos[node.id].media.style.width = '100%';
            this.videos[node.id].media.style.height = '100%';
        }
        if (this.data.locked > Lock.None || node.locked > Lock.None || node.isEditable) {
            elem.style.userSelect = 'initial';
            elem.style.pointerEvents = 'initial';
        }
        else {
            elem.style.userSelect = 'none';
            elem.style.pointerEvents = 'none';
        }
        if (layer) {
            elem.style.left = node.rect.x + 'px';
            elem.style.top = node.rect.y + 'px';
            elem.style.width = node.rect.width + 'px';
            elem.style.height = node.rect.height + 'px';
            elem.style.userSelect = 'none';
            elem.style.pointerEvents = 'none';
        }
    };
    DivLayer.prototype.removeDiv = function (item) {
        if (this.curNode && item.id === this.curNode.id) {
            this.curNode = null;
            this.media = null;
            this.player.style.top = '-99999px';
        }
        if (item.audio) {
            this.canvas.removeChild(this.audios[item.id].player);
            this.audios[item.id] = null;
        }
        if (item.video) {
            this.canvas.removeChild(this.videos[item.id].player);
            this.videos[item.id] = null;
        }
        if (item.iframe) {
            this.canvas.removeChild(this.iframes[item.id]);
            this.iframes[item.id] = null;
        }
        if (item.elementId) {
            this.canvas.removeChild(this.elements[item.id]);
            this.elements[item.id] = null;
        }
        if (item.gif) {
            this.canvas.removeChild(this.gifs[item.id]);
            var divid = document.getElementById(item.id);
            divid && this.canvas.removeChild(divid);
            this.gifs[item.id] = null;
        }
        if (item.children) {
            for (var _i = 0, _a = item.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child.type === PenType.Line) {
                    continue;
                }
                this.removeDiv(child);
            }
        }
    };
    DivLayer.prototype.clear = function (shallow) {
        this.canvas.innerHTML = '';
        this.audios = {};
        this.videos = {};
        this.iframes = {};
        this.elements = {};
        this.gifs = {};
        if (!shallow) {
            // tslint:disable-next-line:forin
            for (var key in images) {
                delete images[key];
            }
        }
        this.player.style.top = '-99999px';
    };
    DivLayer.prototype.formatSeconds = function (seconds) {
        var h = Math.floor(seconds / 3600);
        var m = Math.floor(seconds / 60) % 60;
        var s = Math.floor(seconds % 60);
        var txt = s + '';
        if (m) {
            txt = m + ':' + s;
        }
        else {
            txt = '0:' + s;
        }
        if (h) {
            txt = h + ':' + m + ':' + s;
        }
        return txt;
    };
    DivLayer.prototype.resize = function (size) {
        if (size) {
            this.canvas.style.width = size.width + 'px';
            this.canvas.style.height = size.height + 'px';
        }
        else {
            if (this.options.width && this.options.width !== 'auto') {
                this.canvas.style.width = this.options.width + 'px';
            }
            else {
                this.canvas.style.width = this.parentElem.clientWidth + 'px';
            }
            if (this.options.height && this.options.height !== 'auto') {
                this.canvas.style.height = this.options.height + 'px';
            }
            else {
                this.canvas.style.height = this.parentElem.clientHeight - 8 + 'px';
            }
        }
    };
    DivLayer.prototype.render = function () {
        for (var _i = 0, _a = this.data.pens; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!item.getTID()) {
                item.setTID(this.TID);
            }
            this.addDiv(item);
        }
    };
    DivLayer.prototype.destroy = function () {
        this.clear();
        this.subcribe.unsubscribe();
        this.subcribeNode.unsubscribe();
    };
    DivLayer.prototype.changeDivNodePosition = function (pen, pens, type) {
    };
    return DivLayer;
}(Layer));
export { DivLayer };
//# sourceMappingURL=divLayer.js.map