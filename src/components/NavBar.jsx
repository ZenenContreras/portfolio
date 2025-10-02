import '../App.css'

function NavBar () {

    const navLinks = [
        {"name" : "Home" , "Link": "/"},
        {"name" : "Skills" , "Link": "/Skills"},
        {"name" : "Projects" , "Link": "/Projects"},
        {"name" : "Contact" , "Link": "/Contact"},
    ]

    return (
        <div className="py-5 lg:w-[900px] flex items-center justify-between">
            <div className="flex flex-row items-center gap-2 font-bold">
                <img src="/ImagenYo.png" alt=""  className="w-12 rounded-2xl"/>
                <h2 className="">Zenen.dev</h2>
                <span className="text-[#d6d6d6] font-light text-xs">~Zenen Contreras</span>
            </div>

            <div className="hidden lg:flex flex-row items-center justify-between gap-4">
                {navLinks.map((link,index)=>{
                    return <a href={link.Link} key={index} className="text-black hover:text-blue-600">{link.name}</a>
                })}
            </div>



        </div>
    )
}

export default NavBar