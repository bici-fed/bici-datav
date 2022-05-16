import { Form, Row, Col, Input, Button } from 'antd';
import React from 'react';

import { canvas } from '../../../index';

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 15 }
};

const MQTTForm = () => {

  const [form]=Form.useForm()

  /**
  * 连接mqtt
  */

  const onHandleConnectMQTT = () => {
    // validateFields((err, value) => {
    //   if(err) return;
    //   const { mqtt, clientId, username, password } = value;
    //   canvas.openMqtt(mqtt, {
    //     clientId,
    //     username,
    //     password
    //   });
    // });
  }

  return (
    <Form {...formLayout} form={form}>
      <Row>
        <Col span={24}>
          <Form.Item label="URL地址">
            <Input placeholder="请输入URL地址" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Client ID">
            <Input placeholder="请输入Client ID（不能重复使用，可为空)" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="用户名">
            <Input placeholder="请输入用户名" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="密码">
            <Input type="password" placeholder="请输入密码" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Topics *">
            <Input placeholder="请输入Topics" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Button type="primary" style={{ marginLeft: 20, width: 235 }} onClick={() => onHandleConnectMQTT()}>
            测试连接
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default MQTTForm;
