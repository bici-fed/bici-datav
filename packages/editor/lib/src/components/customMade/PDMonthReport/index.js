import React, { useEffect, useState } from "react";
import './style.less';
import { handleRequestError, maxContentLength, timeout, withCredentials } from "../../data/api";
import axios from "axios";
var PDMonthReport = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
    var dataUrl = props.dataUrl;
    var _x = useState([]), data = _x[0], setData = _x[1];
    var interfaceToken = '';
    // console.log("pdMonthReport==",dataUrl)
    useEffect(function () {
        // loginSZGC().then((res:string)=>{
        //     interfaceToken=res;
        //     fetchData().then((data:any[])=>{
        //         setData(data)
        //     })
        // })
    }, [dataUrl]);
    var fetchData = function () {
        return new Promise(function (resolve, reject) {
            if (!dataUrl) {
                resolve({ front_error: 4 });
                return;
            }
            var myURL = new URL(dataUrl);
            var ajax = axios.create({ baseURL: "".concat(myURL.origin, "/"), timeout: timeout, maxContentLength: maxContentLength, withCredentials: withCredentials });
            ajax.request({
                url: myURL.pathname,
                method: 'get',
                headers: {
                    token: interfaceToken,
                    'Content-Type': 'application/json',
                },
                data: {
                    firstName: 'Fred'
                },
            }).then(function (res) {
                console.log(res.data);
                if (res && res.data.code == 1000) {
                    resolve(res.data.data);
                }
                else {
                    reject("请求错误");
                }
            }).catch(function (error) {
                handleRequestError(error);
                reject("请求错误");
            });
        });
    };
    return (<div className="month-report">
            {/*<div className="header">*/}
            {/*    <h3>坯锭收发月报表</h3>*/}
            {/*</div>*/}
            <div className="content">
                <div className="bar-container">
                    <div className="bar-wrapper">
                        <div className="bar-item" style={{ width: '55%' }}>
                            <h3>{(_a = data[0]) === null || _a === void 0 ? void 0 : _a.text}</h3>
                            <div className="bar-chart" style={{ backgroundColor: 'rgba(45, 65, 181, 0.7)' }}>{(_b = data[0]) === null || _b === void 0 ? void 0 : _b.value}{(_c = data[0]) === null || _c === void 0 ? void 0 : _c.unit}</div>
                        </div>
                        <div className="bar-item" style={{ width: '14%' }}>
                            <h3>{(_d = data[1]) === null || _d === void 0 ? void 0 : _d.text}</h3>
                            <div className="bar-chart" style={{ backgroundColor: 'rgba(65, 117, 5, 0.7)' }}>{(_e = data[1]) === null || _e === void 0 ? void 0 : _e.value}{(_f = data[1]) === null || _f === void 0 ? void 0 : _f.unit}</div>
                        </div>
                        <div className="bar-item" style={{ width: '27%' }}>
                            <h3>{(_g = data[2]) === null || _g === void 0 ? void 0 : _g.text}</h3>
                            <div className="bar-chart" style={{ backgroundColor: 'rgba(65, 117, 5, 0.7)' }}>{(_h = data[2]) === null || _h === void 0 ? void 0 : _h.value}{(_j = data[2]) === null || _j === void 0 ? void 0 : _j.unit}</div>
                        </div>
                    </div>
                    <div className="bar-wrapper">
                        <div className="bar-item" style={{ width: '41%' }}>
                            <div className="bar-chart" style={{ backgroundColor: 'rgba(45, 65, 181, 0.7)' }}>{(_k = data[3]) === null || _k === void 0 ? void 0 : _k.value}{(_l = data[3]) === null || _l === void 0 ? void 0 : _l.unit}</div>
                            <h3>{(_m = data[3]) === null || _m === void 0 ? void 0 : _m.text}</h3>
                        </div>
                        <div className="bar-item" style={{ width: '17%' }}>
                            <div className="bar-chart" style={{ backgroundColor: 'rgba(156, 25, 25, 0.7)' }}>{(_o = data[4]) === null || _o === void 0 ? void 0 : _o.value}{(_p = data[4]) === null || _p === void 0 ? void 0 : _p.unit}</div>
                            <h3>{(_q = data[4]) === null || _q === void 0 ? void 0 : _q.text}</h3>
                        </div>
                        <div className="bar-item" style={{ width: '16%' }}>
                            <div className="bar-chart" style={{ backgroundColor: 'rgba(156, 25, 25, 0.7)' }}>{(_r = data[5]) === null || _r === void 0 ? void 0 : _r.value}{(_s = data[5]) === null || _s === void 0 ? void 0 : _s.unit}</div>
                            <h3>{(_t = data[5]) === null || _t === void 0 ? void 0 : _t.text}</h3>
                        </div>
                        <div className="bar-item" style={{ width: '20%' }}>
                            <div className="bar-chart" style={{ borderColor: 'red', backgroundColor: 'rgba(156, 25, 25, 0.7)' }}>{(_u = data[6]) === null || _u === void 0 ? void 0 : _u.value}{(_v = data[6]) === null || _v === void 0 ? void 0 : _v.unit}</div>
                            <h3>{(_w = data[6]) === null || _w === void 0 ? void 0 : _w.text}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};
export default PDMonthReport;
//# sourceMappingURL=index.js.map