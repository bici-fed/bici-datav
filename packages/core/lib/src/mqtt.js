import mqtt from './mqtt.min.js';
import { EventType } from './models';
var MQTT = /** @class */ (function () {
    function MQTT(url, options, topics, data) {
        var _this = this;
        this.url = url;
        this.options = options;
        this.topics = topics;
        this.data = data;
        this.onmessage = function (topic, message) {
            if (!_this.data.pens.length || !topic) {
                return;
            }
            for (var _i = 0, _a = _this.data.pens; _i < _a.length; _i++) {
                var item = _a[_i];
                for (var _b = 0, _c = item.events; _b < _c.length; _b++) {
                    var event_1 = _c[_b];
                    if (event_1.type === EventType.Mqtt) {
                        if (event_1.name && topic.indexOf(event_1.name) > -1) {
                            item.doSocketMqtt(event_1, message.toString(), _this.client);
                        }
                    }
                }
            }
        };
        this.init();
    }
    MQTT.prototype.init = function () {
        this.client = mqtt.connect(this.url, this.options);
        this.client.on('message', this.onmessage);
        if (this.topics) {
            this.client.subscribe(this.topics.split(','));
        }
    };
    MQTT.prototype.publish = function (topic, message) {
        this.client.publish(topic, message);
    };
    MQTT.prototype.close = function () {
        this.client.end();
    };
    return MQTT;
}());
export { MQTT };
//# sourceMappingURL=mqtt.js.map