import React, { useState, Fragment } from 'react';
import { Modal, Form, Input } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import styles from './index.module.less';
var confirm = Modal.confirm;
var CompContextMenu = function (props) {
    var contextMenuRef = props.contextMenuRef, showContextmenu = props.showContextmenu, contextmenu = props.contextmenu, name = props.name, form = props.form, handleOk = props.handleOk, handleDelete = props.handleDelete;
    var _a = useState(false), visible = _a[0], setVisible = _a[1];
    var onRename = function () {
        setVisible(true);
        form.setFieldsValue({ componentName: name });
    };
    var onDelete = function () {
        var md = confirm({
            title: '确定删除吗?',
            icon: <ExclamationCircleOutlined />,
            content: '',
            okText: '确定',
            cancelText: '取消',
            getContainer: function () { return document.querySelector('#editLayout'); },
            onOk: function (close) {
                handleDelete();
                close && close();
                md.destroy();
            },
            onCancel: function (close) {
                close && close();
                md.destroy();
            },
        });
    };
    var handleOnOk = function () {
        handleOk();
        setVisible(false);
    };
    var handleCancel = function () {
        setVisible(false);
    };
    var renderNewComponentModal = (<Modal title="重命名" visible={visible} onOk={handleOnOk} onCancel={handleCancel} maskClosable={false} okText="确定" cancelText="取消" getContainer={function () { return document.querySelector('#editLayout'); }}>
      <Form form={form}>
        <Form.Item rules={[
            {
                required: true,
                message: '请输入组件名称',
            },
            {
                max: 20,
                message: '最长为20个字符',
            },
            {
                min: 1,
                message: '不低于1个字符',
            },
        ]} label="组件名字" name="componentName">
          <Input placeholder="输入组件名字" id="componentName" maxLength={20}/>
        </Form.Item>
      </Form>
    </Modal>);
    return (<Fragment>
      <div style={contextmenu} ref={contextMenuRef}>
        <div className={styles.menus} style={{ display: showContextmenu ? 'block' : 'none' }}>
          <div>
            <a onClick={onRename}>重命名</a>
          </div>
          <div>
            <a onClick={onDelete}>删除</a>
          </div>
        </div>
      </div>
      {renderNewComponentModal}
    </Fragment>);
};
export default CompContextMenu;
//# sourceMappingURL=index.js.map