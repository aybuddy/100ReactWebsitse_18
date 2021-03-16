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
        {/* container of app videos (scrollable) */}
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default App;
