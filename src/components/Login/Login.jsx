import AuthPage from "../AuthPage/AuthPage";
import InputForm from "../InputForm/InputForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import Preloader from "../Preloader/Preloader";
import { useEffect } from "react";

function Login({ onLogin, isError, isErrorMessage, isLoadingResults }) {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    const { email, password } = values;
    onLogin(email, password, e, setValues);
  }

  useEffect(() => {
    resetForm();
  }, []);

  return (
    <AuthPage
      link="/signup"
      isValid={isValid}
      isError={isError}
      isErrorMessage={isErrorMessage}
      onSubmit={handleSubmit}
    >
      {isLoadingResults && <Preloader />}

      <InputForm
        title="E-mail"
        type="email"
        placeholderText="Введите email"
        name="email"
        value={values.email || ''}
        onChange={handleChange}
        error={errors.email}
        isValid={isValid}
      />

      <InputForm
        title="Пароль"
        type="password"
        placeholderText="Введите пароль"
        name="password"
        value={values.password || ''}
        onChange={handleChange}
        error={errors.password}
        isValid={isValid}
      />
    </AuthPage>
  );
}

export default Login;
