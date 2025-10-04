import Carousel from "./ui/Carousel"

function Projects () {

    const projects = [
        {"name": "Tout Á Un Clic La | Full-stack e-commerce", "Description": "Latin products in Montreal. Scaled to 100+ active users with real-time inventory tracking, secure payment integration, and optimized performance." , "Tech" : ["Next.js", "Express.js", "Tailwind CSS", "Supabase"],"icon" : ["/SkillsLogo/nextjs.svg" , "/SkillsLogo/express.svg", "/SkillsLogo/tailwindcss.svg", "/SkillsLogo/supabase.svg"], "Link": "https://toutaunclicla.com"},
    ]

    return (
        <section className="text-[#FAFAFF] w-full max-w-[1100px] py-10 sm:py-16 px-4 sm:px-6 lg:px-10 flex flex-col items-center justify-center gap-6 lg:gap-12">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl lg:text-5xl font-bold text-center">Some Of my <span className="text-blue-500">Projects</span></h1>
                <span className="text-sm text-[#95999d]">Real-world applications showcasing my approach to problem-solving and code quality.</span>
            </div>

            <div className="flex flex-col gap-4">
                {projects.map((projects, index)=>{
                    return(
                        <div key={index} className="flex flex-col lg:flex-row gap-6 lg:gap-22 p-3 items-center ">
                            <Carousel />
                            <div className="flex flex-col w-62 gap-3">
                                <h1 className="font-bold text-2xl text-left">{projects.name}</h1>
                                <p className="text-sm text-[#95999d]">{projects.Description}</p>
                                <button className="p-2 bg-[#141414] rounded-lg border-1 ">
                                    <a href={projects.Link} className="flex flex-row items-center justify-center gap-4">
                                        <img src="/link.svg" className="w-6" alt="" />
                                        <span>Source</span>
                                    </a>
                                </button>

                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default Projects