import React, { useContext } from "react";
import LocaleContext from "../Contexts/LocaleContext";
import PropTypes from "prop-types";
import useInput from "../Hooks/useInput";

const RegisterInput = ({ register, loading }) => {
  const { locale } = useContext(LocaleContext);

  const [name, onNameChangeHandler] = useInput("");
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");
  const [confirmPassword, onConfirmPasswordChangeHandler] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      if (locale === "id") {
        alert("Password dan konfirmasi password harus sama");
      } else {
        alert("Password and confirm password must be same");
      }
    } else {
      register({
        email: email,
        password: password,
        name: name,
      });
    }
  };

  return (
    <form action="" onSubmit={onSubmitHandler} className="input-register">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        placeholder={locale === "id" ? "Email anda" : "Your email"}
        onChange={onEmailChangeHandler}
        disabled={loading}
      />
      <label htmlFor="name">{locale === "id" ? "Nama" : "Name"}</label>
      <input
        type="text"
        id="name"
        value={name}
        placeholder={locale === "id" ? "Nama anda" : "Your name"}
        onChange={onNameChangeHandler}
        disabled={loading}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="text"
        value={password}
        placeholder={locale === "id" ? "Password anda" : "Your password"}
        onChange={onPasswordChangeHandler}
        disabled={loading}
      />
      <label htmlFor="confirmPassword">
        {locale === "id" ? "Konfirmasi Password" : "Confirm Password"}
      </label>
      <input
        type="text"
        id="confirmPassword"
        value={confirmPassword}
        placeholder={
          locale === "id" ? "Konfirmasi password" : "Confirm password"
        }
        onChange={onConfirmPasswordChangeHandler}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading
          ? locale === "id"
            ? "Memproses..."
            : "Processing..."
          : locale === "id"
          ? "Daftar"
          : "Register"}
      </button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default RegisterInput;
