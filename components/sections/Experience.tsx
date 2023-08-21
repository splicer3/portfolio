"use client"

import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import SectionHeading from '../SectionHeading'
import { useSectionInView } from '@/hooks/useSectionInView'
import { experiencesData } from '@/lib/data'
import { useTheme } from '@/context/ThemeContext'

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.5);
    const { theme } = useTheme();
    
  return (
    <section ref={ref} id="experience" className="mb-28 sm:mb-34 scroll-mt-28">
        <SectionHeading>My experience</SectionHeading>
        <VerticalTimeline lineColor="">
            {
                experiencesData.map((experience, i) => (
                    <React.Fragment key={i}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: theme === "light"
                                ? "#f3f4f6"
                                : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                borderRadius: "20px",
                                textAlign: "left",
                                padding: "1.3rem 2rem"
                            }}
                            contentArrowStyle={{
                                borderRight: theme === "light"
                                ? "0.4rem solid #9ca3af"
                                : "0.4rem solid rgba(255, 255, 255, 0.5)",
                            }}
                            date={experience.date}
                            dateClassName="mx-2"
                            icon={experience.icon}
                            iconStyle={{
                                background: theme === "light"
                                ? "white"
                                : "rgb(38,38,38)",
                                fontSize: "1.5rem"
                            }}
                        >
                            <h3 className="font-semibold capitalize">
                                {experience.title}
                            </h3>
                            <p className="font-normal mt-0">
                                {experience.location}
                            </p>
                            <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
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
