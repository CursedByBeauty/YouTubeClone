import React from "react";
import { useParams } from "react-router-dom";
const VideoPage = (props) => {
  const { videoId, title, description } = useParams();
  if (title && description) {
    return (
      <div>
        <div>
          <iframe
            id="ytplayer"
            type="text/html"
            title="myVideo"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
            frameBorder="0"
          ></iframe>
        </div>
        <div>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div>
        {" "}
        <div>
          <iframe
            id="ytplayer"
            type="text/html"
            title="myVideo"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
            frameBorder="0"
          ></iframe>
        </div>
        <div>
          <h6>Loading...</h6>
        </div>
      </div>
    );
};

export default VideoPage;
