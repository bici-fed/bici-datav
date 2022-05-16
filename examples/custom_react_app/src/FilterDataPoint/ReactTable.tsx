/**
 * 用户侧：数字机理 > 列表
 */
import React, { Component } from 'react'
import { ComplexTable } from 'bici-transformers'
import { fetchSearchReactStackList } from '../data/api'


const initialQueryParams = {
  code: '',
  position: '',
  name: '',
  period: '',
  source: '',
  statusList: [],
  pagination: {
    current: 1,
    pageSize: 10,
    total:0
  },
  sorter: {
    field: '',
    order: '' // ascend, descend
  }
}

export default class ReactTable extends Component<any,any> {
  state = {
    dataList: [],
    total: 0,
    sorterList:[],
    selectedRowKeys: [],
    selectedRows: [],
    ...initialQueryParams
  }

  componentDidMount () {
    this.requestList()
  }

  requestList () {
    const {pagination, sorterList, code, name, position, period, source, statusList} = this.state
    let params = {pagination, sorterList, dataTypeList: [1]} as any

    if (code) { params.code = code }
    if (name) { params.name = name }
    if (position) { params.position = position }
    if (period) { params.period = period }
    if (source) { params.source = source }
    if (statusList&&statusList.length) { params.statusList = statusList }
    fetchSearchReactStackList(params).then((res) => {
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

  // 表格列
  columns = () => [
    {
      title: '数字机理编号',
      dataIndex: 'code',
      width: 'lg',
      filterType: 'search',
      handleSubmitSearch: (val) => this.handleSearch('code', val)
    },
    {
      title: '数字机理名称',
      dataIndex: 'name',
      width: 'nm',
      filterType: 'search',
      handleSubmitSearch: (val) => this.handleSearch('name', val)
    },
    {
      title: '数字机理周期(s)',
      dataIndex: 'period',
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
      title: '数字机理源',
      dataIndex: 'source',
      width: 'lg',
      filterType: 'search',
      handleSubmitSearch: (val) => this.handleSearch('source', val)
    },
    {
      title: '状态',
      dataIndex: 'statusList',
      width: 120,
      filters: [{value: 1, text: '符合'}, {value: -1, text: '不符合'}, {value: 2, text: '未反应'}, {value: 3, text: '无数据'}],
      filterMultiple: true,
      checkDisabled: true,
      fixed: 'right',
      render: (text, record) => {
        let show
        if (record.status === 1) {
          show = <span className='green6'>符合</span>
        } else if (record.status === -1) {
          show = <span className='red6'>不符合</span>
        } else if (record.status === 2) {
          show = <span className='black45'>未反应</span>
        } else if (record.status === 3) {
          show = <span>无数据</span>
        }
        return <div style={{width: 100}}>{show}</div>
      }
    },
  ]

  render () {
    const {dataList, total, pagination} = this.state
    const {selectedRowKeys, mode, disableDataId} = this.props as any
    const rowSelection = {
      type: mode,
      selectedRowKeys,
      getCheckboxProps: (record) => ({disabled: disableDataId.includes(record.id)}),
      onSelect: (record, selected) => this.props.onSelectRow(record, selected, 'id'),
      onSelectAll: (selected, record, changeRows) => this.props.onSelectRow(changeRows, selected, 'id')
    }
    pagination.total = total

    return (
      <ComplexTable
        rowKey="id"
        minWidth={800}
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

