/**
 * 用户侧：数据点管理 > 列表
 */
 import React, { Component } from 'react'
 import { ComplexTable } from 'bici-transformers'
 import { DATAPOINT_STATUS, DATA_ORIGIN } from '../common/userSide'
 import _ from 'lodash'
 import {fetchVedioList} from '../data/api'
 
 
 
 
 const initialQueryParams = {
   dataName: '',
   dataCode: '',
   // dataTypeList: [1],
   position: '',
   associationObject: '', // 来源编号或名称
   channelList: [], // 数据来源
   attentionList: [], // 关注情况
   statusList: [],
   tagName: '',
   sorter: {
     field: '',
     order: '', // ascend, descend
   },
   pagination: {
     current: 1,
     pageSize: 20,
     total:0,
   },
 }
 
 export default class VideoMonitoring extends Component<any,any> {
   associationObject="";
   state = {
     dataList: [],
     total: 0,
     sorterList:[],
     selectedRowKeys: [],
     selectedRows: [],
     doubleArr: [], //双数组
     ...initialQueryParams,
   }
 
   componentDidMount() {
     this.requestList()
   }
 
   // 查询列表
   requestList() {
     const {
       pagination,
       sorterList,
       dataName,
       dataCode,
       position,
       associationObject,
       channelList,
       attentionList,
       tagName,
       statusList,
     } = this.state
     let params = { dataType: 1, pagination, sorterList } as any;
     if (dataName) {
       params.dataName = dataName
     }
     if (dataCode) {
       params.dataCode = dataCode
     }
     if (position) {
       params.position = position
     }
     if (associationObject) {
       params.associationObject = associationObject
     }
     // params.associationObject=this.associationObject;
     if (channelList && channelList.length) {
       params.channelList = channelList
     }
     if (attentionList && attentionList.length) {
       params.attentionList = attentionList
     }
     if (tagName) {
       params.tagName = tagName
     }
     if (statusList && statusList.length) {
       params.statusList = statusList
     }
     // 毒刺,不要csv的数据点
     params.isOtherPointList = [0];
     fetchVedioList({}).then((res) => {
       if(res["data"]){
         const t = (res["data"].data||[]).filter(item=>item.channelId&&item.name);
         this.setState({ dataList: t, total:t.length })
       }
     })
   }
 
   handleSearch = (key, value) => {
     // 用户列表模糊查询
     this.setState({ pagination: initialQueryParams.pagination, [key]: value }, () => {
       this.requestList()
     })
     // this.associationObject=value;
   }
 
   handleTableChange = (pagination, filters, sorter) => {
     const { field, order } = sorter
     const resultOrder = order === 'ascend' ? 'asc' : 'desc'
     const sorterList = order ? [{ field, order: resultOrder }] : []
     Object.keys(filters).forEach(key => (filters[key] == null) && delete filters[key])
     this.setState({ pagination, ...filters, sorterList }, () => this.requestList())
   }
 
   handleFilterTagsChange = (tagsArr) => {
     if (tagsArr === null) {
       this.setState({ ...initialQueryParams }, () => this.requestList())
     } else {
       let val = tagsArr.val instanceof Array ? [] : ''
       this.setState({ [tagsArr.dataIndex]: val }, () => this.requestList())
     }
   }
 
   // 表格列
   columns = () => [
     {
       title: '设备名称',
       dataIndex: 'deviceName',
       width: 'nm',
       filterType: 'search',
       handleSubmitSearch: (val) => this.handleSearch('deviceName', val),
     },
     {
       title: '设备类型',
       dataIndex: 'deviceType',
       width: 'nm',
       filterType: 'search',
       handleSubmitSearch: (val) => this.handleSearch('deviceType', val),
     },
     {
       title: '设备地址',
       dataIndex: 'ip',
       width: 'nm',
     },
     {
       title: '端口号',
       dataIndex: 'port',
       width: 'sm',
       checkDefault: false,
     },
     {
       title: '通道',
       dataIndex: 'name',
       width: 'lg',
       filterType: 'search',
       handleSubmitSearch: (val) => this.handleSearch('name', val),
     },
     {
       title: 'flv',
       dataIndex: 'flv',
       width: 'nm',
     },
   ]
   /**
    * 二维数组扁平化处理
    */
   mapRows = (params) => {
     var res = []
     for (let i = 0; i < params.length; i++) {
       if (Array.isArray(params[i])) {
         res = res.concat(this.mapRows(params[i]))
       } else {
         res.push(params[i])
       }
     }
     return res.filter(Boolean) //去掉undefined的情况
   }
 
   render() {
     const { dataList, total, pagination } = this.state
     const { disableDataId, selectedRowKeys, mode, source, selectedRows } = this.props;
     // 组建pagination
     const rowSelection = {
       type: mode,
       selectedRowKeys,
       getCheckboxProps: (record) => ({ disabled: disableDataId.includes(record.id) }),
       onSelect: (record, selected) => this.props.onSelectRow(record, selected, 'id'),
       onSelectAll: (selected, record, changeRows) => this.props.onSelectRow(changeRows, selected, 'id'),
     }
     pagination.total = total
 
     return (
       <ComplexTable
         rowKey="id"
         minWidth={800}
         scroll={{ x: 800 }}
         dataSource={dataList}
         pagination={pagination}
         columns={this.columns()}
         rowSelection={rowSelection}
         onChange={this.handleTableChange}
         onFilterTagsChange={this.handleFilterTagsChange}
       />
     )
   }
 }
 