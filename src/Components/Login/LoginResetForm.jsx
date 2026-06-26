import { useState, useEffect } from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { passwordResetPost } from "../../api";
import Error from "../Errors/Error";
import Head from "../Helpers/Head";


const LoginResetForm = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm("password");
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = passwordResetPost({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  return (
    <section>
      <Head
        title="Resetar Senha"
        description="Página de reset de senha do site Dogs. Redefina sua senha com segurança."
      />
      <form onSubmit={handleSubmit}>
        <h1 className="title">Resetar Senha</h1>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      {error && <Error error={error} />}
    </section>
  );
};

export default LoginResetForm;
