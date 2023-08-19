import About from "@/components/sections/About";
import Intro from "@/components/sections/Intro";
import SectionDivider from "@/components/SectionDivider";
import Projects from "@/components/sections/projects/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
    </main>
  )
}
