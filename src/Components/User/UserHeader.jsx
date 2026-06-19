import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const getHeaderTitle = (pathname) => {
  switch (pathname) {
    case "/conta":
      return "Conta";
    case "/conta/estatisticas":
      return "Estatísticas";
    case "/conta/postar":
      return "Postar";
    default:
      return "";
  }
};

const UserHeader = () => {
  const location = useLocation();
  const title = getHeaderTitle(location.pathname);

  return (
    <header className={styles.header}>
        <h1 className="title">{title}</h1>
        <UserHeaderNav />
    </header>
  )
}

export default UserHeader