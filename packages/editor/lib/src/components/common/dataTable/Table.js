import React, { useEffect, useRef } from 'react';
import { Empty } from 'antd';
import reactCSS from 'reactcss';
import './style.less';
import { useTable } from 'react-table';
import * as _ from 'lodash';
import CustomIcon from "../../config/iconConfig";
// 获取titleFontStyle的
function getTitleFontStyle(fontStyle, value) {
    var style = _.find(fontStyle, function (item) { return item.name == value; });
    if (style && style.checked) {
        return style.value;
    }
    return '';
}
/***
 * 数据表格
 */
var Table = function (props) {
    var columns = props.columns, data = props.data, node = props.node;
    var tableInstance = useTable({ columns: columns, data: data });
    var scrollRef = useRef();
    var getTableProps = tableInstance.getTableProps, getTableBodyProps = tableInstance.getTableBodyProps, headerGroups = tableInstance.headerGroups, rows = tableInstance.rows, prepareRow = tableInstance.prepareRow;
    useEffect(function () {
        var scDiv = scrollRef.current;
        var h = scDiv.scrollHeight;
        var h1 = scDiv.scrollTop;
        var h3 = scDiv.clientHeight;
        var s = 0;
        setInterval(function () {
            s += 1;
            scDiv.scrollBy(0, 1);
            if (s >= (h - h3 + 20)) {
                scDiv.scrollTop = 0;
                s = 0;
            }
        }, 200);
    }, []);
    /* 内敛样式定义 */
    var styles = reactCSS({
        default: {
            headerWrapper: {
                textAlign: 'center',
            },
            tbodyWrapper: {
                height: props.node.rect.height - 36,
                background: props.tbodyBkColorShow ? props.tbodyBkColor : '#ccc', // 表格body背景
            },
            theader: {
                width: "100%",
                tableLayout: "fixed",
                textAlign: "center",
            },
            theaderTH: {
                borderWidth: props.tbBorderShow ? props.tbBorderSize : 0,
                borderColor: props.tbBorderColor,
                borderStyle: "solid",
                background: props.theadBkColorShow ? props.theadBkColor : 'transparent',
                color: props.headerFontColor,
                fontWeight: 'bold',
                fontSize: props.headerFontSize || 18,
                padding: 4,
            },
            tbodyTD: {
                textAlign: props.titlePosition || 'center',
                borderWidth: props.tbBorderShow ? props.tbBorderSize : 0,
                borderColor: props.tbBorderColor,
                borderStyle: "solid",
                background: props.tbodyBkColorShow ? props.tbodyBkColor : 'transparent',
                color: props.titleFontColor,
                fontWeight: getTitleFontStyle(props.titleFontStyle, 'bold'),
                fontStyle: getTitleFontStyle(props.titleFontStyle, 'italic') || 'normal',
                textDecoration: getTitleFontStyle(props.titleFontStyle, 'baseline') ? 'underline' : 'none',
                fontSize: props.titleFontSize,
                fontFamily: props.titleFontFamily,
                padding: "5px 10px",
            },
            table: {
                tableLayout: "fixed",
                width: '100%',
            }
        }
    });
    var renderDataPoint = function () {
        return (<React.Fragment>
      <div style={{ background: '#ccc' }}>
        <table {...getTableProps()} style={styles.theader}>
          <thead>
            {headerGroups.map(function (headerGroup) { return (<tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(function (column) { return (<th {...column.getHeaderProps()} style={styles.theaderTH}>
                    {column.render('Header')}
                  </th>); })}
              </tr>); })}
          </thead>
          </table>
          </div>
          <div style={styles.tbodyWrapper} className="outer-container">
            <div className="inner-container" ref={scrollRef}>
              {(data === null || data === void 0 ? void 0 : data.length) > 0 ? (<table style={styles.table} className="element">
                  <tbody {...getTableBodyProps()}>
                    {rows.map(function (row) {
                    prepareRow(row);
                    return (<tr {...row.getRowProps()}>
                          {row.cells.map(function (cell) {
                            return (<td {...cell.getCellProps()} style={styles.tbodyTD}>
                                {cell.render('Cell')}
                              </td>);
                        })}
                        </tr>);
                })}
                  </tbody>
                </table>) : (<Empty image={<CustomIcon type="iconwushuju"/>} imageStyle={{
                    height: 50,
                    margin: 'auto auto',
                    fontSize: 42,
                }} description={<span>
                    请在“数据”栏中绑定数据点或者绑定数据接口
                  </span>}>
              </Empty>)}
        </div>
      </div>
      </React.Fragment>);
    };
    return (<div>
      {renderDataPoint()}
    </div>);
};
export default Table;
//# sourceMappingURL=Table.js.map