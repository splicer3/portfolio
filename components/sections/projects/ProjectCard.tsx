"use client"

import Image from "next/image";

import { projectsData } from "@/lib/data";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

const ProjectCard = ({
    title,
    description,
    tags,
    imageUrl,
    url
} : ProjectProps) => {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        // 0 1 means that the bottom of the viewport has crossed the top of the target
        // 1.33 1 means that 33% of the viewport has crossed the bottom of the target
        offset: ["0 1", "1.33 1"]
      });

      const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
      const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1])

      const handleClick = () => {
        const smBreakpoint = 640;
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (screenWidth < smBreakpoint) {
          // Open a new browser window with the desired URL
          window.open(url, '_blank');
        }
      }

    return (
        <motion.section
        style={{
            scale: scaleProgress,
            opacity: opacityProgress,
        }}
            className="group bg-gray-100 hover:bg-gray-200 dark:text-white dark:bg-white/10 dark:hover:bg-white/20  transition-colors max-w-[42rem] sm:h-[20rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 mb-3 sm:mb-8 last:mb-0 relative sm:even:pl-8"
            ref={ref}
            onClick={handleClick}
        >
            <div className="flex flex-col h-full py-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:group-even:ml-[18rem] group-even:ml-0">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                    {tags.map((tag, i) => (
                        <li 
                            key={i}
                            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70 rounded-full"
                        >
                                {tag}
                        </li>
                    ))}
                </ul>
            </div>
            <Link href={url} target="_blank">
                <Image
                src={imageUrl}
                alt={title}
                className="absolute hidden sm:block sm:opacity-100 top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                            group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2
                            
                            group-even:group-hover:rotate-2 
                            group-even:group-hover:translate-x-3
                            group-even:right-[initial] group-even:-left-40
                            
                            group-hover:scale-[1.04] transition"
                />
            </Link>
        </motion.section>
    )
}

export default ProjectCard;