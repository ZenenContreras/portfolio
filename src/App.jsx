import './index.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollTrigger, gsap } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen w-full overflow-x-hidden bg-[#090a0c] flex flex-col items-center'>
        <NavBar/>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App
