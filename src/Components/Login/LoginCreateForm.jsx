import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { getUserPost } from "../../api";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import useFetch from "../../Hooks/useFetch";
import Error from "../Errors/Error";

const LoginCreateForm = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");
  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = getUserPost({
      username: username.value,
      password: password.value,
      email: email.value,
    });
    const { response } = await request(url, options);
    if(response.ok) userLogin(username.value, password.value);

  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" placeholder="Nome" {...username} />
        <Input type="text" label="Email" placeholder="Email" {...email} />
        <Input
          type="password"
          label="Senha"
          placeholder="Senha"
          {...password}
        />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreateForm;
