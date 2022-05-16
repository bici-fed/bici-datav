import React, {useEffect, useState} from "react";
import {Col, message, Row} from "antd";
import styles from "./index.module.less";
import {onDrag} from './config'
import {clientParam} from "../../../data/api";

interface IndustryListProps {
    uploaConfig:any;
    mappingType:number;
}

const IndustryList=(props:IndustryListProps)=>{
    const {uploaConfig,mappingType} = props;
    const [list,setList] = useState([]);
    const requstPicList = () => {
        clientParam(uploaConfig.industry.baseURL)
            .request({
                url:uploaConfig.industry.list.url,
                data:{
                    mappingId: uploaConfig.industry.mappingId,
                    mappingType: mappingType,
                },
                method:'post',
                headers: {
                    token: uploaConfig.industry.token,
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                const data = res.data.data;
                if (data) {
                    data.forEach((item: any) => {
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
    useEffect(()=>{
        requstPicList()
    },[])

    return (
        <React.Fragment>
            <Row>
                {(list||[]).map((item, index) => (
                    <Col
                        key={index}
                        span={8}
                        className={styles.colStyle}
                        style={{ textAlign: 'center' }}
                    >
                        <a
                            title={item.name}
                            draggable
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            onDragStart={(ev) => onDrag(ev, item)}
                        >
                            <img
                                alt={item.name}
                                src={item.url}
                                style={{ width: 60, height: 60 }}
                            />
                            <span
                                style={{
                                    marginTop: 5,
                                    overflow: 'hidden',
                                    display: 'block',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color:"#333"
                                }}
                            >
                    {item.name}
                  </span>
                        </a>
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    )
}

export default IndustryList;
