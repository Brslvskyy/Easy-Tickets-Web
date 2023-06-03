import { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <button type="submit" /*onClick={}*/>Увійти</button>
      </form>
      <button
        className="link-button"
        onClick={() => props.onFormSwitch("register")}
      >
        Зареєструватись
      </button>
    </div>
  );
};
