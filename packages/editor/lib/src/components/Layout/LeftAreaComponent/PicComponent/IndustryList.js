import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import styles from "./index.module.less";
import { onDrag } from './config';
import { clientParam } from "../../../data/api";
var IndustryList = function (props) {
    var uploaConfig = props.uploaConfig, mappingType = props.mappingType;
    var _a = useState([]), list = _a[0], setList = _a[1];
    var requstPicList = function () {
        clientParam(uploaConfig.industry.baseURL)
            .request({
            url: uploaConfig.industry.list.url,
            data: {
                mappingId: uploaConfig.industry.mappingId,
                mappingType: mappingType,
            },
            method: 'post',
            headers: {
                token: uploaConfig.industry.token,
                'Content-Type': 'application/json',
            },
        })
            .then(function (res) {
            var data = res.data.data;
            if (data) {
                data.forEach(function (item) {
                    item.name = item.name.substring(0, item.name.lastIndexOf('.'));
                    item.type = item.name.substring(item.name.lastIndexOf('.') + 1);
                    // getBase64(item.url, (data: string) => {
                    //   item.url = item.url;
                    // });
                });
            }
            setList(data);
        });
    };
    useEffect(function () {
        requstPicList();
    }, []);
    return (<React.Fragment>
            <Row>
                {(list || []).map(function (item, index) { return (<Col key={index} span={8} className={styles.colStyle} style={{ textAlign: 'center' }}>
                        <a title={item.name} draggable href="#" onClick={function (e) { return e.preventDefault(); }} onDragStart={function (ev) { return onDrag(ev, item); }}>
                            <img alt={item.name} src={item.url} style={{ width: 60, height: 60 }}/>
                            <span style={{
                marginTop: 5,
                overflow: 'hidden',
                display: 'block',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                color: "#333"
            }}>
                    {item.name}
                  </span>
                        </a>
                    </Col>); })}
            </Row>
        </React.Fragment>);
};
export default IndustryList;
//# sourceMappingURL=IndustryList.js.map