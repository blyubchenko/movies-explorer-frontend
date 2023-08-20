import { Link } from "react-router-dom";
import InputForm from "../InputForm/InputForm";
import "./Profile.css";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Preloader from "../Preloader/Preloader";
import React, { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import { emailRegex } from "../../utils/constants";

function Profile({
  handleUpdateUser,
  logout,
  isError,
  isErrorMessage,
  isLoadingResults,
  loggedIn,
}) {
  const [isSuccessNotificationVisible, setSuccessNotificationVisible] =
    useState(false);
  const [isEditMode, setEditMode] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, resetForm, setValues } =
    useFormAndValidation();

  const hasChanges = () => {
    return (
      values.name !== currentUser.name || values.email !== currentUser.email
    );
  };

  function handleEditProfileClick() {
    setEditMode(!isEditMode);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEditMode(false);
    handleUpdateUser({
      name: values.name,
      email: values.email,
    });
    setSuccessNotificationVisible(true);
    setTimeout(() => {
      setSuccessNotificationVisible(false);
    }, 3000);
  }

  useEffect(() => {
    resetForm();
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser, resetForm, setValues]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <div className="main main_page_profil">
        {isLoadingResults && <Preloader />}
        <form className="form profil" onSubmit={handleSubmit}>
          <h1 className="form__title form__title_page_profil">
            Привет, {currentUser.name}!
          </h1>

          <fieldset className="form__wrapper form__wrapper_profil">
            <InputForm
              title="Иия"
              type="text"
              placeholderText="Введите имя"
              classInput="profil__input"
              classLabel="profil__label"
              name="name"
              value={values.name || ""}
              onChange={handleChange}
              error={errors.name}
              inputLength={[2, 30]}
              onDisabled={!isEditMode && !isError}
            />
            <div className="line-decor line-decor_page_profil"></div>
            <InputForm
              title="E-mail"
              type="email"
              placeholderText="Введите email"
              classInput="profil__input"
              classLabel="profil__label"
              name="email"
              value={values.email || ""}
              onChange={handleChange}
              error={errors.email}
              isValid={isValid}
              pattern={emailRegex}
              onDisabled={!isEditMode && !isError}
            />
          </fieldset>
          {!isError ? (
            isSuccessNotificationVisible && (
              <span className="notification">Профиль успешно сохранен!</span>
            )
          ) : (
            <ErrorMessage isError={isError} isErrorMessage={isErrorMessage} />
          )}
          {!isEditMode && !isError ? (
            <button
              type="button"
              className="profil__button"
              onClick={handleEditProfileClick}
            >
              Редактировать
            </button>
          ) : (
            <button
              type="submit"
              disabled={!isValid || (isEditMode && !hasChanges())}
              className={`form__button ${
                (!isValid || !hasChanges()) && "form__button_inactive"
              }`}
              onClick={handleSubmit}
            >
              Сохранить
            </button>
          )}
        </form>
        <Link
          onClick={logout}
          className={
            isEditMode || isError ? "link_signout_hidden" : "link link_signout"
          }
        >
          Выйти из аккаунта
        </Link>
      </div>
    </>
  );
}

export default Profile;
