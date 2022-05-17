import { registerNode } from '@bici-topology/core';
import { Modal, Tabs, Button, DatePicker, Result, Table } from 'antd';
import drawReactNode from './drawReactNode';
import WebPage from "../WebPage";
import ProductQueue from "../../customMade/ProductQueue";
import PDMonthReport from "../../customMade/PDMonthReport";
import DataTable from '../dataTable';
import LiveVideo from '../LiveVideo';
import QTLiveVideo from '../QTLiveVideo';
import DateFormat from "../DateFormat";



export function register() {
    registerNode('button', drawReactNode(Button), null, null, null);
    registerNode('datePicker', drawReactNode(DatePicker), null, null, null);
    registerNode('result', drawReactNode(Result), null, null, null);
    registerNode('table', drawReactNode(Table), null, null, null);
    registerNode('webPage', drawReactNode(WebPage), null, null, null);
    registerNode('productQueue', drawReactNode(ProductQueue), null, null, null);
    registerNode('pdMonthReport', drawReactNode(PDMonthReport), null, null, null);
    registerNode('dataTable', drawReactNode(DataTable), null, null, null);
    registerNode('liveVideo', drawReactNode(LiveVideo), null, null, null);
    registerNode('QTLiveVideo', drawReactNode(QTLiveVideo), null, null, null);
    registerNode('dateFormat', drawReactNode(DateFormat), null, null, null);
}
