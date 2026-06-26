import { useContext, useState, useRef, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm.jsx";
import styles from "./PhotoComments.module.css";


const PhotoComments = ({ id, comments, single }) => {
  const [commentsList, setCommentsList] = useState(() => comments);
  const commentsSection = useRef(null);
  const { login } = useContext(UserContext);

  useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [commentsList]);

  return <div> 
    <ul className={`${styles.comments} ${single ? styles.single : ''}`} ref={commentsSection}>
      {commentsList.map((comment) => (
        <li key={comment.comment_ID}>
          <b>{comment.comment_author}: </b>
          {comment.comment_content}
        </li>
      ))}
    </ul>
    {login && <PhotoCommentsForm id={id} setCommentsList={setCommentsList} single={single}/>}</div>;
};

export default PhotoComments;
