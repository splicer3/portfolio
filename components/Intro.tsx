"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'

import Profile from "@/public/profile.png"
import Logo from "@/public/SmallLogo.png"

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
        <div className="flex items-center justify-center">
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                    <Image
                        src={Profile}
                        alt='Matteo Di Iorio'
                        priority={true}
                        placeholder='blur'
                        className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                    />
                </motion.div>
                <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7
                        }}
                    >
                    <Image
                        src={Logo}
                        alt='SPLCD Logo'
                        priority={true}
                        className='absolute bottom-0 right-0 w-9 h-9'
                    />
                </motion.div>
            </div>
        </div>
        <motion.p
            className="mb-10 mt-4 px-4 text-2xl sm:text-4xl font-medium !leading-[1.5]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0}}
        >
                <span className="font-bold">Hi, I&apos;m Matteo.</span> I&apos;m a{" "}
                <span className="font-bold">student</span> in{" "}
                <span className="font-bold">Computer Engineering</span> at <span className="italic">University of Bologna</span>{" "}
                and a <span className="font-bold">full-stack developer</span>. I enjoy
                building sites & apps and I&apos;m looking for internships. My focus is{" "}
                <span className="underline">React (Next.js) and Python</span>.
        </motion.p>
        <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1}}
            transition={{
                delay: 0.1,
            }}
        >
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline:none hover:scale-110 hover:bg-gray-950 active:scale-105 hover:shadow-xl transition"
                >
                        Contact me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
                </Link>
                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline:none border border-black/10 hover:scale-110 hover:bg-gray-50 active:scale-105 hover:shadow-xl cursor-pointer transition"
                    href='/CV.pdf'
                    download
                >
                        Download my CV <HiDownload className="opacity-60 group-hover:rotate-90 transition"/>
                </a>
                <div className="flex gap-2">
                    <a 
                        className="bg-white p-4 text-gray- hover:text-gray-950 flex items-center gap-2 rounded-full border border-black/10 hover:scale-[1.15] hover:bg-gray-50 active:scale-105 hover:shadow-md cursor-pointer transition"
                        href="https://www.instagram.com/matteodiiorioo/"
                        target="_blank"
                    >
                            <BsInstagram />
                    </a>
                    <a
                        className="bg-white p-4 text-gray- hover:text-gray-950 flex items-center gap-2 rounded-full border border-black/10 hover:scale-[1.15] hover:bg-gray-50 active:scale-105 hover:shadow-md cursor-pointer transition"
                        href="http://twitter.com/splc3d"
                        target="_blank"
                    >
                            <BsTwitter />
                    </a>
                    <a
                        className="bg-white p-4 text-gray- hover:text-gray-950 flex items-center gap-2 rounded-full border border-black/10 hover:scale-[1.15] hover:bg-gray-50 active:scale-105 hover:shadow-md cursor-pointer transition"
                        href="http://linkedin.com/in/matteo-di-iorio"
                        target="_blank"
                    >
                            <BsLinkedin />
                    </a>
                    <a
                        className="bg-white p-4 text-gray- hover:text-gray-950 flex items-center gap-2 rounded-full border border-black/10 hover:scale-[1.15] hover:bg-gray-50 active:scale-105 hover:shadow-md cursor-pointer transition"
                        href="https://github.com/splicer3"
                        target="_blank"
                    >
                            <BsGithub />
                    </a>
                </div>
        </motion.div>
    </section>
  )
}