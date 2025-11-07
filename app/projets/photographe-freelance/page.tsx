import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Services from "./components/Services";


export default function ProjectPhotographeFreelancePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header />
      <Hero />
      <Gallery />
      <Services />
      
    </main>
  );
}
