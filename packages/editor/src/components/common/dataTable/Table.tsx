import React, { useCallback, useEffect, useMemo, useState,useRef } from 'react';
import {Empty} from 'antd';
import { Node } from '../../data/defines';
import reactCSS from 'reactcss';
import './style.less'
import {useTable} from 'react-table';
import * as _ from 'lodash';
import CustomIcon from "../../config/iconConfig";


interface TableProps{
    columns:any;
    data:any;
    node:any;
    [field:string]:any;
}

// 获取titleFontStyle的
function getTitleFontStyle(fontStyle:any[], value:string){
  const style = _.find(fontStyle,(item)=>item.name==value);
  if(style&&style.checked){
    return style.value;
  }
  return  '';
}

/***
 * 数据表格
 */
const Table = (props:TableProps)=>{
  const {columns,data,node}=props;
  let tableInstance = useTable({columns,data});
  const scrollRef = useRef()
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  useEffect(()=>{
    const scDiv = scrollRef.current as any;
    const h = scDiv.scrollHeight;
    const h1=scDiv.scrollTop;
    const h3=scDiv.clientHeight;
    let s = 0;
    setInterval(()=>{
      s+=1;
      scDiv.scrollBy(0,1);
      if(s>=(h-h3+20)){
        scDiv.scrollTop=0;
        s=0;
      }
    },200)
  },[])

  /* 内敛样式定义 */
  const styles = reactCSS({
    default:{
      headerWrapper:{
        textAlign:'center',
      },
      tbodyWrapper:{
        height:props.node.rect.height-36,
        background: props.tbodyBkColorShow?props.tbodyBkColor:'#ccc',// 表格body背景
      },
      theader:{
        width: "100%",
        tableLayout: "fixed",
        textAlign: "center",
      },
      theaderTH:{
        borderWidth: props.tbBorderShow?props.tbBorderSize:0,
        borderColor: props.tbBorderColor,
        borderStyle: "solid",
        background: props.theadBkColorShow?props.theadBkColor:'transparent',
        color: props.headerFontColor,
        fontWeight: 'bold',
        fontSize:props.headerFontSize||18,
        padding:4,
      },
      tbodyTD:{
        textAlign:props.titlePosition||'center',
        borderWidth: props.tbBorderShow?props.tbBorderSize:0,
        borderColor: props.tbBorderColor,
        borderStyle: "solid",
        background: props.tbodyBkColorShow?props.tbodyBkColor:'transparent',
        color: props.titleFontColor,
        fontWeight: getTitleFontStyle(props.titleFontStyle,'bold'),
        fontStyle: getTitleFontStyle(props.titleFontStyle,'italic')||'normal',
        textDecoration: getTitleFontStyle(props.titleFontStyle,'baseline')?'underline':'none',
        fontSize:props.titleFontSize,
        fontFamily:props.titleFontFamily,
        padding:"5px 10px",
      },
      table:{
        tableLayout: "fixed",
        width:'100%',
      }
    }
  });
  const renderDataPoint = ()=>{
    return (
      <React.Fragment>
      <div style={{background:'#ccc'}}>
        <table {...getTableProps()} style={styles.theader}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    style={styles.theaderTH}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          </table>
          </div>
          <div style={styles.tbodyWrapper} className="outer-container">
            <div className="inner-container" ref={scrollRef}>
              {
                data?.length>0?(
                <table style={styles.table} className="element">
                  <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                      prepareRow(row)
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map(cell => {
                            return (
                              <td
                                {...cell.getCellProps()}
                                style={styles.tbodyTD}
                              >
                                {cell.render('Cell')}
                              </td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                ):(
                <Empty
                image={<CustomIcon type="iconwushuju" />}
                imageStyle={{
                  height:50,
                  margin:'auto auto',
                  fontSize:42,
                }}
                description={
                  <span>
                    请在“数据”栏中绑定数据点或者绑定数据接口
                  </span>
                }
              >
              </Empty>
                )
              }
        </div>
      </div>
      </React.Fragment>
    )
  };

  return (
    <div>
      {renderDataPoint()}
    </div>
  )
}
export default Table;
