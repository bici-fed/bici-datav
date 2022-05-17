/**
 * 用户侧：数字机理 > 列表
 */
import { Component } from 'react';
export default class ReactTable extends Component<any, any> {
    state: {
        code: string;
        position: string;
        name: string;
        period: string;
        source: string;
        statusList: any[];
        pagination: {
            current: number;
            pageSize: number;
            total: number;
        };
        sorter: {
            field: string;
            order: string;
        };
        dataList: any[];
        total: number;
        sorterList: any[];
        selectedRowKeys: any[];
        selectedRows: any[];
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
        filters?: undefined;
        filterMultiple?: undefined;
        checkDisabled?: undefined;
        fixed?: undefined;
        render?: undefined;
    } | {
        title: string;
        dataIndex: string;
        width: string;
        filterType?: undefined;
        handleSubmitSearch?: undefined;
        filters?: undefined;
        filterMultiple?: undefined;
        checkDisabled?: undefined;
        fixed?: undefined;
        render?: undefined;
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
    })[];
    render(): JSX.Element;
}
