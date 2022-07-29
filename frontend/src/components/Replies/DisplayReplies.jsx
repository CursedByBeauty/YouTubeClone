import React, { useEffect, useState } from "react";
import axios from "axios";
const DisplayReplies = (props) => {
  const [replies, setReplies] = useState([]);
  useEffect(() => {
    getAllReplies(props.commentId);
  }, []);

  async function getAllReplies(commentId) {
    try {
      let items = await axios.get(`http://127.0.0.1:8000/reply/${commentId}/`, {
        headers: {
          Authorization: "Bearer " + props.token,
        },
      });
      setReplies(items.data);
      console.log(replies);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      {replies.map((reply) => {
        if (replies !== []) {
          return (
            <div key={reply.id * 4}>
              <p>{reply.text}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default DisplayReplies;
