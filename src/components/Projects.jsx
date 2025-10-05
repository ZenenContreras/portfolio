import Carousel from "./ui/Carousel"

function Projects () {

    const projects = [
        {"name": "Tout Á Un Clic La - Full-stack e-commerce", "Description": "Latin products in Montreal. Scaled to 100+ active users with real-time inventory tracking, secure payment integration, and optimized performance." , "Tech" : [{"name":"Next.js", "icon": "/SkillsLogo/nextjs.svg", "color": "#141414"}, {"name":"Express.js", "icon" : "/SkillsLogo/express.svg","color": "#141414"}, {"name":"Tailwind CSS", "icon": "/SkillsLogo/tailwindcss.svg", "color": "#003159"}, {"name":"Supabase", "icon" :"/SkillsLogo/supabase.svg", "color": "#1F4A1C" }], "Link": "https://toutaunclicla.com", "Github" : "", "images" : [{"images":"/projectsMockUp/MockUpToutAunClicLa.jpeg"}, {"images":"/projectsMockUp/MockUpToutAunClicLaMobile.jpeg"}]},

        {"name": "Weather App", "Description": "Weather application delivering real-time forecasts for any city worldwide. Features 7-day predictions, hourly breakdowns, and instant °C/°F conversion." , "Tech" : [{"name":"React.js", "icon": "/SkillsLogo/react.svg", "color": "#001629"}, {"name":"JavaScript", "icon" : "/SkillsLogo/javascriptdark.svg","color": "#4B4206"}, {"name":"Tailwind CSS", "icon": "/SkillsLogo/tailwindcss.svg", "color": "#003159"},{"name":"Open-Meto", "icon": "/SkillsLogo/api.svg", "color": "#141414"}], "Link": "https://weather-f0wgdq0yz-zenen-contreras-projects.vercel.app", "Github" : "https://github.com/ZenenContreras/weatherApp", "images" : [{"images":"/projectsMockUp/MockUpWeatherApp.jpeg"}, {"images":"/projectsMockUp/MockUpWeatherAppMobile.jpeg"}]},        

        {
            "name": "Fabio Canchila - Business Consulting Platform", 
            "Description": "Professional consulting platform offering business advisory services, educational resources, and digital products. Features service showcase and content management for books and courses.", 
            "Tech": [
                {"name":"React", "icon": "/SkillsLogo/react.svg", "color": "#001629"}, 
                {"name":"JavaScript", "icon": "/SkillsLogo/javascriptdark.svg", "color": "#4B4206"}, 
                {"name":"Tailwind CSS", "icon": "/SkillsLogo/tailwindcss.svg", "color": "#003159"}, 
                {"name":"Supabase", "icon": "/SkillsLogo/supabase.svg", "color": "#1F4A1C"}
            ], 
            "Link": "https://fabiocanchila.com", 
            "Github": "https://github.com/ZenenContreras/fabiocanchila", 
            "images": [
                {"images":"/projectsMockUp/MockUpFabioCanchila.jpeg"}, 
                {"images":"/projectsMockUp/MockUpFabioCanchilaMobile.jpeg"}
            ]
        }
    ]

    return (
        <section id='projects' className="text-[#FAFAFF] w-full max-w-[1100px] py-22 px-4 sm:px-6 lg:px-10 flex flex-col items-center justify-center gap-6 lg:gap-12">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl lg:text-5xl font-bold text-center">Some Of my <span className="text-blue-500">Projects</span></h1>
                <span className="text-sm text-[#95999d]">Real-world applications showcasing my approach to problem-solving and code quality.</span>
            </div>

            <div className="flex flex-col gap-4">
                {projects.map((projects, index)=>{
                    return(
                        <div key={index} className="flex flex-col lg:flex-row gap-6 lg:gap-22 p-3 items-center ">
                            <Carousel baseWidth={350} items={projects.images}/>
                            <div className="w-[300px] flex flex-col gap-3">
                                <h1 className="font-bold text-2xl text-left">{projects.name}</h1>
                                <div className="grid grid-cols-2 gap-2">
                                    {projects.Tech.map((tech)=>{
                                        return (
                                            <div className={`flex flex-row items-center gap-2 p-2 rounded-lg`} style={{ backgroundColor: tech.color }}>
                                                <img src={tech.icon} alt={tech.name} className="w-4" />
                                                <span className="text-xs">{tech.name}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="text-sm text-[#95999d] text-justify">{projects.Description}</p>
                                <div className="flex flex-row gap-1 items-center justify-center">
                                    {projects.Github && (
                                        <button className="p-2 hover:scale-102 transition duration-80 bg-[#141414] rounded-lg border-1 w-full">
                                            <a href={projects.Github} target="_blanck" className="flex flex-row items-center justify-center gap-4">
                                                <img src="/SkillsLogo/github.svg" className="w-6" alt="" />
                                                <span className="text-sm lg:text-md">Code</span>
                                            </a>
                                        </button>    
                                    )}
                                    
                                    {projects.Link && (
                                        <button className="hover:scale-102 transition duration-80 p-2 bg-[#141414] rounded-lg border-1 w-full">
                                            <a href={projects.Link} target="_blanck" className="flex flex-row items-center justify-center gap-4">
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