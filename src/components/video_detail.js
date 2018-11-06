import React, { Component } from "react";

export default class VideoDetail extends Component {
    render() {
        if (!this.props.video) {
            return <div>Loading...</div>
        }
        const video   = this.props.video,
              videoId = video.id.videoId,
              snippet = video.snippet,
              title   = snippet.title,
              desc    = snippet.description,
              url     = `https://www.youtube.com/embed/${videoId}`;

        return(
            <div className='video-detail col-md-8'>
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe className='embed-responsive-item' src={url} title='YouTuBe'></iframe>
                </div>
                <div className="details">
                    <div>{title}</div>
                    <div>{desc}</div>
                </div>
            </div>
        )
    }
}