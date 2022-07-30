import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import DisplayReplies from "../Replies/DisplayReplies";
const DisplayComments = (props) => {
  const [user, token] = useAuth();

  useEffect(() => {
    props.getAllComments();
  }, []);

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
              <DisplayReplies user={user} token={token} commentId={item.id} />
            </div>
          );
        })}
    </div>
  );
};

export default DisplayComments;
