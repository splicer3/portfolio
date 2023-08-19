"use client"

import React from 'react'
import SectionHeading from '../SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import { useSectionInView } from '@/hooks/useSectionInView';
import { motion } from 'framer-motion';

export default function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <motion.section
            ref={ref}
            id="contact"
            className="mb-20 sm:mb-28 w-[min(100%, 38rem)]"
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            viewport={{
                once: true
            }}
        >
                <SectionHeading>Contact me</SectionHeading>
                <p className="text-gray-700 -mt-6">
                    Contact me directly at{" "}
                    <a className="underline" href="mailto:matteo.di.iorio@icloud.com">matteo.di.iorio@icloud.com</a>{" "}
                    or through this form.
                </p>
                <form
                    action={async formData => console.log(formData.get("message"))}
                    className="mt-10 flex flex-col">
                        <input
                            placeholder="Your email"
                            type="email"
                            name="senderEmail"
                            required
                            maxLength={500}
                            className="h-14 px-4 rounded-lg outline-none ring-1 ring-inset ring-gray-300 placeholder:ring-gray-400 focus:ring-[#1ad6aa] focus:shadow-[rgba(26,214,170,_0.4)_0px_2px_7px]"
                        />
                        <textarea
                            placeholder="Your message"
                            name="message"
                            required
                            maxLength={500}
                            className="h-52 my-3 rounded-lg p-4 outline-none ring-1 ring-inset ring-gray-300 placeholder:ring-gray-400 focus:ring-[#1ad6aa] focus:shadow-[rgba(26,214,170,_0.4)_0px_2px_7px]" />
                        <button type="submit" className="group flex gap-2 items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 hover:shadow-xl transition-all">
                            Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"></FaPaperPlane>
                        </button>
                </form>
        </motion.section>
    )
}
