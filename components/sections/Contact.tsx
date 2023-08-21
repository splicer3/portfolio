"use client"

import React from 'react'
import SectionHeading from '../SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import { useSectionInView } from '@/hooks/useSectionInView';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import { toast } from 'react-hot-toast';
import SubmitButton from '../SubmitButton';

export default function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <motion.section
            ref={ref}
            id="contact"
            className="mb-20 sm:mb-28 w-[min(100%, 38rem)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
                <SectionHeading>Contact me</SectionHeading>
                <div className="px-3 sm:px-0">
                    <p className="text-gray-700 dark:text-white/80 -mt-6">
                        Contact me directly at{" "}
                        <a className="underline" href="mailto:matteo.di.iorio@icloud.com">matteo.di.iorio@icloud.com</a>{" "}
                        or through this form.
                    </p>
                    <form
                        action={async (formData) => {
                            //@ts-ignore
                            const { data, error } = await sendEmail(formData);

                            if (error) {
                                toast.error(error);
                                return;
                            }
                            else {
                                toast.success("Email sent successfully!")
                            }
                        }
                        } 
                        className="mt-10 flex flex-col dark:text-black">
                            <input
                                placeholder="Your email"
                                type="email"
                                name="senderEmail"
                                required
                                maxLength={500}
                                className="h-14 px-4 rounded-lg outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 ring-1 ring-inset ring-gray-300 placeholder:ring-gray-400 focus:ring-[#1ad6aa] focus:shadow-[rgba(26,214,170,_0.4)_0px_2px_7px]"
                            />
                            <textarea
                                placeholder="Your message"
                                name="message"
                                required
                                maxLength={5000}
                                className="h-52 my-3 rounded-lg p-4 outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 ring-1 ring-inset ring-gray-300 placeholder:ring-gray-400 focus:ring-[#1ad6aa] focus:shadow-[rgba(26,214,170,_0.4)_0px_2px_7px]" />
                                <SubmitButton />
                    </form>
                </div>
        </motion.section>
    )
}
