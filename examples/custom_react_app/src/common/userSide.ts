/**
 * 用户侧常量
 */
// 网关通信协议
export const GAETWAY_PROTOCOL = [
  {
    id: -1,
    name: '未使用',
  },
  {
    id: 1,
    name: 'modbus',
  },
  {
    id: 2,
    name: 'DLT645',
  },
  {
    id: 3,
    name: 'OPC',
  },
]

// 网关状态
export const GATEWAY_STATUS = [
  {
    id: 1,
    name: '在线',
  },
  {
    id: 3,
    name: '离线',
  },
]

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

// 挂载类型
export const PARENT_TYPE = [
  {
    value: -1,
    text: '未挂载',
  },
  {
    value: 1,
    text: '网关',
  },
  {
    value: 2,
    text: 'AD',
  },
  {
    value: 3,
    text: 'PLC',
  },
]

export const OPC_TERMINAL = [
  {
    id: 1,
    name: '网关',
  },
  {
    id: 2,
    name: '客户端',
  },
  {
    id: 9,
    name: '未连接',
  },
]

export const OPC_PROTOCOL = [
  {
    id: 4,
    name: 'OPC DA2.0',
  },
  {
    id: 5,
    name: 'OPC UA',
  },
]

export const SENSOR_TYPE = [
  {
    value: 1,
    text: '数字传感器',
  },
  {
    value: 2,
    text: '模拟传感器',
  },
]

export const DATA_SOURCE = [
  {
    value: 1,
    text: '数字传感器',
  },
  {
    value: 6,
    text: '模拟传感器',
  },
  {
    value: 2,
    text: 'OPC',
  },
  {
    value: 3,
    text: '二维码',
  },
  {
    value: 4,
    text: 'PLC',
  },
  {
    value: 5,
    text: '数字电表',
  },
  {
    value: 7,
    text: 'MQTT网关',
  },
]

export const DATASOURCE_TYPE = [
  {
    id: '',
    name: '全部',
  },
  {
    id: 1,
    name: '已创建数据点',
  },
  {
    id: 2,
    name: '未创建数据点',
  },
]

export const ANOMALY_STATISTICS_DIMENSION = [
  {
    id: 1,
    name: '日统计',
  },
  {
    id: 2,
    name: '周统计',
  },
  {
    id: 3,
    name: '月统计',
  },
  {
    id: 4,
    name: '年统计',
  },
]

export const BOARD_VISIBILITY = [
  {
    id: 1,
    name: '公司可见',
  },
  {
    id: 2,
    name: '仅我可见',
  },
]

export const BOARD_FILTERS = [
  {
    id: 'IFNULL(FirstPinyin(a.`name`),substring(a.`name`, 1, 1))',
    name: '按看板名称',
  },
  {
    id: 'a.create_time',
    name: '按创建时间',
  },
  {
    id: 'a.update_time',
    name: '按更新时间',
  },
]

export const DATA_ORIGIN = [
  {
    value: 1,
    text: '数字传感器',
  },
  {
    value: 6,
    text: '模拟传感器',
  },
  {
    value: 2,
    text: 'OPC',
  },
  {
    value: 3,
    text: '二维码',
  },
  {
    value: 4,
    text: 'PLC',
  },
  {
    value: 5,
    text: '数字电表',
  },
  {
    value: 7,
    text: 'MQTT网关',
  },
]

export const DATA_TYPE = [
  {
    value: 1,
    text: '数值型',
  },
  {
    value: 2,
    text: '布尔型',
  },
  {
    value: 3,
    text: '时间点',
  },
  {
    value: 4,
    text: '字符串',
  },
]

export const DATAPOINT_STATUS = [
  {
    value: 1,
    text: '有数据',
  },
  {
    value: -1,
    text: '无数据',
  },
]

export const ATTENTION_STATUS = [
  {
    id: 1,
    name: '已关注',
  },
  {
    id: 2,
    name: '未关注',
  },
]

export const DIGITAL_MOUNT_WAY = [
  {
    id: 0,
    name: '未挂载',
  },
  {
    id: 1,
    name: '网关',
  },
]

export const ANALOG_MOUNT_WAY = [
  {
    id: 0,
    name: '未挂载',
  },
  {
    id: 3,
    name: 'AD',
  },
]

export const TASK_RUN_RESULT = [
  {
    id: 1,
    name: '成功',
  },
  {
    id: 2,
    name: '失败',
  },
];

export const TASK_STATUS = [
  {
    id: 1,
    name: '启动',
  },
  {
    id: 2,
    name: '暂停',
  },
];
// 聚合列表
export const Aggregation_List = [
  { id: 'MEDIAN', name: '中位数值' },
  { id: 'MAX', name: '最大值' },
  { id: 'MIN', name: '最小值' },
  { id: 'MEAN', name: '平均值' },
]
