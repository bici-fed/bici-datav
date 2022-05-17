/**
 * @file 筛选数据点/复杂感知点/复杂反应堆 ，支持多选单选
 */
import React from 'react';
import PropsTypes from 'prop-types';
export default class FilterDataPoint extends React.PureComponent<any, any> {
    static propTypes: {
        mode: PropsTypes.Requireable<string>;
        onCancel: PropsTypes.Validator<(...args: any[]) => any>;
        visible: PropsTypes.Validator<boolean>;
        onGetSelectRow: PropsTypes.Requireable<(...args: any[]) => any>;
        disableSource: PropsTypes.Requireable<any[]>;
        disableDataId: PropsTypes.Requireable<any[]>;
        maxSelectLength: PropsTypes.Requireable<number>;
        selectedRows: PropsTypes.Requireable<any[]>;
        selectedRowKeys: PropsTypes.Requireable<any[]>;
        isOnlyNumber: PropsTypes.Requireable<boolean>;
        node: PropsTypes.Requireable<any>;
    };
    static defaultProps: {
        mode: string;
        disableDataId: any[];
        maxSelectLength: number;
        selectedRows: any[];
        selectedRowKeys: any[];
        isOnlyNumber: boolean;
    };
    state: {
        selectedRowKeys: any[];
        selectedRows: any[];
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any, snapshot: any): void;
    handleSelectRow: (rows: any, selected: any, rowKey: any) => void;
    handleOk: () => void;
    render(): JSX.Element;
}
