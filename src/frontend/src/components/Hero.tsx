import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-16 md:pt-20"
      style={{
        background:
          "linear-gradient(135deg, #061A2B 0%, #08243A 60%, #0A2D47 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Decorative teal glow lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(25,167,165,0.08) 0%, transparent 70%), " +
            "radial-gradient(ellipse 40% 60% at 20% 80%, rgba(25,167,165,0.05) 0%, transparent 60%)",
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(25,167,165,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(25,167,165,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-teal text-xs font-semibold uppercase tracking-wider">
                Smart Data Automation
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Transform{" "}
              <span style={{ color: "oklch(0.65 0.12 195)" }}>Manual Work</span>
              <br />
              into Intelligent Systems
            </h1>

            <p className="text-[#C7D1DB] text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              DataQube Labs helps businesses reduce manual effort, increase
              efficiency, and make data-driven decisions faster through
              cutting-edge automation and analytics solutions.
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {[
                "Google & Payroll Automation",
                "Real-Time Dashboards",
                "Big Data Analytics",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: "oklch(0.65 0.12 195)" }}
                  />
                  <span className="text-[#C7D1DB] text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => handleScroll("#services")}
                className="bg-teal hover:bg-teal-dark text-white font-semibold px-7 py-3 rounded-full h-auto text-sm group transition-all"
                data-ocid="hero.primary_button"
              >
                Explore Solutions
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => handleScroll("#contact")}
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-7 py-3 rounded-full h-auto text-sm transition-all"
                style={{ background: "transparent" }}
                data-ocid="hero.secondary_button"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>

          {/* Right Column – Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Glow behind image */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(25,167,165,0.15) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              <img
                src="/assets/generated/hero-data-illustration.dim_600x480.png"
                alt="Data automation dashboard illustration"
                className="relative w-full rounded-2xl"
                style={{ boxShadow: "0 0 60px rgba(25,167,165,0.15)" }}
              />

              {/* Floating stat cards */}
              <motion.div
                className="absolute -left-8 top-8 bg-white rounded-xl px-4 py-3 shadow-card-hover"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <p className="text-xs text-muted-foreground">Automation Rate</p>
                <p
                  className="text-xl font-bold"
                  style={{ color: "oklch(0.65 0.12 195)" }}
                >
                  98.5%
                </p>
              </motion.div>

              <motion.div
                className="absolute -right-6 bottom-12 bg-white rounded-xl px-4 py-3 shadow-card-hover"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <p className="text-xs text-muted-foreground">Time Saved</p>
                <p
                  className="text-xl font-bold"
                  style={{ color: "oklch(0.65 0.12 195)" }}
                >
                  70%+
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10"
        >
          {[
            { label: "Clients Served", value: "150+" },
            { label: "Automations Built", value: "500+" },
            { label: "Hours Saved", value: "50K+" },
            { label: "Data Processed", value: "10TB+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-3xl font-extrabold"
                style={{ color: "oklch(0.65 0.12 195)" }}
              >
                {stat.value}
              </p>
              <p className="text-[#C7D1DB] text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
