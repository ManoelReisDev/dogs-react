import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm.jsx";
import styles from "./PhotoComments.module.css";


const PhotoComments = ({ id, comments }) => {
  const [commentsList, setCommentsList] = useState(() => comments);
  const { login } = useContext(UserContext);

  return <div> 
    <ul className={styles.comment}>
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
