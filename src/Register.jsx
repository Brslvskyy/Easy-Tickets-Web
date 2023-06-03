import { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confimPass, setConfimPass] = useState("");

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
        <button type="submit">Зареєструватись</button>
      </form>
      <button
        className="link-button"
        onClick={() => props.onFormSwitch("login")}
      >
        У мене існує акаунт
      </button>
    </div>
  );
};
