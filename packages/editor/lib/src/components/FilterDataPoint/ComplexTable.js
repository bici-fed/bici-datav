var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * 用户侧：复杂感知点 > 列表
 */
import React, { PureComponent } from 'react';
import { ComplexTable } from 'bici-transformers';
import _ from 'lodash';
import { fetchPerceptualPointList } from '../data/api';
// 传感器状态
export var DEVICE_STATUS = [
    {
        value: 1,
        text: '正常',
    },
    {
        value: 2,
        text: '超过上限',
    },
    {
        value: 3,
        text: '低于下限',
    },
    {
        value: -1,
        text: '无数据',
    },
];
var initialQueryParams = {
    calculationCode: '',
    dataName: '',
    position: '',
    tagName: '',
    statusList: [],
    sorter: {
        field: '',
        order: '' // ascend, descend
    },
    pagination: {
        current: 1,
        pageSize: 10,
        total: 0
    },
};
var ComplexDataPoint = /** @class */ (function (_super) {
    __extends(ComplexDataPoint, _super);
    function ComplexDataPoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = __assign({ dataList: [], sorterList: [], total: 0, selectedRowKeys: [], selectedRows: [], doubleArr: [] }, initialQueryParams);
        _this.getColumns = function () {
            return [
                {
                    title: '计算编号',
                    dataIndex: 'calculationCode',
                    width: 'lg',
                    filterType: 'search',
                    handleSubmitSearch: function (val) { return _this.handleSearch('calculationCode', val); }
                },
                {
                    title: '数据名称',
                    dataIndex: 'dataName',
                    width: 'hg',
                    filterType: 'search',
                    handleSubmitSearch: function (val) { return _this.handleSearch('dataName', val); }
                },
                {
                    title: '计算周期(s)',
                    dataIndex: 'calculationCycle',
                    width: 'sm',
                },
                {
                    title: '位置',
                    dataIndex: 'position',
                    width: 'lg',
                    filterType: 'search',
                    handleSubmitSearch: function (val) { return _this.handleSearch('position', val); }
                },
                {
                    title: '范围上下限',
                    width: 'lg',
                    render: function (record) {
                        var _a = record.scopeMin, scopeMin = _a === void 0 ? '' : _a, _b = record.scopeMax, scopeMax = _b === void 0 ? '' : _b;
                        var scope = "".concat(scopeMin, " ~ ").concat(scopeMax);
                        var scopeText = <div style={{ width: ComplexTable.columnWidth.lg - 16 }}>{scope}</div>;
                        return _.isNumber(scopeMin) || _.isNumber(scopeMax) ? scopeText : '';
                    }
                },
                {
                    title: '标签',
                    dataIndex: 'tagName',
                    width: 'lg',
                    filterType: 'search',
                    handleSubmitSearch: function (val) { return _this.handleSearch('tagName', val); }
                },
                {
                    title: '状态',
                    dataIndex: 'statusList',
                    width: 100,
                    filters: DEVICE_STATUS,
                    filterMultiple: true,
                    checkDisabled: true,
                    fixed: 'right',
                    render: function (text, record) {
                        var show;
                        if (record.status === 1) {
                            show = <span className='green6'>正常</span>;
                        }
                        else if (record.status === 2) {
                            show = <span className='red6'>超过上限</span>;
                        }
                        else if (record.status === 3) {
                            show = <span className='red6'>低于下限</span>;
                        }
                        else if (record.status === -1) {
                            show = <span className='black85'>无数据</span>;
                        }
                        return <div style={{ width: 80 }}>{show}</div>;
                    }
                },
            ];
        };
        _this.handleSearch = function (key, value) {
            var _a;
            _this.setState((_a = { pagination: initialQueryParams.pagination }, _a[key] = value, _a), function () {
                _this.requestList();
            });
        };
        _this.handleTableChange = function (pagination, filters, sorter) {
            var field = sorter.field, order = sorter.order;
            var resultOrder = order === 'ascend' ? 'asc' : 'desc';
            var sorterList = order ? [{ field: field, order: resultOrder }] : [];
            _this.setState(__assign(__assign({ pagination: pagination }, filters), { sorterList: sorterList }), function () { return _this.requestList(); });
        };
        _this.handleFilterTagsChange = function (tagsArr) {
            var _a;
            if (tagsArr === null) {
                _this.setState(__assign({}, initialQueryParams), function () { return _this.requestList(); });
            }
            else {
                var val = tagsArr.val instanceof Array ? [] : '';
                _this.setState((_a = {}, _a[tagsArr.dataIndex] = val, _a), function () { return _this.requestList(); });
            }
        };
        /**
         * 二维数组扁平化处理
         */
        _this.mapRows = function (params) {
            var res = [];
            for (var i = 0; i < params.length; i++) {
                if (Array.isArray(params[i])) {
                    res = res.concat(_this.mapRows(params[i]));
                }
                else {
                    res.push(params[i]);
                }
            }
            return res.filter(Boolean); //去掉undefined的情况
        };
        return _this;
    }
    ComplexDataPoint.prototype.componentDidMount = function () {
        this.requestList();
    };
    ComplexDataPoint.prototype.requestList = function () {
        var _this = this;
        var _a = this.state, pagination = _a.pagination, sorterList = _a.sorterList, calculationCode = _a.calculationCode, dataName = _a.dataName, position = _a.position, tagName = _a.tagName, statusList = _a.statusList;
        var params = { pagination: pagination, sorterList: sorterList, dataTypeList: [1] };
        if (calculationCode) {
            params.calculationCode = calculationCode;
        }
        if (dataName) {
            params.dataName = dataName;
        }
        if (position) {
            params.position = position;
        }
        if (tagName) {
            params.tagName = tagName;
        }
        if (statusList && statusList.length) {
            params.statusList = statusList;
        }
        fetchPerceptualPointList(params).then(function (res) {
            if (res["data"].data) {
                var _a = res["data"].data, list = _a.list, total = _a.total;
                _this.setState({ dataList: list, total: total });
            }
        });
    };
    ComplexDataPoint.prototype.render = function () {
        var _this = this;
        var _a = this.state, dataList = _a.dataList, total = _a.total, pagination = _a.pagination;
        var _b = this.props, selectedRowKeys = _b.selectedRowKeys, mode = _b.mode, disableDataId = _b.disableDataId, source = _b.source, selectedRows = _b.selectedRows;
        var rowSelection = {
            type: mode,
            selectedRowKeys: selectedRowKeys,
            getCheckboxProps: function (record) { return ({ disabled: disableDataId.includes(record.id) }); },
            onSelect: function (record, selected) { return _this.props.onSelectRow(record, selected, 'id'); },
            onSelectAll: function (selected, record, changeRows) { return _this.props.onSelectRow(changeRows, selected, 'id'); }
        };
        pagination.total = total;
        return (<ComplexTable rowKey="id" minWidth={800} dataSource={dataList} pagination={pagination} columns={this.getColumns()} rowSelection={rowSelection} onChange={this.handleTableChange} onFilterTagsChange={this.handleFilterTagsChange}/>);
    };
    return ComplexDataPoint;
}(PureComponent));
export default ComplexDataPoint;
//# sourceMappingURL=ComplexTable.js.map