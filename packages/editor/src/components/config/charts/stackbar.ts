import {defaultChartColors, defaultLineColors} from "../../data/defines";
import * as _ from 'lodash';
import {getFixed, handleDotData, isNumber} from "../../utils/cacl";

export function getStackBarOption(node?:any,resData?:any){
    let chartColors = _.cloneDeep(defaultChartColors);
    let chartBackgroundColor;
    let title="堆叠图";
    let titleShow=true;
    let font:any={};
    let titlePosition='left';
    let chartRefLineShow=false;
    let chartRefLineColor='#ccc';



    if(node){
        title=node.property.props.title;
        titleShow=node.property.props.titleShow;
        if(node.property.props.chartBkColor!=''&&node.property.props.chartBkColorShow==true){
            chartBackgroundColor=node.property.props.chartBkColor;
        }else{
            chartBackgroundColor='transparent'
        }
        (node.property.props.titleFontStyle||[]).forEach(item=>{
            if(item.name=='bold'){
                if(item.checked){
                    font.fontWeight=item.value
                }else{
                    font.fontWeight='normal'
                }
            }
            if(item.name=='italic'){
                if(item.checked){
                    font.fontStyle=item.value
                }else{
                    font.fontStyle='normal'
                }
            }
        })
        titlePosition = node.property.props.titlePosition;
        if(node.property.props.titleFontColor){
            font.color=node.property.props.titleFontColor;
        }
        if(node.property.props.titleFontFamily){
            font.fontFamily=node.property.props.titleFontFamily;
        }
        if(node.property.props.titleFontSize){
            font.fontSize=node.property.props.titleFontSize;
        }
        // 设置图形颜色
        if(node.property.props.lineGraphRange){
            (node.property.props.lineGraphRange||[]).forEach((element,index) => {
                if(element.lineGraphRangeCheck){
                    chartColors[index]=node.property.props.lineGraphRange[index].lineGraphRangeColor;
                }
            });
        }
        // 设置参考线
        if(node.property.props.chartRefLineShow){
            chartRefLineShow=true;
            chartRefLineColor=node.property.props.chartRefLineColor;
        }else {
            chartRefLineShow=false;
            chartRefLineColor=node.property.props.chartRefLineColor;
        }
    }

    /**
     *
     * 后端数据
     *
     *
     * *******/
    let dimensions=['xdata', '750车间', '740车间']
    let source=[
        ['202001', 41.1, 30.4],
        ['202002', 86.5, 92.1],
        ['202003', 24.1, 67.2],
        ['202004', 24.1, 67.2],
    ]
    let series=[
        {type: 'bar', stack: 'sum', barWidth: '30%',barGap:"20%"},
        {type: 'bar', stack: 'sum', barWidth: '30%',barGap:"20%"},
    ]
    if(resData){
        dimensions=resData["dimensions"]
        source=resData["source"]
        // 处理数据精度问题
        handleDotData(node,source);
        series=[]
        for(let i=0;i<dimensions.length-1;i++){
            series.push({type: 'bar', stack: 'sum', barWidth: '30%',barGap:"20%"})
        }
    }
    const option = {
        backgroundColor:chartBackgroundColor,
        color: chartColors,
        tooltip: {
            trigger: 'axis',
        },
        title:{
            text: titleShow?title:'',
            left: titlePosition,
            textStyle:{
                ...font,
                rich:{

                }
            }
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            top: 'middle',
            itemWidth: 17,
            itemHeight: 30,
            icon:'circle',
            textStyle: {
                color: font.color,
                fontSize: 14
            },
        },
        grid: { //图表的位置
            top: '20%',
            left: '2%',
            right: '20%',
            bottom: '10%',
            containLabel: true
        },

        dataset: [{
            dimensions:dimensions,
            source:source,
        }],
        yAxis: {
            axisLine:{
                show:false
            },
            splitLine:{
                show:false
            }
        },
        xAxis: {
            type: 'category',
            axisLine:{
                show:false
            },
            splitLine:{
                show: chartRefLineShow,
                lineStyle:{
                    color:chartRefLineColor,
                }
            },
            axisTick:{
                show:false
            }
        },
        series: series
    };
    return option;
}
