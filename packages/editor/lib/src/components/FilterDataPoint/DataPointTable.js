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
 * 用户侧：数据点管理 > 列表
 */
import React, { Component } from 'react';
import { ComplexTable } from 'bici-transformers';
import { DATAPOINT_STATUS, DATA_ORIGIN } from '../common/userSide';
import _ from 'lodash';
import { fetchSearchDataPointManageList } from '../data/api';
var initialQueryParams = {
    dataName: '',
    dataCode: '',
    // dataTypeList: [1],
    position: '',
    associationObject: '',
    channelList: [],
    attentionList: [],
    statusList: [],
    tagName: '',
    sorter: {
        field: '',
        order: '', // ascend, descend
    },
    pagination: {
        current: 1,
        pageSize: 10,
        total: 0,
    },
};
var DataPointTable = /** @class */ (function (_super) {
    __extends(DataPointTable, _super);
    function DataPointTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.associationObject = "";
        _this.state = __assign({ dataList: [], total: 0, sorterList: [], selectedRowKeys: [], selectedRows: [], doubleArr: [] }, initialQueryParams);
        _this.handleSearch = function (key, value) {
            var _a;
            // 用户列表模糊查询
            _this.setState((_a = { pagination: initialQueryParams.pagination }, _a[key] = value, _a), function () {
                _this.requestList();
            });
            // this.associationObject=value;
        };
        _this.handleTableChange = function (pagination, filters, sorter) {
            var field = sorter.field, order = sorter.order;
            var resultOrder = order === 'ascend' ? 'asc' : 'desc';
            var sorterList = order ? [{ field: field, order: resultOrder }] : [];
            Object.keys(filters).forEach(function (key) { return (filters[key] == null) && delete filters[key]; });
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
        // 表格列
        _this.columns = function () { return [
            {
                title: '数据编号',
                dataIndex: 'dataCode',
                width: 'nm',
                filterType: 'search',
                handleSubmitSearch: function (val) { return _this.handleSearch('dataCode', val); },
            },
            {
                title: '数据名称',
                dataIndex: 'dataName',
                width: 'nm',
                filterType: 'search',
                handleSubmitSearch: function (val) { return _this.handleSearch('dataName', val); },
            },
            {
                title: '采集间隔(s)',
                dataIndex: 'intervalTime',
                width: 'nm',
            },
            {
                title: '单位',
                dataIndex: 'unit',
                width: 'sm',
                checkDefault: false,
            },
            {
                title: '位置',
                dataIndex: 'position',
                width: 'lg',
                filterType: 'search',
                handleSubmitSearch: function (val) { return _this.handleSearch('position', val); },
            },
            {
                title: '范围上下限',
                width: 'nm',
                render: function (record) {
                    var _a = record.scopeMin, scopeMin = _a === void 0 ? '' : _a, _b = record.scopeMax, scopeMax = _b === void 0 ? '' : _b;
                    var scope = "".concat(scopeMin, " ~ ").concat(scopeMax);
                    var scopeText = <div style={{ width: ComplexTable.columnWidth.nm - 16 }}>{scope}</div>;
                    return _.isNumber(scopeMin) || _.isNumber(scopeMax) ? scopeText : '';
                },
            },
            {
                title: '数据来源',
                dataIndex: 'channelList',
                width: 'nm',
                filters: DATA_ORIGIN,
                filterMultiple: true,
                render: function (text, record) {
                    var channel = DATA_ORIGIN.filter(function (v) { return v.value === record.channel; })[0] || {};
                    var channelText = channel.text;
                    return <div style={{ width: ComplexTable.columnWidth.nm - 16 }}>{channelText}</div>;
                },
            },
            {
                title: '来源编号或名称',
                dataIndex: 'associationObject',
                width: 'nm',
                filterType: 'search',
                handleSubmitSearch: function (val) { return _this.handleSearch('associationObject', val); },
            },
            {
                title: '标签',
                dataIndex: 'tagName',
                filterType: 'search',
                handleSubmitSearch: function (val) { return _this.handleSearch('tagName', val); },
            },
            {
                title: '状态',
                dataIndex: 'statusList',
                width: 120,
                filters: DATAPOINT_STATUS,
                filterMultiple: true,
                checkDisabled: true,
                fixed: 'right',
                render: function (text, record) {
                    var status = record.status;
                    var statusText = (DATAPOINT_STATUS.filter(function (v) { return v.value === status; })[0] || {}).text;
                    var className = status === 1 ? 'green6' : 'black85';
                    return (<div style={{ width: 100 }} className={className}>
            {statusText}
          </div>);
                },
            },
        ]; };
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
    DataPointTable.prototype.componentDidMount = function () {
        this.requestList();
    };
    // 查询列表
    DataPointTable.prototype.requestList = function () {
        var _this = this;
        var _a = this.state, pagination = _a.pagination, sorterList = _a.sorterList, dataName = _a.dataName, dataCode = _a.dataCode, position = _a.position, associationObject = _a.associationObject, channelList = _a.channelList, attentionList = _a.attentionList, tagName = _a.tagName, statusList = _a.statusList;
        var params = { dataType: 1, pagination: pagination, sorterList: sorterList };
        // if (this.props.isOnlyNumber) {
        //   params.dataTypeList = [1]
        // }
        // 根据node返回的type决定查询的数据类型
        if (this.props.node.name == "echarts" || this.props.node.name == "biciMeasure") {
            params.dataTypeList = [1];
        }
        else {
            var nodeType = this.props.node.name;
            switch (nodeType) {
                case 'biciPilot': // 指示灯
                    params.dataTypeList = [1, 2];
                    break;
                case 'biciCard':
                    params.dataTypeList = [1];
                    break;
                default:
            }
        }
        if (dataName) {
            params.dataName = dataName;
        }
        if (dataCode) {
            params.dataCode = dataCode;
        }
        if (position) {
            params.position = position;
        }
        if (associationObject) {
            params.associationObject = associationObject;
        }
        // params.associationObject=this.associationObject;
        if (channelList && channelList.length) {
            params.channelList = channelList;
        }
        if (attentionList && attentionList.length) {
            params.attentionList = attentionList;
        }
        if (tagName) {
            params.tagName = tagName;
        }
        if (statusList && statusList.length) {
            params.statusList = statusList;
        }
        // 毒刺,不要csv的数据点
        params.isOtherPointList = [0];
        fetchSearchDataPointManageList(params).then(function (res) {
            if (res["data"].data) {
                var _a = res["data"].data, list = _a.list, total = _a.total;
                _this.setState({ dataList: list, total: total });
            }
        });
    };
    DataPointTable.prototype.render = function () {
        var _this = this;
        var _a = this.state, dataList = _a.dataList, total = _a.total, pagination = _a.pagination;
        var _b = this.props, disableDataId = _b.disableDataId, selectedRowKeys = _b.selectedRowKeys, mode = _b.mode, source = _b.source, selectedRows = _b.selectedRows;
        // 组建pagination
        var rowSelection = {
            type: mode,
            selectedRowKeys: selectedRowKeys,
            getCheckboxProps: function (record) { return ({ disabled: disableDataId.includes(record.id) }); },
            onSelect: function (record, selected) { return _this.props.onSelectRow(record, selected, 'id'); },
            onSelectAll: function (selected, record, changeRows) { return _this.props.onSelectRow(changeRows, selected, 'id'); },
        };
        pagination.total = total;
        return (<ComplexTable rowKey="id" minWidth={800} scroll={{ x: 800 }} dataSource={dataList} pagination={pagination} columns={this.columns()} rowSelection={rowSelection} onChange={this.handleTableChange} onFilterTagsChange={this.handleFilterTagsChange}/>);
    };
    return DataPointTable;
}(Component));
export default DataPointTable;
//# sourceMappingURL=DataPointTable.js.map