import React from 'react'


const VideoListItem = ({video}) => {
	const imageURL = video.snippet.thumbnails.default.url;
	let videoTitle = video.snippet.title;
	let videoDesc = video.snippet.description;

	return <li className="list-group-item">
					<div className="video-list media">
						<div className="media-left">
							<img className="media-object" src={imageURL} alt={videoDesc}/>
						</div>
						<div className="media-object">
							<div className="media-heading">
								{videoTitle}
							</div>
						</div>

					</div>
				</li>;
};


export default VideoListItem;

//
// <div className="row">
// 	<div className="col-xs-4">
// 		<img src={thumbnail} alt={videoDesc}
// 				 height="120" width="120"/>
// 	</div>
// 	<div className="col-xs-8">
// 		{/*{videoTitle}*/}
// 	</div>
// </div>