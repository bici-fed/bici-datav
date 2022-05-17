import React, { useMemo, useEffect } from 'react';
import { Form, InputNumber, Tabs, Collapse, Row, Col, Select, } from 'antd';
import './index.module.less';
import ColorPicker from "../../../common/ColorPicker/ColorPicker";
var Panel = Collapse.Panel;
var TabPane = Tabs.TabPane;
var Option = Select.Option;
var LineCanvasProps = function (_a) {
    var data = _a.data, onFormValueChange = _a.onFormValueChange;
    var form = Form.useForm()[0];
    var _b = (data === null || data === void 0 ? void 0 : data.line) || {}, lineWidth = _b.lineWidth, dash = _b.dash, strokeStyle = _b.strokeStyle, name = _b.name, fromArrow = _b.fromArrow, toArrow = _b.toArrow, type = _b.type;
    useEffect(function () {
        form.setFieldsValue({
            lineWidth: lineWidth,
            dash: dash,
            strokeStyle: strokeStyle,
            name: name,
            fromArrow: fromArrow,
            toArrow: toArrow,
        });
    }, [lineWidth, dash, name, toArrow, fromArrow, strokeStyle, type, data.line.data]);
    /**
     * 渲染位置和大小的表单
     */
    var handleFormValueChange = function (changeValues, allValues) {
        onFormValueChange(allValues);
    };
    var renderForm = useMemo(function () {
        var _a, _b;
        return (<Form form={form} onValuesChange={handleFormValueChange}>
        <Row>
          <Col span={24}>
            <Form.Item name="strokeStyle" label="线条颜色">
              <ColorPicker />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="name" label="线条类型">
              <Select style={{ width: '95%' }}>
                {((_b = (_a = data === null || data === void 0 ? void 0 : data.line) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.type) !== 'myLine' ?
                <React.Fragment>
                    <Option value="curve">贝塞尔曲线</Option>
                    <Option value="polyline">折线</Option>
                    </React.Fragment>
                : ''}
                <Option value="line">直线</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="dash" label="线条样式">
              <Select style={{ width: '95%' }}>
                <Option value={0}>_________</Option>
                <Option value={1}>---------</Option>
                <Option value={2}>_ _ _ _ _</Option>
                <Option value={3}>- . - . - .</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="lineWidth" label="线条宽度">
              <InputNumber style={{ width: '95%' }} min={0}/>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="fromArrow" label="起点箭头">
              <Select style={{ width: '95%' }}>
                <Option value="">无箭头</Option>
                <Option value="triangleSolid">实心三角形</Option>
                <Option value="triangle">空心三角形</Option>
                <Option value="diamondSolid">实心菱形</Option>
                <Option value="diamond">空心菱形</Option>
                <Option value="circleSolid">实心圆</Option>
                <Option value="circle">空心圆</Option>
                <Option value="line">线型箭头</Option>
                <Option value="lineUp">上单边线箭头</Option>
                <Option value="lineDown">下单边线箭头</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="toArrow" label="结束箭头">
              <Select style={{ width: '95%' }}>
                <Option value="">无箭头</Option>
                <Option value="triangleSolid">实心三角形</Option>
                <Option value="triangle">空心三角形</Option>
                <Option value="diamondSolid">实心菱形</Option>
                <Option value="diamond">空心菱形</Option>
                <Option value="circleSolid">实心圆</Option>
                <Option value="circle">空心圆</Option>
                <Option value="line">线型箭头</Option>
                <Option value="lineUp">上单边线箭头</Option>
                <Option value="lineDown">下单边线箭头</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>);
    }, [lineWidth, dash, name, toArrow, fromArrow, strokeStyle, type, data.line.data]);
    return (<div className="rightArea">
        <Collapse defaultActiveKey={['1']} expandIconPosition="right" ghost={false} bordered={false}>
          <Panel header="样式" key="1">
            {renderForm}
          </Panel>
        </Collapse>
    </div>);
};
export default LineCanvasProps;
//# sourceMappingURL=index.js.map