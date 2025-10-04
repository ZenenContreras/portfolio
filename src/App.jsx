import './index.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <div className='min-h-screen w-full overflow-x-hidden bg-[#090a0c] flex flex-col items-center'>
      <NavBar/>
      <Home/>
      <Skills/>
      <Projects/>
    </div>

  )
}

export default App
