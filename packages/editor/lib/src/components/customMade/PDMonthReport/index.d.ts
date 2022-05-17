import './style.less';
interface PDMonthReportProp {
    iframe: string;
    dataUrl: string;
    pullRate: number;
}
declare const PDMonthReport: (props: PDMonthReportProp) => JSX.Element;
export default PDMonthReport;
