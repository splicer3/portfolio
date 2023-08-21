"use client"

import React from 'react'

import SectionHeading from '../../SectionHeading'
import { projectsData } from '@/lib/data'
import ProjectCard from './ProjectCard'
import { useSectionInView } from '@/hooks/useSectionInView';

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.35);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 sm:mb-0">
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
