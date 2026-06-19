import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import { useContext, useState } from "react";
import useMedia from "../../Hooks/useMedia";
import MinhasFotos from "../../Assets/feed.svg?react";
import Estatisticas from "../../Assets/estatisticas.svg?react";
import Adicionar from "../../Assets/adicionar.svg?react";
import Sair from "../../Assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState();


  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}
      >
        <NavLink to="/conta" end onClick={() => setMobileMenu(false)}>
          <MinhasFotos />
          {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas" onClick={() => setMobileMenu(false)}>
          <Estatisticas />
          {mobile && "Estatisitcas"}
        </NavLink>
        <NavLink to="/conta/postar" onClick={() => setMobileMenu(false)}>
          <Adicionar />
          {mobile && "Adicionar fotos"}
        </NavLink>
        <button
          onClick={() => {
            setMobileMenu(false);
            handleLogout();
          }}
        >
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
