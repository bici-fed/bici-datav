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
import React, { useEffect, useState } from "react";
import './styles.less';
import { canvas } from "../../Preview";
var DateFormat = function (props) {
    var style = props.style, node = props.node, dataPointReq = props.dataPointReq;
    var _a = useState('0分'), minuts = _a[0], setMinuts = _a[1];
    useEffect(function () {
        try {
            canvas._emitter.on("socketDataSuccess", function (data) {
                fomatField(data);
            });
        }
        catch (e) {
        }
    }, [node, dataPointReq]);
    var sty = __assign(__assign(__assign({}, style), node.font), { width: node.rect.width < 10 ? 'auto' : node.rect.width, height: node.rect.height < 10 ? 'auto' : node.rect.height, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' });
    var fomatField = function (data) {
        var sockData = JSON.parse(data.data);
        if (!node.property.dataPointParam.qtDataList[0]) {
            setMinuts('0分');
            return;
        }
        var pointId = node.property.dataPointParam.qtDataList[0].id;
        var isUpdate = pointId == sockData.id;
        var mins = sockData.value;
        if (isUpdate) {
            if (typeof mins !== 'number')
                return mins;
            var days = [
                ':',
                ':',
                ':',
                ':',
                ':',
            ];
            var dataArr = getDates(mins);
            var d = '';
            if (dataArr[0] > 0) {
                if (dataArr[0] < 10) {
                    d += '0' + dataArr[0] + days[0];
                }
                else {
                    d += dataArr[0] + days[0];
                }
            }
            if (dataArr[1] > 0) {
                if (dataArr[1] < 10) {
                    d += '0' + dataArr[1] + days[1];
                }
                else {
                    d += dataArr[1] + days[1];
                }
            }
            if (dataArr[2] > 0) {
                if (dataArr[2] < 10) {
                    d += '0' + dataArr[2] + days[2];
                }
                else {
                    d += dataArr[2] + days[2];
                }
            }
            if (dataArr[3] >= 0) {
                if (dataArr[3] < 10) {
                    d += '0' + dataArr[3] + days[3];
                }
                else {
                    d += dataArr[3] + days[3];
                }
            }
            if (dataArr[4] >= 0) {
                if (dataArr[4] < 10) {
                    d += '0' + dataArr[4] + days[4];
                }
                else {
                    d += dataArr[4] + days[4];
                }
            }
            if ((d || ' ').endsWith(':')) {
                d = d.substring(0, d.length - 1);
            }
            setMinuts(d);
        }
    };
    return (<div style={sty}>
            {minuts}
        </div>);
};
function getDates(mins) {
    var runTime = mins * 60;
    var year = Math.floor(runTime / 86400 / 365);
    runTime = runTime % (86400 * 365);
    var month = Math.floor(runTime / 86400 / 30);
    runTime = runTime % (86400 * 30);
    var day = Math.floor(runTime / 86400);
    runTime = runTime % 86400;
    var hour = Math.floor(runTime / 3600);
    runTime = runTime % 3600;
    var minute = Math.floor(runTime / 60);
    runTime = runTime % 60;
    var second = runTime;
    return [year, month, day, hour, minute, second];
}
export default DateFormat;
//# sourceMappingURL=index.js.map