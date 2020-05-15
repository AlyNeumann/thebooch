import React from 'react';
import ReactPlayer from 'react-player';
import './video.css';
import '../text/modal.css';

const VideoPlayer = () => {

    return (
        <div className="video-container">
            <h2 className="modal-title">Watch THE BOOCH crowd funding video</h2>
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=J5m7A76vwRY'
                    width='100%'
                    height='100%'
                />
            </div>
        </div>
    )
}

export default VideoPlayer;