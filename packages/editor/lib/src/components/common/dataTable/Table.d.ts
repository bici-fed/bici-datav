import './style.less';
interface TableProps {
    columns: any;
    data: any;
    node: any;
    [field: string]: any;
}
/***
 * 数据表格
 */
declare const Table: (props: TableProps) => JSX.Element;
export default Table;
