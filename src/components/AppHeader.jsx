import HeaderSearchbar from "./HeaderSearchBar";

export default function AppHeader() {

  return (
    <>
      <header>
        <div className="container">

          <h1>
            Boolflix
          </h1>

          <HeaderSearchbar />

        </div>
      </header>
    </>
  )
}