import { EventAction, EventType } from './models';
import { PenType } from './models/pen';
import { find } from './utils/canvas';
import { Store } from "@bici-topology/store-utils";
var Socket = /** @class */ (function () {
    function Socket(url, data) {
        var _this = this;
        this.url = url;
        this.data = data;
        this.fns = {};
        this.onmessage = function (e) {
            if (!_this.data.pens.length || !e || !e.data) {
                return;
            }
            var msg;
            try {
                msg = JSON.parse(e.data);
            }
            catch (error) {
                msg = e.data;
            }
            if (_this.data.events) {
                _this.data.events.forEach(function (event, index) {
                    if (event.type === EventType.WebSocket) {
                        if (event.name && event.name === msg.event) {
                            _this.topologyMqtt(index, event, msg.data, _this.socket);
                        }
                        else if (!event.name && msg) {
                            _this.topologyMqtt(index, event, msg, _this.socket);
                        }
                    }
                });
            }
            _this.pensMqtt(_this.data.pens, msg);
        };
        this.init();
    }
    Socket.prototype.init = function () {
        var _this = this;
        this.socket = new WebSocket(this.url);
        this.socket.onmessage = this.onmessage;
        this.socket.onclose = function () {
            console.log('Canvas websocket closed and reconneting...');
            _this.init();
        };
    };
    Socket.prototype.pensMqtt = function (pens, msg) {
        if (!pens) {
            return;
        }
        for (var _i = 0, pens_1 = pens; _i < pens_1.length; _i++) {
            var item = pens_1[_i];
            for (var _a = 0, _b = item.events; _a < _b.length; _a++) {
                var event_1 = _b[_a];
                if (event_1.type === EventType.WebSocket) {
                    if (event_1.name && event_1.name === msg.event) {
                        item.doSocketMqtt(event_1, msg.data, this.socket);
                    }
                    else if (!event_1.name && msg) {
                        item.doSocketMqtt(event_1, msg, this.socket);
                    }
                }
            }
            if (item.type === PenType.Node) {
                this.pensMqtt(item.children, msg);
            }
        }
    };
    Socket.prototype.topologyMqtt = function (index, item, msg, client) {
        if (item.action === EventAction.Function) {
            this.doFn(index, item.value, msg || item.params, client);
        }
        else if (item.action === EventAction.WindowFn) {
            window[item.value](msg || item.params, client);
        }
        else if (item.action === EventAction.SetProps) {
            var props = [];
            var data = msg;
            if (typeof msg === 'string') {
                try {
                    data = JSON.parse(msg);
                }
                catch (error) { }
            }
            if (Array.isArray(data)) {
                props = data;
            }
            for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                var prop = props_1[_i];
                if (prop.id && prop.key) {
                    var pen = find(prop.id, this.data.pens);
                    if (!pen) {
                        continue;
                    }
                    var keys = prop.key.split('.');
                    if (typeof prop.value === 'object') {
                        if (keys[1]) {
                            pen[keys[0]][keys[1]] = Object.assign(pen[prop.key], prop.value);
                        }
                        else {
                            pen[keys[0]] = Object.assign(pen[prop.key], prop.value);
                        }
                    }
                    else {
                        if (keys[1]) {
                            pen[keys[0]][keys[1]] = prop.value;
                        }
                        else {
                            pen[keys[0]] = prop.value;
                        }
                    }
                }
            }
            if (item.params || item.params === undefined) {
                Store.set('LT:render', true);
            }
        }
    };
    Socket.prototype.doFn = function (index, fn, params, client) {
        var func = this.fns[index];
        if (!func) {
            if (client) {
                func = new Function('pen', 'params', 'client', fn);
            }
            else {
                func = new Function('pen', 'params', fn);
            }
            this.fns[index] = func;
        }
        func(params, client);
    };
    Socket.prototype.close = function () {
        this.socket.onclose = null;
        this.socket.close();
    };
    return Socket;
}());
export { Socket };
//# sourceMappingURL=socket.js.map