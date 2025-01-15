import PropTypes from "prop-types";
import React, { useContext } from "react";
import LocaleContext from "../Contexts/LocaleContext";
import useInput from "../Hooks/useInput";

const LoginInput = ({ login, loading }) => {
  const { locale } = useContext(LocaleContext);

  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({
      email: email,
      password: password,
    });
  };

  return (
    <form action="" onSubmit={onSubmitHandler} className="input-login">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        placeholder={locale === "id" ? "Email anda" : "Your email"}
        onChange={onEmailChangeHandler}
        disabled={loading}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        placeholder={locale === "id" ? "Password anda" : "Your password"}
        onChange={onPasswordChangeHandler}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading
          ? locale === "id"
            ? "Memproses..."
            : "Processing..."
          : locale === "id"
          ? "Masuk"
          : "Login"}
      </button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default LoginInput;
