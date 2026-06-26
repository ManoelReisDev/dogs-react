import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreateForm from "./LoginCreateForm.jsx";
import LoginRecoveryForm from "./LoginRecoveryForm.jsx";
import LoginResetForm from "./LoginResetForm.jsx";
import NotFound from "../Errors/NotFound.jsx";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import styles from "./Login.module.css";

const login = () => {
  const { login } = useContext(UserContext);

  if (login) {
    return <Navigate to="/conta" />;
  }

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreateForm />} />
          <Route path="perdeu" element={<LoginRecoveryForm />} />
          <Route path="resetar" element={<LoginResetForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default login;
