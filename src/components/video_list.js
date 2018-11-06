import React, { Component } from "react";
import VideoListItem from "./video_list_item";


export default class VideoList extends Component {
    render() {
        const videoItems = this.props.videos.map((video, index) => {
            return (
                <VideoListItem
                    key          = {index}
                    video        = {video}
                    onVideoSelect = {this.props.onVideoSelect}
                />
            )
        });

        return (
            <ul className='col-md-4 list-group'>
                {videoItems}
            </ul>
        )
    }
}