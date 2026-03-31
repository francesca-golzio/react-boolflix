import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext();

function GlobalProvider({ children }) {

  /* Ricerca */
  const [searchKey, setSearchKey] = useState('');

  /* Filtra Film */
  const MOVIE_DB_API_KEY = import.meta.env.VITE_MOVIE_DB_API_KEY;
  const MOVIE_DB_API_BEARER = import.meta.env.VITE_MOVIE_DB_API_BEARER;

  const search_movies_endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_DB_API_KEY}&query=`;
  const [filteredMovies, setFilteredMovies] = useState([]);

  function GetFilteredMovies(e) {

    /* API request */
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: MOVIE_DB_API_BEARER
      }
    };
    fetch(search_movies_endpoint + searchKey, options)
      .then(res => res.json())
      .then((res) => {
        const { results } = res;
        setFilteredMovies(results);
      })
      .catch(err => console.error(err));

  }

  /* Filtra Serie */
  const search_tv_shows_endpoint = `https://api.themoviedb.org/3/search/tv?api_key=${MOVIE_DB_API_KEY}&language=it_IT&query=&query=`;
  const [filteredTvShows, setFilteredTvShows] = useState([]);

  function GetFilteredTvShows(e) {

    /* API request */
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: MOVIE_DB_API_BEARER
      }
    };
    fetch(search_tv_shows_endpoint + searchKey, options)
      .then(res => res.json())
      .then((res) => {
        const { results } = res;
        setFilteredTvShows(results);
      })
      .catch(err => console.error(err));
  }


  return (
    <GlobalContext.Provider
      value={{
        searchKey,
        setSearchKey,
        GetFilteredMovies,
        setFilteredMovies,
        filteredMovies,
        GetFilteredTvShows,
        setFilteredTvShows,
        filteredTvShows,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

function useGlobal() {
  const context = useContext(GlobalContext);

  return context;
}

export { GlobalProvider, useGlobal }