import React from 'react';
import { Row, Col, Collapse } from 'antd';
import styles from '../../index.module.less';
import CustomIcon from '../../../config/iconConfig';
import { defaultToolsConfig } from '../../../config/config';
import * as _ from 'lodash';
var Panel = Collapse.Panel;
var Layout = function (_a) {
    var Tools = _a.Tools, onDrag = _a.onDrag, toolConfig = _a.toolConfig;
    return (<Collapse defaultActiveKey={['0']} expandIconPosition="right" ghost={false} bordered={false}>
      {Tools.map(function (item, index) { return (<Panel header={item.group} key={index}>
          <div className={styles.button}>
            <Row align="middle">
              {(Object.keys(item.children)).map(function (itm, idx) {
                var conf = toolConfig || defaultToolsConfig;
                var hasCom = _.lastIndexOf(conf, itm);
                if (hasCom == -1) {
                    return null;
                }
                var it = item.children[itm];
                return (<Col span={8} key={idx} style={{ marginBottom: 20, textAlign: 'center' }}>
                    <a title={it.name} draggable href="#" onClick={function (e) { return e.preventDefault(); }} onDragStart={function (ev) { return onDrag(ev, it); }}>
                      <CustomIcon type={it.icon} style={{ fontSize: 30, width: 53, height: 53, lineHeight: '53px' }}/>
                      <span style={{
                        overflow: 'hidden',
                        display: 'block',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                    }}>
                        {it.name}
                      </span>
                    </a>
                  </Col>);
            })}
            </Row>
          </div>
        </Panel>); })}
    </Collapse>);
};
export default Layout;
//# sourceMappingURL=index.js.map