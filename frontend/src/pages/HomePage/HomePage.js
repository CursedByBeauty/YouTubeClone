import React from "react";
const HomePage = (props) => {
  return (
    <div className="container">
      {props.videos.map((video, index) => {
        if (video.snippet) {
          return (
            <span key={index * 2}>
              <div>
                <input
                  type="image"
                  src={video.snippet.thumbnails.default.url}
                  alt="Video Thumbnail"
                />
              </div>
              <div>
                {" "}
                <h3>{video.snippet.title}</h3>
              </div>
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
