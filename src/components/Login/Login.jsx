import AuthPage from "../AuthPage/AuthPage";
import InputForm from "../InputForm/InputForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import Preloader from "../Preloader/Preloader";
import { useEffect } from "react";
import { emailRegex } from "../../utils/constants";

function Login({
  onLogin,
  isError,
  isErrorMessage,
  isLoadingResults,
  setError,
  setErrorMessage,
}) {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    const { email, password } = values;
    onLogin(email, password, setValues);
  }

  useEffect(() => {
    setError(false);
    setErrorMessage("");
    resetForm();
  }, []);

  return (
    <div className="page__container">
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
          value={values.email || ""}
          onChange={handleChange}
          error={errors.email}
          isValid={isValid}
          pattern={emailRegex}
        />

        <InputForm
          title="Пароль"
          type="password"
          placeholderText="Введите пароль"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
          error={errors.password}
          isValid={isValid}
        />
      </AuthPage>
    </div>
  );
}

export default Login;
