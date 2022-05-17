import { Node } from './node';
import { Line } from './line';
import { Lock } from './status';
import { s8 } from '../utils';
var TopologyData = /** @class */ (function () {
    function TopologyData(json) {
        this.pens = [];
        this.lineName = 'curve';
        this.fromArrow = '';
        this.toArrow = 'triangleSolid';
        this.scale = 1;
        this.locked = Lock.None;
        this.mqttOptions = {
            clientId: s8(),
        };
        if (json) {
            this.pens = [];
            for (var _i = 0, _a = json.pens; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.from) {
                    this.pens.push(new Line(item));
                }
                else {
                    this.pens.push(new Node(item));
                }
            }
            this.lineName = json.lineName || 'curve';
            this.fromArrow = json.fromArrow || '';
            this.toArrow = json.toArrow || 'triangleSolid';
            this.scale = json.scale || 1;
            this.locked = json.locked || Lock.None;
            this.bkImage = json.bkImage;
            this.bkColor = json.bkColor;
            this.grid = json.grid;
            this.manualCps = json.manualCps;
            this.width = json.width;
            this.height = json.height;
            this.property = json.property;
            this.websocket = json.websocket;
            this.mqttUrl = json.mqttUrl;
            if (json.mqttOptions) {
                var opts = '';
                if (typeof json.mqttOptions === 'object') {
                    opts = JSON.stringify(json.mqttOptions);
                }
                else {
                    opts = json.mqttOptions + '';
                }
                this.mqttOptions = JSON.parse(opts);
            }
            else {
                this.mqttOptions = { clientId: s8() };
            }
            this.mqttTopics = json.mqttTopics;
            if (typeof json.data === 'object') {
                this.data = JSON.parse(JSON.stringify(json.data));
            }
            else {
                this.data = json.data || '';
            }
            if (json.events) {
                this.events = json.events;
            }
        }
        if (!this.mqttOptions) {
            this.mqttOptions = { clientId: s8() };
        }
    }
    return TopologyData;
}());
export { TopologyData };
//# sourceMappingURL=data.js.map