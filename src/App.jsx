import './index.css'
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {
  return (
    <div className='min-h-screen w-full overflow-x-hidden bg-[#090a0c] flex flex-col items-center'>
      <NavBar/>
      <Home/>
    </div>

  )
}

export default App
