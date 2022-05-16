import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Table from './Table';
import {isNumber,getFixed} from '../../utils/cacl';
import { canvas } from '../../Preview/index';
import { canvas as canvas2 } from '../../Layout/index';
import _ from 'lodash';
import {DATA_STATUS} from '../../data/defines';


interface DataTableProps{
    node:any;
    [field:string]:any;
}

// 数据点显示固定行
const dataPointColumns=[
  {
    Header: '数据点名称',
    accessor: 'dataName', // accessor is the "key" in the data
  },
  {
    Header: '位置',
    accessor: 'position',
  },
  {
    Header: '范围',
    accessor:(text,row)=>{
      return `${parseFloat(text.scopeMin)||''}~${parseFloat(text.scopeMax)||''}`;
    }
  },
  {
    Header: '值',
    accessor: 'value',
  },
  {
    Header: '状态',
    // accessor: 'status',
    accessor: (text, row)=>{
      return DATA_STATUS[text.status]
    }
  },
];
const defaultTableData={
  "dimensions": [
      "--",
      "--",
      "--",
  ],
  "source": [
      [
          "--",
          "--",
          "--",
      ],
      [
          "--",
          "--",
          "--",
      ],
      [
          "--",
          "--",
          "--",
      ]
  ]
};

const DataTable = (props:DataTableProps)=>{ 
    const {node} = props;
    const {property,rect}=node;
    const [dataColumns,setDataColumns]=useState([]);
    const [tableData,setTableData]=useState([]);
    let [reqData,setReqData]=useState({dimensions:[],source:[]});
    const [refresh,setRefresh]=useState(false);

     // 订阅事件
    if(canvas){
      canvas._emitter.on("requestDataSuccess"+node.id,e=>{
        setReqData(e);
        reqData=e;
        setRefresh(!refresh)
      })
    }else if(canvas2){
      canvas2._emitter.on("requestDataSuccess"+node.id,e=>{
        setReqData(e);
        reqData=e;
        setRefresh(!refresh)
      });
        canvas2._emitter.on('addDataPoint',e=>{
            setRefresh(!refresh);
        })
    }


    useEffect(()=>{
      const {dimensions,source}= canvas!==undefined?reqData:defaultTableData;
      let columnsT=(dimensions||[]).map((item,index)=>{
        return {
          Header: item,
          accessor: 'dataIndex'+index,
        }
      })

      let dataT=(source||[]).map((arr,idx)=>{
        const obj={};
        (arr||[]).map((item,idx)=>{
          if(isNumber(item)) {
            // 数值型
            const n = node.property.dataDot;
            obj['dataIndex'+idx] = getFixed(item,n);
          }else{
            obj['dataIndex'+idx]=item;
          }
        })
        return obj;
    })
    setDataColumns(columnsT);
    setTableData(dataT);
  },[reqData,props.data,property.dataMethod,property.dataPointSelectedRows.length,reqData.dimensions.length,refresh]);


    // 获取表格数据 
  const data = React.useMemo(() => {
    if(property.dataMethod=='point'){
      return property.dataPointSelectedRows;
    }else if(property.dataMethod=='restfull'){
      return tableData;
    }
    return property.dataPointSelectedRows;
  },[reqData,property.dataPointSelectedRows,property.dataPointSelectedRows.length,props.data,tableData.length,property.dataMethod,refresh]);
  // 获取表格列
  const columns = React.useMemo(() => {
    if(property.dataMethod=='point'){
      return _.cloneDeep(dataPointColumns);
    }else if(property.dataMethod=='restfull'){
      return dataColumns;
    }
    return dataPointColumns;
  },[reqData,node,property.dataPointSelectedRows,property.dataPointSelectedRows.length,props.data,property.dataMethod,refresh]);

  const renderTable = useMemo(()=>{
    if(property.dataMethod=='point'){
      return <Table {...props} columns={columns} data={data}/>;
    }else{
      return <Table {...props} columns={dataColumns} data={tableData}/>;
    }
  },[reqData,property.dataPointSelectedRows,property.dataPointSelectedRows.length,props.data,tableData.length,property.dataMethod,rect,refresh]);


  
  return (
    <div>
      {
        renderTable
      }
    </div>
  )
}
export default DataTable;