import { useState, useEffect } from 'react'

function App() {

  const [searchKey, setSearchKey] = useState([]);


  function handleSearch(e) {
    e.preventDefault();
    setSearchKey(e.target.value)
  }
  
  const SEARCH_MOVIES_API_KEY = import.meta.env.MOVIE_DB_API_KEY;
  const search_movies_endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${SEARCH_MOVIES_API_KEY}&query=`;
  const [filteredMovies, setFilteredMovies] = useState([]);
  //console.log(filteredMovies);
  
  function GetFilteredMovies(e) {
    //console.log('fgh');
    
    e.preventDefault();
    
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
        const {results} = res;
        setFilteredMovies(results);

        
      })
      .catch(err => console.error(err));
    console.log(filteredMovies);

    
  }
  
  return (
    <>

      <div>
        <form onSubmit={GetFilteredMovies}>
          <input type="text" value={searchKey} name="" onChange={handleSearch} />
          <button >Cerca</button>
        </form>
      </div>
      <div>
        <ul>
          {
            filteredMovies.map((movie) => {
              let flagCode = movie.original_language
              if (flagCode === 'en') {flagCode = 'gb'}
              if (flagCode === 'ja') {flagCode = 'jp'}
              if (flagCode === 'ko') {flagCode = 'kr'}
              if (flagCode === 'zh') {flagCode = 'cn'}
              if (flagCode === 'el') {flagCode = 'gl'}
              if (flagCode === 'he') {flagCode = 'il'}
              if (flagCode === 'da') {flagCode = 'dk'}
              /* if (flagCode === 'os') {flagCode = ''} non sono riuscita a capire cosa fosse */
              const flagUrl = 'https://flagcdn.com/16x12/' + flagCode + '.png'
              return (
                <li key={movie.id}>
                  {movie.title} 
                  {movie.original_title} 
                  <img src={flagUrl} alt={'bandiera '+ flagCode} width='16px' height='12px'/> 
                  {movie.vote_average}
                </li>
              )
            })
          }
        </ul>
      </div>

    </>
  )
}

export default App
