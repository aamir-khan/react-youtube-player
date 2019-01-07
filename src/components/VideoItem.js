import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (<div className="video-item item">
        <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
        <div className="content" onClick={()=> onVideoSelect(video)}>
            <div className="header">
                {video.snippet.title}
            </div>
            <div className="description">
                {video.snippet.description}
            </div>
        </div>

    </div>);
};

export default VideoItem;
