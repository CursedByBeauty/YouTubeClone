import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import DisplayReplies from "../Replies/DisplayReplies";
const DisplayComments = (props) => {
  const [user, token] = useAuth();

  useEffect(() => {
    props.getAllComments();
  }, []);

  async function likes(id) {
    try {
      await axios.patch(`http://127.0.0.1:8000/comments/likes/${id}/`);
      props.getAllComments();
    } catch (error) {
      console.log(error.message);
    }
  }

  async function dislikes(id) {
    try {
      await axios.patch(`http://127.0.0.1:8000/comments/dislikes/${id}/`);
      props.getAllComments();
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
              <div className="comment-content">
                <h4>{item.text}</h4>
                <div>
                  <button onClick={() => likes(item.id)}>
                    <img
                      src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/30/FFFFFF/external-thumbs-up-content-creator-tanah-basah-glyph-tanah-basah.png"
                      alt="like"
                    />{" "}
                    {item.likes}
                  </button>
                  <button onClick={() => dislikes(item.id)}>
                    <img
                      src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/30/FFFFFF/external-Thumbs-Down-contact-us-tanah-basah-glyph-tanah-basah.png"
                      alt="dislike"
                    />{" "}
                    {item.dislikes}
                  </button>
                </div>
              </div>
              <div>
              <DisplayReplies user={user} token={token} commentId={item.id} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DisplayComments;
