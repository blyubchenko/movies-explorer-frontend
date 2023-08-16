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
import * as MainApi from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setСurrentUser] = useState({
    name: "",
    email: "",
  });

  const [isError, setError] = useState(false);
  const [isErrorMessage, setErrorMessage] = useState("");
  const [isLoadingResults, setLoadingResults] = useState(false);
  const [saveMovies, setSaveMovies] = useState([]);
  const [filteredSaveMovies, setFilteredSaveMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      getUserData();
      getSaveMovies();
  }, []);

  useEffect(() => {
    setFilteredSaveMovies(saveMovies);
  }, [saveMovies]);

  function getUserData() {
    MainApi.getUserData()
      .then((res) => {
        const { name: userName, email: userEmail } = res;
        setСurrentUser((prevProfile) => ({
          ...prevProfile,
          name: userName,
          email: userEmail,
        }));
        setLoggedIn(true);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setErrorMessage(err.message);
      });
  }

  function handleLogin(e) {
    e.preventDefault();
    setLoggedIn(true);
  }

  function register(name, email, password) {
    setLoadingResults(true);
    MainApi.register(name, email, password)
      .then((res) => {
        setError(false);
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setErrorMessage(err.message);
      })
      .finally(() => {
        setLoadingResults(false);
      });
  }

  function login(email, password, event, setFormValue) {
    setLoadingResults(true);
    MainApi.login(email, password)
      .then((data) => {
        if (data.message === "Вход выполнен") {
          setFormValue({ email: "", password: "" });
          handleLogin(event);
          getUserData();
          getSaveMovies();
          setError(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setErrorMessage(err.message);
      })
      .finally(() => {
        setLoadingResults(false);
      });
  }

  function logout() {
    setLoadingResults(true);
    MainApi.logout()
      .then((data) => {
        if (data.message === "Выход выполнен") {
          localStorage.removeItem("searchQuery");
          localStorage.removeItem("chekedShort");
          setSaveMovies([]);
          setСurrentUser({});
          setLoggedIn(false);
          navigate("/");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoadingResults(false);
      });
  }

  function handleUpdateUser(userInfo) {
    setLoadingResults(true);
    MainApi.editUserData(userInfo)
      .then((data) => {
        setСurrentUser(data.user);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setErrorMessage(err.message);
      })
      .finally(() => {
        setLoadingResults(false);
      });
  }

  function getSaveMovies() {
    setLoadingResults(true);
    MainApi.getSaveMovies()
      .then((res) => {
        setSaveMovies(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingResults(false);
      });
  }

  function handleSeveMovie(movie) {
    MainApi.saveMovie(movie)
      .then((data) => {
        setSaveMovies([data, ...saveMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSeveMovieDelete(movieId) {
    MainApi.deleteMovie(movieId)
      .then(() => {
        setSaveMovies((saveMovies) =>
          saveMovies.filter((item) => movieId !== item._id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={Movies}
                  saveMovies={saveMovies}
                  handleSeveMovieDelete={handleSeveMovieDelete}
                  handleSeveMovie={handleSeveMovie}
                  isLoadingResults={isLoadingResults}
                  setLoadingResults={setLoadingResults}
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
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  isLoadingResults={isLoadingResults}
                  element={SavedMovies}
                  saveMovies={saveMovies}
                  filteredSaveMovies={filteredSaveMovies}
                  setFilteredSaveMovies={setFilteredSaveMovies}
                  setSaveMovies={setSaveMovies}
                  handleSeveMovieDelete={handleSeveMovieDelete}
                />
                <Footer />
              </div>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                <Header loggedIn={loggedIn} />
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={Profile}
                  isError={isError}
                  isErrorMessage={isErrorMessage}
                  logout={logout}
                  handleUpdateUser={handleUpdateUser}
                  isLoadingResults={isLoadingResults}
                />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <div className="page__container">
                <Register
                  isError={isError}
                  isErrorMessage={isErrorMessage}
                  onRegister={register}
                  isLoadingResults={isLoadingResults}
                />
              </div>
            }
          />
          <Route
            path="/signin"
            element={
              <div className="page__container">
                <Login
                  onLogin={login}
                  isError={isError}
                  isErrorMessage={isErrorMessage}
                  isLoadingResults={isLoadingResults}
                />
              </div>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
