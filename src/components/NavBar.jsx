import '../App.css'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


function NavBar () {

    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const navLinks = [
        {"name" : "Home" , "section": "home"},
        {"name" : "Skills" , "section": "skills"},
        {"name" : "Projects" , "section": "projects"},
        {"name" : "Contact" , "path": "/Contact"},
    ]

        const handleSectionClick = (section) => {
        // Si NO estamos en homepage, ir primero a homepage
        if (location.pathname !== '/') {
            navigate('/')
            setTimeout(() => {
                document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
            }, 100)
        } else {
            // Ya estamos en homepage, solo hacer scroll
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
        }
        setIsOpen(false)
    }

    return (
        <nav className="text-[#FAFAFF] bg-[#090a0c] fixed top-0 w-full max-w-[1100px] py-4 sm:py-5 px-4 sm:px-6 lg:px-10 flex items-center justify-between z-100">
            <Link  to='/'>
                <div className="flex flex-row items-center gap-2 font-bold">
                    <img 
                        src="/ImagenYo.jpg" 
                        alt="Zenen Contreras" 
                        className="w-10 sm:w-12 rounded-2xl"
                        />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                        <h2 className="text-sm sm:text-base text-[#FAFAFF]">Zenen.dev</h2>
                        <span className="text-[#d6d6d6] font-light text-[10px] sm:text-xs">
                            ~Zenen Contreras
                        </span>
                    </div>
                </div>
            </Link>

            <div className="hidden lg:flex flex-row items-center gap-4">
                {navLinks.map((link, index) => (
                    link.path ? (
                        <Link 
                            key={index}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-blue-500 transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ) : (
                        <button
                            key={index}
                            onClick={() => handleSectionClick(link.section)}
                            className="text-white text-left hover:text-blue-500 transition-colors duration-200"
                        >
                            {link.name}
                        </button>
                    )
                ))}
            </div>

            {/* Menú móvil */}
            <button onClick={()=>setIsOpen(!isOpen)} className="relative lg:hidden p-2 text-white" aria-label="Menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Menú móvil con transición */}
            <div className={`
                absolute z-100 top-16 right-4 bg-[#1a1b1b] rounded-xl shadow-2xl
                flex flex-col gap-4 p-5 min-w-[200px]
                transition-all duration-300 ease-in-out lg:hidden
                ${isOpen 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }
            `}>
                {navLinks.map((link, index) => (
                    <a 
                        href={link.section ? `/#${link.section} `: link.path} 
                        key={index} 
                        onClick={() => setIsOpen(false)}
                        className="text-white hover:text-blue-500 transition-colors duration-200"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default NavBar