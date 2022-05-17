import React, {useCallback, useEffect, useRef, useState} from 'react';

import { EditorLayout, Preview } from '@bici-topology/editor';
import axios from 'axios';
import { Route, BrowserRouter } from 'react-router-dom';
import { Modal } from 'antd';
import preBgImg1 from './bg01.jpg';
import preBgImg2 from './bg02.jpg';
import preBgImg3 from './bg03.jpg';
import preBgImg4 from './bg04.svg';
import 'antd/dist/antd.css'
import DataBindModal from "./FilterDataPoint";
import {industry_List} from "./common/config";
import VideoMonitoringModal from './VideoMonitoring'
// import 'antd/dist/antd.less';


const { confirm } = Modal;
const token = 'BrCIkjCueMO8bOtemZWDM';

const testId = '3169f6dae49e4490bf7decab5c76eb8c';

const apiURL = 'http://zhsd.dev.bicisims.com:31892';


const EditorLayoutCanvas: React.FC<any> = ({ ...props }) => {
  const history = props.history;
  const [editorData, setEditorData] = useState(undefined);
  const [extraVisible, setExtraVisible] = useState(false);

  const [dataPointVisible,setDataPointVisible]=useState(false)
  const [vedioVisible,setVedioVisible]=useState(false);
  const [node,setNode]=useState(null)
  const [disableSource,setDisableSource]=useState([])
  const [selectedRowKeys,setSelectedRowKeys]=useState([])
  const [selectedRowKeysVedio,setSelectedRowKeysVedio]=useState([])
  const [dataPointPropsMap,setDataPointPropsMap]=useState({
    id:"id",
    type:"dataType",
    dataName:"dataName",
    intervalTime:"intervalTime",
    scopeMin:"scopeMin",
    scopeMax:"scopeMax",
  })
  const preInstallBgImages = [
    { key: 1, img: preBgImg1 },
    { key: 2, img: preBgImg2 },
    { key: 3, img: preBgImg3 },
    // { key: 4, img: preBgImg4 },
  ];
  const industrialLibrary = [
    {
      name: '灯光',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      name: '测试1',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      name: '测试2',
      url:
        'https://bici-qt.oss-cn-hangzhou.aliyuncs.com/ooip6ffe388d487db754b885b8aa65b9/自定义组件/2020/12/27d978a2e1c24faf9c14e02d8ca4283b测图片.png',
    },
    {
      name: 'svg',
      url: preBgImg4,
    },
  ];
  const selfIndustrialLibrary = [
    {
      name: '9',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      width: 100,
      height: 100,
      type: 'image',
      key: '8',
    },
    {
      name: '10',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      width: 100,
      height: 100,
      type: 'image',
      key: '9',
    },
  ];
  const uploadConfig = {
    baseURL: apiURL,
    self: {
      baseURL: apiURL,
      token: token,
      url: '/file/file/uploadReturnPath',
      apiUrl: {
        list: '/applications/service/remote/custom/component/componentList',
        delete: '/file/file/deleteDbData',
        update: '/file/file/updateFile',
      },
      data: {
        mappingId: 'ooip6ffe388d487db754b885b8aa65b9',
        mappingType: '106',
      },
    },
    preInstall: {
      baseURL: apiURL,
      token: token,
      url: '/file/file/uploadReturnPath',
      data: {
        mappingId: 'ooip6ffe388d487db754b885b8aa65b9',
        mappingType: '107',
      },
    },
    combineCom: {
      apiURL: apiURL,
      token: token,
      list: {
        url: '/applications/service/remote/customComponent/list',
        params: {},
      },
      add: {
        url: '/applications/service/remote/customComponent/save',
        params: {},
      },
      delete: {
        url: '/applications/service/remote/customComponent/delete',
        params: {},
      },
      rename: {
        url: '/applications/service/remote/customComponent/update',
        params: {},
      },
    },
    industry:{
      baseURL: apiURL,
      mappingId: 'ooip6ffe388d487db754b885b8aa65b9',
      token: token,
      list:{
        url:"/applications/service/remote/custom/component/industryList"
      },
      projectIndustryCats:[]
    }
  };

  const toolsConfig = [
    'rectangle',
    'circle',
    'text',
    'biciTimer',
    'biciVarer',
    'biciPilot',
    'biciText',
    'biciCard',
    // 'biciCard2',
    'line',
    // 'webPage',
    'dataTable',
    'liveVideo',
    // 'video',
    'groupBar',
    'verticalBar',
    'stackBar',
    'horizontalBar',
    'circleAndPie',
    'gauge',
    'biciMeasure',
    'timeLine',
  ]

  const websocketConf = {
    url: 'ws://47.96.159.115:51060/ws?token=' + token,
    video:{
      updateStream:'http://192.168.1.105:8000/surveillance/channel/updateStream',
      rePushStream:'http://192.168.1.105:8000/surveillance/channel/rePushStream',
      pushStream:  'http://192.168.1.69:50010/applications/service/remote/customComponent/pushStream',
    },
    toolsConfig,
  };
  useEffect(() => {
    // 获取数据
    const formData = new FormData();
    formData.append('mappingId', '23233');
    formData.append('mappingType', '107');
    const instance = axios.create({
      baseURL: apiURL,
      timeout: 10000000,
      maxContentLength: 1000000000,
    });
    // 获取面板数据
    // 获取面板数据
    instance
      .get('/applications/service/remote/newBoard/detail', {
        method: 'get',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          token: token,
          'Content-Type': 'application/json',
        },
        params: {
          id: testId,
        },
      })
      .then((res) => {
        if (res.data?.data != null) {
          if (
            res.data.data.property != null &&
            res.data.data.property != null
          ) {
            // const getEditorData = JSON.parse(
            //   decodeURIComponent(escape(window.atob(res.data.data.property)))
            // );
            const getEditorData = JSON.parse(res.data.data.property);
            setEditorData(getEditorData);
          }
        }
      });
    // 获取获取当前租户下 上传的背景图片
    // instance
    //   .post(
    //     '/applications/service/remote/custom/component/componentList',
    //     { mappingType: '107' },
    //     {
    //       method: 'post',
    //       headers: {
    //         token: 'development_of_special_token_by_star_quest',
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   )
    //   .then((res) => {
    //   });
    // 获取获取当前租户下 指定自定义组件图片列表
    instance
      .post(
        '/applications/service/remote/custom/component/industryList',
        { mappingType: '121' },
        {
          method: 'post',
          headers: {
            token: token,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res)
        // (res.data.data || []).map((image: any) => {
        //   const newImg = {
        //     ...image,
        //     name: image.name.replace(/\.(jpg|png)$/g, ''),
        //     width: 100,
        //     height: 100,
        //     type: 'image',
        //     key: image.id,
        //   };
        //
        //   selfIndustrialLibrary.push(newImg);
        //   return null;
        // });
      });
  }, []);
  // 保存数据到数据库
  const handleSaveEditorData = (data: any) => {
    const api = axios.create({
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    const formData = new FormData();
    api.defaults.headers.common['token'] = token;
    formData.append('file', data.screenshot);
    formData.append('mappingId', 'ooip6ffe388d487db754b885b8aa65b9');

    formData.append('mappingType', '107');
    api.post(
      `${apiURL}/file/file/uploadReturnPath`,
      formData
    );

    const instance = axios.create({
      baseURL: apiURL,
      timeout: 10000000,
      maxContentLength: 1000000000,
    });
    delete data.screenshot;
    instance
      .request({
        url: '/applications/service/remote/newBoard/updateProperty',
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          token: token,
          'Content-Type': 'application/json;charset=UTF-8',
        },
        data: {
          id: testId,
          // property: window.btoa(
          //   unescape(encodeURIComponent(JSON.stringify(data)))
          // )
          property: JSON.stringify(data),
        },
      })
      .then((res) => {
        console.log('update==', res);
      });
  };
  // 自定义预览，多数为打开一个新页面，路由，内置的预览是弹窗
  // const handlePreview = ()=>{
  //
  // }

  //
  const handleExtraOk = () => {
    setExtraVisible(false);
  };
  const handleExtraCancel = () => {
    setExtraVisible(false);
  };

  // 点击额外配置按钮的回调
  const handleExtraSetting = () => {
    setExtraVisible(true);
  };
  const ExtraModel = () => {
    return (
      <Modal
        title="额外配置"
        className="extra-modal"
        visible={extraVisible}
        onOk={handleExtraOk}
        onCancel={handleExtraCancel}
        okText="确认"
        cancelText="取消"
      >
        <div>这是额外配置</div>
      </Modal>
    );
  };
  const editorRef = useRef();
  const handlePoweroff = () => {
    // @ts-ignore
    const isSave = editorRef?.current.getIsSave();
    if (!isSave) {
      showConfirm();
    }
  };
  function showConfirm() {
    confirm({
      title: '退出页面提示！',
      content: '画布已经修改未保存，是否离开？',
      okText: '保存并退出',
      cancelText: ' 取消',
      onOk() {
        console.log('OK');
        // @ts-ignore
        editorRef?.current.handleSaveData();
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

/****添加数据点*******/
  const addDataPoint=()=>{
    setDataPointVisible(!dataPointVisible)
  }
  const onDataPointBind=(selectedRowKeys, selectedRows)=>{
    // @ts-ignore
    editorRef?.current.handleDataPointBind(selectedRowKeys, selectedRows);
  }
  const handleTabChange=(activeKey)=>{
    console.log("activeKey==",activeKey);
    if(activeKey=="dataPoint"){
      const t={
        id:"id",
        type:"dataType",
        dataName:"dataName",
        intervalTime:"intervalTime",
        scopeMin:"scopeMin",
        scopeMax:"scopeMax",
      };
      setDataPointPropsMap(t)
    }else if(activeKey=="complex"){
      const t={
        id:"id",
        type:"type",
        dataName:"dataName",
        intervalTime:"intervalTime",
        scopeMin:"scopeMin",
        scopeMax:"scopeMax",
      };
      setDataPointPropsMap(t)
    }else if(activeKey=="react"){
      const t={
        id:"id",
        type:"type",
        dataName:"source",
        intervalTime:"period",
        scopeMin:"scopeMin",
        scopeMax:"scopeMax",
      };
      setDataPointPropsMap(t)
    }
  }


  const renderDataPointModal = useCallback(() => {
    return (
        <DataBindModal
            visible={true}
            disableSource={disableSource}
            selectedRows={node?.property?.dataPointSelectedRows}
            onCancel={addDataPoint}
            onGetSelectRow={onDataPointBind}
            selectedRowKeys={selectedRowKeys}
            node={node}
            mode={
              node.property.echartsType == 'timeLine'||
              node.property.echartsType == 'horizontalBar'||
              node.property.echartsType == 'circleAndPie'||
              node.property.echartsType == 'verticalBar'||
              node.name=='dataTable' ? 'checkbox' : 'radio'
            }
            onTabChange={handleTabChange}
        ></DataBindModal>
    );
  }, [addDataPoint, disableSource, node, selectedRowKeys]);
  // 点击添加数据点按钮的处理方法
  const handleAddDataPoint=(node:any,disableSource:string[],selectedRowKeys:string[])=>{
    setNode(node);
    setDisableSource(disableSource)
    setSelectedRowKeys(selectedRowKeys)
    setDataPointVisible(true)
  }
  /****添加数据点*******/
  /******************添加视频源********** */
  const onCancelVedioModal=()=>{
    setVedioVisible(!vedioVisible)
  }
  const onVedioBind=(selectedRowKeys, selectedRows)=>{
    // @ts-ignore
    editorRef?.current.handleVedioBind(selectedRowKeys, selectedRows);
  }
  const renderVedioModal=useCallback(()=>{
    return (
      <VideoMonitoringModal node={node} mode="radio"  visible={true}
      disableSource={disableSource}
      selectedRows={node?.property?.dataPointSelectedRows}
      onCancel={onCancelVedioModal}
      onGetSelectRow={onVedioBind}
      selectedRowKeys={selectedRowKeysVedio}/>
    )
  },[disableSource, node, onCancelVedioModal, selectedRowKeysVedio]);

  const handleAddVedioSource=(node:any,disableSource:string[],selectedRowKeys:string[])=>{
    console.log("--handleAddVedioSource---");
    console.log(node)
    setNode(node);
    setVedioVisible(true);
    setSelectedRowKeysVedio(selectedRowKeys);
  }

  return (
    <div>
      <ExtraModel />
      {dataPointVisible && renderDataPointModal()}
      {vedioVisible && renderVedioModal()}
      <EditorLayout
        history={history}
        ref={editorRef}
        onEditorSaveCb={handleSaveEditorData}
        editorData={editorData}
        onExtraSetting={handleExtraSetting}
        selfIndustrialLibrary={selfIndustrialLibrary}
        industrialLibrary={industrialLibrary}
        uploadConfig={uploadConfig}
        onPoweroff={handlePoweroff}
        preInstallBgImages={preInstallBgImages}
        autoSaveInterval={30}
        websocketConf={websocketConf}
        apiURL={apiURL}
        token={token}
        onAddDataPoint={handleAddDataPoint}
        onAddVedioSource={handleAddVedioSource}
        dataPointPropsMap={dataPointPropsMap}
          // onPreview={handlePreview}
      />
    </div>
  );
};

const PreviewLayout: React.FC<any> = ({ history }) => {
  const [editorData, setEditorData] = useState<any>();
  const websocketConf = {
    url: 'ws://47.96.159.115:51060/ws?token=' + token,
    video:{
      updateStream:'http://192.168.1.105:8000/surveillance/channel/updateStream',
      rePushStream:'http://192.168.1.105:8000/surveillance/channel/rePushStream',
    },
  };
  useEffect(() => {
    const instance = axios.create({
      baseURL: apiURL,
      timeout: 10000000,
      maxContentLength: 1000000000,
    });
    // 获取面板数据
    instance
      .get('/applications/service/remote/newBoard/detail', {
        method: 'get',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          token: token,
          'Content-Type': 'application/json',
        },
        params: {
          id: testId,
        },
      })
      .then((res) => {
        console.log('detail', res);
        if (res.data?.data != null) {
          if (
            res.data.data.property != null &&
            res.data.data.property != null
          ) {
            // const getEditorData = JSON.parse(
            //   decodeURIComponent(escape(window.atob(res.data.data.property)))
            // );
            const getEditorData = JSON.parse(res.data.data.property);
            setEditorData(getEditorData);
          }
        }
      });
  }, []);
  return (
    <Preview
      history={history}
      data={editorData}
      websocketConf={websocketConf}
    ></Preview>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={EditorLayoutCanvas} key={1} />
      <Route path="/preview" component={PreviewLayout} key={2} />
    </BrowserRouter>
  );
};

export default App;
