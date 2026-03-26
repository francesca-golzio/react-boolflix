import { useState, useEffect } from 'react'

function App() {

  const [ searchKey, setSearchKey ] = useState('');

function handleSetSearchKey(e) {
  setSearchKey(e.target.value);

}

  


  return (
    <>

      <div>
        <form>
          <input type="text" value={searchKey} name="" onChange={handleSetSearchKey}/>
          <button onClick={() => setSearchKey}>Cerca</button>
        </form>
      </div>


    </>
  )
}

export default App
