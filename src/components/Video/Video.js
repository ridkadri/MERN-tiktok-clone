import React,{useRef, useState} from 'react';
import './Video.css';

import VideoFooter from '../VideoFooter/VideoFooter';
import VideoSidebar from '../VideoSidebar/VideoSidebar';

const Video = () => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
        // if video is playing
        // stop it..

        // otherwise if its not playing
        //play it
    }
    return (
        <div className='video'>
            <video 
                onClick={handleVideoPress}
                className='video_player'
                loop
                ref={videoRef}
                src='https://v77.tiktokcdn.com/b295c01060f75123ffa2af1dfc7fcd5a/5faf1531/video/tos/alisg/tos-alisg-pve-0037c001/a2ffe1dc0c634b5e9293ce484fd7c38e/?a=1233&br=5444&bt=2722&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20201113172154010189073152260216F3&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=amp5cWRscDM0eDMzZzczM0ApODxlZjszOmQzN2k8Nzs5ZWdec2U1Ly5wcjVfLS1hMTRzc2IuYl4tL2EvYl4zNmIyYGE6Yw%3D%3D&vl=&vr='>
            </video>
            <VideoFooter/>
            <VideoSidebar/>
        </div>
    )
}

export default Video;
