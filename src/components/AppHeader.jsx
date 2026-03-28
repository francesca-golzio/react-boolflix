import { useGlobal } from "../contexts/GlobalContext"
import HeaderSearchbar from "./HeaderSearchBar";

export default function AppHeader() {
  const { handleSubmit, searchKey, handleSearch, GetFilteredMovies,
    setFilteredMovies,
    filteredMovies,
    GetFilteredTvShows,
    setFilteredTvShows,
    filteredTvShows} = useGlobal();

  return (
    <>
      <header>
        <div className="container">

          <h1>
            Boolflix
          </h1>

          <HeaderSearchbar />
          {/* <div>
            <form onSubmit={handleSubmit}>
              <input type="text" value={searchKey} name="" onChange={handleSearch} />
              <button className='btn '>Search</button>
            </form>
          </div> */}

        </div>
      </header>
    </>
  )
}