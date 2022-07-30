import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import DisplayReplies from "../Replies/DisplayReplies";
import ReplyForm from "../Replies/ReplyForm";
import axios from "axios";
const DisplayComments = (props) => {
  const [user, token] = useAuth();
  useEffect(() => {
    props.getAllComments();
  }, []);

  async function createReply(body) {
    try {
      await axios.post("http://127.0.0.1:8000/reply/", body, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      props.getAllComments()
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      {props.comments
        .filter((comment) => comment.video_id === props.videoId)
        .map((item) => {
          return (
            <div key={item.id * 2}>
              <h4>{item.text}</h4>
              <button>Likes: {item.likes}</button>
              <button>DisLikes: {item.dislikes}</button>
              <DisplayReplies token={token} commentId={item.id} />
              <ReplyForm createReply={createReply} commentId={item.id} user={user} />
            </div>
          );
        })}
    </div>
  );
};

export default DisplayComments;
