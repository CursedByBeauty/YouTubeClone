
import React, { useEffect } from "react";
const DisplayComments = (props) => {

  useEffect(()=>{
    props.getAllComments()
  },[])
  return <div>
{props.comments.filter((comment)=> comment.video_id === props.videoId).map((item)=>{
    return (
        <div>
        <h4>{item.text}</h4>
        <button>Likes: {item.likes}</button>
        <button>DisLikes: {item.dislikes}</button>
        </div>
    )
})}
  </div>;
};

export default DisplayComments;
