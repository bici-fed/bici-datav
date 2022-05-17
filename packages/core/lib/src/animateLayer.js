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
import { PenType } from './models/pen';
import { Node } from './models/node';
import { Line } from './models/line';
import { Layer } from './layer';
import { s8 } from './utils';
import { find } from './utils/canvas';
var AnimateLayer = /** @class */ (function (_super) {
    __extends(AnimateLayer, _super);
    function AnimateLayer(options, TID) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, TID) || this;
        _this.options = options;
        _this.pens = new Map();
        _this.lastNow = 0;
        _this.data = Store.get(_this.generateStoreKey('topology-data'));
        Store.set(_this.generateStoreKey('LT:AnimateLayer'), _this);
        if (!_this.options.animateColor) {
            _this.options.animateColor = '#ff6600';
        }
        _this.subscribeUpdate = Store.subscribe(_this.generateStoreKey('LT:updateLines'), function (lines) {
            _this.updateLines(lines);
        });
        _this.subscribePlay = Store.subscribe(_this.generateStoreKey('LT:AnimatePlay'), function (params) {
            if (params.stop) {
                if (params.tag) {
                    var pen = find(params.tag, _this.data.pens);
                    if (pen && pen.id) {
                        if (_this.pens.has(pen.id)) {
                            _this.pens.get(pen.id).animateStart = 0;
                        }
                    }
                    else if (pen) {
                        pen.forEach(function (item) {
                            if (_this.pens.has(item.id)) {
                                _this.pens.get(item.id).animateStart = 0;
                            }
                        });
                    }
                }
                if (params.pen && _this.pens.has(params.pen.id)) {
                    _this.pens.get(params.pen.id).animateStart = 0;
                }
            }
            else {
                if (params.pen) {
                    if (_this.pens.has(params.pen.id)) {
                        _this.pens.get(params.pen.id).animateStart = Date.now();
                    }
                    else {
                        if (params.pen.type) {
                            _this.pens.set(params.pen.id, _this.getAnimateLine(params.pen));
                        }
                        else {
                            _this.pens.set(params.pen.id, params.pen);
                        }
                    }
                }
                if (params.tag) {
                    _this.readyPlay(params.tag, false);
                }
            }
            _this.animate();
        });
        return _this;
    }
    AnimateLayer.prototype.getAnimateLine = function (item) {
        var l = new Line(item);
        l.data = l.id;
        l.id = s8();
        l.setTID(this.TID);
        l.isAnimate = true;
        l.toArrow = '';
        if (l.fromArrow && l.fromArrow.indexOf('line') < 0) {
            l.animateFromSize = l.fromArrowSize + l.lineWidth * 5;
        }
        if (l.toArrow && l.toArrow.indexOf('line') < 0) {
            l.animateToSize = l.toArrowSize + l.lineWidth * 5;
        }
        l.animateStart = item.animateStart;
        l.lineCap = 'round';
        l.fillStyle = '#fff';
        l.strokeStyle = l.animateColor || this.options.animateColor;
        l.length = l.getLen();
        if (!l.fromArrowColor) {
            l.fromArrowColor = l.strokeStyle || Store.get(this.generateStoreKey('LT:color'));
        }
        if (!l.toArrowColor) {
            l.toArrowColor = l.strokeStyle || Store.get(this.generateStoreKey('LT:color'));
        }
        return l;
    };
    AnimateLayer.prototype.findLine = function (pen) {
        for (var _i = 0, _a = this.data.pens; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === pen.data) {
                return item;
            }
        }
    };
    AnimateLayer.prototype.readyPlay = function (tag, auto, pens) {
        var _this = this;
        var readyPens = new Map();
        if (!pens) {
            pens = this.data.pens;
        }
        pens.forEach(function (pen) {
            pen.setTID(_this.TID);
            if (!pen.visible || readyPens.get(pen.id)) {
                return;
            }
            if ((auto && pen.animatePlay) || (tag && pen.tags.indexOf(tag) > -1)) {
                if (!pen.animateStart || pen.animateStart < 1) {
                    pen.animateStart = Date.now();
                }
            }
            if (pen instanceof Node) {
                if (pen.animateStart > 0) {
                    if (!pen.animateReady) {
                        pen.initAnimate();
                    }
                    readyPens.set(pen.id, pen);
                }
                if (pen.children && pen.children.length) {
                    _this.readyPlay(tag, auto, pen.children);
                }
            }
            else {
                if (pen.animateStart > 0) {
                    readyPens.set(pen.id, _this.getAnimateLine(pen));
                }
                else if (_this.pens.has(pen.id)) {
                    _this.pens.get(pen.id).animateStart = 0;
                }
            }
        });
        readyPens.forEach(function (pen) {
            if (pen.type) {
                _this.pens.set(pen.data, pen);
            }
            else {
                _this.pens.set(pen.id, pen);
            }
        });
    };
    AnimateLayer.prototype.animate = function () {
        var _this = this;
        if (this.timer) {
            cancelAnimationFrame(this.timer);
        }
        this.timer = requestAnimationFrame(function () {
            var now = Date.now();
            if (now - _this.lastNow < _this.options.refresh) {
                _this.animate();
                return;
            }
            _this.lastNow = now;
            var animated = false;
            _this.pens.forEach(function (pen) {
                if (!pen.animateStart || pen.animateStart < 1) {
                    if (pen.type) {
                        _this.pens.delete(pen.data);
                        var line = _this.findLine(pen);
                        if (line) {
                            line.animateStart = 0;
                            line.animatePos = pen.animatePos;
                        }
                    }
                    else {
                        _this.pens.delete(pen.id);
                    }
                    return;
                }
                if (pen.animateStart > now) {
                    return;
                }
                if (pen.animateFn) {
                    if (typeof pen.animateFn === 'function') {
                        pen.animateFn();
                    }
                    else if (window[pen.animateFn]) {
                        window[pen.animateFn]();
                    }
                    else {
                        // pen.render();
                    }
                }
                else {
                    pen.animate(now);
                }
                if (pen.animateStart < 1) {
                    if (pen.type) {
                        _this.pens.delete(pen.data);
                    }
                    else {
                        _this.pens.delete(pen.id);
                    }
                    if (pen.type === PenType.Line) {
                        var line = _this.findLine(pen);
                        if (line) {
                            line.animateStart = 0;
                            line.animatePos = pen.animatePos;
                        }
                    }
                    if (pen.nextAnimate) {
                        _this.readyPlay(pen.nextAnimate, false);
                    }
                }
                animated = true;
            });
            if (animated) {
                Store.set(_this.generateStoreKey('LT:render'), true);
                _this.animate();
            }
        });
    };
    AnimateLayer.prototype.updateLines = function (lines) {
        this.pens.forEach(function (line, key) {
            if (!(line instanceof Line)) {
                return;
            }
            for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                var item = lines_1[_i];
                if (line.data === item.id) {
                    line.from = item.from;
                    line.to = item.to;
                    line.controlPoints = item.controlPoints;
                    line.length = line.getLen();
                }
            }
        });
    };
    AnimateLayer.prototype.render = function (ctx) {
        var _this = this;
        this.pens.forEach(function (line, key) {
            if (line.visible && line instanceof Line) {
                if (!line.getTID()) {
                    line.setTID(_this.TID);
                }
                line.render(ctx);
            }
        });
    };
    AnimateLayer.prototype.stop = function () {
        this.pens.clear();
        if (this.timer) {
            cancelAnimationFrame(this.timer);
        }
    };
    AnimateLayer.prototype.destroy = function () {
        this.stop();
        this.subscribeUpdate.unsubscribe();
        this.subscribePlay.unsubscribe();
    };
    return AnimateLayer;
}(Layer));
export { AnimateLayer };
//# sourceMappingURL=animateLayer.js.map