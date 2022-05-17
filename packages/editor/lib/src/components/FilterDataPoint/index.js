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
 * @file 筛选数据点/复杂感知点/复杂反应堆 ，支持多选单选
 */
import React from 'react';
import { Tabs, Modal } from 'antd';
import DataPointTable from './DataPointTable';
import ComplexTable from './ComplexTable';
import ReactTable from './ReactTable';
import PropsTypes from 'prop-types';
import { biciNotification } from 'bici-transformers';
var TabPane = Tabs.TabPane;
var initialState = {
    selectedRowKeys: [],
    selectedRows: [],
};
var FilterDataPoint = /** @class */ (function (_super) {
    __extends(FilterDataPoint, _super);
    function FilterDataPoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = __assign({}, initialState);
        _this.handleSelectRow = function (rows, selected, rowKey) {
            var _a = _this.props, maxSelectLength = _a.maxSelectLength, mode = _a.mode;
            var selectedRowKeys = _this.state.selectedRowKeys.slice();
            var selectedRows = _this.state.selectedRows.slice();
            if (mode === 'radio') {
                _this.setState({ selectedRows: [rows], selectedRowKeys: [rows[rowKey]] });
            }
            else {
                if (!Array.isArray(rows)) {
                    if (selected) { // 如果是单选的话
                        selectedRowKeys.push(rows[rowKey]);
                        selectedRows.push(rows);
                    }
                    else {
                        var index = selectedRowKeys.indexOf(rows[rowKey]);
                        selectedRowKeys.splice(index, 1);
                        selectedRows.splice(index, 1);
                    }
                    if (maxSelectLength && selectedRowKeys.length > maxSelectLength) {
                        biciNotification.info({ message: "\u6700\u591A\u9009\u62E9".concat(maxSelectLength, "\u4E2A\u6570\u636E\u70B9\u54E6\uFF01") });
                        return;
                    }
                }
                else { // 如果是多选的话
                    var indexList = rows.map(function (row) { return row[rowKey]; });
                    if (selected) {
                        selectedRowKeys.push.apply(selectedRowKeys, indexList);
                        selectedRows.push.apply(selectedRows, rows);
                    }
                    else {
                        var idSet_1 = new Set(_this.state.selectedRowKeys);
                        indexList.forEach(function (index) { return idSet_1.delete(index); });
                        selectedRowKeys = Array.from(idSet_1);
                        selectedRows = [];
                        selectedRowKeys.forEach(function (id) {
                            var row = _this.state.selectedRows.find(function (row) { return row[rowKey] === id; });
                            row && selectedRows.push(row);
                        });
                    }
                    if (maxSelectLength && selectedRows.length > maxSelectLength) {
                        biciNotification.info({ message: "\u6700\u591A\u9009\u62E9".concat(maxSelectLength, "\u4E2A\u6570\u636E\u70B9\u54E6\uFF01") });
                        return;
                    }
                }
                _this.setState({ selectedRows: selectedRows, selectedRowKeys: selectedRowKeys });
            }
        };
        _this.handleOk = function () {
            var _a = _this.state, selectedRowKeys = _a.selectedRowKeys, selectedRows = _a.selectedRows;
            _this.props.onGetSelectRow && _this.props.onGetSelectRow(selectedRowKeys, selectedRows);
            _this.props.onCancel();
        };
        return _this;
    }
    FilterDataPoint.prototype.componentDidMount = function () {
        this.setState({ selectedRowKeys: this.props.selectedRowKeys, selectedRows: this.props.selectedRows });
    };
    FilterDataPoint.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        if (this.props.visible !== prevProps.visible) {
            if (JSON.stringify(this.props.selectedRowKeys) !== JSON.stringify(this.state.selectedRowKeys)) {
                this.setState({ selectedRowKeys: this.props.selectedRowKeys, selectedRows: this.props.selectedRows });
            }
        }
    };
    FilterDataPoint.prototype.render = function () {
        var _a = this.state, selectedRowKeys = _a.selectedRowKeys, selectedRows = _a.selectedRows;
        var _b = this.props, visible = _b.visible, _c = _b.disableSource, disableSource = _c === void 0 ? [] : _c, mode = _b.mode, isOnlyNumber = _b.isOnlyNumber, disableDataId = _b.disableDataId;
        var childrenProps = {
            onSelectRow: this.handleSelectRow,
            disableDataId: disableDataId,
            selectedRowKeys: selectedRowKeys,
            selectedRows: selectedRows,
            mode: mode
        };
        return <Modal visible={visible} width={document.documentElement.clientWidth - 250} bodyStyle={{
                padding: 12,
                height: document.documentElement.clientHeight - 200,
                overflowY: 'auto',
                backgroundColor: 'white'
            }} style={{ top: 70 }} onOk={this.handleOk} okText="确定" cancelText="取消" getContainer={function () { return document.querySelector('#editLayout'); }} onCancel={this.props.onCancel}>
      <Tabs defaultActiveKey='dataPoint'>
        {!disableSource.includes('dataPoint') &&
                <TabPane tab='数据点' key='dataPoint'>
          <DataPointTable isOnlyNumber={isOnlyNumber} {...childrenProps} node={this.props.node}/>
        </TabPane>}
        {!disableSource.includes('complex') &&
                <TabPane tab='复杂感知点' key='complex'>
          <ComplexTable {...childrenProps} node={this.props.node}/>
        </TabPane>}
        {!disableSource.includes('react') &&
                <TabPane tab='数字机理' key='react'>
          <ReactTable {...childrenProps} node={this.props.node}/>
        </TabPane>}
      </Tabs>
    </Modal>;
    };
    FilterDataPoint.propTypes = {
        mode: PropsTypes.string,
        onCancel: PropsTypes.func.isRequired,
        visible: PropsTypes.bool.isRequired,
        onGetSelectRow: PropsTypes.func,
        disableSource: PropsTypes.array,
        disableDataId: PropsTypes.array,
        maxSelectLength: PropsTypes.number,
        selectedRows: PropsTypes.array,
        selectedRowKeys: PropsTypes.array,
        isOnlyNumber: PropsTypes.bool,
        node: PropsTypes.any, // 选择的节点信息
    };
    FilterDataPoint.defaultProps = {
        mode: 'radio',
        disableDataId: [],
        maxSelectLength: 0,
        selectedRows: [],
        selectedRowKeys: [],
        isOnlyNumber: true
    };
    return FilterDataPoint;
}(React.PureComponent));
export default FilterDataPoint;
//# sourceMappingURL=index.js.map