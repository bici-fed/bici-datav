export default VideoPlayer;
declare function VideoPlayer(props: any): JSX.Element;
declare namespace VideoPlayer {
    namespace defaultProps {
        const height: number;
        const videoObj: any;
        const showChannel: boolean;
        const removeVideo: any;
        function updateVideoUrl(id: any, rate: any): boolean;
        function showChannelSelect(): void;
        const idx: any;
    }
}
