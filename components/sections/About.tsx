"use client"

import React from 'react'
import { motion } from 'framer-motion'

import SectionHeading from '../SectionHeading'

export default function About() {
  return (
    <motion.section
        id="about"
        className="mb-24 max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28"
        initial={{ y:100, opacity: 0}}
        animate={{ y:0, opacity: 1 }}
        transition={{ delay: 0.175 }}
    >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-5 px-3">
                I have always been <span className="italic">captivated by the intricate world of computers and information technology</span>, 
                a fascination that took root during my <span className="font-bold">early years</span> and has continued to shape my <span className="font-bold">journey</span> ever since. Following my passion, 
                I graduated from a <span className="font-bold">lyceum with a specialized focus on IT</span>, where my zeal for coding extended <span className="italic">beyond the classroom</span>. 
                As a youngster, I found myself delving into coding projects beyond the curriculum, and over time, this curiosity led me to 
                explore the realm of <span className="font-bold">Computer Engineering</span>. Through endeavors like <span className="italic">phone rooting</span>, <span className="italic">game modification</span>, and <span className="italic">studying algorithms</span>, 
                I honed my skills and paved my way to pursuing a <span className="font-bold">Computer Engineering</span> degree at the esteemed <span className="font-bold">University of Bologna</span>.
            </p>
            <h3 className="text-2xl font-medium capitalize mb-5">
                Diverse pursuits beyond coding
            </h3>
            <p className="px-3">
                When I&apos;m not immersed in lines of code, I find joy in a range of activities that offer a <span className="font-bold">balanced and fulfilling life</span>.{" "}
                <span className="font-bold">Video games</span> <span className="italic">serve as a creative outlet and a source of relaxation</span>, allowing me to explore virtual worlds and immerse myself in captivating narratives. 
                My passion for <span className="font-bold">motorsports and cars</span> is well reflected in my <span className="font-bold">work etiquette</span>: <span className="italic">software and hardware alike should be made like the finest of machines, with impeccable engineering</span>. 
                Additionally, my flair for crafting <span className="font-bold">delightful cocktails</span> <span className="italic">lets me experiment with flavors and presentation</span>, bringing a touch of <span className="font-bold">artistry</span> to the mix. 
                Beyond the digital realm, I embrace the thrill of <span className="font-bold">mountain biking</span>, <span className="italic"> where the synergy of nature and physical exertion invigorate my spirit</span>. 
                This diverse blend of interests fuels my <span className="font-bold">creativity, resilience, and determination</span> in both the technical and personal spheres of life.
            </p>
    </motion.section>
  )
}
