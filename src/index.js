import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import SearchBar from './views/search-bar';
import VideoDetail from './views/video-detail';
import VideoList from './views/video-list';
import YTSearch from 'youtube-api-search';
import registerServiceWorker from './registerServiceWorker';

const apiKey = 'AIzaSyB3fzoGiZZxiYu802g5_CO_XYh8XnQP0b8';

//Create Parent Container to Manage Each View
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: []
		};
		YTSearch({key: apiKey, term: 'cats'}, (videos) => {
			this.setState({videos})
		});
	}
	render() {
		return (
		<div className="container">
				<SearchBar/>
				<div className="col-xs-8">
					<div className="jumbotron">
						<VideoDetail/>
					</div>
				</div>
				<div className="col-xs-4 video-list">
					<VideoList videos={this.state.videos}/>
				</div>
		</div>
		);
	}
}


//Render Entire App to Index.html Root Container
ReactDOM.render(
    <App />, document.getElementById('root')
);

//Register Service Worked When Index.html is Called
registerServiceWorker();


/*<div>
	<SearchBar/>
	<div className="row">
		<div className="col-xs-6">
			<VideoDetail/>
		</div>
		<div className="col-xs-4">
			<VideoList/>
		</div>
	</div>
</div>*/