/**
 * 用户侧：复杂感知点 > 列表
 */
import React, { PureComponent } from 'react'
import { ComplexTable } from 'bici-transformers'
import _ from 'lodash'
import {fetchPerceptualPointList} from '../data/api'

// 传感器状态
export const DEVICE_STATUS = [
  {
    value: 1,
    text: '正常',
  },
  {
    value: 2,
    text: '超过上限',
  },
  {
    value: 3,
    text: '低于下限',
  },
  {
    value: -1,
    text: '无数据',
  },
]

const initialQueryParams = {
  calculationCode: '',
  dataName: '',
  position: '',
  tagName: '',
  statusList: [],
  sorter: {
    field: '',
    order: '' // ascend, descend
  },
  pagination: {
    current: 1,
    pageSize: 10,
    total:0
  },
}
interface ComplexDataPointProps{
  selectedRowKeys?:any[];
  mode?:any;
  disableDataId?:any;
  source?:any;
  selectedRows?:any[];
}
export default class ComplexDataPoint extends PureComponent<any,any> {
  state = {
    dataList: [],
    sorterList:[],
    total: 0,
    selectedRowKeys: [],
    selectedRows: [],
    doubleArr: [],//双数组
    ...initialQueryParams,
  }

  componentDidMount () {
    this.requestList()
  }

  getColumns = () => {
    return [
      {
        title: '计算编号',
        dataIndex: 'calculationCode',
        width: 'lg',
        filterType: 'search',
        handleSubmitSearch: (val) => this.handleSearch('calculationCode', val)
      },
      {
        title: '数据名称',
        dataIndex: 'dataName',
        width: 'hg',
        filterType: 'search',
        handleSubmitSearch: (val) => this.handleSearch('dataName', val)
      },
      {
        title: '计算周期(s)',
        dataIndex: 'calculationCycle',
        width: 'sm',
      },
      {
        title: '位置',
        dataIndex: 'position',
        width: 'lg',
        filterType: 'search',
        handleSubmitSearch: (val) => this.handleSearch('position', val)
      },
      {
        title: '范围上下限',
        width: 'lg',
        render: (record) => {
          const {scopeMin = '', scopeMax = ''} = record
          const scope = `${scopeMin} ~ ${scopeMax}`
          const scopeText = <div style={{width: ComplexTable.columnWidth.lg - 16}}>{scope}</div>
          return _.isNumber(scopeMin) || _.isNumber(scopeMax) ? scopeText : ''
        }
      },
      {
        title: '标签',
        dataIndex: 'tagName',
        width: 'lg',
        filterType: 'search',
        handleSubmitSearch: (val) => this.handleSearch('tagName', val)
      },
      {
        title: '状态',
        dataIndex: 'statusList',
        width: 100,
        filters: DEVICE_STATUS,
        filterMultiple: true,
        checkDisabled: true,
        fixed: 'right',
        render: (text, record) => {
          let show
          if (record.status === 1) {
            show = <span className='green6'>正常</span>
          } else if (record.status === 2) {
            show = <span className='red6'>超过上限</span>
          } else if (record.status === 3) {
            show = <span className='red6'>低于下限</span>
          } else if (record.status === -1) {
            show = <span className='black85'>无数据</span>
          }
          return <div style={{width: 80}}>{show}</div>
        }
      },
    ]
  }

  requestList () {
    const {pagination, sorterList, calculationCode, dataName, position, tagName, statusList} = this.state
    let params = {pagination, sorterList, dataTypeList: [1]} as any

    if (calculationCode) { params.calculationCode = calculationCode }
    if (dataName) { params.dataName = dataName }
    if (position) { params.position = position }
    if (tagName) { params.tagName = tagName }
    if (statusList&&statusList.length) { params.statusList = statusList }
    fetchPerceptualPointList(params).then((res) => {
      if(res["data"].data){
        const {list,total}=res["data"].data
        this.setState({ dataList: list, total })
      }
    })
  }

  handleSearch = (key, value) => { // 用户列表模糊查询
    this.setState({pagination: initialQueryParams.pagination, [key]: value}, () => {
      this.requestList()
    })
  }

  handleTableChange = (pagination, filters, sorter) => {
    const {field, order} = sorter
    const resultOrder = order === 'ascend' ? 'asc' : 'desc'
    const sorterList = order ? [{field, order: resultOrder}] : []
    this.setState({pagination, ...filters, sorterList}, () => this.requestList())
  }

  handleFilterTagsChange = (tagsArr) => {
    if (tagsArr === null) {
      this.setState({...initialQueryParams}, () => this.requestList())
    } else {
      let val = tagsArr.val instanceof Array ? [] : ''
      this.setState({[tagsArr.dataIndex]: val}, () => this.requestList())
    }
  }
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
    return res.filter(Boolean)   //去掉undefined的情况
  }

  render () {
    const {dataList, total, pagination} = this.state
    const {selectedRowKeys, mode, disableDataId, source, selectedRows} = this.props
    const rowSelection = {
      type: mode,
      selectedRowKeys,
      getCheckboxProps: (record) => ({disabled: disableDataId.includes(record.id)}),
      onSelect: (record, selected) => this.props.onSelectRow(record, selected, 'id'),
      onSelectAll: (selected, record, changeRows) => this.props.onSelectRow(changeRows, selected, 'id')
    }
    pagination.total = total
    return (<ComplexTable
      rowKey="id"
      minWidth={800}
      dataSource={dataList}
      pagination={pagination}
      columns={this.getColumns()}
      rowSelection={rowSelection}
      onChange={this.handleTableChange}
      onFilterTagsChange={this.handleFilterTagsChange}
    />)
  }
}


