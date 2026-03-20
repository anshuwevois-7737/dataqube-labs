import { CheckCircle, Target, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
              style={{
                color: "oklch(0.65 0.12 195)",
                background: "oklch(0.92 0.05 195)",
              }}
            >
              About DataQube Labs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Smart Automation for{" "}
              <span style={{ color: "oklch(0.65 0.12 195)" }}>
                Modern Businesses
              </span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              DataQube Labs Pvt Ltd is a smart data automation company focused
              on transforming manual work into intelligent systems. We
              specialize in Google Automation, Payroll Systems, Real-Time
              Dashboards, and Big Data Analytics. Our mission is to help
              businesses reduce manual effort, increase efficiency, and make
              data-driven decisions faster.
            </p>

            <ul className="flex flex-col gap-5 mb-10">
              {[
                {
                  icon: Zap,
                  title: "Reduce Manual Effort",
                  desc: "Automate repetitive tasks and free up your team for high-value work.",
                },
                {
                  icon: Target,
                  title: "Increase Operational Efficiency",
                  desc: "Optimize workflows with smart systems that run faster and without errors.",
                },
                {
                  icon: Users,
                  title: "Make Data-Driven Decisions Faster",
                  desc: "Get real-time insights to act confidently on live business intelligence.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "oklch(0.92 0.05 195)" }}
                  >
                    <item.icon
                      className="w-5 h-5"
                      style={{ color: "oklch(0.65 0.12 195)" }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {item.title}
                    </p>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-6">
              {[
                { label: "Founded", value: "2020" },
                { label: "Happy Clients", value: "150+" },
                { label: "Automation Projects", value: "500+" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="text-2xl font-extrabold"
                    style={{ color: "oklch(0.65 0.12 195)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            {/* Main visual box */}
            <div
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #061A2B 0%, #08243A 100%)",
              }}
            >
              {/* Grid background */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(25,167,165,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(25,167,165,0.4) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <h3 className="text-white font-bold text-lg mb-6 relative z-10">
                Company Overview
              </h3>

              {/* Metric Cards */}
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[
                  {
                    label: "Google Automations",
                    value: "200+",
                    icon: CheckCircle,
                  },
                  { label: "Payroll Systems", value: "80+", icon: CheckCircle },
                  {
                    label: "Dashboards Deployed",
                    value: "120+",
                    icon: CheckCircle,
                  },
                  {
                    label: "Data Points Processed",
                    value: "10B+",
                    icon: CheckCircle,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(25,167,165,0.2)",
                    }}
                  >
                    <p
                      className="text-2xl font-extrabold"
                      style={{ color: "oklch(0.65 0.12 195)" }}
                    >
                      {item.value}
                    </p>
                    <p className="text-[#C7D1DB] text-xs mt-1">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Progress bars */}
              <div className="mt-6 relative z-10 flex flex-col gap-4">
                {[
                  { label: "Client Satisfaction", pct: 98 },
                  { label: "On-Time Delivery", pct: 95 },
                  { label: "System Uptime", pct: 99 },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#C7D1DB] text-xs">
                        {bar.label}
                      </span>
                      <span
                        className="text-xs font-semibold"
                        style={{ color: "oklch(0.65 0.12 195)" }}
                      >
                        {bar.pct}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10">
                      <div
                        className="h-1.5 rounded-full"
                        style={{
                          width: `${bar.pct}%`,
                          background: "oklch(0.65 0.12 195)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 blur-xl"
              style={{ background: "oklch(0.65 0.12 195)" }}
            />
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-10 blur-2xl"
              style={{ background: "oklch(0.65 0.12 195)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
