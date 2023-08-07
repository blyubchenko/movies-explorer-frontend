import { Link } from "react-router-dom";
import InputForm from "../InputForm/InputForm";
import "./Profile.css";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Profile({ isEditMode, onEditProfile, valueInput }) {
  const { values, handleChange, errors, isValid, resetForm, setValues } =
    useFormAndValidation({ name: valueInput.name, email: valueInput.email });
  return (
    <div className="main main_page_profil">
      <form className="form profil" action="">
        <h1 className="form__title form__title_page_profil">
          Привет, {valueInput.name}!
        </h1>
        <fieldset className="form__wrapper">
          <InputForm
            title="Иия"
            type="text"
            placeholderText="Введите имя"
            classInput="profil__input"
            classLabel="profil__label"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            inputLength={[2, 30]}
            onDisabled={!isEditMode}
          />
          <div className="line-decor line-decor_page_profil"></div>
          <InputForm
            title="E-mail"
            type="email"
            placeholderText="Введите email"
            classInput="profil__input"
            classLabel="profil__label"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            isValid={isValid}
            onDisabled={!isEditMode}
          />
        </fieldset>
        <button
        type={isEditMode && "submit"}
          disabled={!isValid}
          className={
            isEditMode
              ? `form__button ${!isValid && "form__button_inactive"}`
              : "profil__button"
          }
          onClick={onEditProfile}
        >
          {isEditMode ? "Сохранить" : "Редактировать"}
        </button>
      </form>
      <Link
        to="/"
        className={isEditMode ? "link_signout_hidden" : "link link_signout"}
      >
        Выйти из аккаунта
      </Link>
    </div>
  );
}

export default Profile;
