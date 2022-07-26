import React from "react";
import { useParams } from "react-router-dom";
const VideoPage = (props) => {
  const { videoId} = useParams();
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
        </div>
      </div>
    );
};

export default VideoPage;
