import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  //qui metterò le variabili di stato da passare ai children

  /* Filtra Film */
  const MOVIE_DB_API_KEY = import.meta.env.MOVIE_DB_API_KEY;
  const search_movies_endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_DB_API_KEY}&query=`;
  const [filteredMovies, setFilteredMovies] = useState([]);

  function GetFilteredMovies(e) {
    //console.log('fgh');

    /* API request */
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWVkM2QwNzBlNzk3Nzk1YjY1NTg2NzMwMWUwNWFiYiIsIm5iZiI6MTc3NDUxNTM4OS44NjgsInN1YiI6IjY5YzRmNGJkOTA5YzJjYmMwNjdjYWQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6cRHRGJYuk-vEQOZ9BwomCcNTGsVjUUCgBQn51rxUSk'
      }
    };
    //console.log(search_movies_endpoint + searchKey);    
    fetch(search_movies_endpoint + searchKey, options)
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        const { results } = res;
        setFilteredMovies(results);
      })
      .catch(err => console.error(err));
    console.log(filteredMovies);

  }

  /* Filtra Serie */
  const search_tv_shows_endpoint = `https://api.themoviedb.org/3/search/tv?api_key=${MOVIE_DB_API_KEY}&language=it_IT&query=&query=`;
  const [filteredTvShows, setFilteredTvShows] = useState([]);

  function GetFilteredTvShows(e) {
    //console.log('fgh');

    /* API request */
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWVkM2QwNzBlNzk3Nzk1YjY1NTg2NzMwMWUwNWFiYiIsIm5iZiI6MTc3NDUxNTM4OS44NjgsInN1YiI6IjY5YzRmNGJkOTA5YzJjYmMwNjdjYWQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6cRHRGJYuk-vEQOZ9BwomCcNTGsVjUUCgBQn51rxUSk'
      }
    };
    //console.log(search_tv_shows_endpoint + searchKey);    
    fetch(search_tv_shows_endpoint + searchKey, options)
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        const { results } = res;
        setFilteredTvShows(results);
      })
      .catch(err => console.error(err));
    console.log(filteredTvShows);
  }


  return (
    <GlobalContext.Provider
      value={{
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