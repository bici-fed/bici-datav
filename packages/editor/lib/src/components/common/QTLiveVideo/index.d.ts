import { Component } from 'react';
export default class QTLiveVideo extends Component<any, any> {
    constructor(props: any);
    getVideoURL(): void;
    stopStream(): void;
    removeVideo(videoItem: any): void;
    updateStream: (params: any) => Promise<import("axios").AxiosResponse<any>>;
    updateVideoUrl: (id: any, rate: any) => Promise<boolean>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    visibilitychange(): void;
    render(): JSX.Element;
}
