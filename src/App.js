import { useState, useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from './firebase';

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection('reels').onSnapshot((snapshot) => {
      setReels(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

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
        {reels.map(({ channel, url, likes, shares, avatarSrc, song }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
