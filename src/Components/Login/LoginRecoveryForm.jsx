import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { passwordLostPost } from "../../api";
import Error from "../Errors/Error";
import Head from "../Helpers/Head";

const LoginRecoveryForm = () => {
  const login = useForm();
  const { data, error, loading, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = passwordLostPost({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      await request(url, options);
    }
  }

  return (
    <section>
      <Head
        title="Recuperar Senha"
        description="Página de recuperação de senha do site Dogs. Esqueceu a senha? Envie um email para recuperar sua senha."
      />
      <h1 className="title">Recuperar Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Email / Usuário" type="text" name="email" {...login} />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar Email</Button>
        )}
        {error && <Error error={error} />}
        {data && (
          <p style={{ color: "#4c1", marginTop: "1rem" }}>
            Email enviado com sucesso!
          </p>
        )}
      </form>
    </section>
  );
};

export default LoginRecoveryForm;
