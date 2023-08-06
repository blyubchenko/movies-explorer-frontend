import AuthPage from '../AuthPage/AuthPage';
import InputForm from '../InputForm/InputForm';
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Login() {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();
    return(
      <AuthPage link="/signin" isValid={isValid}>

     <InputForm
        title="E-mail"
        type="email"
        placeholderText="Введите email"
        name="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email} 
        isValid={isValid}
      />

      <InputForm 
        title="Пароль"
        type="password" 
        placeholderText="Введите пароль"
        name="password"
        value={values.password}
        onChange={handleChange}
        error={errors.password}
        isValid={isValid}
      />

     </AuthPage>
    )
}

export default Login;