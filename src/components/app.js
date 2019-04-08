import React, { Component } from 'react';
import youtube from "../api/youtube";
import SearchBar from './search_bar';
import VideoList from "./video_list";
import VideoDetail from "./video_detail";
import _debounce from 'lodash/debounce';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('Garrett Reynolds');

    }

    videoSearch = async term => {
        const { data } = await youtube.get('/search', {
            params: { q: term }
        });

        this.setState({
            videos: data.items,
            selectedVideo: data.items[0]
        })
    }

    render() {
        const videoSearch = _debounce((term) => { this.videoSearch(term) }, 1000);

        return (
            <div>
                <SearchBar onSearchTerm={ videoSearch } />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos}
                />
            </div>
        );
    }
}
