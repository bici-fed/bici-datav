import './style.less';
interface ProductQueueProps {
    iframe: string;
    dataUrl: string;
    pullRate: number;
}
declare const ProductQueue: (props: ProductQueueProps) => JSX.Element;
export default ProductQueue;
