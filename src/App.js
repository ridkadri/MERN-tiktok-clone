import './App.css';
import Video from './components/Video/Video';

function App() {
  return (
    <div className="app">
      <div className='app_videos'>
        <Video 
          url='https://v77.tiktokcdn.com/
          d2cbc92fcfca38a7e873910cf79d8a20/5fb204a3/
          video/tos/useast2a/
          tos-useast2a-ve-0068c002/
          d755eb27777840fa878883b1b99d5390/?a=1233&
          br=5840&bt=2920&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020
          11152248280101902192221515395E&lr=tiktok_m&mime_type=video_mp4&qs=0&
          rc=M3hqZDNuNGZ0djMzMzczM0ApaWU6OTY0aTxkNzxnaWg4aGcya21yYTEycXJfLS0zM
          TZzczEwYzMuNGBgMTIwNDViNC86Yw%3D%3D&vl=&vr='
          channel='ridkadri'
          description='MERN TIKTOK'
          song='React So Fly!'
          likes={120}
          messages={300}
          shares={59}
          />
        <Video
          url='https://v77.tiktokcdn.com/
          a981bb924d4b2cd358c43adb13812ea1/
          5fb204ba/video/tos/alisg/
          tos-alisg-pve-0037c001/b2f5839dd4dd4a088ec8c0164195d9bc/
          ?a=1233&br=2664&bt=1332&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020
          11152248280101902192221515395E&lr=tiktok_m&mime_type=video_mp4&qs=0&
          rc=M3R1O215ZTRseDMzOjczM0ApOTtnNzY7N2QzN2g1ODdlNWdlMHJyZ2wuNmhfLS1jM
          TRzczFjXmEzMjAtLmBgLl40YDU6Yw%3D%3D&vl=&vr='
          channel='ridkadri'
          description='MERN TIKTOK'
          song='React So Fly!'
          likes={200}
          messages={500}
          shares={89}
        />
      </div>
    </div>
  );
}

export default App;
