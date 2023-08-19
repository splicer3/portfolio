import React from 'react'

import SectionHeading from '../../SectionHeading'
import { projectsData } from '@/lib/data'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
        <SectionHeading>Projects</SectionHeading>
        <div>
            {projectsData.map((project, i) => (
                <React.Fragment key={i}>
                    <ProjectCard {...project}/>
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}
