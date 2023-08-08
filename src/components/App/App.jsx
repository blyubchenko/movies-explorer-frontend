import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Виталий', 
    email: 'pochta@yandex.ru'
  });
  
  const [isEditMode, setEditMode] = useState(false);
  const [isSavedMode, setSavedMode] =useState(false);

  function handleEditProfileClick(e) {
    e.preventDefault();
    setEditMode(!isEditMode);
  }

  function handleSaveFilmClick(e) {
    e.preventDefault();
    setSavedMode(!isSavedMode);
  }

  // const handleUpdateUser = (e) => {
  //   const field = e.target.name;
  //   const value = e.target.value;
  
  //   setProfile(prevState => ({
  //     ...prevState, 
  //     [field]: value  
  //   }));
  // }
  
  return (
    <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <div className="page__container">
                <Header loggedIn={loggedIn} />
                <Main />
                <Footer />
              </div>
            }
          />

          <Route
            path="/movies"
            element={
              <div className="page__container">
                <Header loggedIn={loggedIn} />
                <Movies
                isSavedMode={isSavedMode}
                onSaveFilm={handleSaveFilmClick}
                />
                <Footer />
              </div>
            }
          />

          <Route
          path="/saved-movies"
          element={
            <div className="page__container">
              <Header loggedIn={loggedIn} />
              <SavedMovies/>
              <Footer />
            </div>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <Header loggedIn={loggedIn} />
              <Profile
                valueInput={profile}
                isEditMode={isEditMode}
                onEditProfile={handleEditProfileClick}
              />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <div className="page__container">
              <Register/>
            </div>
          }
        />
          <Route
          path="/signup"
          element={
            <div className="page__container">
              <Login/>
            </div>
          }
        />

          <Route path='*'
          element={
            <NotFoundPage />
          }
          />


        </Routes>
    </div>
  );
}

export default App;
