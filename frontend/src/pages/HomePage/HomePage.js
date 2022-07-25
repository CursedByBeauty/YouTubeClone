import React from "react";
import { Link } from "react-router-dom";
const HomePage = (props) => {
  return (
    <div className="container">
      {props.videos.map((video, index) => {
        if (video.snippet) {
          return (
            <span key={index * 2}>
              <Link
                to={`/${video.id.videoId}/${video.snippet.title}/${video.snippet.description}`}
              >
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
            <span>
              <div>
                <h6>Loading...</h6>
              </div>
            </span>
          );
      })}
    </div>
  );
};

export default HomePage;
