"use client"

import React, { useRef } from 'react'
import SectionHeading from '../SectionHeading'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/hooks/useSectionInView'
import { pillVariants } from '@/lib/variants'
import { useTheme } from '@/context/ThemeContext'

export default function Skills() {
    const constraintsRef = useRef<HTMLUListElement>(null);
    const { ref } = useSectionInView("Skills");
    const theme = useTheme();

    return (
        <section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-0">
            <SectionHeading>My skills</SectionHeading>
            <ul ref={constraintsRef} className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {
                    skillsData.map((skill, i) => (
                        <motion.li 
                            key={i}
                            className="bg-white dark:bg-gray-700 dark:text-gray-300 borderBlack rounded-full px-5 py-3"
                            variants={pillVariants}
                            viewport={{
                                once: true,
                            }}
                            drag
                            whileDrag="whileDrag"
                            whileTap="whileTap"
                            whileHover="whileHover"
                            custom={i}
                            dragConstraints={constraintsRef}
                        >
                                {skill}
                        </motion.li>
                    ))
                }
            </ul>
        </section>
  )
}
