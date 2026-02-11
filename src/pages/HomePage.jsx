import React from 'react'
import Home from '../components/Home.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Metrics from '../components/Metrics.jsx'
import Education from '../components/Education.jsx'


export default function HomePage() {
    return (
        <>
            <Home />

            <Metrics />

            <Skills />

            <Projects />

            <Education />
        </>
    )
}
