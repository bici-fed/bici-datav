// NEW_BOARD_INDUSTRY_CONVEYOR(121,"传送带"),
//     NEW_BOARD_INDUSTRY_STORAGE_SILO(122,"储料罐"),
//     NEW_BOARD_INDUSTRY_CHEMICAL_INDUSTRY(123,"化工"),
//     NEW_BOARD_INDUSTRY_MATERIAL_HANDLING(124,"原料处理"),
//     NEW_BOARD_INDUSTRY_REACTOR(125,"反应器"),
//     NEW_BOARD_INDUSTRY_DIRECTOR(126,"控制器"),
//     NEW_BOARD_INDUSTRY_MACHINE_WORK(127,"机械加工"),
//     NEW_BOARD_INDUSTRY_PUMP(128,"泵"),
//     NEW_BOARD_INDUSTRY_ELECTRIC_MACHINERY(129,"电机"),
//     NEW_BOARD_INDUSTRY_CIRCUITRY(130,"电路图"),
//     NEW_BOARD_INDUSTRY_PIPELINE(131,"管道"),
//     NEW_BOARD_INDUSTRY_VENT_LINE(132,"通风管道"),
//     NEW_BOARD_INDUSTRY_MINE(133,"采矿"),
//     NEW_BOARD_INDUSTRY_STEEL_INDUSTRY(134,"钢铁行业"),
//     NEW_BOARD_INDUSTRY_BOILER(135,"锅炉"),
//     NEW_BOARD_INDUSTRY_KLEP(136,"阀门"),

import * as _ from "lodash";

export const NEW_BOARD_INDUSTRY_CONVEYOR: [number, string] = [121,"传送带"];
export const NEW_BOARD_INDUSTRY_STORAGE_SILO: [number, string] = [122,"储料罐"];
export const NEW_BOARD_INDUSTRY_CHEMICAL_INDUSTRY: [number, string] = [123,"化工"];
export const NEW_BOARD_INDUSTRY_MATERIAL_HANDLING: [number, string] = [124,"原料处理"];
export const NEW_BOARD_INDUSTRY_REACTOR: [number, string] = [125,"反应器"];
export const NEW_BOARD_INDUSTRY_DIRECTOR: [number, string] = [126,"控制器"];
export const NEW_BOARD_INDUSTRY_MACHINE_WORK: [number, string] = [127,"机械加工"];
export const NEW_BOARD_INDUSTRY_PUMP: [number, string] = [128,"泵"];
export const NEW_BOARD_INDUSTRY_ELECTRIC_MACHINERY: [number, string] = [129,"电机"];
export const NEW_BOARD_INDUSTRY_CIRCUITRY: [number, string] = [130,"电路图"];
export const NEW_BOARD_INDUSTRY_PIPELINE: [number, string] = [131,"管道"];
export const NEW_BOARD_INDUSTRY_VENT_LINE: [number, string] = [132,"通风管道"];
export const NEW_BOARD_INDUSTRY_MINE: [number, string] = [133,"采矿"];
export const NEW_BOARD_INDUSTRY_STEEL_INDUSTRY: [number, string] = [134,"钢铁行业"];
export const NEW_BOARD_INDUSTRY_BOILER: [number, string] = [135,"锅炉"];
export const NEW_BOARD_INDUSTRY_KLEP: [number, string] = [136,"阀门"];

export const industry_List=[
    NEW_BOARD_INDUSTRY_CONVEYOR,
    NEW_BOARD_INDUSTRY_STORAGE_SILO,
    NEW_BOARD_INDUSTRY_CHEMICAL_INDUSTRY,
    NEW_BOARD_INDUSTRY_MATERIAL_HANDLING,
    NEW_BOARD_INDUSTRY_REACTOR,
    NEW_BOARD_INDUSTRY_DIRECTOR,
    NEW_BOARD_INDUSTRY_MACHINE_WORK,
    NEW_BOARD_INDUSTRY_PUMP,
    NEW_BOARD_INDUSTRY_ELECTRIC_MACHINERY,
    NEW_BOARD_INDUSTRY_CIRCUITRY,
    NEW_BOARD_INDUSTRY_PIPELINE,
    NEW_BOARD_INDUSTRY_VENT_LINE,
    NEW_BOARD_INDUSTRY_MINE,
    NEW_BOARD_INDUSTRY_STEEL_INDUSTRY,
    NEW_BOARD_INDUSTRY_BOILER,
    NEW_BOARD_INDUSTRY_KLEP,
];

export const onDrag = (event, item: any) => {
    if(!item.width){
        event.dataTransfer.setData(
            'Text',
            JSON.stringify({
                name: 'image',
                rect: {
                    width: 150,
                    height: 150,
                },
                image: item.url
            })
        );
        return;
    }
    const eventClone=_.cloneDeep(event)
    fitImageSize(item).then((r:any)=>{
        eventClone.dataTransfer.setData(
            'Text',
            JSON.stringify({
                name: 'image',
                rect: {
                    width: r.width,
                    height: r.height,
                },
                image: r.url
            })
        );
    })

};
export const scaleWidthHeight=(width:number,height:number,maxSize:number)=>{
    if(width>maxSize && width>height){
        const w=maxSize;
        const h=Math.round(w*height/width);
        return {
            width:w,
            height:h,
        }
    }else {
        const h=maxSize;
        const w=Math.round(h*width/height);
        return {
            width:w,
            height:h,
        }
    }
}
export const rtnImg=(nImg:any,resolve:any,maxSize:number,img:any)=>{
    const width = nImg.width;
    const height = nImg.height;
    const r=scaleWidthHeight(width,height,maxSize);
    resolve({
        ...img,
        url:img.url+'?_t='+new Date().getTime(),
        width:r.width,
        height:r.height,
    })
}
/**
 *
 * @param img
 * @param maxSize
 */
export const fitImageSize = (img:any,maxSize:number=250)=>{
    return new Promise((resolve,reject)=>{
        if(!img.width){// 如果没有图片的宽度
            var nImg = new Image();
            nImg.src = img.url;
            if(img.complete){
                rtnImg(nImg,resolve,maxSize,img)
            }else{
                nImg.onload = function () {
                    rtnImg(nImg,resolve,maxSize,img)
                }
            }
        }else if(typeof img==='object'){// 包含图片大小的对象
            if(img.width<=maxSize&&img.height<=maxSize){
                resolve({
                    ...img,
                })
            }else if(img.width>maxSize&&img.width>img.height){
                const width=maxSize;
                const height=width*img.height/img.width;
                resolve({
                    ...img,
                    width,
                    height,
                })
            }else {
                const height=maxSize;
                const width=height*img.width/img.height;
                resolve({
                    ...img,
                    width,
                    height,
                })
            }
        }
    })
}