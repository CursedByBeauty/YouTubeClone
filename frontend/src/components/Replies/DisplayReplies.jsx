import React, { useEffect, useState } from "react";
import axios from "axios";
import ReplyForm from "./ReplyForm";
const DisplayReplies = (props) => {
  const [replies, setReplies] = useState([]);
  useEffect(() => {
    getAllReplies(props.commentId);
  }, []);

  async function createReply(body) {
    try {
      await axios.post("http://127.0.0.1:8000/reply/", body, {
        headers: {
          Authorization: "Bearer " + props.token,
        },
      });
      getAllReplies(body.comment_id)
    } catch (error) {
      console.log(error.message);
    }
  }
  async function getAllReplies(commentId) {
    try {
      let items = await axios.get(`http://127.0.0.1:8000/reply/${commentId}/`, {
        headers: {
          Authorization: "Bearer " + props.token,
        },
      });
      setReplies(items.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <div className="around-replies">
        {replies.map((reply) => {
          if (replies !== []) {
            return (
              <div>
              <div key={reply.id * 4}>
                <p>{reply.text}</p>
              </div>
              <hr/>
              </div>
            );
          }
        })}
      </div>
      <div>
        <ReplyForm
          createReply={createReply}
          commentId={props.commentId}
          user={props.user}
        />
      </div>
    </div>
  );
};

export default DisplayReplies;
