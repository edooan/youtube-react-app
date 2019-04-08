import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
    const   snippet       = video.snippet,
            title         = snippet.title,
            imageSrc      = snippet.thumbnails.default.url;

    return(
        <li onClick={ () => onVideoSelect(video) } className='list-group-item'>
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageSrc} alt='' className='media-object' />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {title}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default VideoItem;