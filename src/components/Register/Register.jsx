import AuthPage from "../AuthPage/AuthPage";
import InputForm from "../InputForm/InputForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import Preloader from "../Preloader/Preloader";
import { useEffect } from "react";
import { emailRegex } from "../../utils/constants";

function Register({
  isError,
  isErrorMessage,
  onRegister,
  isLoadingResults,
  setError,
  setErrorMessage,
}) {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = values;
    onRegister(name, email, password, setValues);
  }

  useEffect(() => {
    setError(false);
    setErrorMessage("");
    resetForm();
  }, []);

  return (
    <div className="page__container">
      <AuthPage
        link="/signin"
        isValid={isValid}
        isError={isError}
        isErrorMessage={isErrorMessage}
        onSubmit={handleSubmit}
      >
        {isLoadingResults && <Preloader />}

        <InputForm
          title="Имя"
          type="text"
          placeholderText="Введите имя"
          name="name"
          value={values.name || ""}
          onChange={handleChange}
          error={errors.name}
          isValid={isValid}
          inputLength={[2, 30]}
        />
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
          type="Password"
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

export default Register;
