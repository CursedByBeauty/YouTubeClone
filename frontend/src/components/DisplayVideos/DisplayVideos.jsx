import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
const DisplayVideos = (props) => {
  return (
    <div className="grid-box">
      {props.videos.map((video, index) => {
        if (video.snippet) {
          return (
            <div className="card" >
            <div key={index * 3} className="grid-item">
              <Link to={`/${video.id.videoId}/`}>
                <div>
                  <input
                  className="card-img-top"
                    type="image"
                    src={video.snippet.thumbnails.medium.url}
                    alt="Video Thumbnail"
                  />
                </div>
                <div className="card-body">
                  {" "}
                  <h4 className="card-text">{video.snippet.title}</h4>
                </div>
              </Link>
            </div>
            </div>
          );
        } else
          return (
            <span key={index * 3} className="grid-item">
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
