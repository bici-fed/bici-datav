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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState, useMemo } from 'react';
import { Button, Collapse, Select, Col, Form, Input } from 'antd';
import { useCallback } from 'react';
import './index.css';
import { useEffect } from 'react';
var TextArea = Input.TextArea;
var Panel = Collapse.Panel;
var Page = function (_a) {
    var onEventValueChange = _a.onEventValueChange, canvasData = _a.canvasData;
    var form = Form.useForm()[0];
    var _b = useState(canvasData.node.events), eventData = _b[0], setEventData = _b[1];
    useEffect(function () {
        setEventData(canvasData.node.events);
    }, [canvasData]);
    /**
     * 新增事件
     */
    var onHandleAddEventListener = function () {
        var arr = __spreadArray([], eventData, true);
        arr.push({ type: '0', action: '0' });
        setEventData(arr);
    };
    var onHandleEventTypeChange = function (e, idx) {
        var data = __spreadArray([], eventData, true);
        data[idx].type = e;
        // resetFields();
        setEventData(data);
    };
    var onHandleSelectEvent = function (e, idx) {
        var data = __spreadArray([], eventData, true);
        data[idx].action = e;
        // resetFields();
        setEventData(data);
    };
    /**
     * 渲染自定义事件表单入口
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var renderFontForm = function (item, idx) {
        return (<Form form={form}>
        <Col span={24}>
          <Form.Item label="事件类型">
              <Select placeholder="请选择事件类型" onSelect={function (value) { return onHandleEventTypeChange(value, idx); }}>
                <Select.Option value="0">单击</Select.Option>
                <Select.Option value="1">双击</Select.Option>
                <Select.Option value="2">webSocket事件</Select.Option>
                <Select.Option value="3">MQTT</Select.Option>
              </Select>
          </Form.Item>
        </Col>
        {renderFormByEventType(item, idx)}
      </Form>);
    };
    /**
     * 根据事件类型渲染事件行为表单
     */
    var renderFormByEventType = function (item, idx) {
        var renderCommonForm = function () {
            return (<React.Fragment>
          <Col span={24}>
            <Form.Item label="事件行为">
                <Select placeholder="请选择事件行为" onSelect={function (value) { return onHandleSelectEvent(value, idx); }}>
                  <Select.Option value="0">跳转链接</Select.Option>
                  <Select.Option value="1">执行动画</Select.Option>
                  <Select.Option value="2">执行函数</Select.Option>
                  <Select.Option value="3">执行window下的全局函数</Select.Option>
                  <Select.Option value="4">更新属性数据</Select.Option>
                </Select>
            </Form.Item>
          </Col>
          {renderFormByEvent(item, idx)}
        </React.Fragment>);
        };
        switch (item.type) {
            case '0':
            case '1':
                return renderCommonForm();
            case '2':
                return (<React.Fragment>
            <Col span={24}>
              {<Form.Item label="消息名">
                  <Input placeholder="请输入自定义消息名"/>
                </Form.Item>}
            </Col>
            {renderCommonForm()}
          </React.Fragment>);
            case '3':
                return (<React.Fragment>
            <Form.Item label="Topic">
              <Col span={24}>
                <Input placeholder="请输入Topic/subtopic"/>
              </Col>
            </Form.Item>
            {renderCommonForm()}
          </React.Fragment>);
            default:
                break;
        }
    };
    /**
     * 根据事件行为生成不同的表单
     */
    var renderFormByEvent = function (item, idx) {
        switch (item.action) {
            case '0':
                return (<React.Fragment>
            <Col span={24}>
              <Form.Item label="链接地址">
                  <Input placeholder="请输入链接地址" onChange={function (e) { return onHandleCodeChange(e, idx); }}/>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="参数值">
                <Input placeholder="_black"/>
              </Form.Item>
            </Col>
          </React.Fragment>);
            case '2':
                return (<Col span={24}>
            <Form.Item label="自定义代码">
                <TextArea placeholder="请输入自定义代码" onChange={function (e) { return onHandleCodeChange(e, idx); }} rows={10}/>
            </Form.Item>
          </Col>);
            default:
                break;
        }
    };
    /**
     * value值的变化, 通知canvas更新画布的数据
     */
    var onHandleCodeChange = function (e, idx) {
        // validateFields((err, value) => {
        //   if (err) return;
        //   eventData[idx] = {
        //     type: null,
        //     action: null,
        //     value: null
        //   };
        //   eventData[idx].type = +value[`eventType${idx}`];
        //   eventData[idx].action = +value[`event${idx}`];
        //   eventData[idx].value = e.target.value;
        //   eventData[idx].params = value[`params${idx}`] || '';
        //   onEventValueChange(eventData);
        // });
    };
    /**
     * 删除自定义事件
     */
    var onHandleDeleteItem = useCallback(function (idx) {
        var data = __spreadArray([], eventData, true);
        delete data[idx];
        // resetFields();
        setEventData(data.filter(Boolean));
    }, [eventData]);
    /**
     * 渲染事件列表
     */
    var renderPanel = useMemo(function () {
        if (eventData.length < 1)
            return;
        return (<Collapse>
        {eventData
                .map(function (item) { return (__assign(__assign({}, item), { action: String(item.action), type: String(item.type) })); })
                .map(function (item, index) { return (<Panel header={<a>
                  {"\u81EA\u5B9A\u4E49\u4E8B\u4EF6".concat(index + 1)}{' '}
                  <span onClick={function () { return onHandleDeleteItem(index); }}>delete</span>
                </a>} key={index}>
              {renderFontForm(item, index)}
            </Panel>); })}
      </Collapse>);
    }, [eventData, renderFontForm, onHandleDeleteItem]);
    return (<div>
      <Button type="primary" className="event-button" onClick={onHandleAddEventListener}>
        新增事件
      </Button>
      {renderPanel}
    </div>);
};
export default Page;
//# sourceMappingURL=index.js.map