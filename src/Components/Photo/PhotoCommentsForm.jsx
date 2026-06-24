import { useState } from "react";
import Enviar from "../../Assets/enviar.svg?react";
import useFetch from "../../Hooks/useFetch";
import Error from "../Errors/Error";
import { commentPost } from "../../api";
import styles from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, setCommentsList }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = commentPost(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setCommentsList((comments) => [...comments, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        name="comment"
        id="comment"
        placeholder="Comente..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className={styles.textarea}
      />
      <button className={styles.button}>
         <Enviar />
      </button>
      {error && <Error error={error} />}
    </form>
  );
};

export default PhotoCommentsForm;
