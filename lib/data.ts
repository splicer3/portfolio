import React from "react";
import { FaCar, FaUniversity, FaUserTie } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import splicedImg from "@/public/spliced.png";
import splicifyImg from "@/public/splicify.png";
import objdetectorImg from "@/public/objdetector.png";
import poketeamsImg from "@/public/poketeams.png";
import gt7Img from "@/public/gt7.png";
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
    date: "June 2022",
  },
  {
    title: "Computer Engineering Student",
    location: "Bologna, BO",
    description:
      "Enrolled in Computer Engineering at Alma Mater Studiorum - Università di Bologna.",
    icon: React.createElement(FaUniversity),
    date: "September 2022 - present",
  },
  {
    title: "FSAE UniBo Motorsport HY Team Member",
    location: "Bologna, BO",
    description:
      "Hybrid Vehicle Electronics and E-Powertrain Department Member, with a focus on Battery Management Systems, CAN communication, Live Telemetry and ECU Code",
    icon: React.createElement(FaCar),
    date: "March 2024 - present"
  },
  {
    title: "FSAE UniBo Motorsport HY - Electronics Division Manager",
    location: "Bologna, BO",
    description: 
      "Electronics Division Manager for the Hybrid Vehicle, coordinating division members with GANTT charts, kanban-style boards and task management tools. \n Also managing the 2024/2025 electronic projects for the new Hybrid Vehicle.",
    icon: React.createElement(FaUserTie),
    date: "September 2024 - present"
  }
] as const;

export const projectsData = [
  {
    title: "GT7 Grafana Telemetry",
    description: "A Grafana data source plugin for Gran Turismo 7 telemetry visualisation. Comes with an easy-to-deploy Docker Compose configuration.",
    tags: ["Grafana", "Go", "React", "Docker"],
    imageUrl: gt7Img,
    url: "https://github.com/splicer3/grafana-gt7"
  },
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
  "Grafana",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Python",
  "Flask",
  "OpenCV",
  "Go",
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