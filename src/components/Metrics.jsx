import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const MetricCard = ({ value, label, suffix = "", description }) => {
    const countRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(countRef.current,
            { innerText: 0 },
            {
                innerText: value,
                duration: 2,
                ease: "power2.out",
                snap: { innerText: 1 },
                scrollTrigger: {
                    trigger: countRef.current,
                    start: "top 90%",
                }
            }
        );
    }, [value]);

    return (
        <div className="flex flex-col items-center text-center justify-center p-6 bg-[#141414]/50 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-blue-500/30 transition-colors duration-300">
            <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-2">
                <span ref={countRef}>0</span>{suffix}
            </div>
            <div className="text-lg font-semibold text-[#FAFAFF] mb-1">{label}</div>
            <div className="text-sm text-[#95999d] text-center">{description}</div>
        </div>
    )
}

export default function Metrics() {
    const metrics = [
        {
            value: 200,
            suffix: "+",
            label: "Active Users",
            description: "On live production platforms"
        },
        {
            value: 4,
            suffix: "+",
            label: "Real Projects",
            description: "Deployed and functional applications"
        },
        {
            value: 99,
            suffix: "%",
            label: "Performance",
            description: "Average Lighthouse score"
        },
        {
            value: 100,
            suffix: "%",
            label: "Satisfaction",
            description: "Commitment to quality code"
        }
    ];

    return (
        <section id="metrics" className="w-full max-w-[1100px] py-16 px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                    <MetricCard key={index} {...metric} />
                ))}
            </div>
        </section>
    )
}
