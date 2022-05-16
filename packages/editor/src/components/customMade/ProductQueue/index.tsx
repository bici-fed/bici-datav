import React, {useEffect, useState} from "react";
import './style.less'
import axios from "axios";
import {handleRequestError, loginSZGC, maxContentLength, timeout, withCredentials} from "../../data/api";

interface ProductQueueProps{
    iframe:string;
    dataUrl:string;
    pullRate:number;
}

const ProductQueue = (props:ProductQueueProps)=>{
    const {dataUrl}=props;
    const [data,setData]=useState([])
    const scrollRef=React.useRef();
    let interfaceToken='';
    // 设置滚动
    useEffect(()=>{
        const intv=setInterval(()=>{
            (scrollRef.current as any).scrollBy(1,0);
        },100)
        return ()=>{
            clearInterval(intv)
        }
    },[])
    useEffect(()=>{
        // loginSZGC().then((res:string)=>{
        //     interfaceToken=res;
        //     fetchData().then((data:any[])=>{
        //         setData(data)
        //     })
        // })
    },[dataUrl])
    const fetchData=()=>{
        return new Promise((resolve,reject)=>{
            if(!dataUrl){
                resolve({front_error:4})
                return;
            }
            var myURL = new URL(dataUrl)
            const ajax = axios.create({baseURL: `${myURL.origin}/`, timeout, maxContentLength,withCredentials})
            ajax.request({
                url:myURL.pathname,//myURL.pathname
                method:'get',
                headers: {
                    token: interfaceToken,
                    'Content-Type': 'application/json',
                },
                data: {
                    firstName: 'Fred'
                },
            }).then(res=>{
                console.log(res.data)
                if(res&&res.data.code==1000){
                    resolve(res.data.data)
                }else{
                    reject("请求错误")
                }
            }).catch((error)=>{
                handleRequestError(error);
                reject("请求错误")
            });
        })
    }
    return (
        <div className="product-queue">
            <div className="header">
                <span className="left"></span>
                <span className="right">当前生产&nbsp;&nbsp;&nbsp;&nbsp;{data[0]?.workshopName}</span>
            </div>
            <div className="outer-container">
                <div className="inner-container" ref={scrollRef}>
                    <div className="element">
                        <ul>
                            {
                                (data||[]).map((item,index)=>{
                                    return (
                                        <li key={index}>
                                <span className="title">
                                    <p>{item.productName}</p>
                                    <p>{item.ticketNo}</p>
                                </span>
                                            <span className="order">排位：{index+1}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductQueue;
