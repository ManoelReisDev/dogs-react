import { useContext, useState, useRef, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm.jsx";
import styles from "./PhotoComments.module.css";


const PhotoComments = ({ id, comments }) => {
  const [commentsList, setCommentsList] = useState(() => comments);
  const commentsSection = useRef(null);
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [commentsList]);

  return <div> 
    <ul className={styles.comments} ref={commentsSection}>
      {commentsList.map((comment) => (
        <li key={comment.comment_ID}>
          <b>{comment.comment_author}: </b>
          {comment.comment_content}
        </li>
      ))}
    </ul>
    {login && <PhotoCommentsForm id={id} setCommentsList={setCommentsList}/>}</div>;
};

export default PhotoComments;
