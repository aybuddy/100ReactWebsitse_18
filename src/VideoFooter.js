import { Avatar, Button } from '@material-ui/core';
import {
  Favorite,
  ModeComment,
  MoreHoriz,
  MusicNote,
  Send,
} from '@material-ui/icons';
import React from 'react';
import './VideoFooter.css';
import Ticker from 'react-ticker';

const VideoFooter = ({ channel, likes, shares, avatarSrc, song }) => {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <Avatar src={avatarSrc} />
        <h3>
          {channel} &#9679; <Button>Follow</Button>
        </h3>
      </div>
      <div className='videoFooter__ticker'>
        <MusicNote className='videoFooter__icon' />
        <Ticker mode='smooth'>
          {({ index }) => (
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker>
      </div>
      <div className='videoFooter__actions'>
        <div className='videoFooter__actionsLeft'>
          <Favorite fontSize='large' />
          <ModeComment fontSize='large' />
          <Send fontSize='large' />
          <MoreHoriz fontSize='large' />
        </div>
        <div className='videoFooter__actionsRight'>
          <div className='videoFooter__stat'>
            <Favorite />
            <p>{likes}</p>
          </div>
          <div className='videoFooter__stat'>
            <ModeComment />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFooter;
