import AuthPage from '../AuthPage/AuthPage';
import InputForm from '../InputForm/InputForm';
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import Preloader from '../Preloader/Preloader';
import { useEffect } from 'react';

function Register({isError, isErrorMessage, onRegister, isLoadingResults}) {
  const { values, handleChange, errors, isValid, resetForm } =
  useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const {name, email, password } = values;
    onRegister(name, email, password);
  }

  useEffect(() => {
    resetForm();
  }, []);

    return(
     <AuthPage link="/signin" isValid={isValid} isError={isError} isErrorMessage={isErrorMessage} onSubmit={handleSubmit}>

      {isLoadingResults && <Preloader/>}

      <InputForm 
         title="Имя"
         type="text"
         placeholderText="Введите имя" 
         name="name"
         value={values.name || ''}
         onChange={handleChange}
         error={errors.name}
         isValid={isValid}
         inputLength={[2,30]}
      />
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
        type="Password" 
        placeholderText="Введите пароль"
        name="password"
        value={values.password || ''}
        onChange={handleChange}
        error={errors.password}
        isValid={isValid}
      />
     </AuthPage>
    )
}

export default Register;