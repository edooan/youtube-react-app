import React from "react";
import VideoItem from "./video_item";

const VideoList = ({ videos, onVideoSelect }) => {

    const videoItems = videos.map((video, index) => {
        return (
            <VideoItem
                key           = {index}
                video         = {video}
                onVideoSelect = {onVideoSelect}
            />
        )
    });

    return (
        <ul className='col-md-4 list-group'>
            {videoItems}
        </ul>
    )

}

export default VideoList;