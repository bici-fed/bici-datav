import React, { useEffect, useState } from "react";
import './style.less';
import axios from "axios";
import { handleRequestError, maxContentLength, timeout, withCredentials } from "../../data/api";
var ProductQueue = function (props) {
    var _a;
    var dataUrl = props.dataUrl;
    var _b = useState([]), data = _b[0], setData = _b[1];
    var scrollRef = React.useRef();
    var interfaceToken = '';
    // 设置滚动
    useEffect(function () {
        var intv = setInterval(function () {
            scrollRef.current.scrollBy(1, 0);
        }, 100);
        return function () {
            clearInterval(intv);
        };
    }, []);
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
    return (<div className="product-queue">
            <div className="header">
                <span className="left"></span>
                <span className="right">当前生产&nbsp;&nbsp;&nbsp;&nbsp;{(_a = data[0]) === null || _a === void 0 ? void 0 : _a.workshopName}</span>
            </div>
            <div className="outer-container">
                <div className="inner-container" ref={scrollRef}>
                    <div className="element">
                        <ul>
                            {(data || []).map(function (item, index) {
            return (<li key={index}>
                                <span className="title">
                                    <p>{item.productName}</p>
                                    <p>{item.ticketNo}</p>
                                </span>
                                            <span className="order">排位：{index + 1}</span>
                                        </li>);
        })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>);
};
export default ProductQueue;
//# sourceMappingURL=index.js.map