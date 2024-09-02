import { About } from "../components/About";
import { Navbar } from "../components/navbar/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/skills/Skills";

export default function Home() {

  return (
    <>
      <header className="w-full sticky top-0 bg-white border-y-2 border-black px-2">
        <Navbar />
      </header>
      <main className="container-full flex flex-col justify-center items-center gap-6">
        <About/>
        <Projects/>
        <Skills/>
      </main>
    </>
  );
}
