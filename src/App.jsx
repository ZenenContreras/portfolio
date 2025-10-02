import './index.css'
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {
  return (
    <div className='flex bg-[#090a0c] flex-col justify-center items-center'>
      <NavBar/>
      <Home/>
    </div>

  )
}

export default App
