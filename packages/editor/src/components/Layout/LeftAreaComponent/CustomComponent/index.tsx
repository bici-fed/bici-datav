import React, {
  CSSProperties,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { clientParam } from '../../../data/api';
import { Row, Col, Form, message, Collapse } from 'antd';
import { useClickAway } from 'ahooks';
import CompContextMenu from '../../../common/CompContextMenu';

import styles from '../../index.module.less';
import CustomIcon from '../../../config/iconConfig';

const { Panel } = Collapse;

interface Props {
  onDrag?: (event, data, custom) => void;
  combineCom?: any;
  ref?: any;
}

const Layout = forwardRef((props: Props, ref) => {
  const { onDrag, combineCom } = props;
  const [formRef] = Form.useForm();
  // 是否显示右键菜单
  const [showContextmenu, setShowContextmenu] = useState(false);

  const [contextmenu, setContextmenu] = useState({
    position: 'fixed',
    zIndex: '10',
    display: 'none',
    left: '',
    top: '',
    bottom: '',
  });
  const [selectedCom, setSelectedCom] = useState(null);
  const contextMenuRef = useRef();
  useClickAway(() => {
    setShowContextmenu(false);
  }, contextMenuRef);

  useImperativeHandle(ref, () => ({
    getNewComponents: () => {
      getNewComponents();
    },
  }));

  // 获取自定义组件
  function getNewComponents() {
    clientParam(combineCom.apiURL)
      .post(combineCom.list.url, combineCom.list.params, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          token: combineCom.token,
          'Content-Type': 'application/json',
        },
      })
      .then((r) => {
        setComponentList(r.data.data);
      });
  }

  const handleDelete = () => {
    clientParam(combineCom.apiURL)
      .post(combineCom.delete.url, selectedCom, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          token: combineCom.token,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        message.success('删除组件成功！',2,()=>{
          message.destroy()
          return null;
        })
        getNewComponents();
      });
  };

  const [componentList, setComponentList] = useState([]);
  useEffect(() => {
    getNewComponents();
  }, []);
  // 右键菜单
  const handleContextMenu = (event, item: any) => {
    setShowContextmenu(!showContextmenu);
    setSelectedCom(item);
    event.preventDefault();
    event.stopPropagation();
    if (event.clientY + 360 < document.body.clientHeight) {
      setContextmenu({
        position: 'fixed',
        zIndex: '10',
        display: 'block',
        left: event.clientX + 'px',
        top: event.clientY + 'px',
        bottom: '',
      });
    } else {
      setContextmenu({
        position: 'fixed',
        zIndex: '10',
        display: 'block',
        left: event.clientX + 'px',
        top: '',
        bottom: document.body.clientHeight - event.clientY + 'px',
      });
    }
  };

  // 确定重命名
  const handleOk = () => {
    onCheck();
  };
  const onCheck = async () => {
    try {
      const values = await formRef.validateFields(['componentName']);
      const newCom = {
        ...selectedCom,
        componentName: values.componentName,
      };
      clientParam(combineCom.apiURL)
        .post(combineCom.rename.url, newCom, {
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            token: combineCom.token,
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          message.success('重命名组件成功！');
          getNewComponents();
        });
    } catch (errorInfo) {
      console.error('Failed:', errorInfo);
    }
  };

  return (
    <Collapse expandIconPosition="right"
              ghost={false} bordered={false}>
      <Panel header="自定义组件" key={'custom'}>
        <div className={styles.button}>
          <Row align="middle">
            {(componentList || []).map((item, key) => {
              return (
                <Col
                  key={key}
                  span={8}
                  style={{
                    marginBottom: 20,
                    textAlign: 'center',
                  }}
                  onContextMenu={(event) => handleContextMenu(event, item)}
                >
                  <a
                    draggable
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    title={item.componentName}
                    style={{padding: '0 5px'}}
                    onDragStart={(ev) =>
                      onDrag(ev, JSON.parse(item.componentProperty), true)
                    }
                  >
                    <CustomIcon type="iconzidingyi" style={{ fontSize: 30, width: 53, height: 53, lineHeight: '53px' }} />
                    <span
                      style={{
                        overflow: 'hidden',
                        display: 'block',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.componentName}
                    </span>
                  </a>
                </Col>
              );
            })}
          </Row>
        </div>
      </Panel>
      <CompContextMenu
        contextMenuRef={contextMenuRef}
        showContextmenu={showContextmenu}
        contextmenu={contextmenu as CSSProperties}
        name={selectedCom?.componentName}
        form={formRef}
        handleOk={handleOk}
        handleDelete={handleDelete}
      />
    </Collapse>
  );
});

export default Layout;
