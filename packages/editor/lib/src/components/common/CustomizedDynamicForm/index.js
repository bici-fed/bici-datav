import React, { Fragment } from 'react';
import { Button, Checkbox, Col, Collapse, Form, Input, InputNumber, Row, Select, Space, Radio } from 'antd';
import { PlusOutlined, MinusCircleOutlined, } from '@ant-design/icons';
import * as _ from 'lodash';
import ColorPicker from "../ColorPicker/ColorPicker";
import CustomIcon from "../../config/iconConfig";
import CheckboxGroup from "../CheckboxGroup";
var Panel = Collapse.Panel;
var TextArea = Input.TextArea;
var Option = Select.Option;
var alignObj = {
    left: ['左对齐', 'iconzuoduiqi'],
    right: ['右对齐', 'iconyouduiqi'],
    top: ['顶部对齐', 'iconshangduiqi'],
    bottom: ['底部对齐', 'iconxiaduiqi'],
    center: ['垂直居中', 'iconzongxiangjuzhong'],
    middle: ['水平居中', 'iconhengxiangjuzhong'],
};
var CustomizedDynamicForm = function (_a) {
    var onChange = _a.onChange, formStyle = _a.formStyle;
    var hasField = function (formItems, field) {
        var i = _.findIndex(formItems, function (item) { return item.name[0] == field; });
        if (i >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return (<React.Fragment>
            <Collapse defaultActiveKey={['0', '1']}>
                {(formStyle || []).map(function (item, index) {
            return (<Panel header={item.group} key={index}>
                                <Form fields={item.formItems} onFieldsChange={function (_, allFields) {
                    onChange(item.group, allFields);
                }}>
                                    {hasField(item.formItems, 'username') ? (<Row>
                                                <Col>
                                                    <Form.Item name="username" label="username" rules={[{ required: true, message: 'Username is required!' }]}>
                                                        <Input />
                                                    </Form.Item>
                                                </Col>
                                            </Row>) : ''}
                                    {hasField(item.formItems, 'color') ? (<Row>
                                                <Col>
                                                    <Form.Item name="color" label="color" rules={[{ required: true, message: 'Username is required!' }]}>
                                                        <Input />
                                                    </Form.Item>
                                                </Col>
                                            </Row>) : ''}
                                    {hasField(item.formItems, 'fontStyle') ? (<Row>
                                                <Col>
                                                    <Form.Item name="fontStyle" label="字体颜色" labelCol={{ span: 7 }}>
                                                        <ColorPicker />
                                                    </Form.Item>
                                                </Col>
                                            </Row>) : ''}
                                    {hasField(item.formItems, 'refreshRate') ? (<Row>
                                                <Col span={8}>
                                                    <Form.Item name="refreshRateCheck" label="刷新频率" valuePropName="checked">
                                                        <Checkbox />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={9}>
                                                    <Form.Item name="refreshRate" label="">
                                                        <InputNumber min={0} max={1000000}/>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={4}>
                                                <Form.Item name="pullRateUnit">
                                                <Select style={{ width: 40 }}>
                                                    {[{ t: 1, n: '秒' }, { t: 60, n: '分' }, { t: 3600, n: '时' }].map(function (item) {
                        return <Option key={item.t} value={item.t}>{item.n}</Option>;
                    })}
                                                </Select>
                                                </Form.Item>
                                                </Col>
                                                <Col>
                                                    <Form.Item>一次</Form.Item>
                                                </Col>
                                            </Row>) : ''}
                                    {hasField(item.formItems, 'iframe') ? (<Row>
                                                <Col span={24}>
                                                    <Form.Item name="iframe" label="网页地址">
                                                        <TextArea style={{ width: '100%' }} placeholder="请输入网页地址" autoSize={{ minRows: 2, maxRows: 6 }}/>
                                                    </Form.Item>
                                                </Col>
                                            </Row>) : ''}
                                    {hasField(item.formItems, 'title') ? (<Row>
                                                <Col span={7}>
                                                    <Form.Item name="titleShow" label="标题" valuePropName="checked">
                                                        <Checkbox />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={17}>
                                                    <Form.Item name="title">
                                                       <Input />
                                                    </Form.Item>
                                                </Col>
                                            </Row>) : ''}
                                    {hasField(item.formItems, 'titleFontFamily') ? (<Row>
                                            <Col span={24}>
                                                <Form.Item name="titleFontFamily" label="字体" labelCol={{ span: 7 }} labelAlign="left">
                                                    <Select allowClear getPopupContainer={function () { return document.querySelector('#editLayout'); }}>
                                                        <Option value='"Microsoft YaHei"' style={{ fontFamily: '"Microsoft YaHei"' }}>
                                                            微软雅黑
                                                        </Option>
                                                        <Option value="SimSun" style={{ fontFamily: 'SimSun' }}>
                                                            宋体
                                                        </Option>
                                                        <Option value="KaiTi" style={{ fontFamily: 'KaiTi' }}>
                                                            楷体
                                                        </Option>
                                                        <Option value="SimHei" style={{ fontFamily: 'SimHei' }}>
                                                            黑体
                                                        </Option>
                                                        <Option value='"Hiragino Sans GB"' style={{ fontFamily: '"Hiragino Sans GB"' }}>
                                                            冬青黑体
                                                        </Option>
                                                        <Option value="Arial" style={{ fontFamily: 'Arial' }}>
                                                            Arial
                                                        </Option>
                                                        <Option value="Tahoma" style={{ fontFamily: 'Tahoma' }}>
                                                            Tahoma
                                                        </Option>
                                                        <Option value="Helvetica" style={{ fontFamily: 'Helvetica' }}>
                                                            Helvetica
                                                        </Option>
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                        </Row>) : ''}
                                {hasField(item.formItems, 'titleFontColor') ? (<Row>
                                            <Col span={12}>
                                                <Form.Item name="titleFontColor" label="颜色字号">
                                                    <ColorPicker />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item name="titleFontSize">
                                                    <InputNumber style={{ width: '100%' }}/>
                                                </Form.Item>
                                            </Col>
                                        </Row>) : ''}
                                {hasField(item.formItems, 'titlePosition') ? (<React.Fragment>
                                        <Row>
                                            <Col span={18} offset={6}>
                                                <Form.Item label="" name="titlePosition" labelCol={{ span: 6 }}>
                                                    <Radio.Group style={{ width: "100%" }} size="small">
                                                        <Radio.Button style={{ width: "33%", textAlign: "center" }} value="left"><CustomIcon type="iconleft"/></Radio.Button>
                                                        <Radio.Button style={{ width: "33%", textAlign: "center" }} value="center"><CustomIcon type="iconjuzhongduiqi"/></Radio.Button>
                                                        <Radio.Button style={{ width: "33%", textAlign: "center" }} value="right"><CustomIcon type="iconyouduiqi2"/></Radio.Button>
                                                    </Radio.Group>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={18} offset={6}>
                                                <Form.Item label="" name="titleFontStyle">
                                                    <CheckboxGroup />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        </React.Fragment>) : ''}
                                {hasField(item.formItems, 'headerFontColor') ? (<Row>
                                            <Col span={12}>
                                                <Form.Item name="headerFontColor" label="表头字色">
                                                    <ColorPicker />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item name="headerFontSize">
                                                    <InputNumber />
                                                </Form.Item>
                                            </Col>
                                        </Row>) : ''}

                                {hasField(item.formItems, 'theadBkColorShow') ? (<Row>
                                            <Col span={10}>
                                                <Form.Item name="theadBkColorShow" label="表头背景" valuePropName="checked">
                                                    <Checkbox />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item name="theadBkColor">
                                                    <ColorPicker />
                                                </Form.Item>
                                            </Col>
                                        </Row>) : ''}
                                {hasField(item.formItems, 'tbodyBkColor') ? (<Row>
                                            <Col span={10}>
                                                <Form.Item name="tbodyBkColorShow" label="表格背景" valuePropName="checked">
                                                    <Checkbox />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item name="tbodyBkColor">
                                                    <ColorPicker />
                                                </Form.Item>
                                            </Col>
                                        </Row>) : ''}
                                {hasField(item.formItems, 'tbBorderShow') ? (<Row>
                                            <Col span={10}>
                                                <Form.Item name="tbBorderShow" label="表格边框" valuePropName="checked">
                                                    <Checkbox />
                                                </Form.Item>
                                            </Col>
                                            <Col span={6}>
                                                <Form.Item name="tbBorderColor">
                                                    <ColorPicker />
                                                </Form.Item>
                                            </Col>
                                            <Col span={5}>
                                                <Form.Item name="tbBorderSize">
                                                    <InputNumber />
                                                </Form.Item>
                                            </Col>
                                        </Row>) : ''}

                                {hasField(item.formItems, 'chartShape') ? (<Row>
                                            <Col>
                                                <Form.Item name="chartShape" label="饼/环图">
                                                    <Radio.Group>
                                                        <Radio value="pie">饼状图</Radio>
                                                        <Radio value="circle">环状图</Radio>
                                                    </Radio.Group>
                                                </Form.Item>
                                            </Col>
                                        </Row>) : ''}
                                {hasField(item.formItems, 'chartBkColorChecked') ? (<Row>
                                            <Col span={8}>
                                                <Form.Item label="背景颜色"></Form.Item>
                                            </Col>
                                            <Col span={3}>
                                                <Form.Item name="chartBkColorChecked" valuePropName="checked">
                                                    <Checkbox />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item name="chartBkColor">
                                                    <ColorPicker />
                                                </Form.Item>
                                            </Col>
                                        </Row>) : ''}
                                {hasField(item.formItems, "chartOrder") ? (<Row>
                                            <Col span={8}>
                                                <Form.Item label="自动排序">
                                                </Form.Item>
                                            </Col>
                                            <Col span={3}>
                                                <Form.Item name="chartOrderChecked" valuePropName="checked">
                                                    <Checkbox />
                                                </Form.Item>
                                            </Col>
                                            <Col span={13}>
                                                <Form.Item name='chartOrder'>
                                                <Select allowClear getPopupContainer={function () { return document.querySelector('#editLayout'); }}>
                                                    <Option value='desc'>从大到小</Option>
                                                    <Option value="asc">从小到大</Option>
                                                </Select>
                                                </Form.Item>
                                            </Col>
                                        </Row>) : ''}
                                {hasField(item.formItems, "lineGraphRange") ? (<Row>
                                            <Col span={8}>
                                                <Form.Item label="图形颜色"></Form.Item>
                                            </Col>
                                            <Col span={16}>
                                                <Form.List name="lineGraphRange">
                                                {function (fields, _a) {
                        var add = _a.add, remove = _a.remove;
                        return (<Fragment>
                                                        {fields.map(function (field) { return (<Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="center" size={20}>
                                                            <Form.Item {...field} name={[field.name, 'lineGraphRangeCheck']} valuePropName="checked" style={{ marginBottom: 0 }}>
                                                                <Checkbox />
                                                            </Form.Item>
                                                            <Form.Item {...field} name={[field.name, 'lineGraphRangeColor']} style={{ marginBottom: 0 }}>
                                                                <ColorPicker />
                                                            </Form.Item>
                                                            <Form.Item style={{ display: 'none' }}>
                                                                <MinusCircleOutlined onClick={function () { return remove(field.name); }}/>
                                                            </Form.Item>
                                                            </Space>); })}
                                                        {fields.length < 10 ? (<Form.Item style={{ display: 'none' }}>
                                                            <Button type="dashed" onClick={function () { return add(); }} block icon={<PlusOutlined />}>
                                                                添加
                                                            </Button>
                                                            </Form.Item>) : null}
                                                    </Fragment>);
                    }}
                                                </Form.List>
                                            </Col>
                                            </Row>) : ''}
                                {hasField(item.formItems, 'chartBkColorShow') ? (<Row>
                                            <Col span={8}>
                                                <Form.Item label="背景颜色"/>
                                            </Col>
                                            <Col span={3}>
                                                <Form.Item name="chartBkColorShow" valuePropName="checked">
                                                    <Checkbox />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item name="chartBkColor">
                                                    <ColorPicker />
                                                </Form.Item>
                                            </Col>
                                        </Row>) : ''}
                                    {hasField(item.formItems, 'chartRefLineShow') ? (<Row>
                                                <Col span={8}>
                                                    <Form.Item label="参考线"/>
                                                </Col>
                                                <Col span={3}>
                                                    <Form.Item name="chartRefLineShow" valuePropName="checked">
                                                        <Checkbox />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Form.Item name="chartRefLineColor">
                                                        <ColorPicker />
                                                    </Form.Item>
                                                </Col>
                                            </Row>) : ''}
                                </Form>
                            </Panel>);
        })}

            </Collapse>
        </React.Fragment>);
};
export default CustomizedDynamicForm;
//# sourceMappingURL=index.js.map