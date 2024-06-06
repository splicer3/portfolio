import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaUniversity } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import splicedImg from "@/public/spliced.png";
import splicifyImg from "@/public/splicify.png";
import objdetectorImg from "@/public/objdetector.png";
import poketeamsImg from "@/public/poketeams.png";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

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
    title: "PokeTeams",
    description:
      "A beatiful and feature-rich teambuilder and analyzer for Pokemon games and Showdown.",
    tags: ["React", "Typescript", "Next.js", "Tailwind", "Framer Motion", "Supabase", "PokeAPI"],
    imageUrl: poketeamsImg,
    url: "https://poketeams.matteodiiorio.dev/"
  },
  {
    title: "Spliced",
    description:
      "I worked on this full stack chat application as a side project to explore MongoDB and Prisma.",
    tags: ["React", "Typescript", "Next.js", "Tailwind", "Prisma", "Pusher", "MongoDB"],
    imageUrl: splicedImg,
    url: "https://spliced-chat.vercel.app/"
  },
  {
    title: "Splicify",
    description:
      "I created this Spotify clone that allows any user to upload songs. Subscriptions are implemented via Stripe.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Stripe", "Supabase"],
    imageUrl: splicifyImg,
    url: "https://splicify.vercel.app/"
  },
  {
    title: "Object Detector",
    description:
      "A self-hosted web app that runs on Flask to allow for easy object detection using YOLOv8. It features both a webcam mode and an upload mode.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Flask", "OpenCV"],
    imageUrl: objdetectorImg,
    url: "https://github.com/splicer3/SPLCD-ObjectDetector"
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
  "C++",
  "Embedded Software",
  "Java",
  "Stripe",
  "Supabase"
] as const;

export const linksData = [
  {
    site: "instagram",
    icon: React.createElement(BsInstagram),
    href: "https://www.instagram.com/matteodiiorioo/"
  },
  {
    site: "twitter",
    icon: React.createElement(BsTwitter),
    href: "http://twitter.com/splc3d"
  },
  {
    site: "linkedin",
    icon: React.createElement(BsLinkedin),
    href: "http://linkedin.com/in/matteo-di-iorio"
  },
  {
    site: "github",
    icon: React.createElement(BsGithub),
    href: "https://github.com/splicer3"
  },
] as const;