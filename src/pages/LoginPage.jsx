import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { login } from "../utils/api";
import LoginInput from "../Components/LoginInput";
import LocaleContext from "../Contexts/LocaleContext";

const LoginPage = ({ loginSuccess }) => {
  const { locale } = useContext(LocaleContext);
  const [loading, setLoading] = useState(false);

  const onLoginHandler = async ({ email, password }) => {
    setLoading(true);
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
    setLoading(false);
  };

  return (
    <>
      <h1>{locale === "id" ? "Halaman Masuk" : "Login Page"}</h1>
      <LoginInput login={onLoginHandler} loading={loading} />
    </>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
