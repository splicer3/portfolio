import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaUniversity } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import splicedImg from "@/public/spliced.png";
import splicifyImg from "@/public/splicify.png";
import objdetectorImg from "@/public/objdetector.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated High School",
    location: "Vignola, MO",
    description:
      "Graduated with a score of 95/100. Learned coding basics both at school and on my own.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Computer Engineering Student",
    location: "Bologna, BO",
    description:
      "Enrolled in Computer Engineering at Alma Mater Studiorum - Università di Bologna and looking for internships.",
    icon: React.createElement(FaUniversity),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Spliced",
    description:
      "I worked on this full stack chat application as a side project and to explore MongoDB and Prisma. Some interesting features are seen receipts and online status.",
    tags: ["React", "Typescript", "Next.js", "Tailwind", "Prisma", "Pusher", "MongoDB"],
    imageUrl: splicedImg,
  },
  {
    title: "Splicify",
    description:
      "I created this Spotify clone that allows any user to upload songs. Subscriptions are implemented via Stripe.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Stripe", "Supabase"],
    imageUrl: splicifyImg,
  },
  {
    title: "Object Detector",
    description:
      "A self-hosted web app that runs on Flask to allow for easy object detection using YOLOv8. It features both a webcam mode and an upload mode.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Flask", "OpenCV"],
    imageUrl: objdetectorImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Framer Motion",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Python",
  "Flask",
  "OpenCV",
  "C",
  "Java",
  "Stripe",
  "Supabase"
] as const;