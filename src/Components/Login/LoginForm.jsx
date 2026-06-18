import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { getTokenRequest, getUserRequest } from "../../api";
import { useEffect } from "react";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = getUserRequest(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // Não realiza a requisição os inputs não estejam válidos.
    if (username.validate() && password.validate()) {
      const { url, options } = getTokenRequest({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem("token", json.token);
      getUser(json.token);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="text" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Criar Conta</Link>
    </section>
  );
};

export default LoginForm;
