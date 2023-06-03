import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSumit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSumit}>
        <label htmlFor="email">Введіть Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Введіть пароль</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Пароль"
          id="password"
          name="password"
        />
        <button type="submit" onClick={() => navigate("/Main")}>
          Увійти
        </button>
      </form>

      <Link className="link" to="/Register">
        Зареєструватись
      </Link>
    </div>
  );
};

export default Login;
