import { GlobalProvider, useGlobal } from './contexts/GlobalContext';
import AppHeader from './components/AppHeader';
import CardsDeck from './components/CardsDeck';


function App() {

  return (
    <>
      <GlobalProvider>
        <AppHeader />

        <main>
          <div className='container'>
            <CardsDeck />
          </div>
        </main >

      </GlobalProvider>
    </>
  )
}

export default App
