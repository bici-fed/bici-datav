import { Component } from 'react';
export default class LiveVideo extends Component<any, any> {
    constructor(props: any);
    stopStream(): void;
    removeVideo: () => void;
    updateStream: (params: any) => Promise<import("axios").AxiosResponse<any>>;
    updateVideoUrl: (id: any, rate: any) => Promise<boolean>;
    componentDidMount(): void;
    visibilitychange(): void;
    render(): JSX.Element;
}
