import './index.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className='min-h-screen w-full overflow-x-hidden bg-[#090a0c] flex flex-col items-center'>
      <NavBar/>
      <HomePage />
      <Footer />
    </div>

  )
}

export default App
