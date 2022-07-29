import React from "react";
import { Link } from "react-router-dom";
const DisplayVideos = (props) => {
  return (
    <div>
      {props.videos.map((video, index) => {
        if (video.snippet) {
          return (
            <span key={index * 3}>
              <Link to={`/${video.id.videoId}/`}>
                <div>
                  <input
                    type="image"
                    src={video.snippet.thumbnails.medium.url}
                    alt="Video Thumbnail"
                  />
                </div>
                <div>
                  {" "}
                  <h4>{video.snippet.title}</h4>
                </div>
              </Link>
            </span>
          );
        } else
          return (
            <span key={index*3}>
              <div>
                <h6>Loading...</h6>
              </div>
            </span>
          );
      })}
    </div>
  );
};

export default DisplayVideos;
