/**
 * 用户侧：数据点管理 > 列表
 */
import { Component } from 'react';
export default class DataPointTable extends Component<any, any> {
    associationObject: string;
    state: {
        dataName: string;
        dataCode: string;
        position: string;
        associationObject: string;
        channelList: any[];
        attentionList: any[];
        statusList: any[];
        tagName: string;
        sorter: {
            field: string;
            order: string;
        };
        pagination: {
            current: number;
            pageSize: number;
            total: number;
        };
        dataList: any[];
        total: number;
        sorterList: any[];
        selectedRowKeys: any[];
        selectedRows: any[];
        doubleArr: any[];
    };
    componentDidMount(): void;
    requestList(): void;
    handleSearch: (key: any, value: any) => void;
    handleTableChange: (pagination: any, filters: any, sorter: any) => void;
    handleFilterTagsChange: (tagsArr: any) => void;
    columns: () => ({
        title: string;
        dataIndex: string;
        width: string;
        filterType: string;
        handleSubmitSearch: (val: any) => void;
        checkDefault?: undefined;
        render?: undefined;
        filters?: undefined;
        filterMultiple?: undefined;
        checkDisabled?: undefined;
        fixed?: undefined;
    } | {
        title: string;
        dataIndex: string;
        width: string;
        filterType?: undefined;
        handleSubmitSearch?: undefined;
        checkDefault?: undefined;
        render?: undefined;
        filters?: undefined;
        filterMultiple?: undefined;
        checkDisabled?: undefined;
        fixed?: undefined;
    } | {
        title: string;
        dataIndex: string;
        width: string;
        checkDefault: boolean;
        filterType?: undefined;
        handleSubmitSearch?: undefined;
        render?: undefined;
        filters?: undefined;
        filterMultiple?: undefined;
        checkDisabled?: undefined;
        fixed?: undefined;
    } | {
        title: string;
        width: string;
        render: (record: any) => "" | JSX.Element;
        dataIndex?: undefined;
        filterType?: undefined;
        handleSubmitSearch?: undefined;
        checkDefault?: undefined;
        filters?: undefined;
        filterMultiple?: undefined;
        checkDisabled?: undefined;
        fixed?: undefined;
    } | {
        title: string;
        dataIndex: string;
        width: string;
        filters: {
            value: number;
            text: string;
        }[];
        filterMultiple: boolean;
        render: (text: any, record: any) => JSX.Element;
        filterType?: undefined;
        handleSubmitSearch?: undefined;
        checkDefault?: undefined;
        checkDisabled?: undefined;
        fixed?: undefined;
    } | {
        title: string;
        dataIndex: string;
        filterType: string;
        handleSubmitSearch: (val: any) => void;
        width?: undefined;
        checkDefault?: undefined;
        render?: undefined;
        filters?: undefined;
        filterMultiple?: undefined;
        checkDisabled?: undefined;
        fixed?: undefined;
    } | {
        title: string;
        dataIndex: string;
        width: number;
        filters: {
            value: number;
            text: string;
        }[];
        filterMultiple: boolean;
        checkDisabled: boolean;
        fixed: string;
        render: (text: any, record: any) => JSX.Element;
        filterType?: undefined;
        handleSubmitSearch?: undefined;
        checkDefault?: undefined;
    })[];
    /**
     * 二维数组扁平化处理
     */
    mapRows: (params: any) => any[];
    render(): JSX.Element;
}
