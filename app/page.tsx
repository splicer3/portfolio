import About from "@/components/sections/About";
import Intro from "@/components/sections/Intro";
import SectionDivider from "@/components/SectionDivider";
import Projects from "@/components/sections/projects/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
    </main>
  )
}
