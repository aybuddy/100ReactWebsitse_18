import React, { useRef, useState } from 'react';
import './VideoCard.css';

const VideoCard = () => {
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
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className='videoCard__player'
        src='./Videos/video.mp4'
        // src='/public/Videos/eggs.mp4'
        // src='https://www.pexels.com/video/black-and-white-footage-of-people-854178/'
        loop
        type='video/mp4'
      >
        Video component
      </video>
    </div>
  );
};

export default VideoCard;
