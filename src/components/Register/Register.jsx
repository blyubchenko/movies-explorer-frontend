import AuthPage from '../AuthPage/AuthPage';
import InputForm from '../InputForm/InputForm';
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Register() {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
  useFormAndValidation();
    return(
     <AuthPage link="/signup" isValid={isValid}>
      <InputForm 
         title="Имя"
         type="text"
         placeholderText="Введите имя" 
         name="name"
         value={values.name}
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
        value={values.email}
        onChange={handleChange}
        error={errors.email}
        isValid={isValid}
      />
       <InputForm
        title="Пароль"
        type="Password" 
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

export default Register;