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
                src='https://v77.tiktokcdn.com/40c98496a7bf378b216bb4e41a0384d5/5fb0069b/video/tos/useast2a/tos-useast2a-ve-0068c002/1445c82d11ea45b79d4cac909a98e6d6/?a=1233&br=1638&bt=819&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020111410320501019018603629089A6C&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2g5a3A8dTNqeDMzNjczM0ApOzY6ZmhkPDs7NztlNDs3N2dnLTZfZC1eaGtfLS02MTZzczEtMTBfMjFjMTUwMDZjYzA6Yw%3D%3D&vl=&vr='>
            </video>
            
            <VideoFooter/>
            <VideoSidebar/>
        </div>
    )
}

export default Video;
