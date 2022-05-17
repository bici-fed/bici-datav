/**
 * 用户侧：复杂感知点 > 列表
 */
import { PureComponent } from 'react';
export declare const DEVICE_STATUS: {
    value: number;
    text: string;
}[];
export default class ComplexDataPoint extends PureComponent<any, any> {
    state: {
        calculationCode: string;
        dataName: string;
        position: string;
        tagName: string;
        statusList: any[];
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
        sorterList: any[];
        total: number;
        selectedRowKeys: any[];
        selectedRows: any[];
        doubleArr: any[];
    };
    componentDidMount(): void;
    getColumns: () => ({
        title: string;
        dataIndex: string;
        width: string;
        filterType: string;
        handleSubmitSearch: (val: any) => void;
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
    })[];
    requestList(): void;
    handleSearch: (key: any, value: any) => void;
    handleTableChange: (pagination: any, filters: any, sorter: any) => void;
    handleFilterTagsChange: (tagsArr: any) => void;
    /**
     * 二维数组扁平化处理
     */
    mapRows: (params: any) => any[];
    render(): JSX.Element;
}
