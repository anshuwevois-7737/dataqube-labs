import {
  BarChart2,
  CalendarCheck,
  Code2,
  Database,
  DollarSign,
  Globe,
  Sheet as SheetIcon,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: SheetIcon,
    title: "Google Sheet Automation",
    description:
      "Automate repetitive spreadsheet tasks, data entry, and reporting workflows with smart Google Sheets integrations.",
  },
  {
    icon: DollarSign,
    title: "Payroll Automation",
    description:
      "Streamline payroll processing, tax calculations, and salary disbursements with accurate, error-free automation.",
  },
  {
    icon: Code2,
    title: "Google AppScript",
    description:
      "Custom Google Apps Script solutions to connect and automate your entire Google Workspace ecosystem seamlessly.",
  },
  {
    icon: Database,
    title: "Data Management",
    description:
      "Organize, clean, and manage large volumes of data with structured pipelines and intelligent data governance.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Build powerful, responsive web applications tailored to your business processes and operational requirements.",
  },
  {
    icon: BarChart2,
    title: "Real-time Dashboard",
    description:
      "Visualize live business data through interactive dashboards that enable instant, informed decision-making.",
  },
  {
    icon: TrendingUp,
    title: "Big Data Analytics",
    description:
      "Unlock hidden patterns and insights in massive datasets with advanced analytics and machine learning tools.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance Management",
    description:
      "Automate attendance tracking, leave management, and reporting with accurate, real-time workforce monitoring.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
            style={{
              color: "oklch(0.65 0.12 195)",
              background: "oklch(0.92 0.05 195)",
            }}
          >
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Automation Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            End-to-end data automation solutions designed to eliminate manual
            work and accelerate your business growth.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
            >
              <div
                className="group bg-white rounded-xl p-6 h-full flex flex-col cursor-pointer transition-all duration-300 border border-[oklch(0.90_0.01_220)]"
                style={{ boxShadow: "0 2px 16px 0 rgba(6,26,43,0.06)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 32px 0 rgba(6,26,43,0.14)";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 2px 16px 0 rgba(6,26,43,0.06)";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0)";
                }}
                data-ocid={`services.item.${idx + 1}`}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-teal"
                  style={{ background: "oklch(0.92 0.05 195)" }}
                >
                  <service.icon
                    className="w-6 h-6 transition-colors duration-300 group-hover:text-white"
                    style={{ color: "oklch(0.65 0.12 195)" }}
                  />
                </div>

                <h3 className="font-bold text-base text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="mt-4 inline-flex items-center text-sm font-semibold transition-colors text-left"
                  style={{ color: "oklch(0.65 0.12 195)" }}
                  data-ocid="services.link"
                >
                  Learn More &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
