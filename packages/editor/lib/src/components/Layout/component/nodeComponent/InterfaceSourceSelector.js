/**
 * @file 接口来源选择器
 */
import React from 'react';
import { Select } from 'antd';
var Option = Select.Option;
var InterfaceSourceSelector = function (props) {
    function onChange(value) {
        console.log("selected ".concat(value));
    }
    function onBlur() {
        console.log('blur');
    }
    function onFocus() {
        console.log('focus');
    }
    function onSearch(val) {
        console.log('search:', val);
    }
    return (<Select showSearch placeholder="接口来源" optionFilterProp="children" onChange={onChange} onFocus={onFocus} onBlur={onBlur} onSearch={onSearch}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>);
};
export default InterfaceSourceSelector;
//# sourceMappingURL=InterfaceSourceSelector.js.map