import React from 'react';
import SearBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = {videos: [], selectedVideo: ''};

    searchYoutubeVideos = async (term) => {
        const response = await youtube.get('search', {
            params: {
                q: term
            }
        });
        this.setState(
            {
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            });
    };

    onVideoSelect = (selectedVideo) => {
        this.setState({ selectedVideo });
    };

    componentDidMount() {
        this.searchYoutubeVideos('buildings');
    }

    render() {
        return (
            <div className="ui container">
                <SearBar onSubmit={this.searchYoutubeVideos}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
