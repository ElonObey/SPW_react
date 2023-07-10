import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "../components/styles/main.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const fromPage = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;
    signin(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div className="login_block">
      <h1> Login page</h1>
      <p> Для перехода на {fromPage} необходимо авторизоваться </p>
      <div className="login_item">
        <form onSubmit={handleSubmit}>
          <input name="username" type="text" />
          <button type="submit"> login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
