import React, { useState } from "react";
const ReplyForm = (props) => {
  const [replyText, setReplyText] = useState('');

  function handleAdd(description) {
    let newReply = {
      user_id: props.user.id,
      comment_id: props.commentId,
      text: description,
    };
    props.createReply(newReply);
    setReplyText('')
  }
  return (
    <div>
      <input
        value={replyText}
        type="text"
        onChange={(event) => setReplyText(event.target.value)}
      />
      <button onClick={() => handleAdd(replyText)}>ADD</button>
    </div>
  );
};

export default ReplyForm;
