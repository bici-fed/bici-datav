/**
 * @file 筛选数据点/复杂感知点/复杂反应堆 ，支持多选单选
 */
import React from 'react'
import { Tabs, Modal } from 'antd'
import DataPointTable from './DataPointTable'
import ComplexTable from './ComplexTable'
import ReactTable from './ReactTable'
import PropsTypes from 'prop-types'
import { biciNotification } from 'bici-transformers'

const {TabPane} = Tabs

const initialState = {
  selectedRowKeys: [],
  selectedRows: [],
}

export default class FilterDataPoint extends React.PureComponent<any,any> {
  static propTypes = {
    mode: PropsTypes.string,
    onCancel: PropsTypes.func.isRequired,
    visible: PropsTypes.bool.isRequired, // 控制弹窗的显隐
    onGetSelectRow: PropsTypes.func, // 关闭弹窗
    disableSource: PropsTypes.array,
    disableDataId: PropsTypes.array,
    maxSelectLength: PropsTypes.number,
    selectedRows: PropsTypes.array,
    selectedRowKeys: PropsTypes.array,
    isOnlyNumber: PropsTypes.bool, // 是否仅选择数字类型的数据点
    node:PropsTypes.any,// 选择的节点信息
    onTabChange:PropsTypes.func
  }

  static defaultProps = {
    mode: 'radio',
    disableDataId: [],
    maxSelectLength: 0,
    selectedRows: [],
    selectedRowKeys: [],
    isOnlyNumber: true
  }

  state = {...initialState}

  componentDidMount(): void {
    this.setState({selectedRowKeys: this.props.selectedRowKeys, selectedRows: this.props.selectedRows})
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.props.visible !== prevProps.visible) {
      if (JSON.stringify(this.props.selectedRowKeys) !== JSON.stringify(this.state.selectedRowKeys)) {
        this.setState({selectedRowKeys: this.props.selectedRowKeys, selectedRows: this.props.selectedRows})
      }
    }
  }

  handleSelectRow = (rows, selected, rowKey) => {
    const {maxSelectLength, mode} = this.props
    let selectedRowKeys = this.state.selectedRowKeys.slice()
    let selectedRows = this.state.selectedRows.slice()
    if (mode === 'radio') {
      this.setState({selectedRows: [rows], selectedRowKeys: [rows[rowKey]]})
    } else {
      if (!Array.isArray(rows)) {
        if (selected) {// 如果是单选的话
          selectedRowKeys.push(rows[rowKey])
          selectedRows.push(rows)
        } else {
          const index = selectedRowKeys.indexOf(rows[rowKey])
          selectedRowKeys.splice(index, 1)
          selectedRows.splice(index, 1)
        }
        if (maxSelectLength && selectedRowKeys.length > maxSelectLength) {
          biciNotification.info({message: `最多选择${maxSelectLength}个数据点哦！`})
          return
        }
      } else {// 如果是多选的话
        const indexList = rows.map(row => row[rowKey])
        if (selected) {
          selectedRowKeys.push(...indexList)
          selectedRows.push(...rows)
        } else {
          const idSet = new Set(this.state.selectedRowKeys)
          indexList.forEach(index => idSet.delete(index))
          selectedRowKeys = Array.from(idSet)
          selectedRows = []
          selectedRowKeys.forEach(id => {
            const row = this.state.selectedRows.find(row => row[rowKey] === id)
            row && selectedRows.push(row)
          })
        }
        if (maxSelectLength && selectedRows.length > maxSelectLength) {
          biciNotification.info({message: `最多选择${maxSelectLength}个数据点哦！`})
          return
        }
      }
      this.setState({ selectedRows, selectedRowKeys })
    }
  }

  handleOk = () => {
    const {selectedRowKeys, selectedRows} = this.state
    this.props.onGetSelectRow && this.props.onGetSelectRow(selectedRowKeys, selectedRows)
    this.props.onCancel()
  }

  render () {
    const {selectedRowKeys, selectedRows} = this.state
    const {visible, disableSource = [], mode, isOnlyNumber, disableDataId} = this.props
    const childrenProps = {
      onSelectRow: this.handleSelectRow,
      disableDataId: disableDataId,
      selectedRowKeys: selectedRowKeys,
      selectedRows: selectedRows,
      mode: mode
    }
    const handleTabChange=(activeKey)=>{
      this.props.onTabChange&&this.props.onTabChange(activeKey)
    }
    return <Modal visible={visible}
                  width={document.documentElement.clientWidth - 250}
                  bodyStyle={{
                    padding: 12,
                    height: document.documentElement.clientHeight - 200,
                    overflowY: 'auto',
                    backgroundColor: 'white'
                  }}
                  style={{top: 70}}
                  onOk={this.handleOk}
                  okText="确定"
                  cancelText="取消"
                  getContainer={() => document.querySelector('#editLayout')}
                  onCancel={this.props.onCancel}>
      <Tabs defaultActiveKey='dataPoint' onChange={handleTabChange}>
        {!disableSource.includes('dataPoint') &&
        <TabPane tab='数据点' key='dataPoint'>
          <DataPointTable isOnlyNumber={isOnlyNumber} {...childrenProps} node={this.props.node} />
        </TabPane>}
        {!disableSource.includes('complex') &&
        <TabPane tab='复杂感知点' key='complex'>
          <ComplexTable {...childrenProps} node={this.props.node}/>
        </TabPane>}
        {!disableSource.includes('react') &&
        <TabPane tab='数字机理' key='react'>
          <ReactTable {...childrenProps} node={this.props.node}/>
        </TabPane>}
      </Tabs>
    </Modal>
  }
}



