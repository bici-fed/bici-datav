import React, { useMemo, useEffect, useState } from 'react';
import {
  Form,
  Tabs,
  Row,
  Col,
  Input,
  Collapse,
  Button,
  Popover,
  Upload,
  Checkbox,
  message,
  InputNumber,
} from 'antd';
import { DownOutlined, UploadOutlined } from '@ant-design/icons';
import { Topology } from '@bici-datav/core';
import ColorPicker from '../../../common/ColorPicker/ColorPicker';
import ReactSwitch from '../../../common/ReactSwitch';
import { canvas } from '../../index';
import { FormProps } from 'antd/lib/form/Form';
import CustomIcon from '../../../config/iconConfig';
import { dynamicWebSocketData } from '../../../common/DynamicWebSocketData';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { calcCanvas } from '../../../utils/cacl';
import * as _ from 'lodash';
import {_emitter} from '../../../common/WebPage'

const { Panel } = Collapse;
const panelSizeObj = {
  '16:9': ['1920*1080', '1680*1050', '1600*900', '1366*768'],
  '4:3': ['1024*768', '800*600'],
  '2:3': ['1280*1920', '768*1024', '640*960', '600*800'],
};

interface ICanvasProps extends FormProps {
  data?: Topology;
  baseUrl?: string;
  onFormValueChange?: any;
  onEventValueChange?: any;
  websocketConf?: any;
  preInstallBgImages?: any;
  svgRef?: any;
  canvasRef?: any;
  onChangeCanvasSize?: (sizeInfo: any) => void;
  onChangeBkImage?: (imageUrl: string) => void;
  isSave?: boolean;
  setIsSave?: (value: boolean) => void;
  uploadConfig?:any;
}
const BackgroundCanvasProps: React.FC<ICanvasProps> = ({
  data,
  baseUrl,
  onChangeCanvasSize,
  onChangeBkImage,
  websocketConf,
  uploadConfig,
  ...props
}) => {
  const [form] = Form.useForm();
  const [rcSwitchState, setRcSwitchState] = useState(
    data.canvas.width <= data.canvas.height
  ); // 页面布局切换
  const [bkUrl, setBkUrl] = useState(''); // 保存背景图片url地址
  // 控制Popover的显示隐藏
  const [popoverVisible, setPopoverVisible] = useState({
    resolution: false, // 分辨率
    bgSelect: false, // 预设背景选择
  });
  const [wsAddress, setWsAddress] = useState(websocketConf.url);

  const [preBgImageName,setPreBgImageName]=useState("预设背景")



  useEffect(() => {
    // 回显数值
    const w = data.canvas.width;
    const h = data.canvas.height;
    const bgColor = data.data.bkColor;
    // const bkImage = data.data.bkImage;
    let isUploadBgImg = false;
    if (data.data.bkImage) {
      isUploadBgImg = !props.preInstallBgImages
        .map((item) => item.img)
        .includes(data.data.bkImage);
      const index = _.findIndex(props.preInstallBgImages,(item:any)=>item.img==data.data.bkImage);
      console.log("index==",index,props.preInstallBgImages,data.data.bkImage)
      if(index>=0){
        setPreBgImageName("预设背景"+(index+1));
        form.setFieldsValue({
          bgVal:"预设背景"+(index+1)
        })
      }
    }
    const sizeValText = Object.values(panelSizeObj).flat().includes(`${w}*${h}`)
      ? `预设·${w}*${h}`
      : Object.values(panelSizeObj).flat().includes(`${h}*${w}`)
      ? `预设·${h}*${w}`
      : `自定义`;
    form.setFieldsValue({
      sizeVal: sizeValText,
      w,
      h,
      bgColor,
      bgColorCheck: !!bgColor,
      bgImgCheck: isUploadBgImg,
      gridCheck: data.data.grid ? data.data.grid : false,
      gridSize: data.data.gridSize,
      gridColor: data.data.gridColor,
    });
  }, [form]);

  /**
   * 渲染位置和大小的表单
   */
  const handleFormValueChange = (changeValues) => {
    if (changeValues.bgColor) {
      data.data['bkColor'] = changeValues.bgColor;
      data.render();
      form.setFieldsValue({ bgColorCheck: true });
    }
    if (changeValues.gridSize) {
      const gridSize = parseInt(changeValues.gridSize);
      data.data['gridSize'] = gridSize;
      if (data.data.grid) {
        canvas.render();
      }
    } else if (changeValues.gridColor) {
      data.data['gridColor'] = changeValues.gridColor;
      if (data.data.grid) {
        canvas.render();
      }
    }
    props.setIsSave(false);
  };

  // 背景图片checkbox切换
  const handleBgImgChange = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      selectedBgImg(bkUrl);
    } else {
      canvas.clearBkImg();
      delete data.data['bkImage'];
      canvas.render();
      onChangeBkImage && onChangeBkImage('');
      props.setIsSave(false);
    }
  };

  const beforeUpload = (file) => {
    const isLt1M = file.size / 1024 / 1024/1024 < 10;
    if (!isLt1M) {
      message.error('上传图片不可大于10M');
    }
    return isLt1M;
  };

  // 画布背景图片上传
  const bgUploadChange = ({ file }) => {
    if (file.status === 'done') {
      const url = file.response.data[0];
      selectedBgImg(url);
      setBkUrl(url);
      form.setFieldsValue({ bgImgCheck: true });
    }
  };

  // 设置背景图片
  const selectedBgImg = (url: string,item=undefined) => {
    if (data.data['bkImage'] && data.data['bkImage'] === url) {
      // 再次点击，取消图片
      canvas.clearBkImg();
      data.data['bkImage'] = undefined;
      onChangeBkImage && onChangeBkImage('预设背景');
      setPreBgImageName("预设背景")
      form.setFieldsValue({
        bgVal:"预设背景"
      })
    } else {
      // 修改背景图片前，需要先canvas.clearBkImg清空旧图片
      canvas.clearBkImg();
      data.data['bkImage'] = url;
      onChangeBkImage && onChangeBkImage(url);
      if(item){
        setPreBgImageName("预设背景"+item.key)
        form.setFieldsValue({
          bgVal:"预设背景"+item.key
        })
      }else{
        setPreBgImageName("预设背景")
        form.setFieldsValue({
          bgVal:"预设背景"
        })
      }
    }
    setPopoverVisible({ ...popoverVisible, bgSelect: false });
    canvas.render();
    props.setIsSave(false);
  };

  // 背景颜色显示隐藏
  const bkColorCheckChange = (e: CheckboxChangeEvent) => {
    const result = e.target.checked ? form.getFieldValue('bgColor') : '#ccc';
    data.data['bkColor'] = result;
    if (!e.target.checked) {
      delete data.data['bkColor'];
    }
    canvas.render();
    props.setIsSave(false);
  };

  // 网格选择切换
  const gridOnChange = (e: CheckboxChangeEvent) => {
    // canvas.showGrid(e.target.checked);
    data.data.grid = e.target.checked;
    data.data.gridSize = form.getFieldValue('gridSize');
    canvas.render();
    props.setIsSave(false);
  };

  // 设置宽高
  const panelSizeChange = () => {
    const { w, h } = form.getFieldsValue(['w', 'h']);
    const width = parseInt(w);
    const height = parseInt(h);
    const r = calcCanvas(width, height);
    data.resize({ width, height });
    canvas.render();
    onChangeCanvasSize && onChangeCanvasSize({ ...r, width, height });
    form.setFieldsValue({ sizeVal: `自定义` });
  };

  // 画布布局切换
  const handleRCSwitchStateChange = () => {
    setRcSwitchState(!rcSwitchState);
    // 宽高互换
    const width = data.canvas.height;
    const height = data.canvas.width;
    const r = calcCanvas(width, height);
    data.resize({ width, height });
    canvas.render();
    onChangeCanvasSize && onChangeCanvasSize({ ...r, width, height });
    form.setFieldsValue({
      w: width,
      h: height,
    });
  };

  // 选择画布大小后重新渲染画布
  const selectedResolution = (size: string) => {
    const width = +size.split('*')[0];
    const height = +size.split('*')[1];
    form.setFieldsValue({
      w: width,
      h: height,
      sizeVal: `预设·${width}*${height}`,
    });
    setRcSwitchState(!(width > height));
    // 隐藏Popover
    setPopoverVisible({ ...popoverVisible, resolution: false });
    const r = calcCanvas(width, height);
    canvas.resize({ width, height });
    onChangeCanvasSize && onChangeCanvasSize({ ...r, width, height });
  };

  // 分辨率Popover
  const resolutionContent = useMemo(() => {
    return (
      <div>
        {Object.keys(panelSizeObj).map((key: string, index: number) => {
          return (
            <div key={index}>
              <h3>{key}</h3>
              <Row gutter={[0, 16]}>
                {panelSizeObj[key].map((val: string, index: number) => {
                  return (
                    <Col span={12} key={index}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          selectedResolution(val);
                        }}
                      >
                        {val}
                      </a>
                    </Col>
                  );
                })}
              </Row>
            </div>
          );
        })}
      </div>
    );
  }, [panelSizeObj]);
  const bgSeletedContent = (
    <div>
      <h3>预设图片</h3>
      <div style={{maxHeight: 500,overflowY:'scroll'}}>
        {(props.preInstallBgImages || []).map((item) => {
          return (
              <Row
                  key={item.key}
                  style={{
                    position: 'relative',
                    cursor: 'pointer',
                    border: '1px solid #096DD9',
                    boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.06)',
                  }}
                  onClick={() => selectedBgImg(item.img,item)}
              >
                <img
                    src={item.img}
                    alt={`预设背景${item}`}
                    width={260}
                    height={120}
                />
                <Checkbox
                    style={{ position: 'absolute', top: 0, right: '5px' }}
                    checked={item.img === data.data.bkImage}
                />
              </Row>
          );
        })}
      </div>
    </div>
  );

  const renderDefultOptions = (
    <Collapse defaultActiveKey={['1','2','3']}
              expandIconPosition="right"
              ghost={false} bordered={false}
    >
      <Panel header="基础属性" key="1">
        <Form form={form}>
          <Popover
            placement="bottom"
            trigger="click"
            transitionName=""
            content={resolutionContent}
            visible={popoverVisible.resolution}
            onVisibleChange={(visible) =>
              setPopoverVisible({ ...popoverVisible, resolution: visible })
            }
            getPopupContainer={() => document.querySelector('#editLayout')}
          >
            <Form.Item name="sizeVal" initialValue="自定义">
              <Input suffix={<DownOutlined />} readOnly />
            </Form.Item>
          </Popover>

          <Row style={{ marginTop: 15 }} gutter={[9, 0]} align="middle">
            <Col span={9}>
              <Form.Item name="w">
                <Input suffix="W" onChange={panelSizeChange} />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item name="h">
                <Input suffix="H" onChange={panelSizeChange} />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item>
                <ReactSwitch
                  onChange={handleRCSwitchStateChange}
                  checked={rcSwitchState}
                  offHandleColor="#096DD9"
                  onHandleColor="#096DD9"
                  offColor="#ccc"
                  onColor="#ccc"
                  uncheckedIcon={
                    <CustomIcon style={{ lineHeight: 2.2 }} type="iconshu" />
                  }
                  checkedIcon={
                    <CustomIcon style={{ lineHeight: 2.2 }} type="iconheng" />
                  }
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Panel>
      <Panel header="背景" key="2">
        <Form form={form} onValuesChange={handleFormValueChange}>
          <Popover
            placement="bottom"
            trigger="click"
            transitionName=""
            content={bgSeletedContent}
            arrowPointAtCenter
            autoAdjustOverflow={false}
            visible={popoverVisible.bgSelect}
            onVisibleChange={(visible) =>
              setPopoverVisible({ ...popoverVisible, bgSelect: visible })
            }
            getPopupContainer={() => document.querySelector('#editLayout')}
          >
            <Form.Item name="bgVal" initialValue={preBgImageName}>
              <Input readOnly suffix={<DownOutlined />} />
            </Form.Item>
          </Popover>

          <Row style={{ marginTop: 15 }} align="middle">
            <Col push={1}>
              <Form.Item
                name="bgColorCheck"
                label="背景颜色"
                valuePropName="checked"
              >
                <Checkbox onChange={bkColorCheckChange} />
              </Form.Item>
            </Col>
            <Col push={2}>
              <Form.Item name="bgColor">
                <ColorPicker />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col push={1}>
              <Form.Item
                name="bgImgCheck"
                label="背景图片"
                valuePropName="checked"
              >
                <Checkbox onChange={handleBgImgChange} />
              </Form.Item>
            </Col>
            <Col push={2}>
              <Form.Item>
                <Upload
                  action={`${uploadConfig.preInstall.baseURL}/${uploadConfig.preInstall.url}`}
                  accept="image/*"
                  data={uploadConfig.preInstall.data}
                  headers={{
                    token: uploadConfig.preInstall.token,
                  }}
                  showUploadList={false}
                  beforeUpload={beforeUpload}
                  onChange={bgUploadChange}
                >
                  <Button icon={<UploadOutlined />}>上传</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Panel>
      <Panel header="网格" key="3">
        <Form form={form} onValuesChange={handleFormValueChange}>
          <Row align="middle">
            <Col push={1}>
              <Form.Item name="gridCheck" label="网格" valuePropName="checked">
                <Checkbox onChange={gridOnChange} />
              </Form.Item>
            </Col>
            <Col push={2}>
              <Form.Item name="gridColor">
                <ColorPicker />
              </Form.Item>
            </Col>
            <Col push={3} span={8}>
              <Form.Item name="gridSize" initialValue={30}>
                <InputNumber min={1} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Panel>
    </Collapse>
  );

  /**
   * 发起websocket连接
   */

  const onHandleConnectWS = () => {
    canvas.openSocket(wsAddress);
    // 将绑定获得wenbsocket数据
    dynamicWebSocketData();

    // const index = new WebSocket(wsAddress);
    // //打开事件
    // index.onopen = function() {
    //
    //   index.send(JSON.stringify({
    //     qtDataList: [{id: "6413f3a606754c31987ec584ed56d5b7", type: 2},{id: "b32723eaebfe48aaa0f85970c3a39036", type: 2}],
    //     subscribe: true
    //   }));
    // };
    // //获得消息事件
    // index.onmessage = function(msg) {
    //   //发现消息进入    开始处理前端触发逻辑
    // };
    // //关闭事件
    // index.onclose = function() {
    // };
    // //发生了错误事件
    // index.onerror = function() {
    //   alert("Socket发生了错误");
    //   //此时可以尝试刷新页面
    // }
  };

  return (
    <div>
      {/*<Tabs defaultActiveKey="1" tabBarStyle={{ padding: '0 20px' }}>*/}
      {/*  <TabPane tab="图文设置" key="1">*/}
      {/*    {renderDefultOptions}*/}
      {/*     <ul className={styles.bottomTip}>*/}
      {/*      <li>← ↑ → ↓ ：移动5个像素</li>*/}
      {/*      <li>Ctrl + 鼠标点击：多选</li>*/}
      {/*      <li>Ctrl + 鼠标滚轮：缩放画布</li>*/}
      {/*      <li>Ctrl + ← ↑ → ↓ ：移动1个像素</li>*/}
      {/*      <li>Ctrl + 鼠标拖拽空白：移动整个画布</li>*/}
      {/*      <li>Shift/Alt + 鼠标拖拽节点：独立拖拽（子）节点</li>*/}
      {/*    </ul> */}
      {/*  </TabPane>*/}
      {/*  <TabPane tab="消息通信" key="2" style={{ margin: 0 }}>*/}
      {/*    <Collapse defaultActiveKey={['1']}>*/}
      {/*      <Panel header="websocket地址" key="1">*/}
      {/*        <TextArea*/}
      {/*          placeholder="请输入websocket地址"*/}
      {/*          value={wsAddress}*/}
      {/*          onChange={(e) => setWsAddress(e.target.value)}*/}
      {/*        />*/}
      {/*        <Button*/}
      {/*          type="primary"*/}
      {/*          style={{ width: 265, marginTop: 10 }}*/}
      {/*          onClick={() => onHandleConnectWS()}*/}
      {/*        >*/}
      {/*          测试连接*/}
      {/*        </Button>*/}
      {/*      </Panel>*/}
      {/*    </Collapse>*/}
      {/*  </TabPane>*/}
      {/*</Tabs>*/}
      {renderDefultOptions}
    </div>
  );
};

export default BackgroundCanvasProps;
