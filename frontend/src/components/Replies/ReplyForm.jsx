import React, { useState } from "react";
const ReplyForm = (props) => {
  const [replyText, setReplyText] = useState('');

  function handleAdd() {
    let newReply = {
      user_id: props.user.id,
      comment_id: props.commentId,
      text: replyText,
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
      <button onClick={() => handleAdd()}>ADD</button>
    </div>
  );
};

export default ReplyForm;
