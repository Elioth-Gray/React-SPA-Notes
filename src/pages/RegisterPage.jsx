import React, { useState } from "react";
import { register } from "../utils/api";
import RegisterInput from "../Components/RegisterInput";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onRegisterHandler = async ({ email, name, password }) => {
    setLoading(true);
    await register({ email, name, password });
    setLoading(false);
    navigate("/");
  };

  return (
    <>
      <h1>Halaman Register</h1>
      <RegisterInput
        register={onRegisterHandler}
        loading={loading}
      ></RegisterInput>
    </>
  );
};

export default RegisterPage;
