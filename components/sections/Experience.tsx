"use client"

import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import SectionHeading from '../SectionHeading'
import { useSectionInView } from '@/hooks/useSectionInView'
import { experiencesData } from '@/lib/data'

export default function Experience() {
    const { ref } = useSectionInView("Skills");
    
  return (
    <section ref={ref} id="experience">
        <SectionHeading>My experience</SectionHeading>
        <VerticalTimeline lineColor="">
            {
                experiencesData.map((experience, i) => (
                    <React.Fragment key={i}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: "#f3f4f6",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                borderRadius: "31px",
                                textAlign: "left",
                                padding: "1.3rem 2rem"
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #9ca3af"
                            }}
                            date={experience.date}
                            dateClassName="mx-2"
                            icon={experience.icon}
                            iconStyle={{
                                background: "white",
                                fontSize: "1.5rem"
                            }}
                        >
                            <h3 className="font-semibold capitalize">
                                {experience.title}
                            </h3>
                            <p className="font-normal mt-0">
                                {experience.location}
                            </p>
                            <p className='!mt-1 !font-normal text-gray-700'>
                                {experience.description}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
  )
}