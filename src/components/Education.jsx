import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Education() {

    useGSAP(() => {
        // Animation for the vertical line
        gsap.fromTo(".timeline-line",
            { scaleY: 0 },
            {
                scaleY: 1,
                duration: 1.5,
                ease: "none",
                scrollTrigger: {
                    trigger: ".education-section",
                    start: "top 70%",
                    end: "bottom 80%",
                    scrub: true
                }
            }
        );

        // Animation for timeline items
        const items = gsap.utils.toArray('.education-item');
        items.forEach((item, index) => {
            gsap.fromTo(item,
                { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, []);

    const educationData = [
        {
            year: "2022 - Present",
            title: "System Engineering",
            institution: "Universidad Del Norte",
            description: "Focus on software architecture, algorithms, and full-stack development. Active participation in research projects."
        },
        {
            year: "2024",
            title: "Academic Exchange",
            institution: "Exchange University (International/National)",
            description: "Semester focused on advanced, Artificial Intelligence,  technical specialization, international networking, and adaptation to new engineering methodologies."
        }
    ];

    return (
        <section id="education" className="education-section w-full max-w-[1100px] py-22 px-4 sm:px-6 lg:px-10 flex flex-col items-center">
            <div className="flex flex-col gap-2 mb-12 text-center">
                <h1 className="text-3xl lg:text-5xl font-bold text-center text-white">My <span className="text-blue-500">Education</span></h1>
                <span className="text-sm text-[#95999d] text-center">Academic background and lifelong learning journey.</span>
            </div>

            <div className="relative w-full max-w-[800px]">
                {/* Vertical Line */}
                <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-500/30 origin-top hidden md:block"></div>

                <div className="flex flex-col gap-12 md:gap-24">
                    {educationData.map((edu, index) => (
                        <div key={index} className={`education-item relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Dot on line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#090a0c] z-10 hidden md:block"></div>

                            {/* Content Card */}
                            <div className={`w-full md:w-[45%] p-6 bg-[#141414]/50 border border-white/5 rounded-2xl backdrop-blur-sm md:text-left`}>
                                <span className="text-blue-500 font-mono text-sm mb-2 block">{edu.year}</span>
                                <h3 className="text-xl font-bold text-[#FAFAFF] mb-1">{edu.title}</h3>
                                <h4 className="text-md text-blue-400/80 mb-3">{edu.institution}</h4>
                                <p className="text-sm text-[#95999d] leading-relaxed">{edu.description}</p>
                            </div>

                            {/* Spacer for empty side */}
                            <div className="hidden md:block w-[45%]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
