import {
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const serviceLinks = [
  "Google Sheet Automation",
  "Payroll Automation",
  "Google AppScript",
  "Data Management",
  "Web Applications",
  "Real-time Dashboard",
  "Big Data Analytics",
  "Attendance Management",
];

const companyLinks = [
  "About Us",
  "Our Team",
  "Careers",
  "Case Studies",
  "Blog",
  "Contact",
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "oklch(0.17 0.03 240)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-teal flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block font-bold text-base text-white">
                  DataQube Labs
                </span>
                <span
                  className="block text-[10px] tracking-wider uppercase"
                  style={{ color: "oklch(0.6 0.025 230)" }}
                >
                  Pvt Ltd
                </span>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "oklch(0.68 0.02 230)" }}
            >
              Transforming manual work into intelligent systems through smart
              data automation, real-time dashboards, and big data analytics.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Github, label: "GitHub" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "oklch(0.65 0.12 195)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(255,255,255,0.07)";
                  }}
                  data-ocid="footer.link"
                >
                  <Icon className="w-4 h-4 text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => handleScroll("#services")}
                    className="text-sm transition-colors text-left"
                    style={{ color: "oklch(0.68 0.02 230)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "oklch(0.65 0.12 195)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "oklch(0.68 0.02 230)";
                    }}
                    data-ocid="footer.link"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => handleScroll("#about")}
                    className="text-sm transition-colors text-left"
                    style={{ color: "oklch(0.68 0.02 230)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "oklch(0.65 0.12 195)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "oklch(0.68 0.02 230)";
                    }}
                    data-ocid="footer.link"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: "oklch(0.65 0.12 195)" }}
                />
                <a
                  href="mailto:info@dataqubelabs.com"
                  className="text-sm transition-colors"
                  style={{ color: "oklch(0.68 0.02 230)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "oklch(0.65 0.12 195)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "oklch(0.68 0.02 230)";
                  }}
                >
                  info@dataqubelabs.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: "oklch(0.65 0.12 195)" }}
                />
                <a
                  href="tel:+917737222133"
                  className="text-sm transition-colors"
                  style={{ color: "oklch(0.68 0.02 230)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "oklch(0.65 0.12 195)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "oklch(0.68 0.02 230)";
                  }}
                >
                  +91 77372 22133
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: "oklch(0.65 0.12 195)" }}
                />
                <span
                  className="text-sm"
                  style={{ color: "oklch(0.68 0.02 230)" }}
                >
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "oklch(0.55 0.02 230)" }}>
            &copy; {year} DataQube Labs Pvt Ltd. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "oklch(0.55 0.02 230)" }}>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "oklch(0.65 0.12 195)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "oklch(0.55 0.02 230)";
              }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
