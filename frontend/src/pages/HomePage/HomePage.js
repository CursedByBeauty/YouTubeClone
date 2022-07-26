import React from "react";
import DisplayVideos from "../../components/DisplayVideos/DisplayVideos";

const HomePage = (props) => {
  return (
    <div className="container">
      <div>
        <DisplayVideos videos={props.videos} />
      </div>
    </div>
  );
};

export default HomePage;
