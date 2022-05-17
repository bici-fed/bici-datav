import React, { useEffect, useMemo, useState } from 'react';
import Table from './Table';
import { isNumber, getFixed } from '../../utils/cacl';
import { canvas } from '../../Preview/index';
import { canvas as canvas2 } from '../../Layout/index';
import _ from 'lodash';
import { DATA_STATUS } from '../../data/defines';
// 数据点显示固定行
var dataPointColumns = [
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
        accessor: function (text, row) {
            return "".concat(parseFloat(text.scopeMin) || '', "~").concat(parseFloat(text.scopeMax) || '');
        }
    },
    {
        Header: '值',
        accessor: 'value',
    },
    {
        Header: '状态',
        // accessor: 'status',
        accessor: function (text, row) {
            return DATA_STATUS[text.status];
        }
    },
];
var defaultTableData = {
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
var DataTable = function (props) {
    var node = props.node;
    var property = node.property, rect = node.rect;
    var _a = useState([]), dataColumns = _a[0], setDataColumns = _a[1];
    var _b = useState([]), tableData = _b[0], setTableData = _b[1];
    var _c = useState({ dimensions: [], source: [] }), reqData = _c[0], setReqData = _c[1];
    var _d = useState(false), refresh = _d[0], setRefresh = _d[1];
    // 订阅事件
    if (canvas) {
        canvas._emitter.on("requestDataSuccess" + node.id, function (e) {
            setReqData(e);
            reqData = e;
            setRefresh(!refresh);
        });
    }
    else if (canvas2) {
        canvas2._emitter.on("requestDataSuccess" + node.id, function (e) {
            setReqData(e);
            reqData = e;
            setRefresh(!refresh);
        });
        canvas2._emitter.on('addDataPoint', function (e) {
            setRefresh(!refresh);
        });
    }
    useEffect(function () {
        var _a = canvas !== undefined ? reqData : defaultTableData, dimensions = _a.dimensions, source = _a.source;
        var columnsT = (dimensions || []).map(function (item, index) {
            return {
                Header: item,
                accessor: 'dataIndex' + index,
            };
        });
        var dataT = (source || []).map(function (arr, idx) {
            var obj = {};
            (arr || []).map(function (item, idx) {
                if (isNumber(item)) {
                    // 数值型
                    var n = node.property.dataDot;
                    obj['dataIndex' + idx] = getFixed(item, n);
                }
                else {
                    obj['dataIndex' + idx] = item;
                }
            });
            return obj;
        });
        setDataColumns(columnsT);
        setTableData(dataT);
    }, [reqData, props.data, property.dataMethod, property.dataPointSelectedRows.length, reqData.dimensions.length, refresh]);
    // 获取表格数据 
    var data = React.useMemo(function () {
        if (property.dataMethod == 'point') {
            return property.dataPointSelectedRows;
        }
        else if (property.dataMethod == 'restfull') {
            return tableData;
        }
        return property.dataPointSelectedRows;
    }, [reqData, property.dataPointSelectedRows, property.dataPointSelectedRows.length, props.data, tableData.length, property.dataMethod, refresh]);
    // 获取表格列
    var columns = React.useMemo(function () {
        if (property.dataMethod == 'point') {
            return _.cloneDeep(dataPointColumns);
        }
        else if (property.dataMethod == 'restfull') {
            return dataColumns;
        }
        return dataPointColumns;
    }, [reqData, node, property.dataPointSelectedRows, property.dataPointSelectedRows.length, props.data, property.dataMethod, refresh]);
    var renderTable = useMemo(function () {
        if (property.dataMethod == 'point') {
            return <Table {...props} columns={columns} data={data}/>;
        }
        else {
            return <Table {...props} columns={dataColumns} data={tableData}/>;
        }
    }, [reqData, property.dataPointSelectedRows, property.dataPointSelectedRows.length, props.data, tableData.length, property.dataMethod, rect, refresh]);
    return (<div>
      {renderTable}
    </div>);
};
export default DataTable;
//# sourceMappingURL=index.js.map