import "./App.css";
import Main from "../Main/Main";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
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
  }, [loggedIn]);

  function getUserData() {
    MainApi.getUserData()
      .then((res) => {
        const { name: userName, email: userEmail } = res;
        setСurrentUser((prevProfile) => ({
          ...prevProfile,
          name: userName,
          email: userEmail,
        }));
        handleLogin();
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setErrorMessage(err.message);
      });
  }

  const handleLogin = () => {
    if (!localStorage.getItem("isLoggedIn")) {
      localStorage.setItem("isLoggedIn", true);
    }
    setLoggedIn(true);
  };

  function register(name, email, password, setFormValue) {
    setLoadingResults(true);
    MainApi.register(name, email, password)
      .then((res) => {
        login(email, password, setFormValue);
        setError(false);
        navigate("/signin", { replace: true });
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

  function login(email, password, setFormValue) {
    setLoadingResults(true);
    MainApi.login(email, password)
      .then((data) => {
        if (data.message === "Вход выполнен") {
          setFormValue({ email: "", password: "" });
          handleLogin();
          getUserData();
          getSaveMovies();
          setError(false);
          navigate("/movies", { replace: true });
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
          localStorage.clear();
          setSaveMovies([]);
          setFilteredSaveMovies([]);
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

  function filterDeletedMovies(movieId, movies) {
    return movies.filter((item) => movieId !== item._id);
  }

  function handleSeveMovieDelete(movieId) {
    MainApi.deleteMovie(movieId)
      .then(() => {
        setSaveMovies(filterDeletedMovies(movieId, saveMovies));
        setFilteredSaveMovies(filterDeletedMovies(movieId, filteredSaveMovies));
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
            path="/signup"
            element={
              loggedIn ? (
                <Navigate to="/" />
              ) : (
                <Register
                  setError={setError}
                  setErrorMessage={setErrorMessage}
                  isError={isError}
                  isErrorMessage={isErrorMessage}
                  onRegister={register}
                  onLogin={login}
                  isLoadingResults={isLoadingResults}
                />
              )
            }
          />

          <Route
            path="/signin"
            element={
              loggedIn ? (
                <Navigate to="/" />
              ) : (
                <Login
                  setError={setError}
                  setErrorMessage={setErrorMessage}
                  onLogin={login}
                  isError={isError}
                  isErrorMessage={isErrorMessage}
                  isLoadingResults={isLoadingResults}
                />
              )
            }
          />

          <Route
            path="/movies"
            element={
              <ProtectedRouteElement
                loggedIn={loggedIn}
                element={Movies}
                saveMovies={saveMovies}
                handleSeveMovieDelete={handleSeveMovieDelete}
                handleSeveMovie={handleSeveMovie}
                isLoadingResults={isLoadingResults}
                setLoadingResults={setLoadingResults}
              />
            }
          />

          <Route path="/" element={<Main loggedIn={loggedIn} />} />

          <Route
            path="/saved-movies"
            element={
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
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                loggedIn={loggedIn}
                element={Profile}
                isError={isError}
                isErrorMessage={isErrorMessage}
                logout={logout}
                handleUpdateUser={handleUpdateUser}
                isLoadingResults={isLoadingResults}
              />
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
