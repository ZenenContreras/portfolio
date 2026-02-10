import { Link } from 'react-router-dom';
import TextType from './ui/TextType';
import { IconCloud } from "./ui/icon-cloud"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Home () {
    const images = [
        "/SkillsLogo/typescript.svg",
        "/SkillsLogo/javascript.svg",
        "/SkillsLogo/react.svg",
        "/SkillsLogo/html-5.svg",
        "/SkillsLogo/css.svg",
        "/SkillsLogo/nodejs.svg",
        "/SkillsLogo/nextjs.svg",
        "/SkillsLogo/tailwindcss.svg",
        "/SkillsLogo/react.svg",
        "/SkillsLogo/express.svg",
        "/SkillsLogo/postgresql.svg",
        "/SkillsLogo/vercel.svg",
        "/SkillsLogo/supabase.svg",
        "/SkillsLogo/github.svg",
        "/SkillsLogo/git.svg",
        "/SkillsLogo/stripe.svg"
    ]


    useGSAP(()=>{
        gsap.fromTo('#home', {
            opacity: 0 
        },{
            opacity: 1, duration: 2,
        }),

        gsap.fromTo('#text', {
            x: -100
        },{
            x: 0, duration: 1,
        }),
        gsap.fromTo('#cloud', {
            x: 100
        },{
            x: 0, duration: 1,
        })

    }, [])


    return (
        <section id='home' className='text-[#FAFAFF] w-full max-w-[1100px] pt-22 lg:py-34 px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-12'>
            {/* Contenido de texto */}
            <div id='text' className="w-full lg:w-auto flex flex-col gap-6 sm:gap-8 ">
                {/* Badge Open to Work */}
                <div className="bg-[#1a1b1b] py-1.5 px-3 rounded-lg w-fit flex flex-row items-center gap-2">
                    <span className="absolute inline-flex size-2 rounded-full bg-green-500"></span>
                    <span className="relative inline-flex size-2 rounded-full animate-ping bg-green-500"></span>
                    <span className="text-xs sm:text-sm">Open To Work</span>
                </div>

                {/* Títulos principales */}
                <div className="py-2 font-semibold text-3xl md:text-4xl lg:text-4xl">
                    <h1 className="mb-2">Hey, I'm Zenen.</h1>

                    <div className='flex flex-wrap gap-2 sm:gap-3 items-baseline'>
                        <h2 className="whitespace-nowrap">I Craft</h2>
                        <div className="min-w-0">
                            <TextType 
                                text={[
                                    "Modern",
                                    "Scalable",
                                    "Optimized",
                                    "Dynamic",
                                    "Efficient"
                                ]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|"
                                className='font-bold'
                                textColors={['#3b82f6']}
                            />
                        </div>
                    </div>
                    <h1 className="mt-2">And Intuitive Web Apps</h1>
                </div>

                {/* Descripción */}
                <div className='w-full max-w-prose'>
                    <p className='text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed'>
                        Frontend Developer building responsive, high-performance web applications.
                        <br className="hidden sm:block" />
                        <span className="sm:inline"> </span>
                        Each project here reflects my commitment to clean code and exceptional user experience.
                    </p>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-4 '>
                        <a href="https://www.linkedin.com/in/zenen-contreras-royero-726523259" target='_blanck'>
                            <div className='px-4 py-1.5 rounded-lg bg-neutral-900 text-[#FAFAFF] outline-2 outline-blue-500 transition-all text-xs backdrop-blur-3xl whitespace-nowrap hover:text-[#3b82f6] md:text-sm cursor-pointer flex gap-2'>
                                <img src="/Connect//linkedin-svgrepo-com.svg" alt="LinkedIn Icon" className='w-4' />
                                <span >Linkedin</span>
                            </div>
                        </a>
                        <a href="https://github.com/zenencontreras" target='_blanck'>
                            <div className='px-4 py-1.5 rounded-lg bg-neutral-900 text-[#FAFAFF] outline-2 outline-purple-500 transition-all text-xs backdrop-blur-3xl whitespace-nowrap hover:text-purple-500 md:text-sm cursor-pointer flex gap-2'>
                                <img src="/Connect//github-svgrepo-com.svg" alt="Github Icon" className='w-4' />
                                <span >Github</span>
                            </div>
                        </a>
                        <a href="/Connect/ZenenContrerasResume.pdf" download='ZenenContrerasResume.pdf'>
                            <div className='px-4 py-1.5 rounded-lg bg-neutral-900 text-[#FAFAFF] outline-2 outline-blue-500 transition-all text-xs backdrop-blur-3xl whitespace-nowrap hover:text-[#3b82f6] md:text-sm cursor-pointer flex gap-2'>
                                <img src="/Connect/resume.svg" alt="Resume Icon" className='w-4 fill-white' />
                                <span >Resume</span>
                            </div>
                        </a>
                    </div>
                </div>
                <Link className='bg-[#1a1b1b] py-2 px-3 rounded-lg w-fit flex flex-row items-center gap-1 text-sm' to='/contact'>
                Contact Me
                <div className='animate-bounce rotate-90 '>
                <  ArrowUpwardIcon />

                </div>
                </Link>
            </div>

            {/* Icon Cloud */}
            <div id='cloud' className='w-full h-full sm:w-[400px] md:w-[450px] flex justify-center items-center lg:justify-end shrink-0'>
                <IconCloud images={images} />
            </div>
        </section>
    )
}

export default Home