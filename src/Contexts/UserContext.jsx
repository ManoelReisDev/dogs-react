import { createContext, useCallback, useEffect, useState } from "react";
import { getTokenRequest, getUserRequest, getTokenValidation } from "../api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = getUserRequest(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      // Autenticação
      setError(null);
      setLoading(true);
      const { url, options } = getTokenRequest({ username, password });
      const tokenResponse = await fetch(url, options);
      if (!tokenResponse.ok)
        throw new Error(`Error: Usuário inválido`);
      const { token } = await tokenResponse.json();
      window.localStorage.setItem("token", token);

      // Busca do usuário
      await getUser(token);
      navigate("/conta");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate],
  );

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = getTokenValidation(token);
          const response = await fetch(url, options);

          if (!response.ok) throw new Error("Token inválido");

          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, data, userLogout, loading, error, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
