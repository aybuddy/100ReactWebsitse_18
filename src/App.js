import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (
    <div className='app'>
      <div className='app__top'>
        <img
          className='app__logo'
          src='https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png'
          alt=''
        />
        <h1>Reels</h1>
      </div>

      <div className='app__videos'>
        <VideoCard
          channel='our planet'
          avatarSrc='https://www.pexels.com/video/coffee-cup-photography-easter-6496005/'
          song='Test Song '
          url='/Videos/video.mp4'
          likes={950}
          shares={30}
          // channel={channel}
          // avatarSrc={avatarSrc}
          // song={song}
          // url={url}
          // likes={likes}
          // shares={shares}
        />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default App;
