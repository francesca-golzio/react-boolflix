import { useGlobal } from "../contexts/GlobalContext"

export default function HeaderSearchbar() {
  const { setSearchKey, searchKey, GetFilteredMovies, GetFilteredTvShows } = useGlobal();

  /* Ricerca */
  function handleSearch(e) {
    e.preventDefault();
    setSearchKey(e.target.value)
  }

  /* Gestisci submit */
  function handleSubmit(e) {
    e.preventDefault();
    GetFilteredMovies();
    GetFilteredTvShows();
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchKey} name="" onChange={handleSearch} />
          <button className='btn '>Search</button>
        </form>
      </div>
    </>
  )
}