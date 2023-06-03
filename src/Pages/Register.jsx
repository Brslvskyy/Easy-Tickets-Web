import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confimPass, setConfimPass] = useState("");
  const navigate = useNavigate();

  const handleSumit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSumit}>
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
        <label htmlFor="confimpass">Підтвердіть пароль</label>
        <input
          value={confimPass}
          onChange={(e) => setConfimPass(e.target.value)}
          type="password"
          placeholder="Пароль"
          id="confimpass"
          name="confimpass"
        />
        <button type="submit" onClick={() => navigate("/Main")}>
          Зареєструватись
        </button>
      </form>
      <Link className="link" to="/">
        У мене існує акаунт
      </Link>
    </div>
  );
};

export default Register;
