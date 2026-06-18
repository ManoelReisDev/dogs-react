import styles from "./Input.module.css";
import Error from "../Errors/Error";

const Input = ({ label, type, name, value, error, onChange, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className={styles.input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {/* {error && <p className={styles.error}>{error}</p>} */}
      <Error error={error} />
    </div>
  );
};

export default Input;
