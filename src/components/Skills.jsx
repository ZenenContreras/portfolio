import { useState } from "react"

function Skills (){
    const [showAll, setshowAll] = useState(false)
    const initialDisplay = 6

    const skills = [
        {"name": "Javascript", "icon": "/SkillsLogo/javascript.svg", "description": "Programming Language"},
        {"name": "Typescript", "icon": "/SkillsLogo/typescript.svg", "description": "Programming Language"},
        {"name": "React", "icon": "/SkillsLogo/react.svg", "description": "UI Library"},
        {"name": "Next.js", "icon": "/SkillsLogo/nextjs.svg", "description": "React Framework"},
        {"name": "Tailwind CSS", "icon": "/SkillsLogo/tailwindcss.svg", "description": "CSS Framework"},
        {"name": "Git", "icon": "/SkillsLogo/git.svg", "description": "Version Control"},
        {"name": "GitHub", "icon": "/SkillsLogo/github.svg", "description": "Code Hosting"},
        {"name": "HTML5", "icon": "/SkillsLogo/html-5.svg", "description": "Markup Language"},
        {"name": "CSS3", "icon": "/SkillsLogo/css.svg", "description": "Styling Language"},
        {"name": "Express", "icon": "/SkillsLogo/express.svg", "description": "Node.js Framework"},
        {"name": "PostgreSQL", "icon": "/SkillsLogo/postgresql.svg", "description": "Database"},
        {"name": "Node.js", "icon": "/SkillsLogo/nodejs.svg", "description": "JavaScript Runtime"},
        {"name": "Supabase", "icon": "/SkillsLogo/supabase.svg", "description": "Backend Platform"},
        {"name": "Vercel", "icon": "/SkillsLogo/vercel.svg", "description": "Deployment Platform"},
        {"name": "Stripe", "icon": "/SkillsLogo/stripe.svg", "description": "Payment Integration"},
    ]

    const displaySkills = showAll ? skills : skills.slice(0, initialDisplay)

    return (
        <section id="skills" className="text-[#FAFAFF] w-full max-w-[1100px] py-22 sm:py-24 px-4 sm:px-6 lg:px-10 flex flex-col items-center justify-center gap-6 lg:gap-12">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl lg:text-5xl font-bold text-center">My Skills</h1>
                <span className="text-sm text-[#95999d]">Technologies I use to build scalable, performant web applications.</span>
            </div>
            <div className="grid grid-cols-2 gap-y-5 gap-x-6 lg:gap-x-30">
                {displaySkills.map((skills, index)=>{
                    const isNewSkill = index >= initialDisplay && showAll

                    return(
                        <div className={`p-4 py-3 text-left flex flex-row gap-2 items-center hover:bg-[#141414] rounded-md cursor-pointer ${isNewSkill  ? 'animate-fadeInUp' : 'opacity-100'}`} key={index}>
                            <img src={skills.icon} className='w-6 lg:w-10' alt="" />
                            <div className="flex flex-col ">
                                <h3 className="text-sm lg:text-lg">{skills.name}</h3>
                                <p className="text-xs text-[#95999d]">{skills.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {skills.length > initialDisplay && (
                <button onClick={()=>setshowAll(!showAll)} className="text-xs lg:text-sm px-6 py-2 bg-[#141414] rounded-md flex items-center gap-2 hover:scale-103 transition duration-250 ease-in-out">
                    {showAll ? 'Show Less' : `Show more (${skills.length - initialDisplay } more)`}
                    <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            )}

        </section>
    )
}

export default Skills