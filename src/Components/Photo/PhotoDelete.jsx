import styles from "./PhotoDelete.module.css";
import { photoDeletePost } from "../../api";
import useFetch from "../../Hooks/useFetch";

const PhotoDelete = ({ id }) => {
  const { url, options } = photoDeletePost(id);
  const { request, loading } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Deseja realmente deletar a foto?");
    if (!confirm) return;

    const { response } = await request(url, options);
    if (response.ok) {
      window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletando...
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
