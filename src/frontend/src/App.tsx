import About from "./components/About";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
