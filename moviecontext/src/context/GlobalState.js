import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

// createContext
export const GlobalContext = createContext();

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState); //birinci parametre reducer fonksiyonu ikincisi ise bir başlangıç değeridir

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
    //önce json formatına çeviriyoruz
  }, [state]);

  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie }); //payload gönderilen değerdir
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const moveToWatchlist = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatched = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
  };
  // Provider context

  console.log(state);
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatched,
        removeMovieFromWatchlist,
        addMovieToWatchlist,
        moveToWatchlist,
        removeMovieFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
