import React, { Component } from "react";

export default class VideoListItem extends Component {
    render() {
        const props         = this.props,
              onVideoSelect = props.onVideoSelect,
              video         = props.video,
              snippet       = video.snippet,
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
}