/**
 * 用户侧：数据点管理 > 列表
 */
import React, { Component } from 'react'
import { ComplexTable } from 'bici-transformers'
import { DATAPOINT_STATUS, DATA_ORIGIN } from '../common/userSide'
import _ from 'lodash'
import {fetchSearchDataPointManageList} from '../data/api'




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
    pageSize: 10,
    total:0,
  },
}

export default class DataPointTable extends Component<any,any> {
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
    // if (this.props.isOnlyNumber) {
    //   params.dataTypeList = [1]
    // }
    // 根据node返回的type决定查询的数据类型
    if(this.props.node.name=="echarts"||this.props.node.name=="biciMeasure"){
      params.dataTypeList = [1]
    }else{
      const nodeType = this.props.node.name;
      switch (nodeType) {
        case 'biciPilot': // 指示灯
          params.dataTypeList = [1,2]
          break;
        case 'biciCard':
          params.dataTypeList = [1];
          break
        default:
      }
    }
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
    fetchSearchDataPointManageList(params).then((res) => {
      if(res["data"].data){
        const {list,total}=res["data"].data
        this.setState({ dataList: list, total })
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
      title: '数据编号',
      dataIndex: 'dataCode',
      width: 'nm',
      filterType: 'search',
      handleSubmitSearch: (val) => this.handleSearch('dataCode', val),
    },
    {
      title: '数据名称',
      dataIndex: 'dataName',
      width: 'nm',
      filterType: 'search',
      handleSubmitSearch: (val) => this.handleSearch('dataName', val),
    },
    {
      title: '采集间隔(s)',
      dataIndex: 'intervalTime',
      width: 'nm',
    },
    {
      title: '单位',
      dataIndex: 'unit',
      width: 'sm',
      checkDefault: false,
    },
    {
      title: '位置',
      dataIndex: 'position',
      width: 'lg',
      filterType: 'search',
      handleSubmitSearch: (val) => this.handleSearch('position', val),
    },
    {
      title: '范围上下限',
      width: 'nm',
      render: (record) => {
        const { scopeMin = '', scopeMax = '' } = record
        const scope = `${scopeMin} ~ ${scopeMax}`
        const scopeText = <div style={{ width: ComplexTable.columnWidth.nm - 16 }}>{scope}</div>
        return _.isNumber(scopeMin) || _.isNumber(scopeMax) ? scopeText : ''
      },
    },
    {
      title: '数据来源',
      dataIndex: 'channelList',
      width: 'nm',
      filters: DATA_ORIGIN,
      filterMultiple: true,
      render: (text, record) => {
        const channel = DATA_ORIGIN.filter((v) => v.value === record.channel)[0] || {}
        const { text: channelText } = channel as any
        return <div style={{ width: ComplexTable.columnWidth.nm - 16 }}>{channelText}</div>
      },
    },
    {
      title: '来源编号或名称',
      dataIndex: 'associationObject',
      width: 'nm',
      filterType: 'search',
      handleSubmitSearch: (val) => this.handleSearch('associationObject', val),
    },
    {
      title: '标签',
      dataIndex: 'tagName',
      filterType: 'search',
      handleSubmitSearch: (val) => this.handleSearch('tagName', val),
    },
    {
      title: '状态',
      dataIndex: 'statusList',
      width: 120,
      filters: DATAPOINT_STATUS,
      filterMultiple: true,
      checkDisabled: true,
      fixed: 'right',
      render: (text, record) => {
        const { status } = record
        const { text: statusText } = DATAPOINT_STATUS.filter((v) => v.value === status)[0] || {}
        const className = status === 1 ? 'green6' : 'black85'
        return (
          <div style={{width:100}} className={className}>
            {statusText}
          </div>
        )
      },
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
    const { disableDataId, selectedRowKeys, mode, source, selectedRows } = this.props
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
