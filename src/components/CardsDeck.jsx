import { useGlobal } from "../contexts/GlobalContext"

export default function CardsDeck() {
  const { filteredMovies, filteredTvShows, RateToStar } = useGlobal();
  let flagCode;
  let flagUrl;

  function handleFlags(video) {
    flagCode = video.original_language
    if (flagCode === 'en') { flagCode = 'gb' } /* non posso distinguere tra UK, US, ecc. ho solo la lingua */
    if (flagCode === 'ja') { flagCode = 'jp' }
    if (flagCode === 'ko') { flagCode = 'kr' }
    if (flagCode === 'zh') { flagCode = 'cn' }
    if (flagCode === 'el') { flagCode = 'gl' }
    if (flagCode === 'he') { flagCode = 'il' }
    if (flagCode === 'da') { flagCode = 'dk' }
    if (flagCode === 'os') { flagCode = 'ir' }
    flagUrl = 'https://flagcdn.com/16x12/' + flagCode + '.png'
  }


  return (
    <>
      <div className='container card_deck'>
        <div className="row g-3 cards_row">
          {
            filteredMovies.map((movie) => {
              /* Handle flags */
              handleFlags(movie);
              /* Get poster */
              const posterUrlMovies = `https://image.tmdb.org/t/p/w342${movie.poster_path}`
              
              return (
                <div className="col col-12 col-md-6 col-lg-4 col-xl-3" id={movie.id} key={movie.id}>
                  <div className="card">
                    <img className='card-img' src={posterUrlMovies} alt={"# " + movie.title + " | missing cover..."} />
                    <div className="card-img-overlay" >
                      <h5 className="card-title">{movie.title}</h5>
                      <h6 className="card-subtitle mb-2">{movie.original_title}</h6>
                      <p className="card-text">{movie.overview}</p>
                      <div className='flagAndStars'>
                        <img src={flagUrl} alt={'bandiera ' + flagCode} width='16px' height='12px' />
                        <span>
                          {RateToStar(Math.ceil(movie.vote_average / 2))}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          {
            filteredTvShows.map((show) => {
              /* Handle flags */
              handleFlags(show);
              /* Get poster */
              const posterUrlShows = `https://image.tmdb.org/t/p/w342${show.poster_path}`
              return (
                <div className="col col-12 col-md-6 col-lg-4 col-xl-3" key={show.id}>
                  <div className="card">
                    <img src={posterUrlShows} className="card-img" alt={"# " + show.name + " | missing cover..."} />
                    <div className="card-img-overlay">
                      <h5 className="card-title">{show.name}</h5>
                      <h6 className="card-subtitle mb-2">{show.original_name}</h6>
                      <p className="card-text">{show.overview}</p>
                      <div className='flagAndStars'>
                        <img src={flagUrl} alt={'bandiera ' + flagCode} width='16px' height='12px' />
                        <span>
                          {RateToStar(Math.ceil(show.vote_average / 2))}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )

            })
          }
        </div>
      </div>
    </>
  )
}