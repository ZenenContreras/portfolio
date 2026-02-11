import Carousel from "./ui/Carousel"
import gsap from "gsap/all"
import { useGSAP } from "@gsap/react"

function Projects() {

    useGSAP(() => {
        const projectCards = gsap.utils.toArray('.project-card');
        projectCards.forEach((card) => {
            gsap.fromTo(card, {
                x: 100, opacity: 0
            }, {
                x: 0, opacity: 1, duration: 1,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: true,
                }
            })
        });
    }, [])

    const projects = [
        {
            "name": "Tout Á Un Clic La | Full-stack e-commerce",
            "id" : 1,
            "Description": "Latin products in Montreal. Scaled to 200+ active users with real-time inventory tracking, secure payment integration, and optimized performance.", "Tech": [
                { "name": "Next.js", "icon": "/SkillsLogo/nextjs.svg", "color": "#141414" },
                { "name": "Express.js", "icon": "/SkillsLogo/express.svg", "color": "#141414" },
                { "name": "Tailwind CSS", "icon": "/SkillsLogo/tailwindcss.svg", "color": "#003159" },
                { "name": "Supabase", "icon": "/SkillsLogo/supabase.svg", "color": "#1F4A1C" }
            ],
            "Link": "https://toutaunclicla.com",
            "Github": "",
            "images": [
                { "images": "/projectsMockUp/MockUpToutAunClicLa.jpeg" },
                { "images": "/projectsMockUp/MockUpToutAunClicLaMobile.jpeg" },
                { "images": "/projectsMockUp/Toutaunclicla/Foods.jpeg" },
                { "images": "/projectsMockUp/Toutaunclicla/Cart.jpeg" }
            ]
        },
        {
            "name": "Fabio Canchila | Business Consulting Platform",
            "id" : 2,
            "Description": "Professional consulting platform offering business advisory services, educational resources, and digital products. Features service showcase and content management for books and courses.",
            "Tech": [
                { "name": "React", "icon": "/SkillsLogo/react.svg", "color": "#001629" },
                { "name": "JavaScript", "icon": "/SkillsLogo/javascriptdark.svg", "color": "#4B4206" },
                { "name": "Tailwind CSS", "icon": "/SkillsLogo/tailwindcss.svg", "color": "#003159" },
                { "name": "Supabase", "icon": "/SkillsLogo/supabase.svg", "color": "#1F4A1C" }
            ],
            "Link": "https://fabiocanchila.com",
            "Github": "https://github.com/ZenenContreras/fabiocanchila",
            "images": [
                { "images": "/projectsMockUp/MockUpFabioCanchila.jpeg" },
                { "images": "/projectsMockUp/MockUpFabioCanchilaMobile.jpeg" }
            ]
        },
        {
            "name": "Nazly Royero | Personal Transformation Coaching",
            "id" : 3,
            "Description": "Coaching platform specializing in personal and professional transformation through the 'Método Estrella'. Features blog content, service offerings, and integrated scheduling system for one-on-one sessions.",
            "Tech": [
                { "name": "React", "icon": "/SkillsLogo/react.svg", "color": "#001629" },
                { "name": "JavaScript", "icon": "/SkillsLogo/javascriptdark.svg", "color": "#4B4206" },
                { "name": "Tailwind CSS", "icon": "/SkillsLogo/tailwindcss.svg", "color": "#003159" }
            ],
            "Link": "https://nazlyroyero.com",
            "Github": "https://github.com/ZenenContreras/NazlyRoyero",
            "images": [
                { "images": "/projectsMockUp/MockUpNazly.jpeg" },
                { "images": "/projectsMockUp/Nazlyroyero/blog.jpeg" },
                { "images": "/projectsMockUp/MockUpNazlyMobile.jpeg" }
            ]
        },
        {
            "name": "WeatherNow | Global Forecast Dashboard ",
            "id" : 4,
            "Description": "Weather application delivering real-time forecasts for any city worldwide. Features 7-day predictions, hourly breakdowns, and instant °C/°F conversion.",
            "Tech": [
                { "name": "React.js", "icon": "/SkillsLogo/react.svg", "color": "#001629" },
                { "name": "JavaScript", "icon": "/SkillsLogo/javascriptdark.svg", "color": "#4B4206" },
                { "name": "Tailwind CSS", "icon": "/SkillsLogo/tailwindcss.svg", "color": "#003159" },
                { "name": "Open-Meto", "icon": "/SkillsLogo/api.svg", "color": "#141414" }
            ],
            "Link": "https://weather-f0wgdq0yz-zenen-contreras-projects.vercel.app",
            "Github": "https://github.com/ZenenContreras/weatherApp",
            "images": [
                { "images": "/projectsMockUp/MockUpWeatherApp.jpeg" },
                { "images": "/projectsMockUp/MockUpWeatherAppMobile.jpeg" }
            ]
        }
    ]

    return (
        <section id='projects' className="text-[#FAFAFF] w-full max-w-[1100px] py-22 px-4 sm:px-6 lg:px-10 flex flex-col items-center justify-center gap-6 lg:gap-12 ">
            <div className="flex flex-col gap-2 ">
                <h1 className="text-3xl lg:text-5xl font-bold text-center">Some Of my <span className="text-blue-500">Projects</span></h1>
                <span className="text-sm text-[#95999d] text-center">Real-world applications showcasing my approach to problem-solving and code quality.</span>
            </div>

            <div className="flex flex-col gap-4">
                {projects.map((project) => {
                    return (
                        <div key={project.id} className="project-card flex flex-col lg:flex-row gap-6 lg:gap-22 p-3 items-center">
                            <Carousel baseWidth={350} items={project.images} />
                            <div className="w-[300px] flex flex-col gap-3">
                                <h1 className="font-bold text-2xl text-left">{project.name}</h1>
                                <div className="grid grid-cols-2 gap-2">
                                    {project.Tech.map((tech) => {
                                        return (
                                            <div key={tech.name} className={`flex flex-row items-center gap-2 p-2 rounded-lg`} style={{ backgroundColor: tech.color }}>
                                                <img src={tech.icon} alt={tech.name} className="w-4" />
                                                <span className="text-xs">{tech.name}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="text-sm text-[#95999d] text-justify">{project.Description}</p>
                                <div className="flex flex-row gap-1 items-center justify-center">
                                    {project.Github && (
                                        <button className="p-2 hover:scale-102 transition duration-80 bg-[#141414] rounded-lg border w-full">
                                            <a href={project.Github} target="_blanck" className="flex flex-row items-center justify-center gap-4">
                                                <img src="/SkillsLogo/github.svg" className="w-6" alt="" />
                                                <span className="text-sm lg:text-md">Code</span>
                                            </a>
                                        </button>
                                    )}

                                    {project.Link && (
                                        <button className="hover:scale-102 transition duration-80 p-2 bg-[#141414] rounded-lg border w-full">
                                            <a href={project.Link} target="_blanck" className="flex flex-row items-center justify-center gap-4">
                                                <img src="/link.svg" className="w-6" alt="" />
                                                <span className="text-sm lg:text-md">Source</span>
                                            </a>
                                        </button>
                                    )}

                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default Projects