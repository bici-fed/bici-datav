import React from 'react';
import { Node } from '../@bici-topology/core';
import { Form, Col, Collapse, Switch, Select } from 'antd';
import { canvas } from '../../../index';
var Panel = Collapse.Panel;
var AnimateComponent = function (_a) {
    var canvasData = _a.canvasData;
    var form = Form.useForm()[0];
    var node = canvasData.node;
    var onHandleStyleSelectChange = function (e) {
        switch (e) {
            case 'upDown':
                node.rect.y -= 10;
                node.rect.ey -= 10;
                node.animateFrames.push({
                    duration: 100,
                    linear: true,
                    state: node
                });
                node.animateFrames.push({
                    duration: 100,
                    linear: true,
                    state: Node.cloneState(node)
                });
                node.animateFrames.push({
                    duration: 200,
                    linear: true,
                    state: Node.cloneState(node)
                });
                node.animateStart = Date.now();
                break;
            default:
                break;
        }
        node.animateDuration = 0;
        for (var _i = 0, _a = node.animateFrames; _i < _a.length; _i++) {
            var item = _a[_i];
            node.animateDuration += item.duration;
        }
    };
    var onHandleSwitchChange = function (e) {
        if (e) {
            node.animateStart = node.animateStart ? Date.now() : 0;
            canvas.animate();
        }
    };
    var renderAnimateForm = function () {
        return (<Form form={form}>
        <Col span={24}>
          <Form.Item label="特效">
              <Select onSelect={function (e) { return onHandleStyleSelectChange(e); }}>
                <Select.Option value="upDown" key="topDown">
                  上下跳动
                </Select.Option>
                <Select.Option value="leftRight" key="leftRight">
                  左右跳动
                </Select.Option>
                <Select.Option value="heart" key="heart">
                  心跳
                </Select.Option>
              </Select>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="播放">
              <Switch checkedChildren="开" unCheckedChildren="关" onChange={function (e) { return onHandleSwitchChange(e); }}/>
          </Form.Item>
        </Col>
      </Form>);
    };
    return (<div>
      <Collapse>
        <Panel header="动画" key="1">
          {renderAnimateForm()}
        </Panel>
      </Collapse>
    </div>);
};
export default AnimateComponent;
//# sourceMappingURL=index.js.map