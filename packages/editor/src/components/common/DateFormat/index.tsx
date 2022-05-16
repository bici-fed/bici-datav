import React, {useEffect, useState} from "react";
import './styles.less';
import {canvas} from "../../Preview";

const DateFormat=(props)=>{
    const {style, node,dataPointReq}=props;
    const [minuts,setMinuts]=useState('0分');
    useEffect(()=>{
        try {
            canvas._emitter.on("socketDataSuccess",data=>{
                fomatField(data)
            })
        } catch (e) {
        }
    },[node,dataPointReq])
    const sty={
        ...style,
        ...node.font,
        width: node.rect.width<10?'auto':node.rect.width,
        height:node.rect.height<10?'auto':node.rect.height,
        padding:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }
    const fomatField=(data)=>{
        const sockData = JSON.parse(data.data)
        if(!node.property.dataPointParam.qtDataList[0]){
            setMinuts('0分')
            return;
        }
        const pointId = node.property.dataPointParam.qtDataList[0].id;
        const isUpdate = pointId==sockData.id;
        const mins = sockData.value;
        if(isUpdate){
            if(typeof mins!=='number') return mins;
            const days = [
                ':',
                ':',
                ':',
                ':',
                ':',
            ];
            const dataArr=getDates(mins);
            let d='';
            if(dataArr[0]>0){
                if(dataArr[0]<10){
                    d+='0'+dataArr[0]+days[0];
                }else {
                    d+=dataArr[0]+days[0];
                }
            }
            if(dataArr[1]>0){
                if(dataArr[1]<10){
                    d+='0'+dataArr[1]+days[1];
                }else {
                    d+=dataArr[1]+days[1];
                }
            }
            if(dataArr[2]>0){
                if(dataArr[2]<10){
                    d+='0'+dataArr[2]+days[2];
                }else {
                    d+=dataArr[2]+days[2];
                }
            }
            if(dataArr[3]>=0){
                if(dataArr[3]<10){
                    d+='0'+dataArr[3]+days[3];
                }else {
                    d+=dataArr[3]+days[3];
                }
            }
            if(dataArr[4]>=0){
                if(dataArr[4]<10){
                    d+='0'+dataArr[4]+days[4];
                }else {
                    d+=dataArr[4]+days[4];
                }
            }
            if((d||' ').endsWith(':')){
                d = d.substring(0, d.length-1)
            }
            setMinuts(d)
        }
    }
    return (
        <div style={sty}>
            {minuts}
        </div>
    )
}

function getDates(mins:number){
    let runTime = mins*60;
    let year = Math.floor(runTime / 86400 / 365);
    runTime = runTime % (86400 * 365);
    let month = Math.floor(runTime / 86400 / 30);
    runTime = runTime % (86400 * 30);
    let day = Math.floor(runTime / 86400);
    runTime = runTime % 86400;
    let hour = Math.floor(runTime / 3600);
    runTime = runTime % 3600;
    let minute = Math.floor(runTime / 60);
    runTime = runTime % 60;
    let second = runTime;
    return [year,month,day,hour,minute,second];
}

export default DateFormat;
