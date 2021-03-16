import React, { useRef, useState } from 'react';
import './VideoCard.css';
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';

const VideoCard = ({ channel, url, likes, shares, avatarSrc, song }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      // stop
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      // start
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className='videoCard'>
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className='videoCard__player'
        src={url}
        // src='/public/Videos/eggs.mp4'
        // src='https://www.pexels.com/video/black-and-white-footage-of-people-854178/'
        loop
        type='video/mp4'
      >
        Video component
      </video>
      <VideoFooter
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        likes={likes}
        shares={shares}
      />
    </div>
  );
};

export default VideoCard;
