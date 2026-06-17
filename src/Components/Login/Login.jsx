import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreateForm from "./LoginCreateForm.jsx";
import LoginRecoveryForm from "./LoginRecoveryForm.jsx";
import LoginResetForm from "./LoginResetForm.jsx";

const login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreateForm />} />
        <Route path="perdeu" element={<LoginRecoveryForm />} />
        <Route path="resetar" element={<LoginResetForm />} />
      </Routes>
    </div>
  )
}

export default login;