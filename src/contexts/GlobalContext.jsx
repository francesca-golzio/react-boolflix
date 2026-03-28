import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext();

function GlobalProvider({ children }) {

  /* Ricerca */
  const [searchKey, setSearchKey] = useState('');

  /* Filtra Film */
  const MOVIE_DB_API_KEY = import.meta.env.MOVIE_DB_API_KEY;
  const search_movies_endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_DB_API_KEY}&query=`;
  const [filteredMovies, setFilteredMovies] = useState([]);

  function GetFilteredMovies(e) {

    /* API request */
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWVkM2QwNzBlNzk3Nzk1YjY1NTg2NzMwMWUwNWFiYiIsIm5iZiI6MTc3NDUxNTM4OS44NjgsInN1YiI6IjY5YzRmNGJkOTA5YzJjYmMwNjdjYWQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6cRHRGJYuk-vEQOZ9BwomCcNTGsVjUUCgBQn51rxUSk'
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
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWVkM2QwNzBlNzk3Nzk1YjY1NTg2NzMwMWUwNWFiYiIsIm5iZiI6MTc3NDUxNTM4OS44NjgsInN1YiI6IjY5YzRmNGJkOTA5YzJjYmMwNjdjYWQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6cRHRGJYuk-vEQOZ9BwomCcNTGsVjUUCgBQn51rxUSk'
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