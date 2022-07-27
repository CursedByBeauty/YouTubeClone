import axios from "axios";
import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { KEY } from "../localKey";
import CommentForm from "../components/Comments/CommentForm";
import DisplayVideos from "../components/DisplayVideos/DisplayVideos";
import DisplayComments from "../components/Comments/DisplayComments";
const VideoPage = (props) => {
  const { videoId } = useParams();
  const [comments, setComments] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  useEffect(() => {
    getRelatedVideos(videoId);
  },[]);
  async function getAllComments() {
    try {
      let response = await axios.get("http://127.0.0.1:8000/comments/");
      setComments(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function getRelatedVideos(id) {
    try {
      let result = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${id}&type=video&key=${KEY}&part=snippet&maxResults=8`
      );
      setRelatedVideos(result.data.items);
    } catch (error) {
      console.log(error.message);
    }
  }

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
        <CommentForm getAllComments={getAllComments} videoId={videoId}/>
      </div>
      <div>
        <DisplayComments getAllComments={getAllComments} comments={comments} videoId={videoId}/>
      </div>
      <div>
        <DisplayVideos videos={relatedVideos} />
      </div>
    </div>
  );
};

export default VideoPage;
