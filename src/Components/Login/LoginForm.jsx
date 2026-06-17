import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

const LoginForm = () => {
  const [username, setUsername] = useState("cat");
  const [password, setPassword] = useState("cat");

  // Precisa ser transformada em uma async function.
  function handleSubmit(event) {
    event.preventDefaut();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="text" name="password" />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Criar Conta</Link>
    </section>
  );
};

export default LoginForm;
