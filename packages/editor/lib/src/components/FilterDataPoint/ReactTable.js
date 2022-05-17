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
 * 用户侧：数字机理 > 列表
 */
import React, { Component } from 'react';
import { ComplexTable } from 'bici-transformers';
import { fetchSearchReactStackList } from '../data/api';
var initialQueryParams = {
    code: '',
    position: '',
    name: '',
    period: '',
    source: '',
    statusList: [],
    pagination: {
        current: 1,
        pageSize: 10,
        total: 0
    },
    sorter: {
        field: '',
        order: '' // ascend, descend
    }
};
var ReactTable = /** @class */ (function (_super) {
    __extends(ReactTable, _super);
    function ReactTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = __assign({ dataList: [], total: 0, sorterList: [], selectedRowKeys: [], selectedRows: [] }, initialQueryParams);
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
        // 表格列
        _this.columns = function () { return [
            {
                title: '数字机理编号',
                dataIndex: 'code',
                width: 'lg',
                filterType: 'search',
                handleSubmitSearch: function (val) { return _this.handleSearch('code', val); }
            },
            {
                title: '数字机理名称',
                dataIndex: 'name',
                width: 'nm',
                filterType: 'search',
                handleSubmitSearch: function (val) { return _this.handleSearch('name', val); }
            },
            {
                title: '数字机理周期(s)',
                dataIndex: 'period',
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
                title: '数字机理源',
                dataIndex: 'source',
                width: 'lg',
                filterType: 'search',
                handleSubmitSearch: function (val) { return _this.handleSearch('source', val); }
            },
            {
                title: '状态',
                dataIndex: 'statusList',
                width: 120,
                filters: [{ value: 1, text: '符合' }, { value: -1, text: '不符合' }, { value: 2, text: '未反应' }, { value: 3, text: '无数据' }],
                filterMultiple: true,
                checkDisabled: true,
                fixed: 'right',
                render: function (text, record) {
                    var show;
                    if (record.status === 1) {
                        show = <span className='green6'>符合</span>;
                    }
                    else if (record.status === -1) {
                        show = <span className='red6'>不符合</span>;
                    }
                    else if (record.status === 2) {
                        show = <span className='black45'>未反应</span>;
                    }
                    else if (record.status === 3) {
                        show = <span>无数据</span>;
                    }
                    return <div style={{ width: 100 }}>{show}</div>;
                }
            },
        ]; };
        return _this;
    }
    ReactTable.prototype.componentDidMount = function () {
        this.requestList();
    };
    ReactTable.prototype.requestList = function () {
        var _this = this;
        var _a = this.state, pagination = _a.pagination, sorterList = _a.sorterList, code = _a.code, name = _a.name, position = _a.position, period = _a.period, source = _a.source, statusList = _a.statusList;
        var params = { pagination: pagination, sorterList: sorterList, dataTypeList: [1] };
        if (code) {
            params.code = code;
        }
        if (name) {
            params.name = name;
        }
        if (position) {
            params.position = position;
        }
        if (period) {
            params.period = period;
        }
        if (source) {
            params.source = source;
        }
        if (statusList && statusList.length) {
            params.statusList = statusList;
        }
        fetchSearchReactStackList(params).then(function (res) {
            if (res["data"].data) {
                var _a = res["data"].data, list = _a.list, total = _a.total;
                _this.setState({ dataList: list, total: total });
            }
        });
    };
    ReactTable.prototype.render = function () {
        var _this = this;
        var _a = this.state, dataList = _a.dataList, total = _a.total, pagination = _a.pagination;
        var _b = this.props, selectedRowKeys = _b.selectedRowKeys, mode = _b.mode, disableDataId = _b.disableDataId;
        var rowSelection = {
            type: mode,
            selectedRowKeys: selectedRowKeys,
            getCheckboxProps: function (record) { return ({ disabled: disableDataId.includes(record.id) }); },
            onSelect: function (record, selected) { return _this.props.onSelectRow(record, selected, 'id'); },
            onSelectAll: function (selected, record, changeRows) { return _this.props.onSelectRow(changeRows, selected, 'id'); }
        };
        pagination.total = total;
        return (<ComplexTable rowKey="id" minWidth={800} dataSource={dataList} pagination={pagination} columns={this.columns()} rowSelection={rowSelection} onChange={this.handleTableChange} onFilterTagsChange={this.handleFilterTagsChange}/>);
    };
    return ReactTable;
}(Component));
export default ReactTable;
//# sourceMappingURL=ReactTable.js.map